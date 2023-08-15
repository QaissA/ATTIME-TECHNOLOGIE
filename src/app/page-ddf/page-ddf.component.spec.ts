import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDdfComponent } from './page-ddf.component';

describe('PageDdfComponent', () => {
  let component: PageDdfComponent;
  let fixture: ComponentFixture<PageDdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
