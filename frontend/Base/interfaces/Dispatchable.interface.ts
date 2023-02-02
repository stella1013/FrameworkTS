import { EventPortalable } from "../EventEmitter/interfaces";

export interface Dispatchable extends EventPortalable{
    initialize:()=>void;
}