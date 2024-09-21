import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../../shared/services/user.service';

@Component({
	selector: 'app-new-user',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
	templateUrl: './new-user.component.html',
	styleUrl: './new-user.component.scss'
})
export class NewUserComponent {
	private userService!: UserService;
	public formSubmit: FormGroup;
	constructor(private fb: FormBuilder, private us: UserService) {
		this.userService = us;
		this.formSubmit = this.fb.group({
			name: [null, Validators.required],
			job: [null, [Validators.required]]
		});
	}

	ngOnInit() {}

	onSubmit() {
		if (this.formSubmit.valid) {
			this.userService.postUser(this.formSubmit.value).subscribe((data) => {
				console.log(data);
			});
		} else {
			// naranjas
		}
	}
}
