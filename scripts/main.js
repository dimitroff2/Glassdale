import {OfficerList} from "./officers/OfficerList.js"
import {CrimList} from './criminals/crimlist.js'
import { FacList } from "./facilities/faciitiesList.js"
import { NoteList } from "./notes/NoteList.js"
import { NoteForm } from "./notes/NoteForm.js"
import {ConvictionSelect} from "./convictions/ConvictionSelect.js"

ConvictionSelect()




NoteForm()



const darkModeButton = document.querySelector("#dark-mode")

darkModeButton.addEventListener("click", function(){
    // Select the entire body tag
    const bodyElement = document.querySelector("body")
  
    // Add a class
    bodyElement.classList.toggle("dark-background")
  })
