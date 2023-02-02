    export interface Eventable {
        topic: string;
        data: any;
        handler: (e:any, data:any) => void;
    }
