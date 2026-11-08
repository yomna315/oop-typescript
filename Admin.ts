import { User } from "./User.js";

export class Admin extends User {
  public manageNotes(): void {
    console.log("Admin is managing notes");
  }
}
