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
import { ReferencesComponent } from './page-btc/references/references.component';
import { SlideCarouselComponent } from './UI/slide-carousel/slide-carousel.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterBtcComponent } from './page-btc/footer-btc/footer-btc.component';
import { PageDdfComponent } from './page-ddf/page-ddf.component';
import { NavbarDdfComponent } from './page-ddf/navbar-ddf/navbar-ddf.component';
import { HeroSectionDffComponent } from './page-ddf/hero-section-dff/hero-section-dff.component';
import { DomainSectionDdfComponent } from './page-ddf/domain-section-ddf/domain-section-ddf.component';
import { ReferencesDdfComponent } from './page-ddf/references-ddf/references-ddf.component';
import { FooterDdfComponent } from './page-ddf/footer-ddf/footer-ddf.component';
import { PageIsComponent } from './page-is/page-is.component';

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
    ReferencesComponent,
    SlideCarouselComponent,
    FooterBtcComponent,
    PageDdfComponent,
    NavbarDdfComponent,
    HeroSectionDffComponent,
    DomainSectionDdfComponent,
    ReferencesDdfComponent,
    FooterDdfComponent,
    PageIsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
