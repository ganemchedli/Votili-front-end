import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllelectionComponent } from './allelection.component';

describe('AllelectionComponent', () => {
  let component: AllelectionComponent;
  let fixture: ComponentFixture<AllelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
