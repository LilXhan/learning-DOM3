const formulario = document.querySelector('#formulario');
// LIST
const listStudents = document.querySelector('#listStudents');
const listTeachers = document.querySelector('#listTeachers');
// TEMPLATE
const templateStudent = document.querySelector('#templateStudent').content;
const templateTeacher = document.querySelector('#templateTeacher').content;

const estudiantes = [];
const teachers = [];

document.addEventListener('click', e => {
  if (e.target.dataset.nombre) {
    if (e.target.matches('.btn-success')) {
      estudiantes.map(item => {
        if (item.nombre === e.target.dataset.nombre) {
          item.setEstado = true;
        }
        return item;
      });
    }
    if (e.target.matches('.btn-danger')) {
      estudiantes.map(item => {
        if (item.nombre === e.target.dataset.nombre) {
          item.setEstado = false;
        }
        return item;
      });
    }
    Persona.pintarPersonaUI(estudiantes, 'Estudiante');
  };
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(formulario);
  const [nombre, edad, opcion] = [...data.values()];
  if (opcion === 'Estudiante') {
    const estudiante = new Estudiante(nombre, Number(edad));
    estudiantes.push(estudiante);
    Persona.pintarPersonaUI(estudiantes, opcion);
  }
  if (opcion === 'Profesor') {
    const profesor = new Profesor(nombre, Number(edad));
    teachers.push(profesor);
    Persona.pintarPersonaUI(teachers, opcion);
  };
});

class Persona {
  constructor (nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  static pintarPersonaUI (personas, tipo) {
    if (tipo === 'Estudiante') {
      listStudents.textContent = '';
      const fragment = document.createDocumentFragment();
      personas.forEach(item => {
        fragment.appendChild(item.addNewStudent());
      });
      listStudents.appendChild(fragment);
    }
    if (tipo === 'Profesor') {
      listTeachers.textContent = '';
      const fragment = document.createDocumentFragment();
      personas.forEach(item => {
        fragment.appendChild(item.addNewTeacher());
      });
      listTeachers.appendChild(fragment);
    }
  }
};

class Estudiante extends Persona {
  #estado = true;
  #estudiante = 'Estudiante';

  set setEstado (estado) {
    this.#estado = estado;
  }

  get getEstudiante () {
    return this.#estudiante;
  }

  addNewStudent () {
    const clone = templateStudent.firstElementChild.cloneNode(true);
    clone.querySelector('h5 .text-primary').textContent = this.nombre;
    clone.querySelector('h6').textContent = this.getEstudiante;
    clone.querySelector('.lead').textContent = `${this.edad} años`;

    if (this.#estado) {
      clone.querySelector('.badge').setAttribute('class', 'badge bg-success');
      clone.querySelector('.btn-success').setAttribute('disabled', '');
    } else {
      clone.querySelector('.badge').setAttribute('class', 'badge bg-danger');
      clone.querySelector('.btn-danger').setAttribute('disabled', '');
    }
    clone.querySelector('.badge').textContent = this.#estado ? 'Aprobado' : 'Desaprobado';
    clone.querySelector('.btn-danger').dataset.nombre = this.nombre;
    clone.querySelector('.btn-success').dataset.nombre = this.nombre;

    return clone;
  }
}

class Profesor extends Persona {
  #profesor = 'Profesor';

  addNewTeacher () {
    const clone = templateTeacher.firstElementChild.cloneNode(true);
    clone.querySelector('h5').textContent = this.nombre;
    clone.querySelector('h6').textContent = this.#profesor;
    clone.querySelector('.lead').textContent = `${this.edad} años`;
    return clone;
  };
}
