const addProject = function (sidebarElement) {
    let projectName = prompt("Enter project name.");
    const newDiv = document.createElement("div");
    newDiv.classList.add("project");
    newDiv.textContent = projectName;
    sidebarElement.appendChild(newDiv);
}

const addToDo = function (mainElement) {
    
}

export {addProject, addToDo};
