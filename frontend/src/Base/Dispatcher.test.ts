import { Dispatcher } from "./Dispatcher";
import { EventEmitter } from "./EventEmitter";
jest.mock('./EventEmitter');
jest.mock('./Route');
describe.skip('UNIT TEST - Dispatcher', () => {
	let component: Dispatcher;
	let emitterMocked = jest.mocked(EventEmitter, true);
    let emit: EventEmitter;
    const presenterName = 'home';
    const action = 'index';
    const someArr = [{}];
/*
- Receives instances of Route class which identifis the required presenter
- if different
- then disposes previous presenter
- creates a new presenter
- once presenter is created the application flow is passed to presenter
*/

	beforeEach(() => {
		emit = new EventEmitter();
	});

	afterEach(() => {
		emitterMocked.mockClear();
		jest.clearAllMocks();
	});

	
	it('Returns the current controller', () => {
		component = new Dispatcher(emit, [
			{ presenterName : "getConfigActions", presenter : GetConfigActionsPresenter }
		  ]);
		let spy = jest.spyOn(component, 'dispatch');
	
        
		expect(spy).toHaveBeenCalled();
		
	});
    it('Set the current controller', () => {
		component = new Dispatcher();
		let spy = jest.spyOn(component, 'publish');
	
        
		expect(spy).toHaveBeenCalled();
		
	});
    

	
});
