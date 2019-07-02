import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';

const routes: Routes = [
	{
		path: 'logger',
		loadChildren: '../pages/logger/logger.module#LoggerPageModule'
	},
	{
		path: 'sleepiness',
		loadChildren: '../pages/sleepiness/sleepiness.module#SleepinessPageModule'
	},
	{
		path: 'analytics',
		loadChildren: '../pages/analytics/analytics.module#AnalyticsPageModule'
	},
	{
		path: '',
		redirectTo: './tabs/logger',
		pathMatch: 'full'
	}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
