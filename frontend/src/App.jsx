import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"; 
import Register from "./pages/Register";
import Eventos from './pages/Eventos';
import Home from './pages/Home';
import AddEvent from './pages/AddEvent';
import Footer from './Components/footer'; 
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addevent" element={<AddEvent />} />
          <Route path= "/" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
        </Routes>

       
        <Footer />
      </div>
    </Router>
  );
};

export default App;
