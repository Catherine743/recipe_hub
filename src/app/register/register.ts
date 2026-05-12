import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Apiservice } from '../services/apiservice';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  registerForm: FormGroup

  constructor(private fb: FormBuilder, private api: Apiservice, private router: Router) {
    this.registerForm = this.fb.group({
      username: ["", [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
    })
  }

  register() {
    if (this.registerForm.valid) {
      const username = this.registerForm.value.username
      const email = this.registerForm.value.email
      const password = this.registerForm.value.password

      // API CAll
      this.api.registerAPI({ username, email, password }).subscribe({
        next: (res: any) => {
          alert("User registered successfully")
          this.router.navigateByUrl("/login")
          this.registerForm.reset()
        },
        error: (reason: any) => {
          alert(reason.error)
        }
      })
    }
    else {
      alert("Invalid details")
    }
  }

}
