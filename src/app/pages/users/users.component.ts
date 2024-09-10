import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserInterface } from '../../shared/interfaces';
import { UserService } from './../../shared/services/user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
	selector: 'app-users',
	standalone: true,
	imports: [
		MatCardModule,
		MatButtonModule,
		MatProgressBarModule,
		MatTableModule,
		MatFormFieldModule,
		MatSortModule,
		MatPaginatorModule,
		MatInputModule
	],
	templateUrl: './users.component.html',
	styleUrl: './users.component.scss'
})
export default class UsersComponent {
	displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'avatar'];
	dataSource!: MatTableDataSource<UserInterface>;

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	constructor(private userService: UserService) {}

	ngOnInit() {
		this.getUsers();
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	getUsers() {
		this.userService.getUsers().subscribe((resp) => {
			this.dataSource = new MatTableDataSource(resp.data);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}
}
