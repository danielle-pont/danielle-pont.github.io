import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="footer">
      <h1>FOOTER COMPONENT</h1>
      <div className='copyright'>
      <img src="/images/logo.svg" alt='the Relab logo' />
      </div>
      <div className='container'>
      <ul className='company'>
        <NavLink className="links" to="/"><b>Company</b></NavLink>
          <li>
            <NavLink className="links" to="/">Company</NavLink>
          </li>
      </ul>
      <ul>
        <NavLink className="links" to="/"><b>Features</b></NavLink>
          <li>
          <NavLink className="links" to="/">Features</NavLink>
          </li>
      </ul>
      <ul>
        <NavLink className="links" to="/"><b>Resources</b></NavLink>
          <li>
            <NavLink className="links" to="/">Resources</NavLink>
          </li>
      </ul>
      </div>
      </div>
    </>
  );
}

export default Footer