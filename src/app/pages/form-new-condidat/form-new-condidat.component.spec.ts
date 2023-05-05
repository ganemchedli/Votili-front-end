import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewCondidatComponent } from './form-new-condidat.component';

describe('FormNewCondidatComponent', () => {
  let component: FormNewCondidatComponent;
  let fixture: ComponentFixture<FormNewCondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewCondidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
