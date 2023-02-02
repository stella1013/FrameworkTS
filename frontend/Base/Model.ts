import { EventPortal } from './EventEmitter';
import { EventEmitterable } from './EventEmitter/interfaces';
import { Modelable } from './interfaces/Model.interface';

/*
- interacts with the core
- manipulates data to be used in frontend
- after manipulation it passes data to views
*/
export class Model extends EventPortal implements Modelable {
	// the values of _serviceUrl must be set using the ModelSettings decorator
	private _serviceUrl: any;
	data: any;

	constructor(emitter: EventEmitterable) {
		super(emitter);
		this._serviceUrl = '';
		this.data = '';
	}

	getData(): any {
		throw new Error('Model.getData() is abstract and must implemented.');
	}

	setData(data: any): void {
		throw new Error('Model.setData() is abstract and must implemented.');
	}
	// must be implemented by derived classes
	public initialize() {
		throw new Error(
			'Model.prototype.initialize() is abstract and must implemented.'
		);
	}

	// must be implemented by derived classes
	public dispose() {
		throw new Error(
			'Model.prototype.dispose() is abstract and must implemented.'
		);
	}

	requestAsync(
		input: RequestInfo | URL,
		init?: RequestInit | undefined
	): Promise<Response | Error> {
		return fetch(input, init)
			.then((res: Response) => res)
			.catch((e: Error) => {
				throw new Error('Request Failed Model line 9' + e);
			});
	}

	getAsync(data: any) {
		return this.requestAsync('GET', data);
	}

	postAsync(data: any) {
		return this.requestAsync('POST', data);
	}

	putAsync(data: any) {
		return this.requestAsync('PUT', data);
	}

	deleteAsync(data: any) {
		return this.requestAsync('DELETE', data);
	}
}
