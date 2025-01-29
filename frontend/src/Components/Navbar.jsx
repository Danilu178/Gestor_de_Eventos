import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("usuario")); 

  const handleLogout = () => {
    
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">Event Planner</Link>
        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/home">Home</Link>
          <Link className="nav-link" to="/eventos">Eventos</Link>
          <Link className="nav-link" to="/addevent">Add Events</Link>

       
          {usuario && (
            <div className="d-flex align-items-center">
              

         
              <button
                onClick={handleLogout}
                className="btn btn-danger btn-sm d-flex align-items-center"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;





