var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { FirebaseService } from './firebase.service';
var SleepService = /** @class */ (function () {
    function SleepService(firebaseService) {
        this.firebaseService = firebaseService;
        this.loadFBData();
    }
    SleepService_1 = SleepService;
    SleepService.prototype.loadFBData = function () {
        var _this = this;
        this.firebaseService.db.collection('/Sleepiness').valueChanges().subscribe(function (array) {
            array.forEach(function (item) {
                var logged_Date = item['loggedAt'];
                var value = item['loggedValue'];
                _this.loadFromDB_SleepinessData(new StanfordSleepinessData(value, new Date(logged_Date['seconds'] * 1000)));
            });
        });
        this.firebaseService.db.collection('/Overnight').valueChanges().subscribe(function (array) {
            array.forEach(function (item) {
                var logged_Date = item['loggedAt'];
                var sleepStart = item['sleepStart'];
                var sleepEnd = item['sleepEnd'];
                _this.loadFromDB_OvernightData(new OvernightSleepData(new Date(sleepStart['seconds'] * 1000), new Date(sleepEnd['seconds'] * 1000), new Date(logged_Date['seconds'] * 1000)));
            });
        });
    };
    SleepService.prototype.loadFromDB_OvernightData = function (sleepData) {
        SleepService_1.AllSleepData.push(sleepData);
        SleepService_1.AllOvernightData.push(sleepData);
    };
    SleepService.prototype.loadFromDB_SleepinessData = function (sleepData) {
        SleepService_1.AllSleepData.push(sleepData);
        SleepService_1.AllSleepinessData.push(sleepData);
    };
    SleepService.prototype.logOvernightData = function (sleepData) {
        SleepService_1.AllSleepData.push(sleepData);
        SleepService_1.AllOvernightData.push(sleepData);
        this.firebaseService.addOvernightSleepData(sleepData);
    };
    SleepService.prototype.logSleepinessData = function (sleepData) {
        SleepService_1.AllSleepData.push(sleepData);
        SleepService_1.AllSleepinessData.push(sleepData);
        this.firebaseService.addSleepinessData(sleepData);
    };
    var SleepService_1;
    SleepService.AllSleepData = [];
    SleepService.AllOvernightData = [];
    SleepService.AllSleepinessData = [];
    SleepService = SleepService_1 = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [FirebaseService])
    ], SleepService);
    return SleepService;
}());
export { SleepService };
//# sourceMappingURL=sleep.service.js.map