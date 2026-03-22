
const servicios = [
  {
    titulo: 'estructura',

    },
];

const Servicios = () => (
  <section>
    <h2>Servicios de Limpieza</h2>
    <ul>
      {servicios.map((servicio, idx) => (
        <li key={idx}>
          <h3>{servicio.titulo}</h3>
          <p>{servicio.descripcion}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Servicios;
