import { Component, Input } from '@angular/core';
import { MessageService } from '../../shared/services/message.service';

@Component({
	selector: 'app-data',
	standalone: true,
	imports: [],
	templateUrl: './data.component.html',
	styleUrl: './data.component.scss'
})
export class DataComponent {
	@Input() dato: number = 0;
	datoObservable: number = 0;

	constructor(private messageService: MessageService) {
		messageService.increment$.subscribe((resp) => {
			this.datoObservable = resp;
		});
	}

	ngOnInit(): void {}
}
