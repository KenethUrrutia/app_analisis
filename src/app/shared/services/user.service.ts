import { UserPostInterface, UserPostResponseInterface, UserResponseInterface } from './../interfaces/user.interface';
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

	/**
	 * Retorna un objeto con los usuarios
	 * @returns Observable<UserResponseInterface>
	 */
	getUsers(): Observable<UserResponseInterface> {
		return this.http.get<UserResponseInterface>(`${this.API_URL}/api/users?page=2`);
	}

	postUser(data: UserPostInterface): Observable<UserPostResponseInterface> {
		let json = JSON.stringify(data);
		return this.http.post<UserPostResponseInterface>(`${this.API_URL}/api/users`, json);
	}
}
