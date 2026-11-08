import { Note } from "./Note.js";

export class NoteBook {
  private notes: Note[] = [];

  public addNote(note: Note): void {
    this.notes.push(note);
  }

  public removeNote(noteId: number): void {
    this.notes = this.notes.filter((note) => note.id !== noteId);
  }

  public getAllNotes(): Note[] {
    return this.notes;
  }
}
