const { useState } = React;

function calculateIMC(peso, altura) {
  const alturaMetros = altura / 100;
  const imc = peso / (alturaMetros * alturaMetros);
  return imc.toFixed(1);
}

function PersonForm({ onAdd }) {
  const [form, setForm] = useState({ nombre: '', apellido: '', edad: '', altura: '', peso: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const persona = {
      nombre: form.nombre.trim(),
      apellido: form.apellido.trim(),
      edad: Number(form.edad),
      altura: Number(form.altura),
      peso: Number(form.peso),
    };

    if (!persona.nombre || !persona.apellido || !persona.edad || !persona.altura || !persona.peso) {
      return;
    }

    onAdd(persona);
    setForm({ nombre: '', apellido: '', edad: '', altura: '', peso: '' });
  }

  return (
    <section className="form-card">
      <h2>Agregar persona</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre
          <input name="nombre" value={form.nombre} onChange={handleChange} required />
        </label>
        <label>
          Apellido
          <input name="apellido" value={form.apellido} onChange={handleChange} required />
        </label>
        <label>
          Edad
          <input type="number" name="edad" value={form.edad} onChange={handleChange} min="1" required />
        </label>
        <label>
          Altura (cm)
          <input type="number" name="altura" value={form.altura} onChange={handleChange} min="1" required />
        </label>
        <label>
          Peso (kg)
          <input type="number" name="peso" value={form.peso} onChange={handleChange} min="1" required />
        </label>
        <button type="submit">Agregar</button>
      </form>
    </section>
  );
}

function PersonTable({ people, onRemove }) {
  return (
    <section className="table-card">
      <h2>Listado de personas</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
              <th>Altura</th>
              <th>Peso</th>
              <th>IMC</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={index}>
                <td>{person.nombre}</td>
                <td>{person.apellido}</td>
                <td>{person.edad}</td>
                <td>{person.altura} cm</td>
                <td>{person.peso} kg</td>
                <td>{calculateIMC(person.peso, person.altura)}</td>
                <td>
                  <button className="delete-button" type="button" onClick={() => onRemove(index)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function App() {
  const [people, setPeople] = useState([]);

  function handleAdd(persona) {
    setPeople((current) => [...current, persona]);
  }

  function handleRemove(index) {
    setPeople((current) => current.filter((_, i) => i !== index));
  }

  return (
    <>
      <PersonForm onAdd={handleAdd} />
      <PersonTable people={people} onRemove={handleRemove} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
