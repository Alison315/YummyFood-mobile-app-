import { Component, OnInit } from '@angular/core';
import { faEnvelope,faPhone, faFax} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faFax = faFax;
  constructor() { }

  ngOnInit(): void {
  }

}
