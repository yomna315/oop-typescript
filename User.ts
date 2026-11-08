// 1. Base Class – User (1 Mark)
// Create a class called User. The class should contain the following properties:
// • Id (number)
// • name (String)
// • email(String)
// • Password (String)
// • Phone (String)
// • age (Number ) (Must be between 18 and 60)
// Requirements:  Use appropriate access modifiers (public, private, protected).  Create a method called displayInfo()that prints the user's information
import { NoteBook } from "./NoteBook.js";

export class User {
  public Id: number;
  public name: String;
  public email: String;
  private _Password: String;
  protected Phone: String;
  private _age: Number;
  public notebooks: NoteBook[] = [];

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number,
  ) {
    this.Id = id;
    this.name = name;
    this.email = email;
    this._Password = password;
    this.Phone = phone;

    if (age >= 18 && age <= 60) {
      this._age = age;
    } else {
      throw new Error("Age must be between 18 and 60");
    }
  }
  public displayInfo(): void {
    console.log(`ID: ${this.Id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Phone: ${this.Phone}`);
    console.log(`Age: ${this._age}`);
  }
  public addNotebook(notebook: NoteBook): void {
    this.notebooks.push(notebook);
  }
}
