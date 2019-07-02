import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentData } from '@angular/fire/firestore';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  overnightCollection: AngularFirestoreCollection<OvernightSleepData>; 
  overnight: Observable<any[]>;
  overnightDoc: AngularFirestoreDocument<OvernightSleepData>;
  sleepinessCollection: AngularFirestoreCollection<StanfordSleepinessData>;
  sleepiness: Observable<any[]>;
  sleepDoc:  AngularFirestoreDocument<StanfordSleepinessData>;

  constructor(public db:AngularFirestore) {
  	this.overnightCollection = this.db.collection('/Overnight', ref => ref.orderBy("sleepStart", "desc"));
  	this.overnight = this.overnightCollection.snapshotChanges().pipe(
	    map(changes => changes.map(a => {
	      const data = a.payload.doc.data() as OvernightSleepData;
	      const id = a.payload.doc.id;
	      return { id, ...data}
	    })));
  	this.sleepinessCollection = this.db.collection('/Sleepiness', ref => ref.orderBy("loggedAt", "desc"));
  	this.sleepiness = this.sleepinessCollection.snapshotChanges().pipe(
	    map(changes => changes.map(a => {
	      const data = a.payload.doc.data() as StanfordSleepinessData;
	      const id = a.payload.doc.id;
	      return { id, ...data}
	    })));
  }

  getOvernight(){
  	return this.overnight;
  }

  getSleepiness(){
  	return this.sleepiness;
  }

  deleteOvernight(item){
  	this.overnightDoc = this.db.doc(`Overnight/${item.id}`);
  	this.overnightDoc.delete();
  }

  deleteSleepiness(item){
  	this.sleepDoc = this.db.doc(`Sleepiness/${item.id}`);
  	this.sleepDoc.delete();
  }

  public addOvernightSleepData(sleepLog:OvernightSleepData) {
    return new Promise<any>((resolve, reject) => {
        this.db.collection('/Overnight').add({
          loggedAt: sleepLog.loggedAt,
          sleepStart: sleepLog.sleepStart_(),
          sleepEnd: sleepLog.sleepEnd_(),
          summary: sleepLog.summaryString(),
          date: sleepLog.dateString()
        })
        .then(
          (res) => {
            resolve(res)
          },
          err => reject(err)
        )
      })
  }

  public addSleepinessData(sleepLog:StanfordSleepinessData) {
    return new Promise<any>((resolve, reject) => {
        this.db.collection('/Sleepiness').add({
          loggedAt: sleepLog.loggedAt,
          loggedValue: sleepLog.loggedValue_(),
          summary: sleepLog.summaryString(),
          time: sleepLog.timeString(),
          date: sleepLog.dateString()
        })
        .then(
          (res) => {
            resolve(res)
          },
          err => reject(err)
        )
      })
  }

}