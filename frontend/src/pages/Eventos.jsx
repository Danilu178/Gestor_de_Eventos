import React, { useState, useEffect } from 'react';
import Navbar from "../Components/Navbar"; 
import apiClient from '../api/axiosConfig'; 
import EventCard from "../Components/EventCard"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const [eventosFiltrados, setEventosFiltrados] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [ubicacionFiltro, setUbicacionFiltro] = useState("");

  useEffect(() => {
    const fetchEventos = async () => {
      const startTime = performance.now(); 
      try {
        const response = await apiClient.get("/eventos");
        const endTime = performance.now(); 
        console.log(`Tiempo de carga de eventos: ${endTime - startTime} ms`);
        setEventos(response.data.eventos); 
        setEventosFiltrados(response.data.eventos); 
      } catch (err) {
        setError("Error al cargar los eventos");
      } finally {
        setLoading(false);
      }
    };

    fetchEventos();
  }, []);


  const handleFiltroUbicacion = (e) => {
    const filtro = e.target.value.toLowerCase();
    setUbicacionFiltro(filtro);
    if (filtro === "") {
      setEventosFiltrados(eventos); 
    } else {
      setEventosFiltrados(
        eventos.filter((evento) =>
          evento.ubicacion.toLowerCase().includes(filtro)
        )
      );
    }
  };

  
  const handleDelete = async (id) => {
    try {
      await apiClient.delete(`/eventos/${id}`);
      setEventos(eventos.filter((evento) => evento._id !== id));
      setEventosFiltrados(eventosFiltrados.filter((evento) => evento._id !== id));
    } catch (err) {
      setError("Error al eliminar el evento");
    }
  };

 
  const handleEdit = async (id) => {
    const titulo = prompt("Nuevo título del evento:");
    const descripcion = prompt("Nueva descripción del evento:");
    const fecha = prompt("Nueva fecha del evento (formato: yyyy-mm-dd):");
    const ubicacion = prompt("Nueva ubicación del evento:");

    if (titulo && descripcion && fecha && ubicacion) {
      try {
        const updatedEvento = { titulo, descripcion, fecha, ubicacion };
        const response = await apiClient.put(`/eventos/${id}`, updatedEvento);
        const updatedEventos = eventos.map((evento) =>
          evento._id === id ? response.data : evento
        );
        setEventos(updatedEventos);
        setEventosFiltrados(updatedEventos);
      } catch (err) {
        setError("Error al editar el evento");
      }
    }
  };

  if (loading) {
    return <div>Cargando eventos...</div>;
  }

  return (
    <div>
      
      <Navbar />

      
      <div className="container mt-4">
        <h2>Lista de Eventos</h2>

        <div className="mb-4">
          <label htmlFor="filtroUbicacion" className="block text-sm font-medium text-gray-700">
            Busca una ubicación:
          </label>
          <div className="relative mt-1">
           
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-310 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              id="filtroUbicacion"
              className="form-control w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Escribe una ubicación..."
              value={ubicacionFiltro}
              onChange={handleFiltroUbicacion}
            />
          </div>
        </div>

        
        {error && <p className="text-red-500">{error}</p>}

        
        {Array.isArray(eventosFiltrados) && eventosFiltrados.length > 0 ? (
          <div className="d-flex flex-wrap">
            
            {eventosFiltrados.map((evento) => (
              <div key={evento._id} style={{ flex: '0 0 23%', marginBottom: '20px' }}>
                <EventCard
                  evento={evento}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              </div>
            ))}
          </div>
        ) : (
          <p>No hay eventos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Eventos;

