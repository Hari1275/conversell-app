import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat-bot-list',
  templateUrl: './chat-bot-list.component.html',
  styleUrls: ['./chat-bot-list.component.scss'],
})
export class ChatBotListComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  searchText: any;
  previousDay = new Date();

  conversations = [
    {
      name: 'Shelby Goode',
      time: new Date().toISOString(),
      latestMessage: 'Hi there!!',
      latestMessageRead: false,
      me: true,

      messages: [
        {
          id: 1,
          body: 'Lorem Ipsum is simply dummy text of the printing ',
          time: new Date().toISOString(),
          me: true,
          text: true,
          read: true,
          type: '',
        },
        {
          id: 2,
          body: 'How are you?',
          time: new Date().toISOString(),
          me: false,
          type: '',
        },
        {
          id: 3,
          body: 'I am fine thanks',
          time: new Date().toISOString(),
          me: true,
          image: '../../assets/images/Rectangle 171.png',
        },

        {
          id: 4,
          body: 'Glad to hear that',
          time: new Date().toISOString(),
          me: false,
        },
        {
          id: 5,
          body: '',
          time: new Date().toISOString(),
          me: false,
          image: '../../assets/images/Rectangle 171.png',
        },
      ],
    },
    {
      name: 'Robert Bacins',
      time: new Date().toISOString(),
      latestMessage: 'wow',
      latestMessageRead: true,
      me: false,

      messages: [
        {
          id: 1,
          body: 'Hello world',
          time: new Date().toISOString(),
          me: true,
        },
        {
          id: 2,
          body: 'How are you?',
          time: new Date().toISOString(),
          me: false,
        },
        {
          id: 3,
          body: 'I am fine thanks',
          time: new Date().toISOString(),
          me: true,
        },
        {
          id: 4,
          body: 'Glad to hear that',
          time: new Date().toISOString(),
          me: false,
        },
      ],
    },
    {
      name: 'John Carilo',
      time: new Date().toISOString(),
      latestMessage: 'I am fine',
      latestMessageRead: false,
      me: true,

      messages: [
        {
          id: 1,
          body: 'Hello world',
          time: new Date().toISOString(),
          me: true,
        },
        {
          id: 2,
          body: 'How are you?',
          time: new Date().toISOString(),
          me: false,
        },
        {
          id: 3,
          body: 'I am fine thanks',
          time: new Date().toISOString(),
          me: true,
        },
        {
          id: 4,
          body: 'Glad to hear that',
          time: new Date().toISOString(),
          me: false,
        },
      ],
    },
    {
      name: 'Adriene Watson',
      time: new Date().toISOString(),
      latestMessage: 'lol',
      latestMessageRead: true,
      me: true,
      messages: [
        {
          id: 1,
          body: 'Hello world',
          time: new Date().toISOString(),
          me: true,
          read: true,
        },
        {
          id: 2,
          body: 'How are you?',
          time: new Date().toISOString(),
          me: false,
          read: false,
        },
        {
          id: 3,
          body: 'I am fine thanks',
          time: new Date().toISOString(),
          me: true,
          read: false,
        },
        {
          id: 4,
          body: 'Glad to hear that',
          time: new Date().toISOString(),
          me: false,
          read: false,
        },
      ],
    },
    {
      name: 'Jhon Deo',
      time: new Date().toISOString(),
      latestMessage: 'Alright',
      latestMessageRead: false,
      me: true,
      messages: [
        {
          id: 1,
          body: 'Hello world',
          time: new Date().toISOString(),
          me: true,
        },
        {
          id: 2,
          body: 'How are you?',
          time: new Date().toISOString(),
          me: false,
        },
        {
          id: 3,
          body: 'I am fine thanks',
          time: new Date().toISOString(),
          me: true,
        },
        {
          id: 4,
          body: 'Glad to hear that',
          time: new Date().toISOString(),
          me: false,
        },
      ],
    },
    {
      name: 'Mark Ruffalo',
      time: new Date().toISOString(),
      latestMessage: "Let's go",
      latestMessageRead: false,
      me: true,
      messages: [
        {
          id: 1,
          body: 'Hello world',
          time: new Date().toISOString(),
          me: true,
        },
        {
          id: 2,
          body: 'How are you?',
          time: new Date().toISOString(),
          me: false,
        },
        {
          id: 3,
          body: 'I am fine thanks',
          time: new Date().toISOString(),
          me: true,
        },
        {
          id: 4,
          body: 'Glad to hear that',
          time: new Date().toISOString(),
          me: false,
        },
      ],
    },
    {
      name: 'Bethany Jackson',
      time: new Date().toISOString(),
      latestMessage: 'I see',
      latestMessageRead: true,
      me: true,

      messages: [
        {
          id: 1,
          body: 'Hello world',
          time: new Date().toISOString(),
          me: true,
        },
        {
          id: 2,
          body: 'How are you?',
          time: new Date().toISOString(),
          me: false,
        },
        {
          id: 3,
          body: 'I am fine thanks',
          time: new Date().toISOString(),
          me: true,
        },
        {
          id: 4,
          body: 'Glad to hear that',
          time: new Date().toISOString(),
          me: false,
        },
      ],
    },
  ];

  get filteredConversations() {
    return this.conversations.filter((conversation) => {
      return (
        conversation.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        conversation.latestMessage
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      );
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
