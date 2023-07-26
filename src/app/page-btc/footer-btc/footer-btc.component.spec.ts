import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBtcComponent } from './footer-btc.component';

describe('FooterBtcComponent', () => {
  let component: FooterBtcComponent;
  let fixture: ComponentFixture<FooterBtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBtcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
