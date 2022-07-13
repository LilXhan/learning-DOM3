// Prototipos de objetos

// Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan caracteristicas entre si.


function Persona(nombre){
  this.nombre = nombre;
  this.saludar = function() {
    return `${this.nombre} dice hola`
  }
  // this.saludarIngles = function() {
  // return `${this.nombre} says hi`
  // }
}

Persona.prototype.saludarIngles = function () {
  return `${this.nombre} says hi`
}

const juanito = new Persona("Juanito");
const pedrito = new Persona("Pedrito");
console.log(juanito);
console.log(pedrito);
console.log(juanito.saludar()); // consola: Juanito dice hola
console.log(pedrito.saludarIngles()); // consola: Pedrito dice hola

