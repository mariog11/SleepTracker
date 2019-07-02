import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {
	sleepiness: StanfordSleepinessData[];
	overnight: OvernightSleepData[];

	constructor(private firebaseService:FirebaseService, private authService: AuthenticationService) {
	}

	ngOnInit() {

	}

	logout(){
		this.authService.logout();
	}
}
