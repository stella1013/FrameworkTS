import { EventEmitter } from './EventEmitter';

describe('UNIT TEST - EventEmitter', () => {
	let component: EventEmitter;
	

	beforeEach(() => {
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	
	it('EventEmitter Publishes Event', () => {
		component = new EventEmitter();
		let spy = jest.spyOn(component, 'publish');
	
        
		expect(spy).toHaveBeenCalled();
		
	});

	
});
