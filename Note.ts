import { User } from "./User.js";

export class Note {
  public id: number;
  public title: string;
  public content: string;
  public userId: User;

  constructor(id: number, title: string, content: string, userId: User) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.userId = userId;
  }

  public preview(): string {
    return this.content.substring(0, 30) + "...";
  }
}
