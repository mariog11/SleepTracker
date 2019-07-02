import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})
export class SleepinessPage implements OnInit {
	sleepinessLevel: number;
	disabled: boolean;
	sleepiness: StanfordSleepinessData[];

	constructor(public firebaseService:FirebaseService, 
		private alertCtrl: AlertController, 
		private toastCtrl: ToastController) { }

	ngOnInit() {
		this.firebaseService.getSleepiness().subscribe( items => {
			this.sleepiness = items;
		});
		this.sleepinessLevel = 1;
		this.disabled = true;
	}

	async deleteSleepiness(item){
    	this.firebaseService.deleteSleepiness(item);
    	const toast = await this.toastCtrl.create({
			duration: 3000,
		    message: 'Sleepiness entry has been successfully deleted',
			position: 'top'
	    });
	    await toast.present();
	}

	toggleButton(){
		this.disabled = (this.sleepinessLevel != 1) ? false : true;
	}
	
	async logButtonAction(){
		const alert = await this.alertCtrl.create({
	      header: 'Log this level of sleepiness?',
	      message: StanfordSleepinessData.ScaleValues[this.sleepinessLevel],
	      buttons: [
				{
					text: 'No',
					role: 'cancel',
					cssClass: 'secondary',
					handler: () => {
						this.sleepinessLevel = 1;
						this.toggleButton();
					}
				}, 
				{
					text: 'Yes',
					handler: () => {
						this.logData();
					}
				}
			]
	    });
	    await alert.present();
	}

	async logData(){
		this.firebaseService.addSleepinessData(new StanfordSleepinessData(this.sleepinessLevel));
		this.sleepinessLevel = 1;
		this.toggleButton();

		const toast = await this.toastCtrl.create({
		  duration: 3000,
		  message: 'Sleepiness entry has been logged successfully',
		  position: 'top'
	    });
	    await toast.present();
	}
}
