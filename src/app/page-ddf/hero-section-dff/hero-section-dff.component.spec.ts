import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionDffComponent } from './hero-section-dff.component';

describe('HeroSectionDffComponent', () => {
  let component: HeroSectionDffComponent;
  let fixture: ComponentFixture<HeroSectionDffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSectionDffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectionDffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
