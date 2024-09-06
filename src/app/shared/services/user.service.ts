import { UserResponseInterface } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	readonly API_URL = environment.apiUrl;

	constructor(private http: HttpClient) {}

	getUsers(): Observable<UserResponseInterface> {
		return this.http.get<UserResponseInterface>(`${this.API_URL}/api/users?page=2`);
	}
}
