import React, { useState } from 'react';
import Navbar from "../Components/Navbar"; 
import apiClient from '../api/axiosConfig'; 

function AddEvent() {
  const [nuevoEvento, setNuevoEvento] = useState({
    titulo: '',
    descripcion: '',
    fecha: '',
    ubicacion: '',
  });

  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoEvento({ ...nuevoEvento, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');
    setError('');
    try {
      await apiClient.post('/eventos/crear', nuevoEvento);
      setMensaje('Evento agregado exitosamente');
      setNuevoEvento({
        titulo: '',
        descripcion: '',
        fecha: '',
        ubicacion: '',
      });
    } catch (err) {
      setError('Error al agregar el evento. Inténtalo nuevamente.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center text-2xl font-bold mb-6">Agregar Nuevo Evento</h1>

        <div className="bg-white p-6 rounded-md shadow-md max-w-lg mx-auto">
         
          {mensaje && <p className="text-green-600 text-center mb-4">{mensaje}</p>}
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}

          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
                Título
              </label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                className="form-control w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={nuevoEvento.titulo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
                Descripción
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                className="form-control w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={nuevoEvento.descripcion}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">
                Fecha
              </label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                className="form-control w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={nuevoEvento.fecha}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ubicacion" className="block text-sm font-medium text-gray-700">
                Ubicación
              </label>
              <input
                type="text"
                id="ubicacion"
                name="ubicacion"
                className="form-control w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={nuevoEvento.ubicacion}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Agregar Evento
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEvent;
