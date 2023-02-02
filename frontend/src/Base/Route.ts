/*
-Represents URL
- Urls identify which controllers and actions are in use
*/
export class Route implements Routeable {
    presenterName: string;
    actionName: string;
    args: Object[];

    constructor(presenterName : string, actionName : string, args : Object[]){
        this.presenterName = presenterName;
        this.actionName = actionName;
        this.args = args;
    }
   // presenterName: string;

    public serialize() : string {
    var s, sargs;
    sargs = this.args.map(a => a.toString()).join("/");
    s = `${this.presenterName}/${this.actionName}/${sargs}`;
    return s;
  }
   
  }