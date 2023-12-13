import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactMessageService} from "../shared/service/contact-message.service";
import {ContactMessage} from "../shared/model/contact-message.model";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  form: FormGroup | null = null;
  messageSent = false;

  constructor(private formBuilder: FormBuilder, private contactMessageService: ContactMessageService) {
    this.initform();
  }

  private initform() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(40)]],
    });
  }

  sendContactMessage() {
    if (this.form) {
      const formValue = this.form.value;
      const message = new ContactMessage();
      message.email = formValue['email'];
      message.date = new Date();
      message.message = formValue['message'];

      this.contactMessageService.postMessage(message)
        .subscribe(response => {
          this.messageSent = true;
        });
    }
  }
}

