import './navbar.css';
import { Link } from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';
import { useState } from 'react';
import { useAuth } from '../../context/ContextLogin';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <nav className="container-navbar">
      {/* Botón del menú */}
      <button className="icon-button" onClick={toggleMenu}>
        <FiAlignJustify />
      </button>

      {/* Opciones principales */}
      <ul className={`container-ul ${menuVisible ? 'visible' : ''}`}>
        {!isAuthenticated ? (
          <Link to="/" className="container-li" onClick={closeMenu}>
            Iniciar Sesión
          </Link>
        ) : (
          <>
            {/* Opciones visibles al estar autenticado */}
            <Link to="/ingreso" className="container-li" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/guias" className="container-li" onClick={closeMenu}>
              Guías
            </Link>

            {/* Submenú desplegable */}
            <li className="submenu-container">
              <span className="submenu-title">Más opciones</span>
              <ul className="submenu">
                <Link to="/devolver" className="submenu-item" onClick={closeMenu}>
                  Equipo sin devolver
                </Link>
                <Link to="/opcion2" className="submenu-item" onClick={closeMenu}>
                  Valor mes
                </Link>
                <Link to="/opcion3" className="submenu-item" onClick={closeMenu}>
                  Opción 3
                </Link>
                <button
                  className="submenu-item"
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                >
                  Cerrar Sesión
                </button>
              </ul>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;