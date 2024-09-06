import { MessageService } from './../../shared/services/message.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { DataInterface } from '../../shared/interfaces';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-sumary',
	standalone: true,
	imports: [MatButtonModule, MatIconModule],
	templateUrl: './sumary.component.html',
	styleUrl: './sumary.component.scss'
})
export class SumaryComponent {
	title: string = 'Sumary';
	data: DataInterface | undefined;
	increment: number = 0;

	@Output() dato = new EventEmitter<number>();
	constructor(private messageService: MessageService) {}

	ngOnInit(): void {
		console.log('En el OnInit');
	}

	incrementNumber() {
		this.increment++;
		this.sendNumber();
		this.messageService.increment$.next(this.increment);
	}

	sendNumber() {
		this.dato.emit(this.increment);
	}
}
