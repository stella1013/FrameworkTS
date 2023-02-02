import { ValidationRules } from "redux/types_main";


export const isOptionValidation = (
    validationRule: ValidationRules
): boolean => {
    //console.log(validationRule);
    return validationRule.selectField !== undefined;
};
export const isSearchValidation = (
    validationRule: any
): boolean => {
    return validationRule.minLength === undefined;
};
export const isZipValidation = (
    validationRule: any
): boolean => {
        return validationRule.minLength !== undefined;
    };

export const isEmailValidation = (
    validationRule: any
): boolean => {
    return validationRule.isEmail  !== undefined;
}
export const isPhoneValidation = (
    validationRule: any
): boolean => {
    return validationRule.isPhone  !== undefined;
}
export const checkValidity = (value: string, rules: ValidationRules): boolean => {
    let isValid = true;
		if (rules.required) {
			isValid = value !== '' && isValid;
		}

    if (isOptionValidation(rules)) {
       isValid = true;
    }
    
    if (isZipValidation(rules)) {
        let zipNumbers = /^\d{5}$/;

        if (rules.minLength) {
            console.log(value.match(zipNumbers));
           if(value.match(zipNumbers) !== null){
               isValid = true;
           }else{
               isValid = false;
           }
        }
        isValid = true;
    }
    if(isEmailValidation(rules)){
        let emailText = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;
        if(rules.isEmail){
			let parameter = emailText;
			isValid = parameter.test(value);
		}
        
    }

    if(isPhoneValidation(rules)){
        let phoneText = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3,4})$/;
        if(rules.isPhone){
			let parameter = phoneText;
			isValid =  parameter.test(value);
		}
        
    }

    return isValid;
};