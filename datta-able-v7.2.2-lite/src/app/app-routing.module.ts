import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { AuthSigninComponent } from './demo/pages/authentication/auth-signin/auth-signin.component';

const routes: Routes = [
  {
    path: '',
    //component: AuthComponent,
    component:AuthSigninComponent,
    //loadChildren: './demo/pages/authentication/authentication.module#AuthenticationModule'
    // children: [
    //   {
    //     path: 'auth',
    //     loadChildren: './demo/pages/authentication/authentication.module#AuthenticationModule'
    //   },
    // ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './demo/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'basic',
        loadChildren: './demo/ui-elements/ui-basic/ui-basic.module#UiBasicModule'
      },
      {
        path: 'forms',
        loadChildren: './demo/pages/form-elements/form-elements.module#FormElementsModule'
      },
      {
        path: 'tables',
        loadChildren: './demo/pages/tables/tables.module#TablesModule'
      },
      {
        path: 'charts',
        loadChildren: './demo/pages/core-chart/core-chart.module#CoreChartModule'
      },
      {
        path: 'maps',
        loadChildren: './demo/pages/core-maps/core-maps.module#CoreMapsModule'
      },
      {
        path: 'sample-page',
        loadChildren: './demo/extra/sample-page/sample-page.module#SamplePageModule'
      },
      {
        path: 'add-candidate',
        component:AddCandidateComponent
      }
    ]
  },
  {
    path: 'appp',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './demo/pages/authentication/authentication.module#AuthenticationModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
