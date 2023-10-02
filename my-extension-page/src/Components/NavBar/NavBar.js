import React from 'react';
import Icon2 from '../Landing/Images/iCON 7 1.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <nav className="NavBar">
        <div className="navTitle">
          <img className="Icon2" src={Icon2} alt="Icon2" />
          <p>HelpMeOut</p>
        </div>
        <div className="Features">
          <p>Features</p>
          <p>How it Works</p>
        </div>
        <Link className='Link' to="/Video" >
        <div className="started">
          <p>Get Started</p>
        </div>
        </Link>

      </nav>
      <hr id="line1" />
    </div>
  )
}

export default NavBar