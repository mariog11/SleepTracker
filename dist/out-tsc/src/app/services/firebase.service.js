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
import { AngularFirestore } from '@angular/fire/firestore';
var FirebaseService = /** @class */ (function () {
    function FirebaseService(db) {
        this.db = db;
        this.sleepinessCollection = db.collection('/Sleepiness', function (ref) { return ref.orderBy("loggedAt", "desc"); }).valueChanges();
        this.overnight = db.collection('/Overnight', function (ref) { return ref.orderBy("sleepStart", "desc"); }).valueChanges();
    }
    FirebaseService.prototype.addOvernightSleepData = function (sleepLog) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.collection('/Overnight').add({
                id: sleepLog.id,
                loggedAt: sleepLog.loggedAt,
                sleepStart: sleepLog.sleepStart_(),
                sleepEnd: sleepLog.sleepEnd_(),
                summary: sleepLog.summaryString(),
                date: sleepLog.dateString()
            })
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    FirebaseService.prototype.addSleepinessData = function (sleepLog) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.collection('/Sleepiness').add({
                id: sleepLog.id,
                loggedAt: sleepLog.loggedAt,
                loggedValue: sleepLog.loggedValue_(),
                summary: sleepLog.summaryString(),
                time: sleepLog.timeString(),
                date: sleepLog.dateString()
            })
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    FirebaseService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore])
    ], FirebaseService);
    return FirebaseService;
}());
export { FirebaseService };
//# sourceMappingURL=firebase.service.js.map