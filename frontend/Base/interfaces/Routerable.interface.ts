import { EventPortalable } from '../EventEmitter/interfaces/';

export interface Routerable extends EventPortalable{
    initialize:()=>void;
}