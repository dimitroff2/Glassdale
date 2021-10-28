import { getCrims, useCrims } from "./crimdataprovider.js";
import { Criminals } from "./CrimCard.js";


const contentCrim = document.querySelector(".PrintList")

export const CrimList = (crimeSelected) => {
    getCrims()
    .then(() => {
  
      let CriminalArray = useCrims();  
      let criminalHTML = "";

  // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
  if(crimeSelected){
    
    CriminalArray = CriminalArray.filter(singleCriminalInLoop => {
      return singleCriminalInLoop.conviction === crimeSelected
    // write the condition here to filter for criminals whose crime matches the convictionFilter value
    // the line above is to go through and filter the array through the convictions of the criminals to match the selected item crimeSelected
    })

  }
      CriminalArray.forEach((crimeSelected) => {
  
        criminalHTML += Criminals(crimeSelected);
  
      });
  
      contentCrim.innerHTML = ` <h1>Criminals</h1>  ${criminalHTML}`
  
    });
  };

  
  document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    // invoke the function that prints the criminals
    
    CrimList()
})