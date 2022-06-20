import { NavLink } from 'react-router-dom';

import '../styling/navbar.css';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navLinks">
          <NavLink className="navLink" to="/">Why Relab</NavLink>
          <NavLink className="navLink" to="/">Features</NavLink>
          <NavLink className="navLink" to="/">Resourses</NavLink>
          <NavLink className="navLink" to="/">Pricing</NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar