import { saveNotes } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js"


const contentTarget = document.querySelector(".noteForm")
export const NoteForm = () => {
    contentTarget.innerHTML =
    `
    <fieldset>
    <legend>Note Entry Box</legend>
    <label for="noteDate">Date of Note</label>
    <input type="date" name="noteDate" id="noteDate"/>
    <label for="noteEntry">Note Entry</label>
    <textarea name="noteEntry" id="noteEntry"></textarea>
    <label for="noteSuspect">Suspect Name</label>
    <input type="text" name="noteSuspect" id="noteSuspect"/>
    </fieldset>
<button id="saveNote">Save Note</button>
    `
}
// the avobe is a form where new data will be entered.
//below is a function to send the new data to the JSON server
    contentTarget.addEventListener("click", clickEvent => {
         if (clickEvent.target.id === "saveNote") {
            let entryText = document.querySelector(".noteForm").value
             console.dir(entryText)
// Make a new object representation of a note
             const newNote = {
 // Key/value pairs here
     noteText: entryText    
                }
     console.log(newNote)
  // Change API state and application state
    saveNotes(newNote)
    .then(NoteList)
    // Refresh your list of notes once you've saved your new one
         }
     })