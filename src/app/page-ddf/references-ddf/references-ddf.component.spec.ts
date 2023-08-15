import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesDdfComponent } from './references-ddf.component';

describe('ReferencesDdfComponent', () => {
  let component: ReferencesDdfComponent;
  let fixture: ComponentFixture<ReferencesDdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencesDdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencesDdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
