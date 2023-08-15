import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesIsComponent } from './references-is.component';

describe('ReferencesIsComponent', () => {
  let component: ReferencesIsComponent;
  let fixture: ComponentFixture<ReferencesIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencesIsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencesIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
