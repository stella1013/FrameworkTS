	export interface Subscribable {
		subscribe(campaign: Set<CustomEvent<any>>): any;
	}

