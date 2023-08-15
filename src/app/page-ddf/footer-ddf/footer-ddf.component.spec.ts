import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDdfComponent } from './footer-ddf.component';

describe('FooterDdfComponent', () => {
  let component: FooterDdfComponent;
  let fixture: ComponentFixture<FooterDdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterDdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
