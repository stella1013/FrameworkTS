import { ViewHandler } from './ViewHandler';
export class Router {
    private appElement = document.getElementById('app');

    handleRequest(){
        console.log('handling reuest for routes');
        switch(this.getRoute()){
            case '/':
            default:
                if(this.appElement){
                   // const viewHandler = new ViewHandler();
                    //this.appElement.append(viewHandler.View())
                }
                break
        }
    }
    private getRoute():string{
        return window.location.pathname;
    }
}