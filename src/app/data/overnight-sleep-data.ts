
export class OvernightSleepData {
	loggedAt: Date; 
	private sleepStart:Date;
	private sleepEnd:Date;
	private summary: string;
	private date: string;

	constructor(sleepStart:Date, sleepEnd:Date) {
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
		this.loggedAt = new Date();
		this.summary = this.summaryString();
		this.date = this.dateString();
	}

	summaryString():string {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;
		    
		// Convert to hours and minutes
		return Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes.";
	}

	dateString():string {
		return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}

	public sleepStart_():Date{
		return this.sleepStart;
	}

	public sleepEnd_():Date{
		return this.sleepEnd;
	}
}