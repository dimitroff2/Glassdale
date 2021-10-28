import { Officer } from "./Officer.js";
import { getOfficers, useOfficers } from "./Officerdataprovider.js";

const contentTarget = document.querySelector(".PrintList")

export const OfficerList = () => {
  getOfficers()
  .then(() => {

    let officersArray = useOfficers();

    let officerHTML = "";

    officersArray.forEach((singleOfficerObj) => {

      officerHTML += Officer(singleOfficerObj);

    });

    contentTarget.innerHTML = `<h1>Officers</h1> ${officerHTML} `

  });
};

document.querySelector("#officers-nav-link").addEventListener(
  "click", () => {
    // invoke the function that prints the criminals
    console.log(OfficerList())
  })