import { addProject, addToDo, expandToDo, removeToDo, switchProject } from "./buttonLogic.js";

const options = { capture : true, };

const addProjectButton = document.getElementById("add-project");
const sidebarElement = document.getElementById("sidebar");
const addToDoButton = document.getElementById("add-to-do");
const mainElement = document.getElementById("main");

addProjectButton.addEventListener("click", function() {addProject(sidebarElement); addProjectSwitches();});
addToDoButton.addEventListener("click", function () {addToDo(mainElement); addExpandButtons(); addDoneButtons();});


const addExpandButtons = function () {
    let toDoElements = document.getElementsByClassName("to-do");
    let elem;
    for (elem of toDoElements) {
        elem.replaceWith(elem.cloneNode(true));
    }

    toDoElements = document.getElementsByClassName("to-do");
    for (elem of toDoElements) {
        elem.addEventListener("click", function () {expandToDo();}, options);
    }
}

const addDoneButtons = function () {
    let doneButtons = document.getElementsByTagName("button");
    let btn;
    for (btn of doneButtons) {
        btn.replaceWith(btn.cloneNode(true));
    }

    doneButtons = document.getElementsByTagName("button");
    for (btn of doneButtons) {
        btn.addEventListener("click", removeToDo);
    }
}

const projectSwitch = function (mainElement) {
    switchProject(mainElement);
    let addToDoButtonNew = document.getElementById("add-to-do");
    addToDoButtonNew.addEventListener("click", function () {addToDo(mainElement); addExpandButtons(); addDoneButtons();});
    addExpandButtons();
    addDoneButtons();
}

const addProjectSwitches = function () {
    let projectElements = document.getElementsByClassName("project");
    let elem;
    for (elem of projectElements) {
        elem.replaceWith(elem.cloneNode(true));
    }

    projectElements = document.getElementsByClassName("project");
    for (elem of projectElements) {
        elem.addEventListener("click", function () {projectSwitch(mainElement);});
    }
}

addExpandButtons();
addDoneButtons();
addProjectSwitches();