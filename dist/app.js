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
// // show/hide editIcons on hover
// ul.addEventListener("mouseover", (e) => {
//   const target = e.target as HTMLLIElement;
//   const taskMenu = target.querySelector(".taskMenu")!;
//   taskMenu.classList.remove("is-hidden");
// });
// ul.addEventListener("mouseout", (e) => {
//   const target = e.target as HTMLLIElement;
//   const taskMenu = target.querySelector(".taskMenu")!;
//   taskMenu.classList.add("is-hidden");
// });
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
//# sourceMappingURL=app.js.map