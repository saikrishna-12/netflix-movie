import React, { useEffect, useState } from 'react';
import "./Navbar.css";

function Nav() {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => {
      window.removeEventListener('scroll', transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${show ? "nav_black" : ""}`}>
      <div className='nav_content'>
        <img className='nav_logo' src='https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png' alt='netflix' />
        <img className='nav_avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='avatar' />
      </div>
    </div>
  );
}

export default Nav;
