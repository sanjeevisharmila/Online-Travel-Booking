import React from 'react';
import "./maillist.css";
const Maillist = () =>{
    return(
        <div className="mail">
          <h1 className="mailtitle">Save Time,Save Money!</h1>
          <span className="maildesc">Sign up and we'llsend the best deals to you</span>
          <div classname="mailinputcontainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
    );
}
export default Maillist;