import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainSectionDdfComponent } from './domain-section-ddf.component';

describe('DomainSectionDdfComponent', () => {
  let component: DomainSectionDdfComponent;
  let fixture: ComponentFixture<DomainSectionDdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainSectionDdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainSectionDdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
