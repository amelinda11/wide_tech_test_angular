import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '',         redirectTo: '/dashboard', pathMatch: 'full' }, 
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'home',       component: HomeComponent },
  { path: 'about',      component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
