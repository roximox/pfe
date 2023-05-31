import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';

import { AdminLayoutComponent } from '@theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '@theme/auth-layout/auth-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { authGuard } from '@core/authentication';
import {AutocompleteComponent} from './material/autocomplete/autocomplete.component';
import {CheckboxComponent} from './material/checkbox/checkbox.component';
import {FormFieldComponent} from './material/form-field/form-field.component';
import {InputComponent} from './material/input/input.component';
import {SelectComponent} from './material/select/select.component';
import {SliderComponent} from './material/slider/slider.component';
import {SlideToggleComponent} from './material/slide-toggle/slide-toggle.component';
import {FormsDynamicComponent} from './forms/dynamic/dynamic.component';
import {AffiliatAuditComponent} from './affiliat-audit/affiliat-audit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    //canActivate: [authGuard],
    //canActivateChild: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },// canActivate:[authGuard] },
      { path: '403', component: Error403Component },
      { path: '404', component: Error404Component },
      { path: '500', component: Error500Component },
      {
        path: 'design',
        loadChildren: () => import('./design/design.module').then(m => m.DesignModule),
      },
      { path: 'sites', component: AutocompleteComponent },
      { path: 'Affiliate-Rank-tracker', component: CheckboxComponent },
      { path: 'sites-monitoring', component: FormFieldComponent },
      { path: 'custom-link-checker', component: InputComponent },
      { path: 'guides', component: SelectComponent },
      { path: 'help', component: SlideToggleComponent },
      { path: 'Pricing', component: FormsDynamicComponent },
      { path: 'affilate', component: AffiliatAuditComponent },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
