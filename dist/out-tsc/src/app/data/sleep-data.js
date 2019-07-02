import * as shortid from 'shortid';
var SleepData = /** @class */ (function () {
    function SleepData() {
        //Assign a random (unique) ID. This may be useful for comparison (e.g., are two logged entries the same).
        this.id = shortid();
        this.loggedAt = new Date();
    }
    SleepData.prototype.summaryString = function () {
        return 'Unknown sleep data';
    };
    SleepData.prototype.dateString = function () {
        return this.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    };
    return SleepData;
}());
export { SleepData };
//# sourceMappingURL=sleep-data.js.map