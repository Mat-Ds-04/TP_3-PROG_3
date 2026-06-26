const cards = [
  { name: 'Lima', value: 24, description: 'Fruta cítrica' },
  { name: 'Mora', value: 18, description: 'Pequeña y dulce' },
  { name: 'Kiwi', value: 27, description: 'Verde y fresco' },
  { name: 'Naranja', value: 32, description: 'Vitamina C' },
  { name: 'Manzana', value: 19, description: 'Jugosa' },
  { name: 'Banana', value: 22, description: 'Energía natural' },
];

const container = document.getElementById('cardContainer');
const sortButton = document.getElementById('sortButton');
const toggleButton = document.getElementById('toggleButton');
let highlighted = false;
let currentCards = [...cards];

function renderCards(items) {
  container.innerHTML = items
    .map((item) => `
      <article class="card-item ${highlighted && item.value >= 24 ? 'highlight' : ''}">
        <strong>${item.name}</strong>
        <p>${item.description}</p>
        <span>Valor: ${item.value}</span>
      </article>
    `)
    .join('');
}

sortButton.addEventListener('click', () => {
  currentCards = [...currentCards].sort((a, b) => a.name.localeCompare(b.name));
  renderCards(currentCards);
});

toggleButton.addEventListener('click', () => {
  highlighted = !highlighted;
  renderCards(currentCards);
  toggleButton.textContent = highlighted ? 'Quitar resalte' : 'Resaltar valores altos';
});

renderCards(currentCards);
