{
    let tasks = [

    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const clearNewTaskInput = (newTaskInput) => {
        newTaskInput.focus();
        newTaskInput.value = "";
    };

    const removeTask = (index) => {
        tasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvent = () => {

        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
                removeTask(index);
            })
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");
        toggleDoneButtons.forEach((toggleDoneButtons, taskIndex) => {
            toggleDoneButtons.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            })
        });
    };

    const render = () => {
        let htmlString = "";

        for (const work of tasks) {
            htmlString += `
                <li class="task__element">
                    <button class="task__input js-done">${work.done ? "✔" : ""}</button>
                    <p class="task__label ${work.done ? "task__label--done" : ""}"> ${work.content} </p>
                    <button class="task__button js-remove">🗑</button>
                </li>        
          `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
        bindEvent();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskInput = document.querySelector(".js-newTask");
        const newTaskContent = newTaskInput.value.trim();

        if (newTaskContent === "") {
            newTaskInput.focus();
        } else {
            addNewTask(newTaskContent);
            clearNewTaskInput(newTaskInput);
        }
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit)

    };
    init();
}