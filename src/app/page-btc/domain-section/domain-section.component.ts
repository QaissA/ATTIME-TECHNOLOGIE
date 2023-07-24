import { Component, HostListener, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-domain-section',
  templateUrl: './domain-section.component.html',
  styleUrls: ['./domain-section.component.scss'],
})
export class DomainSectionComponent implements OnInit {
  cards: any[] = [
    {
      id: 1,
      img: '../../../assets/images/domain_expertise-icon1.png',
      title: 'Stratégie & accompagnement projets numériques',
    },
    {
      id: 2,
      img: '../../../assets/images/domain_expertise-icon2.png',
      title: 'Innovation (Prototypage agile de solutions)',
    },
    {
      id : 3,
      img: '../../../assets/images/domain_expertise-icon3.png',
      title: 'Architecture (micro-services)',
    },
    {
      id : 4,
      img: '../../../assets/images/domain_expertise-icon4.png',
      title: 'Performance SI',
    },
  ];

private animated = false; 

  ngOnInit(): void {
  }
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
