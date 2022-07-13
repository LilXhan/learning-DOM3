
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `${this.nombre} dice hola`;
  }
  
  get getNombre(){
    return this.nombre
  }

  set setNombre(nombre){
    this.nombre = nombre
  }
  
  static probarSaludo(nombre) {
    return `${nombre} probando saludo`
  }
}
// Extends
// los getters y setters nunca se llaman con parentesis
class Estudiante extends Persona {
  #notas = [];
  set setNotas(nota){
    this.#notas.push(nota)
  }
  get getNotas(){
    return this.#notas
  }
}
const pablito = new Estudiante('Pablito', 16)

pablito.setNotas = 7;
pablito.setNotas = 10;
pablito.setNotas = 15;

console.log(pablito.getNotas)

