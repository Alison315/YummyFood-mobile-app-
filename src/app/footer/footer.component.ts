import { Component, OnInit } from '@angular/core';
import { faTwitter, faYoutube, faLinkedin, faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faPhone, faFax} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faFax = faFax;
  constructor() { }

  ngOnInit(): void {
  }

}
