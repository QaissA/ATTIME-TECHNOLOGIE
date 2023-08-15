import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionIsComponent } from './hero-section-is.component';

describe('HeroSectionIsComponent', () => {
  let component: HeroSectionIsComponent;
  let fixture: ComponentFixture<HeroSectionIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSectionIsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectionIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
