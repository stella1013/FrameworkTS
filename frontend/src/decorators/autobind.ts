
//autobind decorator
export function autobind(
	_: any,
	_2: string,
	descriptor: PropertyDescriptor
): any {
	const originalMethod = descriptor.value;
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		get() {
			const bondFn = originalMethod.bind(this);
			return bondFn;
		}
	};
	return adjDescriptor;
}
//autobind decorator


