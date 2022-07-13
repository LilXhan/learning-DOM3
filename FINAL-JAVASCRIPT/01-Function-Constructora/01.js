// POO

// La pogramacion oriantada a objetos es un paradigma de pogramacion en el que se crean objetos para la manipulacion de datos y donde, por lo general cada
// objeto ofrece una funcionalidad especial

// funcion constructura = igual a una plantilla = class


function Persona(nombre){
  this.nombre = nombre;
  this.saludar = function() {
    return `${this.nombre} dice hola`
  }
}
// new -> se usa para indicarle al navegador que queremos usar una nueva instancia del objeto
const juanito = new Persona("Juanito");
const pedrito = new Persona("Pedrito");
console.log(juanito);
console.log(pedrito);
console.log(juanito.saludar()); // consola: Juanito dice hola
console.log(pedrito.saludar()); // consola: Pedrito dice hola

// tambien existe otro metodo para crear una funcion constructura:

const personaUno = new Object();

personaUno.nombre = "Ignacio";
personaUno.saludar = function() {
  return `${this.nombre} dice hola`;
};

console.log(personaUno);
console.log(personaUno.nombre);
console.log(personaUno);

