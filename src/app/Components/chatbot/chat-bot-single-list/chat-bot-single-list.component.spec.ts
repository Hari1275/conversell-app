import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBotSingleListComponent } from './chat-bot-single-list.component';

describe('ChatBotSingleListComponent', () => {
  let component: ChatBotSingleListComponent;
  let fixture: ComponentFixture<ChatBotSingleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatBotSingleListComponent]
    });
    fixture = TestBed.createComponent(ChatBotSingleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
