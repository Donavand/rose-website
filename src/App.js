import hrEmblem from './hr-emblem.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="navbar-logo">
          <img src={hrEmblem} alt="HR Emblem" />
        </div>
      </nav>
      
      <main className="main-content">
        <section className="hero-section">
          <h1>Welcome to House of Rose</h1>
          <p>Indulge in luxury, elevate your lifestyle</p>
        </section>
      </main>
    </div>
  );
}

export default App;
