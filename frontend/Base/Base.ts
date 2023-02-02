import { Dispatcher } from './Dispatcher';
import { EventEmitter } from './EventEmitter';
import { EventEmitterable } from './EventEmitter/interfaces';
import { Dispatchable, Routerable } from './interfaces';
import { AppSetable } from './interfaces/AppSetting.interface';
import { PresenterDetails } from "./interfaces/PresenterDetails.interface";
import { Router } from './Router';

/***** SET APP STATUS*/
/**
 * Status Options are of type 'string'. This sets the API urls and console logging out put to show/hide.
 * development - loads canned data
 * staging - 
 * production - 
 * 
 */

interface MainApp {
	eventStatus:string;
	appStatus: string;
	init:() => void;
}
export class Base implements MainApp{
		private _appStatus = '';
		private _eventStatus = '';
        //private _appSettings:AppSetable;
		private _presenters: PresenterDetails[];
		private _dispatcher:Dispatchable;
		private _onErrorHandler : (o : Object) => void;
		//private _pubsub: EventEmitterable;
		private _mediator: EventEmitterable;
		private _router: Routerable;
		private appLoaded = new CustomEvent('app.init',{
			detail:{
			  message:'App Initialized',
			  data:null,
			  handler: null
			}
		  });
		private listeningForAppErrorEvent = new CustomEvent('app.error', {
			detail: {
				message:'',
				data:null,
				handler: (e: any, data? : any) => {
					this._onErrorHandler(data);
				  },
			},
		});
       // this._eventList.add(listeningForAppInitEvent);
        //this.subscribe(this._eventList);
		
	
		//LOGGER = new LogIt();
	

	constructor(appSettings:AppSetable) {	
		/* if (window.location.href === 'http://localhost:8081/' ) {
			console.log('*********************************************************');
			console.log('*********************************************************');
			console.log('App Status is in Mode: "' + APP_STATE.appMode + '" ...Status can be changed in src/App.ts');
			console.log('*********************************************************');
			console.log('*********************************************************');
		} */
       // this._appSettings = appSettings
		this._mediator = new EventEmitter();
		
		
		//this.LOGGER.trace('testing line number 32: obj: ', process.env.NODE_ENV);
		this._presenters = appSettings.presenters;
		
		this._router = new Router(this._mediator, appSettings.defaultPresenter, appSettings.defaultAction);
		this._dispatcher = new Dispatcher(this._mediator, this._presenters);
		this._onErrorHandler = appSettings.onErrorHandler;
		//this.model = new Model();
		//this.view = new View();
		
		//this.presenter = new Presenter(this._mediator, this.model, this.view);
		//this.view.setPresenter(this.presenter);
	}

	init(){
		if(process.env.NODE_ENV){
			this.appStatus = process.env.NODE_ENV;
		}
		this._router.initialize();
		this._dispatcher.initialize();
		this._mediator.subscribe(this.listeningForAppErrorEvent);
		//this._mediator.publish(new AppEvent("app.initialize", null, null));
		this._mediator.publish(this.appLoaded);
		//this.router.handleRequest();
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

	/* const checkedFetch: typeof fetch = async (input, init) => {
		const response = await fetch(input, init);
		if (!response.ok) {
		  throw new Error('Request failed: ' + response.status);
		}
		return response;
	  } */
}

