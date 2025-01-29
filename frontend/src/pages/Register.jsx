import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import apiClient from "../api/axiosConfig";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
  
    
    if (!name || !email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }
  
    try {
      const response = await apiClient.post("/autenticacion/registro", {
        nombre: name,
        email: email,
        contraseña: password,
      });
  
  
      console.log("Usuario registrado:", response.data);
      alert("Usuario registrado correctamente");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.mensaje || "Error al registrarse");
      } else {
        setError("Error al conectar con el servidor");
      }
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Registrarse</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Registrarse
          </button>
          
          <p className="text-center text-sm text-gray-600 mb-4">
            ¿Ya tienes cuenta?{" "}
            <span
              onClick={() => navigate("/")} 
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Iniciar Sesion
            </span>
          </p>
           
        </form>
      </div>
    </div>
  );
  
};

export default Register;