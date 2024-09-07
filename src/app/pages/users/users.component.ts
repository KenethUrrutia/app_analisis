import { UserInterface } from '../../shared/interfaces';
import { UserService } from './../../shared/services/user.service';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
	selector: 'app-users',
	standalone: true,
	imports: [MatCardModule, MatButtonModule, MatProgressBarModule, MatTableModule],
	templateUrl: './users.component.html',
	styleUrl: './users.component.scss'
})
export default class UsersComponent {
	displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'avatar'];
	dataSource: UserInterface[] = [];

	constructor(private userService: UserService) {}

	ngOnInit() {
		this.getUsers();
	}

	getUsers() {
		this.userService.getUsers().subscribe((resp) => {
			this.dataSource = resp.data;
		});
	}
}
