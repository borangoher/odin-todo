import addProject from "./buttonLogic.js"

const addProjectButton = document.getElementById("add-project");
const sidebarElement = document.getElementById("sidebar")
addProjectButton.addEventListener("click", function() {addProject(sidebarElement);});