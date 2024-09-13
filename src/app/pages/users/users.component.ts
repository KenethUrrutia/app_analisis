import { Component, Injectable, signal, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserInterface } from '../../shared/interfaces';
import { UserService } from './../../shared/services/user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NewUserComponent } from './new-user/new-user.component';
import { MatIconModule } from '@angular/material/icon';

@Injectable()
export class MyMatPaginatorIntl extends MatPaginatorIntl {
	override itemsPerPageLabel: string = 'Usuarios por página';
}

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
		MatInputModule,
		NewUserComponent,
		MatIconModule
	],
	templateUrl: './users.component.html',
	styleUrl: './users.component.scss',
	providers: [
		{
			provide: MatPaginatorIntl,
			useClass: MyMatPaginatorIntl
		}
	]
})
export default class UsersComponent {
	displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'avatar'];
	dataSource!: MatTableDataSource<UserInterface>;

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	public newRecord = signal(false);

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

	onNewRecord() {
		this.newRecord.set(!this.newRecord());
	}
}
