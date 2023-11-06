import Hijo from "./hijo.js";

const button = document.getElementById("saludarBoton");
button.addEventListener("click", saludarDesdeBoton);

const button2 = document.getElementById("saludarBoton2");
button2.addEventListener("click", saludarDesdeBoton2);

function saludarDesdeBoton() {
  const hijoInstance = new Hijo("Hijo1", 25, "Programador");
  hijoInstance.saludarHijo();
}
function saludarDesdeBoton2() {
  const hijoInstance2 = new Hijo("Hijo2", 25, "Futbolista");
  hijoInstance2.saludarHijo();
}
