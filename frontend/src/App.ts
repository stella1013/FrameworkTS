import { Base } from "./Base/Base";
import { AppSetable } from "./Base/interfaces/AppSetting.interface";

/***** SET APP STATUS*/
/**
 * Status Options are of type 'string'. This sets the API urls and console logging out put to show/hide.
 * development - loads canned data
 * staging - 
 * production - 
 * 
 */


export class App {
		private baseApp:Base;
		private _appStatus = '';
		private _eventStatus = '';

		private appSettings : AppSetable = {
			isDebug : true,
			defaultPresenter : "editConfig",
			defaultAction : "index",
			presenters : [
			
			],
			onErrorHandler : function(e : Object) {
			  alert("Sorry! there has been an error please check out the console for more info!");
			  console.log(e);
			}
		  };
	
	constructor() {	
		/* if (window.location.href === 'http://localhost:8081/' ) {
			console.log('*********************************************************');
			console.log('*********************************************************');
			console.log('App Status is in Mode: "' + APP_STATE.appMode + '" ...Status can be changed in src/App.ts');
			console.log('*********************************************************');
			console.log('*********************************************************');
		} */
		
		
		this.baseApp = new Base(this.appSettings);
		this.baseApp.init();
	
	}

	init(){
		if(process.env.NODE_ENV){
			this.appStatus = process.env.NODE_ENV;
		}
	}
	
	public get appStatus():string {
		return this._appStatus;
	}
	public set appStatus(newAppStatus:string) {
		this._appStatus = newAppStatus;
	}
	public get eventStatus() {
		return this._eventStatus;
	}
	public set eventStatus(value) {
		this._eventStatus = value;
	}

}

