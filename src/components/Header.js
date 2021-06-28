import React from "react";
import ticketsImage from "./../img/ticket.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketsImage} alt="An image of a ticket" />
    </React.Fragment>
  );
}

export default Header;
