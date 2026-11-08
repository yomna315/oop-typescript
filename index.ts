import { Note } from "./Note.js";
import { NoteBook } from "./NoteBook.js";
import { User } from "./User.js";

const user = new User(
  1,
  "yomna ayman",
  "yomna@mail.com",
  "12346",
  "123456789",
  23,
);
user.displayInfo();
const note = new Note(1, "first Note", "note content", user);
const notebook = new NoteBook();
notebook.addNote(note);
user.addNotebook(notebook);
console.log(notebook.getAllNotes()[0].content);
