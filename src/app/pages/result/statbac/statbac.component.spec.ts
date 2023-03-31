import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatbacComponent } from './statbac.component';

describe('StatbacComponent', () => {
  let component: StatbacComponent;
  let fixture: ComponentFixture<StatbacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatbacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatbacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
