import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { from } from 'rxjs';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { BarsComponent } from './food-and-beverage/bars/bars.component';
import { RestaurantComponent } from './food-and-beverage/restaurant/restaurant.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { WelnessAndSpaComponent } from './lifestyle/welness-and-spa/welness-and-spa.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { WesternsWeddingsComponent } from './weddings/westerns-weddings/westerns-weddings.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    CelebrationsComponent,
    FoodAndBeverageComponent,
    BarsComponent,
    RestaurantComponent,
    LifestyleComponent,
    ExcursionsComponent,
    ExperiencesComponent,
    WelnessAndSpaComponent,
    NavigationComponent,
    HeaderComponent,
    NavtabsComponent,
    SidenavListComponent,
    HomeComponent,
    OffersComponent,
    WeddingsComponent,
    ThaiWeddingsComponent,
    WesternsWeddingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
