import { Component, HostListener } from '@angular/core';

import { gsap } from 'gsap';


@Component({
  selector: 'app-domain-section-is',
  templateUrl: './domain-section-is.component.html',
  styleUrls: ['./domain-section-is.component.scss']
})
export class DomainSectionIsComponent {
  private animated = false; 
  
  cards: any[] = [
    {
      id: 1,
      img: '../../../assets/images/Virtual reality.png',
      title: 'Virtualisation technology',
    },
    {
      id: 2,
      img: '../../../assets/images/monitoring-system.png',
      title: 'Monitoring and control systems',
    },
    {
      id : 3,
      img: '../../../assets/images/ci-cd-Recycled.png',
      title: 'CI/CD Pipeline',
    },
    {
      id : 4,
      img: '../../../assets/images/container-Solution.png',
      title: 'Container Management Solutions',
    },
    {
      id : 5,
      img: '../../../assets/images/Cyber security.png',
      title: 'Cybersecurity & Artificial Intelligence',
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
