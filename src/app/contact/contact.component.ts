import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactFormModalName = new FormControl('', Validators.required);
  contactFormModalEmail = new FormControl('', Validators.email);
  contactFormModalSubject = new FormControl('', Validators.required);
  contactFormModalMessage = new FormControl('', Validators.required);
  constructor() { }

  ngOnInit() {
  }

  submitContact() {
    console.log(this.contactFormModalName.value);
    console.log(this.contactFormModalEmail.value);
    console.log(this.contactFormModalSubject.value);
    console.log(this.contactFormModalMessage.value);
  }
}
