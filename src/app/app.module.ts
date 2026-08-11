import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { AdminReservationsComponent } from './admin-reservations/admin-reservations.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    MenuComponent,
    ReservationComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterOutlet
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
