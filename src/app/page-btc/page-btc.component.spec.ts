import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBTCComponent } from './page-btc.component';

describe('PageBTCComponent', () => {
  let component: PageBTCComponent;
  let fixture: ComponentFixture<PageBTCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBTCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
