export class StanfordSleepinessData{
	public static ScaleValues = [undefined,//Sleepiness scale starts at 1
	'Feeling active, vital, alert, or wide awake', //1
	'Functioning at high levels, but not at peak; able to concentrate', //2
	'Awake, but relaxed; responsive but not fully alert', //3
	'Somewhat foggy, let down', //4
	'Foggy; losing interest in remaining awake; slowed down', //5
	'Sleepy, woozy, fighting sleep; prefer to lie down', //6
	'No longer fighting sleep, sleep onset soon; having dream-like thoughts']; //7

	loggedAt: Date; 
	private loggedValue:number;
	private summary: string;
	private time: string;
	private date: string;

	constructor(loggedValue:number) {
		this.loggedValue = loggedValue;
		this.loggedAt = new Date();
		this.summary = this.summaryString();
		this.time = this.timeString();
		this.date = this.dateString();
	}

	summaryString():string {
		return this.loggedValue + ": " + StanfordSleepinessData.ScaleValues[this.loggedValue];
	}

	timeString():string {
		var hours = this.loggedAt.getHours()%12;
		var minutes  = this.loggedAt.getMinutes();
		var ampm = (this.loggedAt.getHours() >= 12) ? "pm": "am";
		var minute_string = (minutes < 10)?"0":"";
		return hours + ":" + minute_string + minutes + " " + ampm;
	}

	dateString():string {
		return this.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}

	public loggedValue_():number{
		return this.loggedValue;
	}
}