import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { LoginInterface, TokenInterface } from '../interfaces/login.interface';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	readonly API_URL = environment.apiUrl;

	constructor(private http: HttpClient) {}

	access(logindata: LoginInterface): Observable<any> {
		return this.http.post<LoginInterface>(`${this.API_URL}/api/login`, logindata);
	}
}
