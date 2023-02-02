//import { ConnectedRouter } from 'connected-react-router';

////import { mergeDeepRight } from 'ramda';
////import  createStoreWithMiddleWare  from '../redux/store';

// import { Provider } from 'react-redux';
import rootReducer from '../../redux/Reducers';
//import configureMockStore from 'redux-mock-store';
import { createStore } from 'redux';

//import { AppState } from '../redux/store';
//import ReduxThunk  from 'redux-thunk';
//import { createStore, applyMiddleware } from 'redux';
//import rootReducer from '../redux/reducers';
//import thunk from 'redux-thunk';
// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState for the entire store that the ui is rendered with

/*
 * Create a testing store with imported reducers, middleware, and initial state
 * globals: rootReducer
 * @param {object} - initialState - initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store
*/
/*
export const mockStoreFactory = () => {
	const createMockStore = configureMockStore();
	return createMockStore(rootReducer);
};
*/
export const storeFactory = (initialState: any) => {
	return createStore(rootReducer, initialState);
};
/*
 * Returns Shallow Wrapper containing node(s) with the given data-test value
 * @param {Shallow Wrapper} - Enzyme shallow wrapper to search within
 * @param {string} val - Value of data-test attribute for search.
 * @returns {Shallow Wrapper}
 */

export const findByTestAttr = (wrapper: any, val: string) => {
	return wrapper.find(`[data-testid="${val}"]`);
};

/*
// Below Creates Integration Testing
import { mount } from 'enzyme';

	export const makeMountRender = (Component:React.Component, defaultProps = {}) => {
		return (customProps = {}) => {
		const props = {
			...defaultProps,
			...customProps
		};
		return mount(<Component {...props} />);
		};
	  };

	  import { mergeDeepRight } from 'ramda';
	  import rootReducer from '../src/redux/Reducers';
	  import createStoreWithMiddleWare  from '../src/redux/store';
	  export const makeStore = (customState = {}) => {
		const root = rootReducer({}, { type: '@@INIT' });
		const state = mergeDeepRight(root, customState);
		return createStoreWithMiddleWare(rootReducer, state);
	  };
	  

import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
const initialStateInt = {};
const createMockInstStore = configureMockStore([thunk]);
const storeInt = createMockInstStore(initialStateInt);

export const reduxify = (Component, props = {}, state = {}) => {
  return function reduxWrap() {
    return (
      <Provider store={storeInt}>
          <Component {...props} />
      </Provider>
    );
  }
};

	  export const snapshotify = (reactWrapper:any) => {
		return reactWrapper.html();
	  };
*/
