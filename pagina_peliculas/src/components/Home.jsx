import React from 'react';
import './Styles/Home.css';

const Home = () => {
  return (
    <div>
      {/* Introducción de la web */}
      <section id="home">
        <h1>Bienvenido a Movie Recs</h1>
        <p>
          Movie Recs es tu destino ideal para descubrir, compartir y discutir sobre tus películas favoritas. Únete a nuestra comunidad para recibir recomendaciones personalizadas, leer reseñas de otros usuarios y explorar una vasta colección de películas. ¡Empieza a explorar ahora!
        </p>

        <div className="carousel">
  <h2>Películas Populares</h2>
  <div className="carousel-items">
    <img src="https://img2.rtve.es/v/6903221/vertical/?h=400" alt="Película 1" />
    <img src="https://es.web.img3.acsta.net/medias/nmedia/18/69/49/27/20051692.jpg" alt="Película 2" />
    <img src="https://musicart.xboxlive.com/7/ce9c0700-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" alt="Película 3" />
  </div>
</div>

     

      {/* Formulario de registro/inicio de sesión */}
        <div className="auth-forms">
          <h2>Regístrate o Inicia Sesión</h2>
          <form className="login-form">
            <input type="text" placeholder="Usuario" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Iniciar Sesión</button>
          </form>
          <p>¿No tienes una cuenta? <a href="#register">Regístrate aquí</a></p>
        </div>
        </section>
    </div>
  );
};

export default Home;

