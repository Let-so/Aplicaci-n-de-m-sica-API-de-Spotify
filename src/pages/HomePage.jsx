import React from 'react';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="greeting-section">
        <h2>¡Buenas noches!</h2>
        <div className="top-items">
          <div className="top-item">
            <img src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="Liked Songs" />
            <span>Canciones que te gustan</span>
          </div>
          <div className="top-item">
            <img src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" alt="Daily Mix 1" />
            <span>Daily Mix 1</span>
          </div>
          <div className="top-item">
            <img src="https://i.scdn.co/image/ab67616d00001e02e8b066f70c206551210d902b" alt="This Is Artist" />
            <span>This Is Artist</span>
          </div>
          <div className="top-item">
            <img src="https://seeded-session-images.scdn.co/v1/img/artist/6eUKZXaKkcviH0Ku9w2n3V/en" alt="Discover Weekly" />
            <span>Descubrimiento semanal</span>
          </div>
          <div className="top-item">
            <img src="https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5" alt="Top 50 Global" />
            <span>Top 50 - Global</span>
          </div>
          <div className="top-item">
            <img src="https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1" alt="Peaceful Piano" />
            <span>Peaceful Piano</span>
          </div>
        </div>
      </div>
      
      <div className="section">
        <div className="section-header">
          <h2>Tus programas</h2>
          <span className="see-all">Ver todo</span>
        </div>
        <div className="card-grid">
          <div className="card">
            <div className="card-img-container">
              <img src="https://i.scdn.co/image/ab6765630000ba8a39b3dccb08e0b2e3773eac74" alt="Podcast 1" className="card-img" />
            </div>
            <div className="card-title">The Worst Bestsellers</div>
            <div className="card-subtitle">Worst Bestsellers</div>
          </div>
          <div className="card">
            <div className="card-img-container">
              <img src="https://i.scdn.co/image/ab6765630000ba8a0c203c3e86a1e37b8d5f0dbf" alt="Podcast 2" className="card-img" />
            </div>
            <div className="card-title">The Beswtchables</div>
            <div className="card-subtitle">The Ringer</div>
          </div>
          <div className="card">
            <div className="card-img-container">
              <img src="https://i.scdn.co/image/ab6765630000ba8a9417936d038e7a2f8dee2554" alt="Podcast 3" className="card-img" />
            </div>
            <div className="card-title">Behind the Bastards</div>
            <div className="card-subtitle">iHeartPodcasts</div>
          </div>
          <div className="card">
            <div className="card-img-container">
              <img src="https://i.scdn.co/image/ab6765630000ba8a0e9801e7e9f53c84ee425aa6" alt="Podcast 4" className="card-img" />
            </div>
            <div className="card-title">They're Just Movies</div>
            <div className="card-subtitle">Campside Media</div>
          </div>
          <div className="card">
            <div className="card-img-container">
              <img src="https://i.scdn.co/image/ab6765630000ba8a9cb0e5c5c6b73d32299d0dba" alt="Podcast 5" className="card-img" />
            </div>
            <div className="card-title">We Read It One Night</div>
            <div className="card-subtitle">Alison and Rachel</div>
          </div>
          <div className="card">
            <div className="card-img-container">
              <img src="https://i.scdn.co/image/ab6765630000ba8a0e33e51265d72c91c1bcaa88" alt="Podcast 6" className="card-img" />
            </div>
            <div className="card-title">Indie Hackers</div>
            <div className="card-subtitle">Courtland Allen</div>
          </div>
        </div>
      </div>
      
      <div className="section">
        <div className="section-header">
          <h2>Tus mixes más escuchados</h2>
        </div>
        <div className="card-grid">
          {/* Aquí puedes añadir más tarjetas para los mixes */}
          <div className="card">
            <div className="card-img-container">
              <img src="https://seed-mix-image.spotifycdn.com/v6/img/artist/0du5cEVh5yTK9QJze8zA0C/es/default" alt="Mix 1" className="card-img" />
            </div>
            <div className="card-title">Mix de Rock</div>
            <div className="card-subtitle">Queens of the Stone Age, Arctic Monkeys y más</div>
          </div>
          <div className="card">
            <div className="card-img-container">
              <img src="https://seed-mix-image.spotifycdn.com/v6/img/pop/0LyfQWJT6nXafLPZqxe9Of/es/default" alt="Mix 2" className="card-img" />
            </div>
            <div className="card-title">Mix de Pop</div>
            <div className="card-subtitle">Taylor Swift, Ed Sheeran y más</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;