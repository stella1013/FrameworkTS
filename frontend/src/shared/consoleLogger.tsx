import { APP_STATUS } from "views/App";

/**
 *
 *
 * @param {*} obj
 * @param {string} [message]
 */
 export const consoleLogger = (
    obj:any,
    message?:string
): void=> {
  //  console.log(validationRule);
  if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
   {console.log(message, obj);};
};

/**
 * Decorator Method for logging.
 *
 * @export
 * @param {Function} constructor
 */
export function Logger(constructor: Function){
  console.log('Logging...');
  console.log(constructor);
}
export const appStatusCheck = (status:string):boolean =>{
	let result = false;
	if(status === APP_STATUS){
		result = true;
	}
	return result;
}