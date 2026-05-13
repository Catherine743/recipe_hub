import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Apiservice } from '../services/apiservice';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [Header, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  demoMail: string = "cookbook@gmail.com"

  testimonyForm: FormGroup

  constructor(private fb: FormBuilder, private api: Apiservice) {
    this.testimonyForm = this.fb.group({
      name: ["", [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: ["", [Validators.required, Validators.email]],
      message: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
    })
  }

  addTestimony() {
    if (this.testimonyForm.valid) {
      const name = this.testimonyForm.value.name
      const email = this.testimonyForm.value.email
      const message = this.testimonyForm.value.message

      this.api.addTestimonyAPI({ name, email, message }).subscribe((res: any) => {
        alert("Thankyou for adding your valuable feedback...")
        this.testimonyForm.reset()
      })
    }
    else {
      alert("Invalid form")
    }
  }
}
