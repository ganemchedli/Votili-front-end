import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeresultComponent } from './realtimeresult.component';

describe('RealtimeresultComponent', () => {
  let component: RealtimeresultComponent;
  let fixture: ComponentFixture<RealtimeresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealtimeresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealtimeresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
