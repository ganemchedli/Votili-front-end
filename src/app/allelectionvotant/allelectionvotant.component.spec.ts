import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllelectionvotantComponent } from './allelectionvotant.component';

describe('AllelectionvotantComponent', () => {
  let component: AllelectionvotantComponent;
  let fixture: ComponentFixture<AllelectionvotantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllelectionvotantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllelectionvotantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
