import React from "react";
import { Link } from "react-scroll";

import myimg from "./portphoto1.JPG"
export default function Home(){

    return(

        <div id="home">
        <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item">
              <Link className="nav-link" to="home" spy={true} smooth={false} offset={-100} duration={500} >Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about" spy={true} smooth={false} offset={-100} duration={500}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" spy={true} smooth={false} offset={-100} duration={500}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="footer" spy={true} smooth={false} offset={-150} duration={500}>Footer</Link>
            </li>
          </ul>

        </div>
      </nav>
      
        <div className="background">
          <img src={myimg} className="img-fluid" />
        </div>
        <div className='heading-content  text-center'>
          <h5>Hello I'm </h5>
          <h1>Feramiz Bahaddinov</h1>
          <p>AND THIS IS MY WORLD</p>
        </div>
     </div>
        
        </div>
    );
}
