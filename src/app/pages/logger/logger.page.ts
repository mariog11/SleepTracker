import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.page.html',
  styleUrls: ['./logger.page.scss'],
})
export class LoggerPage implements OnInit {
	startTime: Date;
	endTime: Date;
	overnight: OvernightSleepData[];

	constructor(public firebaseService:FirebaseService, 
		private alertCtrl: AlertController, 
		private toastCtrl: ToastController) { 
		this.firebaseService.getOvernight().subscribe( items => {
			this.overnight = items;
		});
	}

	ngOnInit() {}

	async deleteOvernight(item){
        this.firebaseService.deleteOvernight(item);
        const toast = await this.toastCtrl.create({
			duration: 3000,
		    message: 'Sleep cycle entry has been successfully deleted',
			position: 'top'
	    });
	    await toast.present();
	}

	clearDates(){
		this.startTime = undefined;
		this.endTime = undefined;
	}

	wakeTimeDisplay(): Boolean{
		return (this.startTime == undefined) ? false : true;
	}

	logDisabled(): Boolean{
		return (this.startTime == undefined || this.endTime == undefined) ? true : false;
	}

	datesAvailable(): Boolean{
		return (this.startTime == undefined && this.endTime == undefined) ? false : true ;
	}

	async logButtonAction(){
		if(this.startTime >= this.endTime){
			const alert = await this.alertCtrl.create({
		      cssClass: 'alert',
		      header: 'Error',
		      message: 'Please ensure your sleep time occurs before your wake time',
		      buttons: ['OK']
		    });
		    await alert.present();
		    this.endTime = undefined;
		}
		else {
			this.firebaseService.addOvernightSleepData(new OvernightSleepData(new Date(this.startTime), new Date(this.endTime)));						
			this.clearDates();
			const toast = await this.toastCtrl.create({
			  duration: 3000,
		      message: 'Sleep cycle entry has been logged successfully',
			  position: 'top'
		    });
		    await toast.present();
		}
	}
}
