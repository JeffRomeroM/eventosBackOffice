
import { Link } from 'react-router-dom';
import '../../styles/Home.css'
export const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido al Backend Office</h1>
      <p>Esta es la página de inicio del backend.</p>
      <p>Aquí puedes administrar y controlar los datos y configuraciones del sistema.</p>

      <nav className="navigation">
        <ul>
          <li>
            <Link to="/usuarios" className="link">Usuarios</Link>
          </li>
          <li>
            <Link to="/productos" className="link">Productos</Link>
          </li>
          <li>
            <Link to="/configuracion" className="link">Configuración</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

