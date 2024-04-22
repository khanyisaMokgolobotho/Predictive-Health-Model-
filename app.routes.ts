import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthDashboardComponent } from './health-dashboard/health-dashboard.component';
import { HealthFormComponent } from './health-form/health-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HealthDashboardComponent },
  { path: 'form', component: HealthFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }

