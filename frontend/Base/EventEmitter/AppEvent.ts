import { Eventable } from "./interfaces";

//TODO: Not using this object. hmm.. do i need it. Maybe if I need more functionality than the built in CustomEvent Obj
export class AppEvent implements Eventable {
   // public guid : string;
    public topic : string;
    public data : any;
    public handler: (e: Object, data? : any) => void;
  
    constructor(topic : string, data : any, handler: (e: any, data? : any) => void) {
      this.topic = topic;
      this.data = data;
      this.handler = handler;
    }
  }

  