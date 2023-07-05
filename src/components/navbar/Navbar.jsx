import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

import LocationSection from '../locationSection/LocationSection';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container nav__container">
        <LocationSection />
        {/* <Link to="/For7Days" className="nav__schedule-link">
          <img
            className="nav__schedule-link-icon"
            src="./images/icons/schedule.svg"
            alt=""
          />
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
