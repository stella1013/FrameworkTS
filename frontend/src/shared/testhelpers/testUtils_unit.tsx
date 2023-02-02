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
 *
 * Util function used to create redux store
 * @param {React.Component} Component
 * @param {Object} defaultProps
 */
export const shallowRender = (Component:any, defaultProps = {}) => (customProps = {}) => {
	const props = {
	  ...defaultProps,
	  ...customProps
	};
	return shallow(<Component {...props} />);
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