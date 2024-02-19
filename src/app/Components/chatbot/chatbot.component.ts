import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent implements OnInit {
  conversation: any;

  ngOnInit(): void {}
  onConversationSelected(conversation: any) {
    console.log('conversation: ', conversation);
    this.conversation = conversation;
  }
}
