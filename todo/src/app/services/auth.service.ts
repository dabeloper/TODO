import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { isNullOrUndefined, isString } from 'util';



@Injectable()
export class AuthService{
  auth: firebase.auth.Auth;
  user: Observable<firebase.User>;
  isLoggedIn: boolean;
  constructor(private firebaseAuth: AngularFireAuth, private router: Router, ) {
    this.user = firebaseAuth.authState;
  }
  signup(email: string, password: string, displayName: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        return user.user.updateProfile({ displayName: displayName, photoURL: null })
      })
      .catch(err => {
        alert(`'Something went wrong:',${err.message}`);
      });
  }
  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        if (this.firebaseAuth.auth) {
          //if (this.firebaseAuth.auth.currentUser) { this.isLoggedIn = true; }
          this.isLoggedIn = true;
          this.router.navigate(["project"]);
        }
        else {
          alert('Username or Password is not correct!');
          this.router.navigate([""]);
        }
      })
      .catch(err => {
        alert(`'Something went wrong:', ${err.message}`);
      });
  }
  logout() {
    //this.sendToken();
    this.firebaseAuth
      .auth
      .signOut()
      .then( value => {
        console.log("logout",value);
        console.log("logout",this.firebaseAuth.auth.currentUser);
        console.log("logout",this.isLoggedIn);
        this.isLoggedIn = isString(this.firebaseAuth.auth.currentUser);
      });

    this.router.navigate([""]);
  }
  resetPassword(email) {
    this.auth = this.firebaseAuth.auth;
    this.auth.sendPasswordResetEmail(email).then(function () {
      alert(`email sent to ${email}`)
    }, function (error) {
      alert("try again")
    });
  }
}