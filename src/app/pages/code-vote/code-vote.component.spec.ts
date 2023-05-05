import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeVoteComponent } from './code-vote.component';

describe('CodeVoteComponent', () => {
  let component: CodeVoteComponent;
  let fixture: ComponentFixture<CodeVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeVoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
