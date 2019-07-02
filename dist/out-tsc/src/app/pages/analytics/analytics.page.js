var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../../services/firebase.service';
var AnalyticsPage = /** @class */ (function () {
    function AnalyticsPage(db, firebaseService, alertController) {
        this.db = db;
        this.firebaseService = firebaseService;
        this.alertController = alertController;
        this.sleepiness = db.collection('/Sleepiness', function (ref) { return ref.orderBy("loggedAt", "desc"); }).valueChanges();
        this.overnight = db.collection('/Overnight', function (ref) { return ref.orderBy("sleepStart", "desc"); }).valueChanges();
    }
    AnalyticsPage.prototype.ngOnInit = function () {
    };
    AnalyticsPage = __decorate([
        Component({
            selector: 'app-analytics',
            templateUrl: './analytics.page.html',
            styleUrls: ['./analytics.page.scss'],
        }),
        __metadata("design:paramtypes", [AngularFirestore,
            FirebaseService,
            AlertController])
    ], AnalyticsPage);
    return AnalyticsPage;
}());
export { AnalyticsPage };
//# sourceMappingURL=analytics.page.js.map