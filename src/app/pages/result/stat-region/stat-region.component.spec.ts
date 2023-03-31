import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatRegionComponent } from './stat-region.component';

describe('StatRegionComponent', () => {
  let component: StatRegionComponent;
  let fixture: ComponentFixture<StatRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
