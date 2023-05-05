import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCodeComponent } from './stat-code.component';

describe('StatCodeComponent', () => {
  let component: StatCodeComponent;
  let fixture: ComponentFixture<StatCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
