import { Component } from '@angular/core';

@Component({
  selector: 'app-references-ddf',
  templateUrl: './references-ddf.component.html',
  styleUrls: ['./references-ddf.component.scss']
})
export class ReferencesDdfComponent {
  slides = [
    { img: '../../../assets/images/barid cash.png' },
    { img: '../../../assets/images/polydesign (2) 1.png' },
    { img: '../../../assets/images/uh2c.png' },
    { img: '../../../assets/images/TGR.png' },
    { img: '../../../assets/images/barid cash.png' },
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

}
