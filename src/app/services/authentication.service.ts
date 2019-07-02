import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs' ;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  	authenticationState = new BehaviorSubject(false);

	constructor(public authorize: AngularFireAuth) { 
	}

	login(email, password) {
		const promise = this.authorize.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
 			var errorCode = error.code;
  			var errorMessage = error.message;
  			console.log(errorCode + ' ---- ' + errorMessage);
		});
	}

	logout() {
		const promise = this.authorize.auth.signOut().then(function() {
		  	// Sign-out successful.
			console.log('signed out successfully');
		}).catch(function(error) {
		  	// An error happened.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode + ' ---- ' + errorMessage);
		});
	}

	isAuthenticated() {
		return this.authenticationState.value;
	}

	authenticate(){
		this.authenticationState.next(true);
	}

	deauthenticate(){
		this.authenticationState.next(false);
	}
}
