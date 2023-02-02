import { PresenterDetails } from "./PresenterDetails.interface";

export interface AppSetable {
    isDebug : boolean,
    defaultPresenter : string;
    defaultAction : string;
    presenters : Array<PresenterDetails>;
    onErrorHandler : (o : Object) => void;
  }