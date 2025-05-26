import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Service/common.service';
import { ToastrService } from 'ngx-toastr';
var bootstrap:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  userData: any;

  constructor(private fb: FormBuilder, private route:Router, private service:CommonService,private toast: ToastrService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login data:', this.loginForm.value);
      this.service.GetByCode(this.loginForm.value.username).subscribe(data =>{
        this.userData = data;
        if(this.userData.password === this.loginForm.value.password)
          this.toast.success('Loggedin Successfully')
          this.route.navigateByUrl('home')
      })
    } else {
      console.log('Form is invalid');
      this.toast.error('Invalid Username/Password')
      this.loginForm.markAllAsTouched(); // Shows validation messages
    }
  }
  registerClick(){
    this.route.navigateByUrl('register')
  }
}
