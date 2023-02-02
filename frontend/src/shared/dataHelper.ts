/*
 * @function Checks if object is empty.
 * @param {Object} obj
 * @returns {boolean}
 */
export const isEmpty = (obj: Object):boolean => {
	return Object.keys(obj).length === 0;
}

export const getSubmittedReducerName = (formTypeAction:any):string => {
	return formTypeAction.formname;
}
