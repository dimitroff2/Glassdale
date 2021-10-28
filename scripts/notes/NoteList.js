import {getNotes, useNotes } from "./NoteDataProvider.js"
import {Notes} from "./Note.js"

const contentTarget = document.querySelector(".PrintList")

export const NoteList = () => {
    getNotes()
    .then(() => {
  
      let NotesArray = useNotes();
  
      let noteHTML = "";
  
      NotesArray.forEach((singleNoteObj) => {
  
        noteHTML += Notes(singleNoteObj);
  
      });
  
      contentTarget.innerHTML = ` <h1>Notes</h1>  ${noteHTML}`
  
    });
  };

  document.querySelector("#notes-nav-link").addEventListener("click", () => {
    // invoke the function that prints the criminals
    NoteList()
  })