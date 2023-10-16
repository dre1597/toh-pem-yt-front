import { Component, inject } from '@angular/core';

import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  protected readonly messagesService = inject(MessagesService);
}
