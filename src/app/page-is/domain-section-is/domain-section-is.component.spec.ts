import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainSectionIsComponent } from './domain-section-is.component';

describe('DomainSectionIsComponent', () => {
  let component: DomainSectionIsComponent;
  let fixture: ComponentFixture<DomainSectionIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainSectionIsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainSectionIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
