import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatAgeComponent } from './stat-age.component';

describe('StatAgeComponent', () => {
  let component: StatAgeComponent;
  let fixture: ComponentFixture<StatAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
