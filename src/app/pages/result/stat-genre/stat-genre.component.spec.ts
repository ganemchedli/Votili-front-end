import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatGenreComponent } from './stat-genre.component';

describe('StatGenreComponent', () => {
  let component: StatGenreComponent;
  let fixture: ComponentFixture<StatGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatGenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
