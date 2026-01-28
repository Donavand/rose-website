import { NavLink } from 'react-router-dom';
import hrEmblem from '../hr-emblem.svg';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="navbar-logo">
        <img src={hrEmblem} alt="HR Emblem" />
      </div>
    </nav>
  );
}

export default Navbar;
