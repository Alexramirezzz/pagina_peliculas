import React, { useState } from 'react';
import Home from './components/Home';
import FeaturedMovies from './components/FeaturedMovies';
import SearchMovies from './components/SearchMovies';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import './App.css';

function App() {
  // Estado para controlar la sección visible
  const [activeSection, setActiveSection] = useState('home');

  // Función para cambiar la sección activa
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <h1>Movie Recs</h1>
      {/* Menú de navegación */}
      <nav>
        <ul>
          <li><button onClick={() => handleSectionChange('home')}>Inicio</button></li>
          <li><button onClick={() => handleSectionChange('featured')}>Películas Destacadas</button></li>
          <li><button onClick={() => handleSectionChange('search')}>Buscar Películas</button></li>
          <li><button onClick={() => handleSectionChange('reviews')}>Reseñas</button></li>
          <li><button onClick={() => handleSectionChange('contact')}>Contacto</button></li>
        </ul>
      </nav>

      {/* Contenido que cambia según la opción seleccionada */}
      <div>
        {activeSection === 'home' && <Home />}
        {activeSection === 'featured' && <FeaturedMovies />}
        {activeSection === 'search' && <SearchMovies />}
        {activeSection === 'reviews' && <Reviews />}
        {activeSection === 'contact' && <Contact />}
      </div>
    </div>
  );
}

export default App;
