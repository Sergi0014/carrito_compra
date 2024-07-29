// src/App.jsx
const estilos = {
    contenedor: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      padding: '20px',
    },
    producto: {
      border: '1px solid #e6e6e6',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      width: 'calc(33% - 40px)',
      boxSizing: 'border-box',
    },
    imagen: {
      width: '100%',
      borderRadius: '10px',
    },
    titulo: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      margin: '10px 0',
    },
    precio: {
      color: '#ff4500',
      fontSize: '1.1rem',
    },
    boton: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
  
  function Producto({ imagen, titulo, precio }) {
    return (
      <div style={estilos.producto}>
        <img src={imagen} alt={titulo} style={estilos.imagen} />
        <h2 style={estilos.titulo}>{titulo}</h2>
        <p style={estilos.precio}>${precio}</p>
        <button style={estilos.boton}>Agregar al Carrito</button>
      </div>
    );
  }
  
  function App() {
    return (
      <div style={estilos.contenedor}>
        <Producto imagen="url_de_imagen" titulo="Producto 1" precio="109.95" />
        <Producto imagen="url_de_imagen" titulo="Producto 2" precio="22.3" />
        {/* Agrega más productos aquí */}
      </div>
    );
  }
  
  export default App;