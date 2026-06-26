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
