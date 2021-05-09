import React, { Component } from "react";
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div>
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        </div>
        <ul className="navbar-nav">
          {
            <li>
              <Link className="nav-link" to="/recipes">
                Recipes
              </Link>
            </li>
          }
        </ul>
        <ul className="navbar-nav navbar-collapse justify-content-end">
          {
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          }
          {
            <li>
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
          }
        </ul>
      </nav>
    </header>
  )
}

export default withRouter(Header)
