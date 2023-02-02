import { EventEmitterable, EventPortalable } from "./interfaces";


	export class EventPortal implements EventPortalable {
		protected _eventTracker: EventEmitterable;
		private _subscriptionList: Set<CustomEvent> = new Set();

		constructor(eventEmitter: EventEmitterable) {
			this._eventTracker = eventEmitter;
		}
		getSubscriptionList():Set<CustomEvent>{
			return this._subscriptionList;
		}
		unsubscribe(): void {
			this._subscriptionList.forEach((sub) =>
				this._eventTracker.unsubscribe(sub)
			);
		}

		subscribe(campaign: Set<CustomEvent<any>>): any {
			campaign.forEach((myEvent) => {
				this._subscriptionList.add(myEvent);
				this._eventTracker.subscribe(myEvent);
			});
		}

		publish(e: CustomEvent): void {
			console.log('ACTION PUBLISHING: ', e);
			this._eventTracker.publish(e);
			//this._subscriptionList.forEach(
			//	(str) => /* str.type === e.type && */ this._eventTracker.publish(str)
		//	);
		}
	}

