import "./styles.css"; //Este include nos permite exportarlo al dist como un componente aparte y no en el main.js
import { createTaskHTML, refreshTaskCountPending } from "./js/components";
import { TaskList } from "./classes";

export const taskList = new TaskList();
taskList.list.forEach(createTaskHTML);
refreshTaskCountPending();