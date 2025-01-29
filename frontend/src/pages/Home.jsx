import React from "react";
import Navbar from "../Components/Navbar"; 
import "../App.css"; 


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>Bienvenido a mi aplicación</h1>
        <p>Explora las funcionalidades de nuestra plataforma.</p>

        
        <div id="carouselExampleIndicators" className="carousel slide mt-5" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://img.freepik.com/vector-gratis/servicio-o-plataforma-linea-fidelizacion-empleados-cultura-relaciones-corporativas-motivacion-remuneracion-personal-calendario-eventos-corporativos-ilustracion-vector-plano_613284-3305.jpg?t=st=1738077226~exp=1738080826~hmac=afad6622315b03dd6eddfa5394997e2d7de6d1c7e4707eb735c21389f1c3a2a5&w=996"
                className="d-block w-100"
                alt="Primer Slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.freepik.com/vector-gratis/gestion-tiempo-trabajo-equipo-profesionales-marketing-planificacion-medios-control-representacion-medios-llegar-su-cliente-mejor-plan-medios_335657-23.jpg?t=st=1738077425~exp=1738081025~hmac=93f9580d390096eef1908da4f9cc8a99757be08e0e75ebe105fdba620c865710&w=996"
                className="d-block w-100"
                alt="Segundo Slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.freepik.com/vector-gratis/concepto-relaciones-publicas-plano-organico-ilustrado_23-2148891122.jpg?t=st=1738077857~exp=1738081457~hmac=c0a7e5dd118c605dd9f2356e3af9a1631baf2ea4f0262648367dfa328f37e495&w=996"
                className="d-block w-100"
                alt="Tercer Slide"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default App;
