import { Component, HostListener } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-domain-section-ddf',
  templateUrl: './domain-section-ddf.component.html',
  styleUrls: ['./domain-section-ddf.component.scss']
})
export class DomainSectionDdfComponent {

  private animated = false; 
  
  cards: any[] = [
    {
      id: 1,
      img: '../../../assets/images/ddfDomain-icon1.png',
      title: 'Design thinking & building (UX/UI)',
    },
    {
      id: 2,
      img: '../../../assets/images/ddfDomain-icon2.png',
      title: 'Dev web & mobile custom',
    },
    {
      id : 3,
      img: '../../../assets/images/ddfDomain-icon3.png',
      title: 'Data Engineering, Science, Analyst & Ops',
    },
    {
      id : 4,
      img: '../../../assets/images/ddfDomain-icon4.png',
      title: 'Coaching et management de projets agiles',
    },
  ];

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const element = document.querySelector('.domainSection');
    if (element && !this.animated) {
      const elementPosition = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (elementPosition.top < windowHeight) {
        this.animateCards();
      }
    }
  }

  animateCards() {
    gsap.from('.card-animation-1', {
      x: -250,
      opacity: 0,
      stagger: 0.2,
      duration: 2,
    });
    gsap.from('.card-animation-2', {
      x: 250,
      opacity: 0,
      stagger: 0.2,
      duration: 2,
    });
    gsap.from('.card-animation-3', {
      x: -350,
      opacity: 0,
      stagger: 0.2,
      duration: 2,
    });
    gsap.from('.card-animation-4', {
      x: 350,
      opacity: 0,
      stagger: 0.2,
      duration: 2,
    });
    this.animated = true; // Set the flag to true to prevent repeating the animation
  }


}
