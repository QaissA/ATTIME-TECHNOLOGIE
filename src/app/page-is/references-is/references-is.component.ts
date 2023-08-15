import { Component } from '@angular/core';

@Component({
  selector: 'app-references-is',
  templateUrl: './references-is.component.html',
  styleUrls: ['./references-is.component.scss']
})
export class ReferencesIsComponent {
  slides = [
    { img: '../../../assets/images/offresonline.png' },
    { img: '../../../assets/images/gemo 1.png' },
    { img: '../../../assets/images/uh2c.png' },
    { img: '../../../assets/images/kpmg 1.png' },
    { img: '../../../assets/images/DARKTRACE 1.png' },
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
