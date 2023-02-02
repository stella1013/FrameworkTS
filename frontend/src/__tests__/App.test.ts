import { App } from '../App';

//const mockSetApplicationTitle = jest.fn();

//jest.mock("../App");
//Using jest.Mocked to let TypeScript know about the typing changes caused by jest.mock:
//const AppMock = (App as jest.Mock<App>);
//let createUserApp: App;

describe('UNIT TESTS - App', () => {
    let createFormApp: App
	beforeEach(() => {
		
	});
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('sets and outputs APP_STATUS', () => {
        createFormApp = new App();
        const setAppStatus = jest.fn(); 
		/*  const process = {
           env:{
               NODE_ENV:'development'
           }
       }
       const status = process.env.NODE_ENV;
       
       expect(status).toEqual('development'); */
	});
});
/* escribe.skip('INTEGRATION TESTS - App', ()=>{
    
}); */
