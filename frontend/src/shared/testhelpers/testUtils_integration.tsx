import { FormFieldArray } from '../../redux/types_main';
import rootReducer from '../../redux/Reducers';
import { createStore } from 'redux';
import { FormState } from 'redux/types_main';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { ScreenTypes } from 'redux/types_main';

import ReduxConnectedComponent, { App } from 'views/App';
import { Provider } from 'react-redux';
import store from 'redux/store';
import * as fakeData from '../../fakeData/data.json';


/*
 * Create a testing store with imported reducers, middleware, and initial state
 * globals: rootReducer
 * @param {object} - initialState - initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store
*/
export const storeFactory = (initialState: any) => {
	return createStore(rootReducer, initialState);
};
/*
 *
 * Util function used to create redux store
 * @param {React.Component} Component
 * @param {Object} defaultProps
 */
export const mountRender = (Component:any, defaultProps = {}) => (customProps = {}) => {
	  const props = {
		...defaultProps,
		...customProps
	  };
	  return mount(<Component {...props} />);
  };
 
  /*
   *
   * Returns new component in a redux environment
   * @param {React.Component} Component
   * @param {object} props
   * @param {object} state
   */
export const makeRedux = (Component:any, props = {}, state = {}) => () => (
		  <Provider store={storeFactory(state)}>
			  <Component {...props} />
		  </Provider>
		);

/*
 *
 * Returns HTML string
 * @param {EnzymeWrapper} reactWrapper
 */
export const makeSnapshot = (reactWrapper:any) => reactWrapper.html();

export const mocker = (apiMock:any) => ({
	getSuccessDrugData() {
	  apiMock
		.onGet(/https:\/\/pokeapi.co\/api\/v2\/pokemon\/\d+/)
		.reply(200, fakeData);
  
	  return this;
	}
  });
/**
 *
 *
 * @param {*} [callbacks=[]]
 * @returns
 */
export const ticks = (callbacks = []) => {
	if (callbacks.length < 1) {
	  return null;
	}
	setTimeout(() => {
	  const cb:any = callbacks.shift();
	  if (cb) {
		cb();
	  }
	  ticks(callbacks);
	});
  };

/*
 * Returns Shallow Wrapper containing node(s) with the given data-test value
 * @param {Shallow Wrapper} - Enzyme shallow wrapper to search within
 * @param {string} val - Value of data-test attribute for search.
 * @returns {Shallow Wrapper}
 */

export const findByTestAttr = (wrapper: any, val: string) => {
	return wrapper.find(`[data-test="${val}"]`);
};

/*
 * Returns Checks if object is form. true if formValues Propery is found.
 * @param {any} stateType - Takes any type.
 * @returns {boolean}
 */

export const isFormState = (stateType:any):stateType is FormState => {
	return stateType.formIsValid !==  undefined;
}

/*
 * Returns Checks if object is form. true if array of Form Array Propery is found.
 * @param {any} objType - Takes any type.
 * @returns {boolean}
 */

export const isFormArray = (objType:any):objType is Array<FormFieldArray> => {
	return objType.formValues !==  undefined;
}