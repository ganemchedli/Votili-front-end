import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewVotantComponent } from './form-new-votant.component';

describe('FormNewVotantComponent', () => {
  let component: FormNewVotantComponent;
  let fixture: ComponentFixture<FormNewVotantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewVotantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewVotantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
