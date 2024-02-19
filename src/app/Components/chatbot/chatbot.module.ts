import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatbotRoutingModule } from './chatbot-routing.module';
import { ChatbotComponent } from './chatbot.component';
import { SharedModuleModule } from 'src/app/Shared/shared-module/shared-module.module';
import { TopnavModule } from '../topnav/topnav.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { ChatBotListComponent } from './chat-bot-list/chat-bot-list.component';
import { ChatBotSingleListComponent } from './chat-bot-single-list/chat-bot-single-list.component';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { TimeSince } from 'src/app/Shared/pipes/timesince.pipe';

@NgModule({
  declarations: [
    ChatbotComponent,
    ChatBotListComponent,
    ChatBotSingleListComponent,
    TimeSince,
  ],
  imports: [
    CommonModule,
    ChatbotRoutingModule,
    SharedModuleModule,
    TopnavModule,
    SidenavModule,
    FormsModule,
    PickerModule,
  ],
})
export class ChatbotModule {}
