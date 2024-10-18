import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from '../../shared/services/login.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatButtonModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss'
})
export default class LoginComponent {
	public formSubmit: FormGroup;
	private loginService: LoginService;
	hide = true;

	constructor(private fb: FormBuilder, private ls: LoginService) {
		this.loginService = ls;
		this.formSubmit = this.fb.group({
			email: [null, Validators.required],
			password: [null, [Validators.required]]
		});
	}

	onSubmit() {
		if (this.formSubmit.valid) {
			this.loginService.access(this.formSubmit.value).subscribe((res) => {
				console.log(res);

				sessionStorage.setItem('token', res.token);
			});
		} else {
		}
	}
}
