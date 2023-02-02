import { Publishable } from './Publishable.interface';
import { Subscribable } from './Subscribable.interface';
import { Unsubscribable } from './Unsubscribable.interface';

export interface EventPortalable extends Publishable, Subscribable, Unsubscribable{

}