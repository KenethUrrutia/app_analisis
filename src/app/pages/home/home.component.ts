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
	dato: number | undefined;

	constructor() {
		console.log('En el constructor');
	}

	ngOnInit(): void {
		console.log('En el OnInit');
	}

	recibirNumero(item: number) {
		this.dato = item;
	}
}
