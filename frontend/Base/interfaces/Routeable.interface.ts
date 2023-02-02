interface Routeable {
    presenterName : string;
    actionName : string;
    args : Object[];
    serialize() : string;
  }