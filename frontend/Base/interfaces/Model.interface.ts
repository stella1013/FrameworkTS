export interface Modelable{
    data:any;
    initialize:()=>void;
    dispose:()=>void;
    getData:()=> any;
    setData:(data:any)=>void;
    requestAsync: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response | Error>
    getAsync: (data : any) => Promise<Response | Error>;
    postAsync: (data : any) => Promise<Response | Error>;
    putAsync: (data : any) => Promise<Response | Error>;
    deleteAsync: (data : any) => Promise<Response | Error>;

}