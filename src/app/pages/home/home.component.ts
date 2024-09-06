import { MessageService } from './../../shared/services/message.service';
import { Component } from '@angular/core';
import { DataComponent } from '../../components/data/data.component';
import { SumaryComponent } from '../../components/sumary/sumary.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [DataComponent, SumaryComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export default class HomeComponent {
	dato: number = 0;
	datoObservable: number = 0;

	constructor(private messageService: MessageService) {}

	ngOnInit(): void {
		this.messageService.increment$.subscribe((resp) => {
			this.datoObservable = resp;
		});
	}

	recibirNumero(item: number) {
		this.dato = item;
	}
}
