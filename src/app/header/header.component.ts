import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { faHome,faInfo, faList, faAddressCard, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faHome = faHome;
  faInfo = faInfo;
  faList = faList;
  faAddressCard = faAddressCard;
  faSignInAlt = faSignInAlt;
  
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openLoginForm(){
    this.dialog.open(LoginComponent,{width:'500px',height:'450px'})
  }
}
