import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDdfComponent } from './navbar-ddf.component';

describe('NavbarDdfComponent', () => {
  let component: NavbarDdfComponent;
  let fixture: ComponentFixture<NavbarDdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
