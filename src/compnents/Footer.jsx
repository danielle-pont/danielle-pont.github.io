import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="footer">
      <h1>FOOTER COMPONENT</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
      </div>
      <div className="main">
      </div>
    </>
  );
}

export default Footer