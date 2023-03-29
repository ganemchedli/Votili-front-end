import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewelectionComponent } from './newelection.component';

describe('NewelectionComponent', () => {
  let component: NewelectionComponent;
  let fixture: ComponentFixture<NewelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
