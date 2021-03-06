import { Component, OnInit, ViewChild } from '@angular/core';
import { faEnvelope,faPhone, faFax} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('fform') feedbackFormDirective:any;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faFax = faFax;
  feedbackForm!: FormGroup;
  feedback!: Feedback;
  contactType = ContactType;
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  
  }
  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      telnum: ['', Validators.required ],
      email: ['', Validators.required ],
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }
  pop(){
    alert('contact number copied')
  }
}
