import { UserInterface } from '../../shared/interfaces';
import { UserService } from './../../shared/services/user.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-users',
	standalone: true,
	imports: [],
	templateUrl: './users.component.html',
	styleUrl: './users.component.scss'
})
export default class UsersComponent {
	users: UserInterface[] = [];

	constructor(private userService: UserService) {}

	ngOnInit() {
		this.getUsers();
	}

	getUsers() {
		this.userService.getUsers().subscribe((resp) => {
			this.users = resp.data;
			console.log(this.users);
		});
	}
}
