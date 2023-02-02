import { EventEmitterable } from './EventEmitter/interfaces';
import { EventPortal } from "./EventEmitter";
import { Routerable } from "./interfaces/Routerable.interface";
import { Route } from './Route';

/*
- observes changes in the browser Url
- creates instances of Route Class
- Route class sent to dispatcher using application event
*/
export interface EventArray {
  name:string;
  handler:()=>void;
}
export class Router extends EventPortal implements Routerable{
    private  _eventList: Set<CustomEvent> = new Set();
    private _defaultPresenter : string;
    private _defaultAction : string;
    private _currentLocation: string;
  private _emit:EventEmitterable;
    constructor(emitter:EventEmitterable, defaultPresenter : string, defaultAction : string){
        super(emitter);
        this._emit = emitter;
        this._currentLocation = '';
        this._defaultPresenter = defaultPresenter || "home";
        this._defaultAction = defaultAction || "index";

        const event2 = new CustomEvent('app.init', {
          detail:  {
            handler: () => 
              this.onRouteChange(this.getRoute())
            ,
          },
        });
    
            this._eventList.add(event2);
            this.subscribe(this._eventList);
            console.log('Router Constructor');

    }
   /*  listenForNewEvent(eventType:string):void {
      new CustomEvent('app.init', {
        detail:  {
          handler: () => {
            this.initialize();
            this.onRouteChange(this.createRoute());
          },
        },
      });
    }
    getListOfEventsSubscribed():Set<CustomEvent> {
      return this.getSubscriptionList();
    }
    getNumberOfEventsSubscribed():number {
      return this.getSubscriptionList().size;
    }
     */
    initialize():void{
      // observe URL changes by users
      window.addEventListener('hashchange', ()=>{
       let r = this.getRoute();
        this.onRouteChange(r);
      });

    // be able to trigger URL changes
   
   

     //force route change
   //  window.location.href=""
    };
/* 
    
    createRouteArgs(url:string):[string, string] | [string, string, Array<string>]{
      let location = url;
      let test = /^https?:\/\/\w+[.:]?\w+\/((\w+)\/(\w+)\/(\w+))/;
      let newString = location.replace(test, '$2,$3,$4');
      
     let newStrArr = newString.split(',');
     if(newStrArr[2]){
      return [newStrArr[0], newStrArr[1], newStrArr[2].split('&')];
     }
     return [newStrArr[0], newStrArr[1]];

    }
    createRoute():Route{
      let args = this.createRouteArgs(window.location.href);
      
      if(args[2]){
        return new Route(args[0], args[1], args[2]);
      }
      return new Route(args[0], args[1], []);
    } */
   
    
    // Encapsulates reading the URL
  private getRoute(): Route {
    return this.parseRoute(window.location.hash);
  }

  // Encapsulates writting the URL
  private setRoute(route : Route) {
    window.location.hash = route.serialize();
  }

  // Encapsulates parsing an URL
  private parseRoute(hash : string) {
    var comp, controller, action, args, i;
    if (hash[hash.length - 1] === "/") {
        hash = hash.substring(0, hash.length - 1);
    }
    comp = hash.replace("#", '').split('/');
    controller = comp[0] || this._defaultPresenter;
    action = comp[1] || this._defaultAction;

    args = [];
    for (i = 2; i < comp.length; i++) {
        args.push(comp[i]);
    }
    return new Route(controller, action, args);
  }

  // Pass control to the Dispatcher via the Mediator
  private onRouteChange(route : Route) {
    console.log('onRouteChange')
    this.publish( new CustomEvent('app.dispatch', {
        detail: {

            handler: route,
        },
    }));
  }

}