import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIsComponent } from './footer-is.component';

describe('FooterIsComponent', () => {
  let component: FooterIsComponent;
  let fixture: ComponentFixture<FooterIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterIsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
