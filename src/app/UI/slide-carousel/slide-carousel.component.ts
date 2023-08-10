import { Component } from '@angular/core';

import "jquery";

@Component({
  selector: 'app-slide-carousel',
  templateUrl: './slide-carousel.component.html',
  styleUrls: ['./slide-carousel.component.scss'],
})
export class SlideCarouselComponent {
  slides = [
    { img: '../../../assets/images/barid cash.png' },
    { img: '../../../assets/images/DPEF.png' },
    { img: '../../../assets/images/offresonline.png' },
    { img: '../../../assets/images/polydes.png' },
    { img: '../../../assets/images/TGR.png' },
    { img: '../../../assets/images/uh2c.png' },
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
