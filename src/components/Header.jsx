import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/NebulaTeam-BG_OFF.png'; // Substitua pelo caminho correto do logotipo
import '../scss/Header.scss';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ minHeight: '80px', padding: "5px 50px 5px 50px" }}>
      <Navbar.Brand href="/" className="d-flex align-items-center">
        <img
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Logo do projeto Energia Solar"
          style={{ marginRight: '10px' }}
        />
        <span className="text-light fw-bold">Nebula Team</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/" exact>
            Início
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            Sobre
          </Nav.Link>
          <Nav.Link as={NavLink} to="/problema">
            Problema
          </Nav.Link>
          <Nav.Link as={NavLink} to="/solucao">
            Solução
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contato">
            Contato
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;