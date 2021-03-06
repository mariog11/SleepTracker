import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'logger',
        children: [
          {
            path: '',
            loadChildren: '../pages/logger/logger.module#LoggerPageModule'
          }
        ]
      },
      {
        path: 'sleepiness',
        children: [
          {
            path: '',
            loadChildren: '../pages/sleepiness/sleepiness.module#SleepinessPageModule'
          }
        ]
      },
      {
        path: 'analytics',
        children: [
          {
            path: '',
            loadChildren: '../pages/analytics/analytics.module#AnalyticsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: './tabs/logger',
        pathMatch: 'full'
      }
    ]
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
export class TabsPageRoutingModule {}
