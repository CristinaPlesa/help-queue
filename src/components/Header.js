import React from "react";
import ticketsImage from "./../img/ticket.jpg";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HelpQueueHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: white;
`;

const StyledWrapper = styled.section`
  background-color: orange;
`;

function Header(){
  return (
    <StyledWrapper>
      <HelpQueueHeader>
        Help Queue
      </HelpQueueHeader>
      <img width="50%" src={ticketsImage} alt="An image of a ticket" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </StyledWrapper>
  );
}

export default Header;