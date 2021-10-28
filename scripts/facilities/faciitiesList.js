import { getFac, useFac } from "./facilitiesdataprovider.js";
import { FacCard } from "./facilitiesCard.js";


const contentFac = document.querySelector(".PrintList")

export const FacList = () => {
    getFac()
    .then(() => {
  
      let FacArray = useFac();
  
      let FacHTML = "";
  
      FacArray.forEach((singleFacObj) => {
  
        FacHTML += FacCard(singleFacObj);
  
      });
  
      contentFac.innerHTML = `<h1>Facilities</h1> ${FacHTML} `
  
    });
  };

  document.querySelector("#facilitiesnav-link").addEventListener("click", () => {
    // invoke the function that prints the criminals
    console.log(FacList())
    

    
        
})
