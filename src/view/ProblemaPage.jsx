import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NoElectricityImg from "../assets/NoElectricity.png"; // Adicione essa imagem no assets
import InequalityImg from "../assets/Inequality.png"; // Adicione essa imagem no assets

function ProblemaPage() {
  return (
    <div>
      <div className="hero-section p-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src={NoElectricityImg}
                alt="Comunidade sem acesso à energia elétrica"
                className="img-fluid rounded"
              />
            </Col>
            <Col md={6}>
              <h1 className="hero-title">O Problema</h1>
              <p className="hero-subtitle">
                A exclusão energética e seus impactos sociais e econômicos
              </p>
              <p>
                Muitas comunidades no Brasil, especialmente em áreas rurais e
                periféricas, vivem sem acesso à energia elétrica. Essa exclusão
                energética perpetua desigualdades e limita oportunidades para milhões
                de pessoas.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="details-section py-5 bg-light">
        <Container>
          <Row>
            <Col>
              <h2 className="section-title">Desafios Enfrentados</h2>
              <p className="section-text">
                A ausência de energia elétrica cria barreiras significativas para o
                desenvolvimento humano e econômico:
              </p>
              <ul>
                <li>
                  <strong>Educação:</strong> Estudantes não conseguem estudar à noite
                  por falta de luz, e escolas operam com recursos limitados.
                </li>
                <li>
                  <strong>Saúde:</strong> Hospitais e clínicas têm dificuldade em
                  armazenar medicamentos e vacinas adequadamente ou realizar
                  procedimentos básicos.
                </li>
                <li>
                  <strong>Economia:</strong> Pequenos negócios não podem operar de
                  forma eficiente, e famílias gastam uma grande parte de sua renda em
                  fontes de energia precárias como querosene ou velas.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="statistics-section py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h3 className="section-title">Números que Impressionam</h3>
              <p className="section-text">
                Dados revelam a gravidade da exclusão energética no Brasil:
              </p>
              <ul>
                <li>Mais de 1 milhão de pessoas vivem sem acesso à energia elétrica.</li>
                <li>
                  Comunidades indígenas e rurais são as mais afetadas, com índices de
                  exclusão superiores a 70%.
                </li>
                <li>
                  Cerca de 10% da renda familiar em áreas carentes é destinada a
                  fontes de energia alternativas e ineficientes.
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <img
                src={InequalityImg}
                alt="Desigualdade energética"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="impact-section py-5 bg-light">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="section-title">Impactos da Exclusão Energética</h2>
              <p className="section-text">
                A falta de acesso à energia elétrica perpetua ciclos de pobreza e
                desigualdade:
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <h4>Pobreza</h4>
              <p>
                Sem energia, as famílias têm oportunidades limitadas de melhorar sua
                renda ou investir na educação dos filhos.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <h4>Desigualdade</h4>
              <p>
                Regiões isoladas ficam para trás no acesso à tecnologia, saúde e
                desenvolvimento social.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <h4>Meio Ambiente</h4>
              <p>
                O uso de fontes de energia poluentes, como querosene, contribui para a
                degradação ambiental e a emissão de gases de efeito estufa.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="call-to-action-section py-5 text-center">
        <Container>
          <h2 className="section-title">Hora de Mudar</h2>
          <p className="section-text">
            A exclusão energética não é apenas um problema técnico, mas uma questão de
            justiça social. Nosso projeto visa resolver este problema e criar um
            futuro mais igualitário.
          </p>
          <Button as={NavLink} to="/solucao" size="lg">
            Veja Nossa Solução
          </Button>
        </Container>
      </section>
    </div>
  );
}

export default ProblemaPage;
