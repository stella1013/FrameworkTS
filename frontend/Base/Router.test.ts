import { EventArray, Router } from "./Router";
import {Route} from './Route';

jest.mock('./Route');
describe.skip('UNIT TEST - Router', () => {
	let component: Router;
    const eventEmitterMock = {
        subscribe:jest.fn()
    }
    
    const presenterName = 'home';
    const action = 'index';
    const someArr = [{}];
/*
- observes changes in the browser Url
- creates instances of Route Class
- Route class sent to dispatcher using application event
*/

	beforeEach(() => {
       // emit = new EventEmitter();
        component = new Router(eventEmitterMock as any, presenterName, action);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

    it('registers to app events app.init', ()=>{
        expect(eventEmitterMock.subscribe).toBeCalled();
        let myEvent = 'app.init';
        let myEventFunction = jest.fn();
        let evtArr = [];
        evtArr.push({name:myEvent, handler:myEventFunction});
        // What do I mean by Observes and detects
        // Changes are detected via listening to app events
        // could I listen to browser url change directly?
        //lets stick to app events to keep it isolated from listening to browser/user actions
        
        component.addListenerEvents(evtArr);
        let subListSize:number = component.getNumberOfEventsSubscribed();
        expect(subListSize).toEqual(evtArr.length);


    });
    it('registers to app events window.locationChange', ()=>{
        


    });

















	
	it.skip('creates arguments for Route Class', () => {
        let url ='http://localhost:8081/controllerName/Action/args1&args2&args3';
		let returnValue = ['controllerName', 'Action', ['args1', 'args2', 'args3']];
        component = new Router(emit, presenterName, action);
        let args:[string, string, Array<string>];

       // let route = component.createRoute(url);
        let spy = jest.spyOn(component, 'createRouteArgs');
        component.createRouteArgs(url);
//expect(spy).toHaveBeenCalled();
	    expect(spy).toHaveLastReturnedWith(returnValue);
      //  expect(component.createRoute()).toHaveBeenCalled();
     //   expect(route).toHaveBeenCalled();
		
	});
    it.skip('creates instance Route Class', () => {
       
    component = new Router(emit, presenterName, action);

       // let route = component.createRoute(url);
        let spy = jest.spyOn(component, 'createRoute');
        let route = component.createRouteArgs(window.location.href);
        component.createRoute();
//expect(spy).toHaveBeenCalled();
	expect(spy).toHaveLastReturnedWith(new Route(route[0], route[2], []));
      // expect(component.createRoute()).toHaveBeenCalled();
     //   expect(route).toHaveBeenCalled();
		
	});
   test.todo('test many different location configurations');
    test.skip('upon initialization gets location from browser and saves it to memory', ()=>{
        Object.defineProperty(window, 'location', {
            writable: true,
            value: {
                href:'someurl'}
          });
        component = new Router(emit, presenterName, action);
        component.setCurrentLocation(window.location.href);
        let spy = jest.spyOn(component, 'getCurrentLocation');
        component.getCurrentLocation();
        expect(spy).toHaveLastReturnedWith('someurl');

    });

	
});
