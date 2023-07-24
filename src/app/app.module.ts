import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { CardsComponent } from './home/cards/cards.component';
import { PageBTCComponent } from './page-btc/page-btc.component';
import { BackgroundVideoComponent } from './UI/background-video/background-video.component';
import { HeroSectionComponent } from './page-btc/hero-section/hero-section.component';
import { NavbarDetailComponent } from './page-btc/navbar-detail/navbar-detail.component';
import { DomainSectionComponent } from './page-btc/domain-section/domain-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CardsComponent,
    PageBTCComponent,
    BackgroundVideoComponent,
    HeroSectionComponent,
    NavbarDetailComponent,
    DomainSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
