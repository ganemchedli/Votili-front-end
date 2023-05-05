import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectiondetailsComponent } from './electiondetails.component';

describe('ElectiondetailsComponent', () => {
  let component: ElectiondetailsComponent;
  let fixture: ComponentFixture<ElectiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectiondetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
