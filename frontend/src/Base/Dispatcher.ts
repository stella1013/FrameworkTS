import { Dispatchable } from './interfaces/Dispatchable.interface';
import { EventPortal } from './EventEmitter/EventPortal';
import { EventEmitterable } from './EventEmitter/interfaces';
import { PresenterDetails } from './interfaces/PresenterDetails.interface';
import { Presentable } from './interfaces';
import { Presenter } from './Presenter';

/*
- Receives instances of Route class which identifis the required presenter
- if different
- then disposes previous presenter
- creates a new presenter
- once presenter is created the application flow is passed to presenter
*/

interface PresenterMapObject {
 [index:string]:Presentable;
}
type PConstructor = {
  new(emitter:EventEmitterable):Presentable;
}
export class Dispatcher extends EventPortal implements Dispatchable {
  private _presentersHashMap : PresenterMapObject;
  private _currentPresenter : Presentable | null;
  private _currentPresenterName : string | null;
  private argEmit:EventEmitterable;
  _eventList: Set<CustomEvent> = new Set();

    constructor(emitter:EventEmitterable, presenters : PresenterDetails[]){
        super(emitter);
        this.argEmit = emitter;
        this._presentersHashMap = this.getPresenter(presenters);
        console.log('what is added to _presentersHashMap', this.getPresenter(presenters));
        this._currentPresenter = null;
        this._currentPresenterName = null;
    }
    initialize(): void{
        const listeningForDispatchEvent = new CustomEvent('app.dispatch', {
			detail: {
        message:'Disaptcher Initialized',
       
				handler:  (e:CustomEvent) => {
          //console.log('hell', e.detail);
					this.dispatch(e.detail.handler);
				},
			},
		});
    this._eventList.add(listeningForDispatchEvent);
        this.subscribe(this._eventList);
        console.log('Dispatcher Events', this._eventList);
    }
    
    private getPresenter(presenters : PresenterDetails[]): PresenterMapObject{
      
        let hashMap:PresenterMapObject = {};
        let l = presenters.length;
       // let presenter:PresenterDetails;
    
        if(l <= 0) {
          this.publish(new CustomEvent(
            "app.error",
            {detail:{
              data: "Cannot create an application without at least one contoller.",
            handler: null
          }
        })
        );
        }
    
     presenters.forEach(presenter => {
        console.log('line 68 of Dispatcher', presenter);
          let hashMapEntry = presenter.presenterName;
          if(Object.keys(hashMap).length !== 0){
            if(hashMap[hashMapEntry as keyof typeof hashMap]) {
              this.publish(
                new CustomEvent( "app.error",{
                  detail:{
                    data: "Two presenter cannot use the same name.",
                    handler: null
                  }
                })
              );
            }
          }
          hashMap[hashMapEntry as keyof typeof hashMap] = presenter.presenter;
        }) 
        return hashMap;
      }

      private dispatch(route : Routeable) {
        console.log('Dispatcher.dispatch route parameter', route);
        console.log('key for hashmap', route.presenterName);
        console.log('Does my presenter exist in the hashmap', this._presentersHashMap[route.presenterName])
         let Presenter = this._presentersHashMap[route.presenterName];
    
        // try to find presenter
        console.log('did i find Presenter', Presenter);
        if (Presenter === null || Presenter === undefined) {
          this.publish(
            new CustomEvent( "app.error",{
              detail:{
                message:`Presenter not found: ${route.presenterName}`,
                data: null,
                handler: null
              }
            })
          );
        }
        else {
          // create a presenter instance
          let presenterInstance:Presentable = new (Presenter.constructor as PConstructor)(this.argEmit);
         // (Presenter.constructor as new(...this.argEmit: typeof this.argEmit)=> Presenter)(this.argEmit);
          //this.presenter = new Presenter(this._mediator, this.model, this.view);
          ////this.view.setPresenter(this.presenter);

          // action is not available
          var a = presenterInstance[route.actionName as keyof typeof Presenter];
          if (a === null || a === undefined) {
            this.publish(
              new CustomEvent( "app.error",{
                detail:{
                  message:`Action not found in presenter: ${route.presenterName} -  + ${route.actionName}`,
                  data:null,
                  handler: null
                }
              })
            );
          }
          // action is available
          else {
            if(this._currentPresenter == null) {
              // initialize presenter
              this._currentPresenterName = route.presenterName;
              this._currentPresenter = presenterInstance;
              this._currentPresenter.initialize();
              console.log('init this._currentPresenter');
            }
            else {
              // dispose previous presenter if not needed
              if(this._currentPresenterName !== route.presenterName) {
                this._currentPresenter.dispose();
                this._currentPresenterName = route.presenterName;
                this._currentPresenter = presenterInstance;
                this._currentPresenter.initialize();
              }
            }
            // pass flow from dispatcher to the presenter
            this.publish(
              new CustomEvent( `app.presenter.${this._currentPresenterName}.${route.actionName}`,{
                detail:{
                  message:'', 
                  data: route.args,
                  handler: null
                }
              })
            );
    
          }
        }
      }
    

}