import { devMode } from './envHelper';
import {
	DrugsEntity,
	FormsEntity,
	NamesEntity,
	QuantitiesEntity,
} from './../redux/types_other';
import {
	SubmitData,
	Options,
	FormValues,
	EntityTypes,
} from '../redux/types_main';
import { appStatusCheck } from './consoleLogger';

export const getFieldType = (name: string): string => {
	if (name === 'searchTypeValue' || name === 'zipCodeValue') {
		return 'preview-input';
	} else if (
		name === 'drugTypeValue' ||
		name === 'drugFormValue' ||
		name === 'drugQuantityValue'
	) {
		return 'preview-list';
	}
	return 'text';
};
export const getdrugTypeValue = (obj: NamesEntity): string => obj.drugName;

export const getEntityType = (obj: EntityTypes): string => {
	if (obj.drugName) {
		return 'names.name';
	} else if (obj.form) {
		return 'forms.form';
	} else if (obj.quantity) {
		return 'quantities.quantity';
	}
	return '';
};

export const getIsSelected = (
	obj: (NamesEntity | DrugsEntity | FormsEntity | QuantitiesEntity)[]
): NamesEntity | DrugsEntity | FormsEntity | QuantitiesEntity => {
	let val = obj.filter((option: any) => option.isSelected === true);
	return val[0];
};
export const getFieldSize = (fieldType: string) => {
	if (fieldType === 'searchTypeValue') {
		return 'col-5-of-8';
	} else if (fieldType === 'zipCodeValue') {
		return 'col-3-of-8';
	} else if (fieldType === 'drugTypeValue') {
		return 'col-1-of-3';
	} else if (fieldType === 'drugFormValue') {
		return 'col-1-of-3';
	} else if (fieldType === 'drugQuantityValue') {
		return 'col-1-of-3';
	} else {
		return 'row';
	}
};
export const getFieldLabel = (fieldType: string) => {
	if (fieldType === 'searchTypeValue') {
		return 'Drug';
	} else if (fieldType === 'zipCodeValue') {
		return 'Zip Code';
	} else if (fieldType === 'drugTypeValue') {
		return 'Drug Names';
	} else if (fieldType === 'drugFormValue') {
		return 'Forms';
	} else if (fieldType === 'drugQuantityValue') {
		return 'Quantities';
	} else {
		return '';
	}
};
export const getDisplayValue = (
	fieldType: string,
	data: SubmitData,
	returnedData: any
): string => {
	if (fieldType === 'searchTypeValue') {
		return getInputDisplayValue(fieldType, data);
	} else if (fieldType === 'zipCodeValue') {
		return getInputDisplayValue(fieldType, data);
	} else if (fieldType === 'drugTypeValue') {
		return getDropDownDisplayValue(fieldType, returnedData);
	} else if (fieldType === 'drugFormValue') {
		return getDropDownDisplayValue(fieldType, returnedData);
	} else if (fieldType === 'drugQuantityValue') {
		return getDropDownDisplayValue(fieldType, returnedData);
	} else {
		return '';
	}
};
export const getInputDisplayValue = (fieldType: string, data: any): string => {
	return fieldType === 'searchTypeValue'
		? data.searchTypeValue
		: data.zipCodeValue;
};

export const getDropDownDisplayValue = (
	fieldType: string,
	returnedData: any
): string => {
	if (fieldType === 'drugTypeValue') {
		let val = getIsSelected(returnedData.names) as NamesEntity;
		return val.drugName;
	}
	if (fieldType === 'drugFormValue') {
		let val = getIsSelected(returnedData.forms) as FormsEntity;
		return val.form;
	}
	if (fieldType === 'drugQuantityValue') {
		let val = getIsSelected(returnedData.quantities) as QuantitiesEntity;
		return val.quantity.toString();
	}
	return '';
};
export const createOptionsArray = async (
	fieldType: string,
	data: any
): Promise<Options[] | undefined> => {
	if(appStatusCheck('development')){
		console.log('array options', data);
	}
	
	if (fieldType === 'drugTypeValue') {
		return Object.keys(data.names).map((option: any) => {
			let name = data.names[option].drugName;
			let branding = data.names[option].brandGenericIndicator === 'G' ? '(Generic)' : '(Brand)';
			return {
				value: name + ' ' +branding,
				displayValue: name + ' ' +branding
			};
		});
	}
	if (fieldType === 'drugFormValue') {
		return Object.keys(data.forms).map((option: any) => ({
			value: data.forms[option].form,
			displayValue: data.forms[option].form,
		}));
	}
	if (fieldType === 'drugQuantityValue') {
		return Object.keys(data.quantities).map((option: any) => ({
			value: data.quantities[option].quantity,
			displayValue: data.quantities[option].quantity,
		}));
	}
};

/**
 * Creates a object of selected value from the below parameters
 *
 * @param {string} newDisplayValue
 * @param {string} newValue
 * @param {string} id
 * @param {boolean} validCheck
 * @returns
 */
export const createFieldValue = (
	newDisplayValue: string,
	newValue: string,
	id: string,
	validCheck: boolean,
	touched: boolean
) => {
	const newFieldValue = {
		displayValue: newDisplayValue,
		value: newValue,
		id: id,
		valid: validCheck,
		touched: touched,
	};
	return newFieldValue;
};

const createFormFields = (
	fieldObj: string[],
	data: SubmitData,
	returnedData: any
): FormValues => {
	return fieldObj.reduce((obj: any, inputName: any, index: number) => {
		let value = getDisplayValue(inputName, data, returnedData);
		let field = getFieldType(inputName);
		let fieldSize = getFieldSize(inputName);
		let label = getFieldLabel(inputName);
		obj[inputName] = {
			elementType: field,
			elementSize: fieldSize,
			elementConfig: {
				type: field,
				label: label,
				placeholder: value,
			},
			selectedValue: {
				value: value,
				displayValue: value,
			},
			validation: {
				required: field === 'text' ? true : false,
				errorMessage: 'Please Enter' + value,
			},
			valid: true,
			touched: false,
		};
		if (
			inputName === 'drugTypeValue' ||
			inputName === 'drugFormValue' ||
			inputName === 'drugQuantityValue'
		) {
			createOptionsArray(inputName, returnedData)
				.then((res: Options[] | undefined) => {
					obj[inputName].elementConfig.options = res;
				})
				.catch((err: Error) => (devMode() ? err : ''));
		}
		return obj;
	}, {});
};

export const createFields = async (
	input: string[],
	data: SubmitData,
	returnedData: any
): Promise<FormValues> => {
	return createFormFields(input, data, returnedData);
};

/**
 * Takes a response and creates an object of type FormState. And sets it to the provided reducer name
 *
 * @param {*} res - takes response object
 * @param {string} formName - name of reducer
 * @returns
 */
export const createReducerObject = async (res: any, formName: string) => {
	return await {
		formName: formName,
		dataCopiedFrom: '',
		isReady: false,
		formIsValid: false,
		invalidSubmit: false,
		form: {
			formValues: res,
		},
	};
};
