import { EventPortal } from './EventEmitter';
import { EventEmitterable } from './EventEmitter/interfaces';
import { Modelable, Presentable, Viewable } from './interfaces';

/*
- Initialize views and models.
- Also sets view with an instance of its presenter
*/
export abstract class Presenter extends EventPortal implements Presentable {

    constructor(emitter:EventEmitterable) {
        super(emitter);
    }
    getModel():Modelable{
        throw new Error('Presenter.getModelable() is abstract you must implement it!');

    }
    getView():Viewable{
        throw new Error('Presenter.getModelable() is abstract you must implement it!');

    }
    initialize(): void {
       throw new Error('Controller.prototype.initialize() is abstract you must implement it!');
    };
    dispose(): void{
       throw new Error('Controller.prototype.dispose() is abstract you must implement it!');
    };
   
}