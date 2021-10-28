/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { CrimList } from "../criminals/crimlist.js"
import { getConvictions, useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    
    getConvictions()
    .then(() => {
    const convictions = useConvictions()
    render(convictions)
})
}
const render = convictionsCollection => {       
        
          
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map((crimeObject) => {
                const crimeName = crimeObject.name
                return `<option>${crimeName}</option>`
            })}
        </select>
    `
}


// his won't throw an error, but it will fire any time there's a change event anywhere in the main container
const eventHub = document.querySelector("body")
eventHub.addEventListener("change", (eventObject) => {


    if(eventObject.target.id === "crimeSelect"){
        console.log("You selected something from the crime dropdown")
        console.log("This is the crime that was selected: ", eventObject.target.value)
        CrimList(eventObject.target.value)
        //event that is listening for is crimeSelect and this line of code lets it know to only pull things from the CrimList that match the value that was selcted
    }
})

