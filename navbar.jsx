import react from 'react';
import Foto from "../img/Logo.png";
function Navbar() {

  return (
    <nav className="navbar">
      <div className="logo">
          <img src={Foto}/> 
      </div>
      <ul className="nav-list">
          <li className="nav-itemS">
              <a href="/">Home</a>
          </li>
          <li>
              <a href="/">Recommended</a>
          </li>
          <li>
              <a href="/">Cart</a>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar;
