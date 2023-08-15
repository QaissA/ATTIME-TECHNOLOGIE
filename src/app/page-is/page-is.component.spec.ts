import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIsComponent } from './page-is.component';

describe('PageIsComponent', () => {
  let component: PageIsComponent;
  let fixture: ComponentFixture<PageIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageIsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
