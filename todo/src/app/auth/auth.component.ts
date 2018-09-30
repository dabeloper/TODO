import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  email: string;
  password: string;
  constructor(public authService: AuthService) {}
  username:string="";
  login() {
    this.email=`${this.email}@gmail.com`;  
    this.authService.login(this.email, this.password)
    this.email = this.password = '';    
  }
  logout() {
    this.authService.logout();
  }
  signup(){
    this.authService.signup(this.email+"@gmail.com" , this.password, this.email);
  }
  reset(email){
    email=`${email}@gmail.com`;
    alert("email sent to "+email)
    this.authService.resetPassword(email)
  }
  isLoggedIn(){
    return this.authService.isLoggedIn;
  }
  ngOnInit() {}
}
