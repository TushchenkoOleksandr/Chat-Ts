import { makeAutoObservable } from "mobx";
import { IMessage } from "../types/types";

class Messages {
  messages: IMessage[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addMessage(message: IMessage) {
    this.messages = [...this.messages, message];
  }

  removeNewMessageIndicator() {
    this.messages = this.messages.filter((message) => message.sendler !== "hr");
  }
}

export default new Messages();
