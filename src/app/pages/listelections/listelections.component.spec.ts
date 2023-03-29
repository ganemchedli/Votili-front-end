import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListelectionsComponent } from './listelections.component';

describe('ListelectionsComponent', () => {
  let component: ListelectionsComponent;
  let fixture: ComponentFixture<ListelectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListelectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListelectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
