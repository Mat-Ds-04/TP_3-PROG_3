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
