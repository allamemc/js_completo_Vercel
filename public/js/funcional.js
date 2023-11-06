console.log(`funcional html`);

const b2 = document.getElementById("boton2");
b2.addEventListener("click", () => {
  sumar(2);
});

const sumar = (a) => {
  return console.log(a + 1);
};
