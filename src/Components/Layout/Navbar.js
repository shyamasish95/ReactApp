import React from "react";
import {Link, NavLink} from "react-router-dom"

const Navbar =()=>{
    return(
        <React.Fragment>

        
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <a className="navbar-brand" href="#">React User</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-md-0">
          <input className="form-control" type="text" placeholder="Search">
        </input>
      </form>
    </div>
    </nav>
    </React.Fragment>
    )
}

export default Navbar