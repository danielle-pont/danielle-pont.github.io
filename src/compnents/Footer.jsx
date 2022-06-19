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
            <NavLink className="links" to="/">Contact</NavLink>
          </li>
          <li>
            <NavLink className="links" to="/">Pricing</NavLink>
          </li>
          <li>
            <NavLink className="links" to="/">Careers</NavLink>
          </li>
      </ul>
      <ul>
        <NavLink className="links" to="/"><b>Features</b></NavLink>
          <li>
          <NavLink className="links" to="/">Relab Planning Report(RPR)</NavLink>
          </li>
          <li>
          <NavLink className="links" to="/">Property Summary Report</NavLink>
          </li>
          <li>
          <NavLink className="links" to="/">Advanced Mapping</NavLink>
          </li>
          <li>
          <NavLink className="links" to="/">Building and Resource Consent</NavLink>
          </li>
          <li>
          <NavLink className="links" to="/">Advanced Insights(ASI)</NavLink>
          </li>
      </ul>
      <ul>
        <NavLink className="links" to="/"><b>Resources</b></NavLink>
          <li>
            <NavLink className="links" to="/">Product Training</NavLink>
          </li>
          <li>
            <NavLink className="links" to="/">Property Collective</NavLink>
          </li>
          <li>
            <NavLink className="links" to="/">Property Webinars</NavLink>
          </li>
          <li>
            <NavLink className="links" to="/">Product News</NavLink>
          </li>
          <li>
            <NavLink className="links" to="/">Book a Demo</NavLink>
          </li>
          <li>
            <NavLink className="links" to="/">Blog</NavLink>
          </li>
      </ul>
      </div>
      </div>
    </>
  );
}

export default Footer