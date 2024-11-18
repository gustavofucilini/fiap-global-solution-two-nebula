import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2024 Energia Solar para Comunidades Carentes.</p>
          </Col>
          <Col md={6} className="text-end">
            <a href="/" className="text-light me-3">
              Início
            </a>
            <a href="/about" className="text-light me-3">
              Sobre
            </a>
            <a href="/problema" className="text-light me-3">
              Problema
            </a>
            <a href="/solucao" className="text-light me-3">
              Solução
            </a>
            <a href="/contato" className="text-light">
              Contato
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
