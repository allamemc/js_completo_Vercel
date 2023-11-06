import Person from "./script.js";

class Hijo extends Person {
  constructor(nombre, edad, trabajo) {
    super(nombre, edad);
    this.trabajo = trabajo;
  }
  saludarHijo() {
    console.log(`Soy ${this.nombre}  y trabajo en ${this.trabajo}`);
  }
}

export default Hijo;
