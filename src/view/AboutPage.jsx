import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SolarCommunityImg from "../assets/SolarCommunity.jpg"; // Adicione essa imagem no assets
import SolarMicrogridImg from "../assets/SolarMicrogrid.png"; // Adicione essa imagem no assets
import { NavLink } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <div className="hero-section p-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src={SolarCommunityImg}
                alt="Comunidade beneficiada por energia solar"
                className="img-fluid rounded"
              />
            </Col>
            <Col md={6}>
              <h1 className="hero-title">Sobre o Projeto</h1>
              <p className="hero-subtitle">
                Energia Solar para Comunidades Carentes
              </p>
              <p>
                Este projeto tem como objetivo transformar a vida de comunidades
                carentes no Brasil por meio da implementação de sistemas de
                microgrids solares, proporcionando acesso à energia limpa, acessível
                e sustentável.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="details-section py-5 bg-light">
        <Container>
          <Row>
            <Col>
              <h2 className="section-title">Por que Energia Solar?</h2>
              <p className="section-text">
                A energia solar é uma das soluções mais promissoras para enfrentar os
                desafios climáticos e sociais do nosso tempo. No Brasil, onde a
                incidência solar é abundante, o uso de painéis solares pode democratizar
                o acesso à eletricidade, reduzir emissões de carbono e criar
                oportunidades de desenvolvimento econômico.
              </p>
              <ul>
                <li>
                  <strong>Inclusão Social:</strong> Permitir que comunidades carentes
                  tenham acesso a uma infraestrutura energética confiável.
                </li>
                <li>
                  <strong>Sustentabilidade:</strong> Contribuir para a redução da
                  dependência de combustíveis fósseis.
                </li>
                <li>
                  <strong>Desenvolvimento Econômico:</strong> Criar empregos locais e
                  capacitar moradores para operar e manter os sistemas.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="technology-section py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h3 className="section-title">Como Funcionam os Microgrids Solares?</h3>
              <p className="section-text">
                Microgrids solares são sistemas de energia localizados que utilizam
                painéis solares para gerar eletricidade e baterias para armazená-la.
                Eles podem operar independentemente ou conectados à rede elétrica
                principal, proporcionando resiliência energética.
              </p>
              <p>
                Nosso projeto utiliza tecnologias modernas para monitorar e otimizar o
                uso da energia em tempo real, garantindo eficiência e menor desperdício.
              </p>
            </Col>
            <Col md={6}>
              <img
                src={SolarMicrogridImg}
                alt="Ilustração de microgrid solar"
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
              <h2 className="section-title">Impacto do Projeto</h2>
              <p className="section-text">
                A implementação de sistemas de energia solar em comunidades carentes
                tem impacto direto e positivo em várias áreas:
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <h4>Educação</h4>
              <p>
                Acesso à eletricidade permite que escolas funcionem à noite,
                proporcionem melhores recursos de aprendizado e conectem estudantes à
                internet.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <h4>Saúde</h4>
              <p>
                Hospitais e clínicas podem operar com maior eficiência, armazenar
                medicamentos e vacinas corretamente e fornecer cuidados básicos
                contínuos.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <h4>Economia</h4>
              <p>
                Famílias podem reduzir custos com querosene ou lenha e investir em
                pequenos negócios locais, aumentando a renda da comunidade.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="call-to-action-section py-5 text-center">
        <Container>
          <h2 className="section-title">Junte-se a Nós!</h2>
          <p className="section-text">
            Acreditamos que juntos podemos criar um futuro mais sustentável e
            inclusivo. Este projeto é uma oportunidade de fazer a diferença na vida
            de milhares de pessoas.
          </p>
          <Button as={NavLink} to="/contato" size="lg">
            Entre em Contato
          </Button>
        </Container>
      </section>
    </div>
  );
}

export default AboutPage;
