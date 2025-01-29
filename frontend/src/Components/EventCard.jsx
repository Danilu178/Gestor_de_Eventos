import React from 'react';

const EventCard = ({ evento, handleEdit, handleDelete }) => {
  return (
    <div className="card mb-4" style={{ width: '18rem' }}>
      <img
      
      />
      <div className="card-body">
        <h5 className="card-title">{evento.titulo}</h5>
        <p className="card-text">{evento.descripcion}</p>
        <p>
          <strong>Fecha:</strong> {new Date(evento.fecha).toLocaleString()}
        </p>
        <p>
          <strong>Ubicación:</strong> {evento.ubicacion}
        </p>
        <div className="d-flex justify-content-between">
          
          <button
            className="btn btn-warning"
            onClick={() => handleEdit(evento._id)}
          >
            Editar
          </button>

          
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(evento._id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
