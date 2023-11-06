class Person {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`Mi nombre es ${this.nombre}`);
  }
}

export default Person;
