import { makeAutoObservable } from "mobx";

class CurrentUser {
  name: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  changeCurrentUser(name: string) {
    this.name = name;
  }
}

export default new CurrentUser();
