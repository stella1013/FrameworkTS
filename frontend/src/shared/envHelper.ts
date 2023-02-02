export const devMode = ():boolean => {
    if(process.env.NODE_ENV === 'development'){
		return true;
	}
    return false;
}
export const prodMode = ():boolean => {
    if(process.env.NODE_ENV === 'production'){
		return true;
	}
    return false;
}