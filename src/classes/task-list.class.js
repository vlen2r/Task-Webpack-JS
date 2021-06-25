import { Task } from "./task.class";
export class TaskList {

    constructor() {
        this.loadLocalStorage();
    }

    addTask(task) {
        this.list.push(task);
        this.saveLocalStorage();
    }
    deleteTask(id) {
        this.list = this.list.filter(task => task.id != id);
        this.saveLocalStorage();
    }
    markCompleted(id) {
        for (const element of this.list) {
            if (element.id == id) {
                element.completed = !element.completed;
                saveLocalStorage();
                break;
            }
        }
    }
    deleteAllCompleted() {
        this.list = this.list.filter(task => !task.completed);
        saveLocalStorage();
    }

    saveLocalStorage() {
        localStorage.setItem('task', JSON.stringify(this.list));
    }
    loadLocalStorage() {
        this.list = (localStorage.getItem('task')) ? JSON.parse(localStorage.getItem('task')) : [];
        this.list = this.list.map(obj => Task.fromJson(obj));
    }
}