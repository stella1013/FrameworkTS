import { Presentable } from "./Presenter.interface";

export interface Viewable {
    initialize:()=>void;
    dispose:()=>void;
    getPresenter:()=>Presentable | null;
    setPresenter:(presenter:Presentable)=>void;
   // render:()=>void;
}