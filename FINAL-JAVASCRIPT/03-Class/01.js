// class 

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return `${this.nombre} dice hola`;
  }
}

const juanito = new Persona("Juanito")
const pedrito = new Persona("Pedrito")
console.log(juanito)
console.log(pedrito.saludar())
