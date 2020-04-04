import React from "react";
import logo from "./logo.svg";
import { Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.scss";

const Header = () => {
  return (
    <Container fluid className={"Header__container"}>
      <Navbar className={"Header__navbar"}>
        <LinkContainer to="/">
          <img src={logo} alt={"Comic Clan"} />
        </LinkContainer>
      </Navbar>
    </Container>
  );
};

export default Header;
