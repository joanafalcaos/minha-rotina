import React from 'react';
import './App.css';
import Contato from './Contato';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.PUBLIC_URL}/foto-joana.jpeg`} alt="Joana Falcão" className="profile-image" />
        <h1>Joana Falcão</h1>
        <h2>Minha Rotina Diária</h2>
        <div className="daily-routine">
          <p>Aqui está a descrição da minha rotina diária:</p>
          <ul>
            <li><span className="time">6:00 AM</span> - Acordar</li>
            <li><span className="time">7:00 AM</span> - Academia</li>
            <li><span className="time">8:00 AM</span> - Café da manhã</li>
            <li><span className="time">9:00 AM</span> - Trabalho</li>
            <li><span className="time">12:00 PM</span> - Almoço</li>
            <li><span className="time">2:00 PM</span> - Continuação do trabalho / estudos</li>
            <li><span className="time">6:30 PM</span> - Faculdade</li>
            <li><span className="time">8:00 PM</span> - Janta</li>
            <li><span className="time">10:30 PM</span> - Preparação para dormir</li>
          </ul>
        </div>
        <div className="quotes">
          <p><em>"Pensamentos felizes fazem a gente voar." - Peter Pan</em></p>
        </div>
        <div className="media-section">
          <video width="320" height="240" controls>
            <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>

          <audio controls loop className="background-music">
            <source src="https://christianosantos.com/files/cs1/musica01.mp3" type="audio/mpeg" />
            Seu navegador não suporta a tag de áudio.
          </audio>
        </div>
        <Contato />
      </header>
    </div>
  );
}

export default App;