import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environment/environment';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
	console.log('headerInterceptor');

	let headers = new HttpHeaders({});
	const url = environment.apiUrl;
	if (req.url.includes(`${url}/api/users`)) {
		headers = headers.set('Content-Type', 'application/json');
		// headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
		req = req.clone({ headers });
	}

	return next(req);
};
