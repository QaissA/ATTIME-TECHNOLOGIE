import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarIsComponent } from './navbar-is.component';

describe('NavbarIsComponent', () => {
  let component: NavbarIsComponent;
  let fixture: ComponentFixture<NavbarIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarIsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
