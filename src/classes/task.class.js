export class Task {
    constructor(descripcion) {
        this.id = new Date().getTime();
        this.descripcion = descripcion;
        this.realizado = false;
        this.create_at = new Date();
    }
}