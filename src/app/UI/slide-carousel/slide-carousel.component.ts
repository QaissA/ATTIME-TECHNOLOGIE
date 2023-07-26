import { Component } from '@angular/core';

import "jquery";

@Component({
  selector: 'app-slide-carousel',
  templateUrl: './slide-carousel.component.html',
  styleUrls: ['./slide-carousel.component.scss'],
})
export class SlideCarouselComponent {
  slides = [
    { img: '../../../assets/images/offres online1 1.png' },
    { img: '../../../assets/images/polydesign (2) 1.png' },
    { img: '../../../assets/images/Logo_UHIIC-removebg-preview 1.png' },
    { img: 'http://placehold.it/350x150/666666' },
    { img: 'http://placehold.it/350x150/666666' },
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // addSlide() {
  //   this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  // }

  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

  // slickInit(e: any) {
  //   console.log('slick initialized');
  // }

  // breakpoint(e: any) {
  //   console.log('breakpoint');
  // }

  // afterChange(e: any) {
  //   console.log('afterChange');
  // }

  // beforeChange(e: any) {
  //   console.log('beforeChange');
  // }
}
