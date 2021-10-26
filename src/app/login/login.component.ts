import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user={username:'',password:'',remember:false}
  constructor(public dialogRef:MatDialogRef<LoginComponent>) { } //表单提交的时候如何处理

  ngOnInit(): void {
  }
  onSubmit(){
  console.log('User: ', this.user);
  this.dialogRef.close(); //提交的时候整个dialog也被dismiss
  }
}
