import { Router } from './Router';
import { ViewHandler } from './ViewHandler';


//
/**
 *
 *
 * @export
 * @class CreateUserFormModule
 *  2 Part Create Users Form.
 *  1. Form 1 Create the User
 *  2. Form 2 Add Options to the User after User is created
 */
export class App {
		private appContainer: HTMLDivElement;
		private formContainer: HTMLDivElement;
		private appTitle = '';
	
		private viewHandler = new ViewHandler();

	constructor() {	
		this.appContainer = document.getElementById('app')! as HTMLDivElement;
	
		// choose container for form
		this.formContainer = document.getElementById('main')! as HTMLDivElement;
	
	
		this.init();
	}

	init(){
		const header = <HTMLHeadingElement>this.appContainer.querySelector('h1');
		
		this.setAppStatus();
		this.setApplicationTitle(header, this.appTitle);
		this.viewHandler.loadView('START');
		//this.router.handleRequest();
	}
	setAppStatus():void{
		if(process.env.NODE_ENV){
			//APP_STATUS.appMode = process.env.NODE_ENV;
		}
	}
	setApplicationTitle(selector: HTMLHeadingElement, title: string) {
		selector.textContent = title;
	}
	
}


