import React from 'react';
import Add_file from '../add_doc/Add_Doc';
import Authenticated from './Authenticated/Authenticated';
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <nav className="text-center">
      <div className="navbar">
      <div class="dropdown col-1 text-center">
        <h3 class=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Our Services
        </h3>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
          <Link class="dropdown-item" to="/scan_price">{">"} pricing</Link>
          <Link class="dropdown-item" to = "/about">{">"} about us</Link>
          <Link class="dropdown-item" to = "">{">"} FAQ</Link>
          <Link class="dropdown-item" to = "">{">"} contact info</Link>
        </div>
      </div>

      <div className="brand col-9 text-center">
        <h1>Numera</h1>
      </div>
          <Authenticated className="col-2"/>
      </div>
    </nav>
  );
};

export default Navbar;




