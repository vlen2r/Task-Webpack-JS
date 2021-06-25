import { Task } from "../classes";
import { taskList } from "../index";

const divTaskList = document.querySelector('.task-list');
const inputTask = document.querySelector('.new-task');
const btnDeleteAllCompleted = document.querySelector('.clear-completed');
const divFilters = document.querySelector('.filters');
const filtersList = document.querySelectorAll('.filtro');
const taskCountPending = document.querySelector('.task-count');

export const createTaskHTML = (task) => {

    const div = document.createElement('div');
    div.innerHTML =
        `<li class="${(task.completed) ? 'completed' : ''}" data-id="${task.id}">
            <div class="view">
                <input id="check-task" class="toggle" type="checkbox" ${(task.completed) ? 'checked' : ''}>
                <label>${task.description}</label>
                <button id="destroy-task" class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>`;

    divTaskList.append(div.firstElementChild);
    return div;
}
export const refreshTaskCountPending = () => {
    taskCountPending.firstElementChild.innerText = (taskList.getCountTaskPending()) ? taskList.getCountTaskPending() : 0;
};

//Events
inputTask.addEventListener('keyup', (event) => {
    // console.log(event); // Mostrar informacion del evento
    if ((event.keyCode === 13) && (inputTask.value.length > 0)) { //Leemos el key code de tecla "ENTER"
        const tmpTask = new Task(inputTask.value);
        taskList.addTask(tmpTask);
        createTaskHTML(tmpTask);
        inputTask.value = ''; //Lo hacemos para dejar limpio el input
    }
    refreshTaskCountPending();
});
divTaskList.addEventListener('click', (event) => {
    const eventId = event.target.id;
    if (!eventId) { return; }

    const taskHtml = event.target.parentElement.parentElement;
    const taskId = taskHtml.getAttribute('data-id');

    if (eventId == 'check-task') {
        taskList.markCompleted(taskId);
        taskHtml.classList.toggle('completed');
    } else if (eventId == 'destroy-task') {
        taskList.deleteTask(taskId);
        divTaskList.removeChild(taskHtml);
    }
    refreshTaskCountPending();
});
btnDeleteAllCompleted.addEventListener('click', () => {
    taskList.deleteAllCompleted();
    for (let index = divTaskList.children.length - 1; index >= 0; index--) {
        const element = divTaskList.children[index];
        if (element.classList.contains('completed')) {
            divTaskList.removeChild(element);
        }
    }
});
divFilters.addEventListener('click', (event) => {
    // Revisamos que el evento sea: Pendientes/Completados
    const filterText = event.target.text;
    if (!filterText) { return; }

    // Le quitamos el estilo selected a los filtros,
    // y se lo asignamos unicamente al filtro actual
    filtersList.forEach(element => element.classList.remove('selected'));
    event.target.classList.add('selected');

    for (const element of divTaskList.children) {
        element.classList.remove('hidden');
        const completado = element.classList.contains('completed');
        switch (filterText) {
            case 'Pendientes':
                if (completado) {
                    element.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completado) {
                    element.classList.add('hidden');
                }
                break;
        }
    }
});