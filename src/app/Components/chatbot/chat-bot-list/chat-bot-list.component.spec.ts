import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBotListComponent } from './chat-bot-list.component';

describe('ChatBotListComponent', () => {
  let component: ChatBotListComponent;
  let fixture: ComponentFixture<ChatBotListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatBotListComponent]
    });
    fixture = TestBed.createComponent(ChatBotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
