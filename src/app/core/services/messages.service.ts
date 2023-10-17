import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages: string[] = [];

  public add(message: string): void {
    this.messages.push(message);
  }

  public clear(): void {
    this.messages = [];
  }

  public getMessages(): string[] {
    return this.messages.slice();
  }
}
