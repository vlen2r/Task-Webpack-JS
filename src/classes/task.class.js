export class Task {

    static fromJson({ id, description, completed, create_at }) {
        const tempTask = new Task(description);
        tempTask.id = id;
        tempTask.completed = completed;
        tempTask.create_at = create_at;
    }

    constructor(description) {
        this.id = new Date().getTime();
        this.description = description;
        this.completed = false;
        this.create_at = new Date();
    }
}