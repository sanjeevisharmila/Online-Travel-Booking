import React from 'react';
import { Link} from 'react-router-dom';
import './navbar.css';
const Navbar = () =>{
    return(
      <div className="navbar">
         <div className="navcontainer">
            <span className="logo">GetSetBooking</span>
            <div className="navItems">
               <Link  to="/registration" className="navbutton">
        Registration
      </Link>
                <Link to="/login" className="navbutton">Login</Link>
            </div>
         </div>
      </div>
    );
}

export default Navbar;