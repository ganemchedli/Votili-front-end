import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailInvitationComponent } from './mail-invitation.component';

describe('MailInvitationComponent', () => {
  let component: MailInvitationComponent;
  let fixture: ComponentFixture<MailInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailInvitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
