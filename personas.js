const personForm = document.getElementById('personForm');
const personTableBody = document.getElementById('personTableBody');

const people = [];

function calculateIMC(peso, altura) {
  const alturaMetros = altura / 100;
  const imc = peso / (alturaMetros * alturaMetros);
  return imc.toFixed(1);
}

function renderPeople() {
  personTableBody.innerHTML = people
    .map((person, index) => `
      <tr>
        <td>${person.nombre}</td>
        <td>${person.apellido}</td>
        <td>${person.edad}</td>
        <td>${person.altura} cm</td>
        <td>${person.peso} kg</td>
        <td>${calculateIMC(person.peso, person.altura)}</td>
        <td><button class="delete-button" data-index="${index}">Eliminar</button></td>
      </tr>
    `)
    .join('');
}

function addPerson(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const edad = Number(document.getElementById('edad').value);
  const altura = Number(document.getElementById('altura').value);
  const peso = Number(document.getElementById('peso').value);

  if (!nombre || !apellido || !edad || !altura || !peso) {
    return;
  }

  people.push({ nombre, apellido, edad, altura, peso });
  renderPeople();
  personForm.reset();
}

function removePerson(index) {
  people.splice(index, 1);
  renderPeople();
}

personForm.addEventListener('submit', addPerson);

personTableBody.addEventListener('click', (event) => {
  const target = event.target;
  if (target.matches('.delete-button')) {
    const index = Number(target.dataset.index);
    removePerson(index);
  }
});

renderPeople();
