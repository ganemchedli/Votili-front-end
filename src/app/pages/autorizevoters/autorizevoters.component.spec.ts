import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizevotersComponent } from './autorizevoters.component';

describe('AutorizevotersComponent', () => {
  let component: AutorizevotersComponent;
  let fixture: ComponentFixture<AutorizevotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorizevotersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorizevotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
