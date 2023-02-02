
export class ViewHandler {
    private loadingIndicator: HTMLDivElement = document.getElementById(
        'LoadingHolder'
    )! as HTMLDivElement;


  

    public setLoadingIndicator(text?:string){
        if(text){
            this.loadingIndicator.innerHTML = text; 
        }else{
            this.loadingIndicator.innerHTML = '';
        }
        
    }
    private clearContent(){
        document.getElementById('main')!.innerHTML = '';
    }
    /**
	 *
	 *
	 * @param {string} currentView
	 * @memberof CreateUserFormModule
	 *  Loads appropriate IAppView Component based on current view set in global state.
	 */
    loadView(currentView:string, data?:any){
        this.setLoadingIndicator();
       
        //this.clearContent();
        this.setScreenView(currentView);
        /* let initObj:ContentView; 

        switch(currentView){
            
            case 'INIT':
                activityState.displayView(0).createFormFields(data);
                break
            case 'CONFIRM':
                activityState.displayView(1);
                break
            case 'DONE':
                activityState.displayView(2);
                break
            case 'LOADING':
                activityState.displayView(3);
                break
            case 'OPTIONS':
                activityState.displayView(4).createFormFields(data);
                break
            default:
                activityState.displayView(0);
                break
        } */
    }
    setScreenView(viewName:string){
		//activityState.screenView = viewName;
	}
  


    /* addViewsToState(views:ContentView[]) {
		// Add `pages` to Static Array
		activityState.addView(views);
	} */

	
}