import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1>TimeHero</h1>
        <div className="nav-links">
          <Link to="/" className="nav-link" style={{
            color: location.pathname === '/' ? '#ffffff' : '#666666'
          }}>
            Timer
          </Link>
          <Link to="/about" className="nav-link" style={{
            color: location.pathname === '/about' ? '#ffffff' : '#666666'
          }}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;