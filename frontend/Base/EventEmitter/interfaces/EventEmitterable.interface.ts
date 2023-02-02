	export interface EventEmitterable {
		unsubscribe(myEvent: CustomEvent<any>): void;
		subscribe(myEvent: CustomEvent<any>): any;
		publish(e: CustomEvent): void;
	}

