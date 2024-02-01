import React from 'react';
import Add_file from '../add_doc/Add_Doc';
import Authenticated from './Authenticated/Authenticated';
const Navbar = () => {

  return (
    <nav className="text-center">
      <div className="navbar">
        <div className="col-3">
          <span></span>
        </div>
        <div className="brand col">
          <h1>Numera</h1>
        </div>
        <div className="add col-2">
          <button
            className="btn btn-success btn-md"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
          >
            ADD FILE
          </button>
        </div>

        <Authenticated/>
      </div>
      <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body small">
          <Add_file />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




