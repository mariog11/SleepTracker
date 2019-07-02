var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';
var SleepinessPage = /** @class */ (function () {
    function SleepinessPage(firebaseService, alertCtrl, toastCtrl) {
        this.firebaseService = firebaseService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.JumpingSheep = [undefined,
            '../assets/0sheep.gif',
            '../assets/1sheep.gif',
            '../assets/2sheep.gif',
            '../assets/3sheep.gif',
            '../assets/4sheep.gif',
            '../assets/5sheep.gif',
            '../assets/6sheep.gif'];
        this.ScaleValues = [undefined,
            'Feeling active, vital, alert, or wide awake',
            'Functioning at high levels, but not at peak; able to concentrate',
            'Awake, but relaxed; responsive but not fully alert',
            'Somewhat foggy, let down',
            'Foggy; losing interest in remaining awake; slowed down',
            'Sleepy, woozy, fighting sleep; prefer to lie down',
            'No longer fighting sleep, sleep onset soon; having dream-like thoughts']; //7
    }
    SleepinessPage.prototype.ngOnInit = function () {
        this.sleepiness = 1;
        this.disabled = true;
    };
    SleepinessPage.prototype.toggleButton = function () {
        if (this.sleepiness != 1) {
            this.disabled = false;
        }
        else {
            this.disabled = true;
        }
    };
    SleepinessPage.prototype.findImage = function () {
        return this.JumpingSheep[this.sleepiness];
    };
    SleepinessPage.prototype.buttonBehavior = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Log this level of sleepiness?',
                            message: this.ScaleValues[this.sleepiness],
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.sleepiness = 1;
                                        _this.toggleButton();
                                    }
                                },
                                {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.logData();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SleepinessPage.prototype.logData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.firebaseService.addSleepinessData(new StanfordSleepinessData(this.sleepiness, new Date()));
                        this.sleepiness = 1;
                        this.toggleButton();
                        return [4 /*yield*/, this.toastCtrl.create({
                                duration: 3000,
                                message: 'Sleepiness entry has been logged successfully',
                                position: 'top'
                            })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SleepinessPage = __decorate([
        Component({
            selector: 'app-sleepiness',
            templateUrl: './sleepiness.page.html',
            styleUrls: ['./sleepiness.page.scss'],
        }),
        __metadata("design:paramtypes", [FirebaseService,
            AlertController,
            ToastController])
    ], SleepinessPage);
    return SleepinessPage;
}());
export { SleepinessPage };
//# sourceMappingURL=sleepiness.page.js.map