import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { DiasDaSemana } from "./enum/dias-da-semana-enum.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw new Error("Null Error");
}
