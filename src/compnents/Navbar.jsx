import { NavLink } from 'react-router-dom';

import Button from './Button'

import '../styling/navbar.css';
import '../styling/button.css';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className='navlogo'>
          <img src="/images/navLogo.svg" alt='The Relab logo' />
        </div>
        <div className="navLinks">
          <NavLink className="navLink" to="/">Why Relab</NavLink>
          <NavLink className="navLink" to="/">Features</NavLink>
          <NavLink className="navLink" to="/">Resourses</NavLink>
          <NavLink className="navLink" to="/"><u>Pricing</u></NavLink>
          <NavLink className="navLink" to="/">中文</NavLink>
        </div>
        <div className='button'>
          <Button />
        </div>
      </div>
    </>
  );
}

export default Navbar