import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
	selector: 'app-new-user',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
	templateUrl: './new-user.component.html',
	styleUrl: './new-user.component.scss'
})
export class NewUserComponent {
	public formSubmit: FormGroup;
	constructor(private fb: FormBuilder) {
		this.formSubmit = this.fb.group({
			name: [null, Validators.required],
			job: [null, [Validators.required]]
		});
	}

	ngOnInit() {}

	onSubmit() {
		if (this.formSubmit.valid) {
		} else {
			// naranjas
		}
	}
}
