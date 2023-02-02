import { EventPortalable } from '../EventEmitter/interfaces/';
import { Modelable } from './Model.interface';
import { Viewable } from './View.interface';


export interface Presentable extends EventPortalable{
    initialize:()=>void;
    dispose:()=>void;
    getModel:()=>Modelable;
    getView:()=>Viewable;

}