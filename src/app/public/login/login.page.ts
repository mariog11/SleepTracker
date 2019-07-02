import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	email: String;
	password: String;

	constructor(private authService: AuthenticationService, private _router: Router) { }

	ngOnInit() {
		this.authService.authorize.auth.onAuthStateChanged(firebaseUser => {
			if(firebaseUser){
				this.authService.authenticate();
				this._router.navigate(['/tabs/logger']);
			} else{
				this.authService.deauthenticate();
				this._router.navigate(['/login']);
			}
		});
	}

	login(){
		this.authService.login(this.email, this.password);
		this.email = undefined;
		this.password = undefined;
	}

	logout(){
		this.authService.logout();
	}

	signedIn(): boolean{
		return this.authService.isAuthenticated();
	}
}
