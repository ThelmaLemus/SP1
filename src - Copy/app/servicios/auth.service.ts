import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth) { }

  login(correo:string, contrasena:string){

  	return new Promise((resolve, rejected) => {
  		this.AFauth.auth.signInWithEmailAndPassword(correo, contrasena).then(user => {
	  		resolve(user);
  		}).catch(err => rejected(err));
  	})
  }
}
