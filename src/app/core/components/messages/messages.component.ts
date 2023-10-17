import { Component, inject } from '@angular/core';

import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent {
  protected readonly messagesService = inject(MessagesService);
}
