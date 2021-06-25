import { Task } from "../classes";
import { taskList } from "../index";

const divTaskList = document.querySelector('.task-list');
const inputTask = document.querySelector('.new-task');

export const createTaskHTML = (task) => {

    const div = document.createElement('div');
    div.innerHTML =
        `<li class="${(task.completed) ? 'completed' : ''}" data-id="${task.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${(task.completed) ? 'checked' : ''}>
                <label>${task.description}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>`;

    divTaskList.append(div.firstElementChild);
    return div;
}

//Events
inputTask.addEventListener('keyup', (event) => {
    // console.log(event); // Mostrar informacion del evento
    if ((event.keyCode === 13) && (inputTask.value.length > 0)) { //Leemos el key code de tecla "ENTER"
        const tmpTask = new Task(inputTask.value);
        taskList.addTask(tmpTask);
        createTaskHTML(tmpTask);
        inputTask.value = ''; //Lo hacemos para dejar limpio el input
    }
});
divTaskList.addEventListener('click', (event) => {
    console.log(event.target);
});