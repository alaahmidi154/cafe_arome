import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
   { 
    path: 'admin', 
    loadComponent: () => import('./admin-reservations/admin-reservations.component').then(m => m.AdminReservationsComponent) 
  },
  { path: 'login', component: LoginAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
