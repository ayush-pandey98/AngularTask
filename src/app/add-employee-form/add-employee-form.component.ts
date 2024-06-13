import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TopNavComponent } from '../top-nav/top-nav.component';
@Component({
  selector: 'app-add-employee-form',
  standalone: true,
  imports: [TopNavComponent],
  templateUrl: './add-employee-form.component.html',
  styleUrl: './add-employee-form.component.css'
})
export class AddEmployeeFormComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      empNo: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: [''],
      email: ['', [Validators.required, Validators.email]],
      mobile: [''],
      joiningDate: ['', Validators.required],
      location: [''],
      jobTitle: [''],
      department: [''],
      assignManager: [''],
      assignProject: ['']
    });
  }

  ngOnInit(): void {}

  imgUpload(event: Event): void {
    // Handle image upload
  }

  cancelSubmission(event: Event): void {
    event.preventDefault();
    // Handle form cancellation

}
}
