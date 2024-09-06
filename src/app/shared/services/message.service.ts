import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MessageService {
	public increment$ = new BehaviorSubject<number>(0);

	constructor() {}
}
