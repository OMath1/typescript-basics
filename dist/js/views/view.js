export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error("Erro de tipo");
        }
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
