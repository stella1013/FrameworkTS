import { EventEmitter } from './EventEmitter';

describe.skip('UNIT TEST - Presenter', () => {
	let component: EventEmitter;
	/*
- Initialize views and models.
- Also sets view with an instance of its presenter
*/

	beforeEach(() => {
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
    it('subscribe to app event for each action', () => {
		component = new EventEmitter();
		let spy = jest.spyOn(component, 'publish');
	
        
		expect(spy).toHaveBeenCalled();
		
	});
	
	it('initialize view and model ', () => {
		component = new EventEmitter();
		let spy = jest.spyOn(component, 'publish');
	
        
		expect(spy).toHaveBeenCalled();
		
	});
    it('dispose of view', () => {
		component = new EventEmitter();
		let spy = jest.spyOn(component, 'publish');
	
        
		expect(spy).toHaveBeenCalled();
		
	});
    

	
});
