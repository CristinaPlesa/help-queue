import React from "react";
import ticketsImage from "./../img/ticket.jpg";
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
      <h1> Help Queue</h1>
      <img width="50%" src={ticketsImage} alt="An image of a ticket" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;