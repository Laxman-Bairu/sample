import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private route:Router,private service:CommonService) {
    this.registrationForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required]],
      
    });
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Login data:', this.registrationForm.value);
      this.service.ProceedRegister(this.registrationForm.value).subscribe(data =>{
        console.log(data);
        this.route.navigateByUrl('login')
      })
    } else {
      console.log('Form is invalid');
      this.registrationForm.markAllAsTouched(); // Shows validation messages
    }
  }

}
