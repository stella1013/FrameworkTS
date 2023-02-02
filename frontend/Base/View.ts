import { EventPortal } from './EventEmitter';
import { EventEmitterable } from './EventEmitter/interfaces';
import { Modelable, Presentable, Viewable } from './interfaces';

export abstract class View extends EventPortal implements Viewable {
    presenter: Presentable | null;
    private _viewhtmlUrl:string | null;
   
    constructor(emitter:EventEmitterable){
      super(emitter)
        this.presenter = null;
        this._viewhtmlUrl = null;
    }
    initialize():void{
        throw new Error('View.prototype.initialize() is abstract and must implemented.');
    };
    dispose(): void{
      throw new Error('View.prototype.dispose() is abstract and must implemented.');
    };
    
    getPresenter(): Presentable | null{
        return this.presenter;
    };
    setPresenter(newPresenter:Presentable):void {
        this.presenter = newPresenter;
    }
    // must be implemented by derived classes
    protected bindDomEvents(model : any) {
        throw new Error('View.prototype.bindDomEvents() is abstract and must implemented.');
    }

    // must be implemented by derived classes
    protected unbindDomEvents() {
        throw new Error('View.prototype.unbindDomEvents() is abstract and must implemented.');
    }
   

 
 
  // asynchroniusly renders the view
  protected renderAsync():Promise<void> {
    throw new Error('View.renderAsync() is abstract and must be implemented');
    
  }

}