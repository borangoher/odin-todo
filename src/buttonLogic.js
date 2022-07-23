const _elementsFromHtml = function (htmlString) {
    const template = document.createElement("template");
    template.innerHTML = htmlString.trim();
    return template.content;
}

const _nameGetter = function (elem) {
    return elem.textContent;
}

const addProject = function (sidebarElement) {
    const projectElements = document.getElementsByClassName("project");
    const projectNames = Array.from(projectElements).map(_nameGetter);
    let projectName = "";

    while (projectName === "" || projectNames.includes(projectName)) {
        projectName = prompt("Enter project name.");
    }

    const newDiv = document.createElement("div");
    newDiv.classList.add("project");
    newDiv.textContent = projectName;
    sidebarElement.appendChild(newDiv);
}

const addToDo = function (mainElement) {
    let toDoName = prompt("Enter to-do name.");
    let toDoDate = prompt("Enter to-do date.");
    let toDoDesc = prompt("Enter to-do description.");

    let htmlString = `<div class="to-do">
                        <p class="to-do-name">${toDoName}</p>
                        <p class="to-do-date">${toDoDate}</p>
                    </div>
                    <div class="expanded-to-do invisible">
                        <div class="expanded-to-do-line">
                            <p class="to-do-name">${toDoName}</p>
                            <p class="to-do-date">${toDoDate}</p>
                        </div>
                        <div class="expanded-to-do-line-2"></div>
                            <p class="to-do-desc">${toDoDesc}</p>
                            <button>Done</button>
                    </div>`;

    let elements = _elementsFromHtml(htmlString);
    mainElement.appendChild(elements.firstElementChild);
    mainElement.appendChild(elements.lastElementChild);
}

const expandToDo = function () {
    const expandedElements = document.getElementsByClassName("expanded-to-do");
    let elem;
    for (elem of expandedElements) {
        if (!(elem.classList.contains("invisible"))) {
            elem.classList.add("invisible");
        }
    }

    event.currentTarget.nextElementSibling.classList.remove("invisible");
}

const removeToDo = function () {
    const doneButton = event.currentTarget;
    doneButton.parentElement.previousElementSibling.remove();
    doneButton.parentElement.remove();
}

const switchProject = function (mainElement) {
    const currentProject = document.getElementsByClassName("current")[0];
    localStorage.setItem(currentProject.textContent, mainElement.innerHTML);

    const projectElements = document.getElementsByClassName("project");
    let elem;
    for (elem of projectElements) {
        elem.classList.remove("current");
    }

    event.currentTarget.classList.add("current");
    if (localStorage.getItem(event.currentTarget.textContent) == undefined) {
        mainElement.innerHTML = `<div id="add-to-do">+ To-Do</div>`;
    } else {
        mainElement.innerHTML = localStorage.getItem(event.currentTarget.textContent);
    }
}

export { addProject, addToDo, expandToDo, removeToDo, switchProject };
