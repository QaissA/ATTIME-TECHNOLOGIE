import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';


@Component({
  selector: 'app-hero-section-dff',
  templateUrl: './hero-section-dff.component.html',
  styleUrls: ['./hero-section-dff.component.scss']
})
export class HeroSectionDffComponent implements OnInit{
  ngOnInit(): void {
    gsap.from('.heroSection__content-title h1', {
      opacity: 0,
      x: 150,
      duration: 1.5
    });
    gsap.from('.heroSection__content-text p', {
      opacity: 0,
      x: 250,
      duration: 2
    });
  }

}
