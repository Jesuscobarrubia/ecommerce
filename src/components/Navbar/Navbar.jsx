import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <>
      <header className="container-fluid">
        <Link to="/">
            <img src="/ecommerce/logo.png" alt="Marvel" className="logo" />
        </Link>

        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to='/' className="nav-link active" aria-current="page" href="#">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/fase' className="nav-link" href="#">
                    Universo Cinematografico
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='fase/FaseUno' className="nav-link" href="#">
                    Fase Uno
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='fase/FaseDos' className="nav-link" href="#">
                    Fase Dos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='fase/FaseTres' className="nav-link" href="#">
                    Fase Tres
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/fase/FaseCuatro' className="nav-link" href="#">
                    Fase Cuatro
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="nav-link btn btn-dark dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categoria
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link to='/categoria/pelicula' className="dropdown-item">
                        Peliculas
                      </Link>
                    </li>
                    <li>
                      <Link to='/categoria/serie' className="dropdown-item">
                        Series
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <Link to="/cart">
              <CartWidget/>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
