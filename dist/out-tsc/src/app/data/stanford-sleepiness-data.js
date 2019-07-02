var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { SleepData } from './sleep-data';
var StanfordSleepinessData = /** @class */ (function (_super) {
    __extends(StanfordSleepinessData, _super);
    function StanfordSleepinessData(loggedValue, loggedAt) {
        var _this = _super.call(this) || this;
        _this.loggedValue = loggedValue;
        _this.loggedAt = loggedAt;
        _this.summary = _this.summaryString();
        _this.time = _this.timeString();
        _this.date = _this.dateString();
        return _this;
    }
    StanfordSleepinessData.prototype.summaryString = function () {
        return this.loggedValue + ": " + StanfordSleepinessData.ScaleValues[this.loggedValue];
    };
    StanfordSleepinessData.prototype.timeString = function () {
        var hours = this.loggedAt.getHours() % 12;
        var minutes = this.loggedAt.getMinutes();
        var ampm = (this.loggedAt.getHours() >= 12) ? "pm" : "am";
        var minute_string = (minutes < 10) ? "0" : "";
        return hours + ":" + minute_string + minutes + " " + ampm;
    };
    StanfordSleepinessData.prototype.loggedValue_ = function () {
        return this.loggedValue;
    };
    StanfordSleepinessData.ScaleValues = [undefined,
        'Feeling active, vital, alert, or wide awake',
        'Functioning at high levels, but not at peak; able to concentrate',
        'Awake, but relaxed; responsive but not fully alert',
        'Somewhat foggy, let down',
        'Foggy; losing interest in remaining awake; slowed down',
        'Sleepy, woozy, fighting sleep; prefer to lie down',
        'No longer fighting sleep, sleep onset soon; having dream-like thoughts']; //7
    return StanfordSleepinessData;
}(SleepData));
export { StanfordSleepinessData };
//# sourceMappingURL=stanford-sleepiness-data.js.map