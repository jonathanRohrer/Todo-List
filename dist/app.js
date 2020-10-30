"use strict";
const taskInput = document.querySelector("#taskInput");
const nextButton = document.querySelector("#next");
const ul = document.querySelector("ul");
// eventlistener for the main (next)-button after taskName input
nextButton.addEventListener("click", () => {
    if (taskInput) {
        // just for typescript to make sure the DOM-element is there
        if (taskInput.value) {
            createNewTask();
        }
    }
});
taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (taskInput) {
            // just for typescript to make sure the DOM-element is there
            if (taskInput.value) {
                createNewTask();
            }
        }
    }
});
const createNewTask = () => {
    // display task
    const taskName = taskInput.value.slice(); //store task name
    taskInput.value = "";
    const divTaskMenu = document.createElement("div");
    divTaskMenu.innerHTML = `<i class="fas fa-pen"></i> </i> <i class="fas fa-check"></i>`;
    divTaskMenu.classList.add("taskMenu");
    const divTask = document.createElement("div");
    divTask.innerHTML = taskName;
    const editInput = document.createElement("input");
    editInput.value = taskName;
    editInput.classList.add("is-hidden");
    const li = document.createElement("li");
    li.appendChild(divTask);
    li.appendChild(editInput);
    li.appendChild(divTaskMenu);
    ul.appendChild(li);
    editTask();
    deleteTask();
};
const editTask = () => {
    const editTaskList = document.querySelectorAll(".fa-pen");
    editTaskList.forEach((el) => {
        el.addEventListener("click", function (e) {
            const listItem = this.parentNode.parentNode;
            const editInput = listItem.querySelector("input");
            editInput.classList.remove("is-hidden");
            editInput.select();
            const divTask = listItem.querySelector("div");
            divTask.classList.add("is-hidden");
            const divMenu = listItem.querySelector(".taskMenu");
            divMenu.classList.add("is-hidden");
            editInput.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    editInput.classList.add("is-hidden");
                    divTask.classList.remove("is-hidden");
                    divMenu.classList.remove("is-hidden");
                    divTask.innerHTML = editInput.value;
                }
            });
        });
    });
};
const deleteTask = () => {
    const deleteTaskList = document.querySelectorAll(".fa-check");
    deleteTaskList.forEach(function (el) {
        el.addEventListener("click", function (e) {
            const listItem = this.parentNode.parentNode;
            ul.removeChild(listItem);
        });
    });
};
const darkModeSwitch = document.querySelector("#darkModeSwitch");
const body = document.querySelector("body");
const root = document.querySelector("html");
const todoTitle = document.querySelector("#todoTitle");
const card = document.querySelector(".card");
const darkModeDiv = document.querySelector("#darkModeDiv");
darkModeSwitch.addEventListener("click", () => {
    root.classList.toggle("lightMode");
    body.classList.toggle("lightMode");
    taskInput.classList.toggle("lightMode");
    ul.classList.toggle("lightMode");
    todoTitle.classList.toggle("lightMode");
    card.classList.toggle("lightMode");
    darkModeDiv.classList.toggle("lightMode");
});
const quoteText = document.querySelector("#quoteText");
const quoteAuthor = document.querySelector("#quoteAuthor");
fetch("https://type.fit/api/quotes")
    .then(function (response) {
    return response.json();
})
    .then(function (data) {
    let index = Math.floor(Math.random() * 1644);
    quoteText.innerHTML = data[index].text;
    quoteAuthor.innerHTML = data[index].author;
    setInterval(() => {
        index = Math.floor(Math.random() * 1644);
        quoteText.innerHTML = data[index].text;
        quoteAuthor.innerHTML = data[index].author;
    }, 10000);
});
//# sourceMappingURL=app.js.map