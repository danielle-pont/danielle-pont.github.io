import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className='left side'>
          <div className='logo'>
            <img src="/images/logo.svg" alt='The Relab logo' />
          </div>
          <div className='copyright'>
            <p>Privacy Terms © Property Portal Limited (Relab™) 2021. All rights reserved</p>
          </div>
          <div className='social'>
            <NavLink className="links" to="/"><img src="/images/instagram.svg" alt='Instagram logo' /></NavLink>
            <NavLink className="links" to="/"><img src="/images/facebook.svg" alt='Facebook logo' /></NavLink>
            <NavLink className="links" to="/"><img src="/images/youtube.svg" alt='Youtube logo' /></NavLink>
            <NavLink className="links" to="/"><img src="/images/twitter.svg" alt='Twitter logo' /></NavLink>
            <NavLink className="links" to="/"><img src="/images/linkedin.svg" alt='Linkedin logo' /></NavLink>
          </div>
        </div>
          <div className='navContainer'>
            <ul className='company'>
              <NavLink className="links" to="/"><b>Company</b></NavLink>
                <li>
                  <NavLink className="linkItems" to="/">Contact</NavLink>
                </li>
                <li>
                  <NavLink className="linkItems" to="/">Pricing</NavLink>
                </li>
                <li>
                  <NavLink className="linkItems" to="/">Careers</NavLink>
                </li>
            </ul>
            <ul className='features'>
              <NavLink className="links" to="/"><b>Features</b></NavLink>
                <li>
                <NavLink className="linkItems" to="/">Relab Planning Report(RPR)</NavLink>
                </li>
                <li>
                <NavLink className="linkItems" to="/">Property Summary Report</NavLink>
                </li>
                <li>
                <NavLink className="linkItems" to="/">Advanced Mapping</NavLink>
                </li>
                <li>
                <NavLink className="linkItems" to="/">Building and Resource Consent</NavLink>
                </li>
                <li>
                <NavLink className="linkItems" to="/">Advanced Insights(ASI)</NavLink>
                </li>
            </ul>
            <ul className='resources'>
              <NavLink className="links" to="/"><b>Resources</b></NavLink>
                <li>
                  <NavLink className="linkItems" to="/">Product Training</NavLink>
                </li>
                <li>
                  <NavLink className="linkItems" to="/">Property Collective</NavLink>
                </li>
                <li>
                  <NavLink className="linkItems" to="/">Property Webinars</NavLink>
                </li>
                <li>
                  <NavLink className="linkItems" to="/">Product News</NavLink>
                </li>
                <li>
                  <NavLink className="linkItems" to="/">Book a Demo</NavLink>
                </li>
                <li>
                  <NavLink className="linkItems" to="/">Blog</NavLink>
                </li>
            </ul>
          </div>
        </div>
    </>
  );
}

export default Footer