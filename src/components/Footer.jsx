import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink as RouterNavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2024 Energia Solar para Comunidades Carentes.</p>
          </Col>
          <Col md={6} className="text-end">
            <Nav className="justify-content-end">
              <Nav.Link as={RouterNavLink} to="/" className="text-light">
                Início
              </Nav.Link>
              <Nav.Link as={RouterNavLink} to="/about" className="text-light">
                Sobre
              </Nav.Link>
              <Nav.Link as={RouterNavLink} to="/problema" className="text-light">
                Problema
              </Nav.Link>
              <Nav.Link as={RouterNavLink} to="/solucao" className="text-light">
                Solução
              </Nav.Link>
              <Nav.Link as={RouterNavLink} to="/contato" className="text-light">
                Contato
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
