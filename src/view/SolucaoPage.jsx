import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import SolarImplementationImg from "../assets/SolarImplementation.png"; // Adicione essa imagem no assets
import SolarImplementatedImg from "../assets/SolarPanelImplemented.png"; // Adicione essa imagem no assets
import CommunityEmpowermentImg from "../assets/CommunityEmpowerment.png"; // Adicione essa imagem no assets

function SolucaoPage() {
  return (
    <div>
      <div className="hero-section p-5 ">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src={SolarImplementationImg}
                alt="Implementação de microgrids solares"
                className="img-fluid rounded"
              />
            </Col>
            <Col md={6}>
              <h1 className="hero-title">A Solução</h1>
              <p className="hero-subtitle">
                Microgrids solares: autonomia e sustentabilidade
              </p>
              <p>
                Através da implementação de microgrids solares, buscamos fornecer
                energia limpa, acessível e confiável para comunidades carentes. Essa
                solução não apenas reduz os custos com energia, mas também promove
                autonomia e desenvolvimento sustentável.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="details-section py-5 bg-light">
        <Container>
          <Row>
            <Col>
              <h2 className="section-title">Como Funciona?</h2>
              <p className="section-text">
                Os microgrids solares são sistemas descentralizados de energia que
                utilizam painéis solares para geração e baterias para armazenamento.
                Isso permite que comunidades locais:
              </p>
              <ul>
                <li>Operem independentemente de grandes redes elétricas.</li>
                <li>Gerem sua própria energia limpa de forma sustentável.</li>
                <li>Tenham resiliência energética em caso de falhas nas redes principais.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="impact-section py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h3 className="section-title">Impactos Positivos</h3>
              <p className="section-text">
                A implementação de microgrids solares impacta positivamente a vida de
                comunidades carentes de diversas formas:
              </p>
              <ul>
                <li>
                  <strong>Redução de custos:</strong> Energia renovável é mais
                  acessível e reduz despesas com querosene ou lenha.
                </li>
                <li>
                  <strong>Autonomia:</strong> Comunidades podem produzir sua própria
                  energia, promovendo independência.
                </li>
                <li>
                  <strong>Sustentabilidade:</strong> Diminui emissões de carbono e
                  protege o meio ambiente.
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <img
                src={CommunityEmpowermentImg}
                alt="Empoderamento das comunidades"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="implementation-section py-5 bg-light">
        <Container>
          <Row>
            <Col md={6}>
              <h3 className="section-title">Etapas de Implementação</h3>
              <p className="section-text">
                Para garantir o sucesso do projeto, seguimos as seguintes etapas:
              </p>
              <ol>
                <li>
                  <strong>Diagnóstico:</strong> Identificação de comunidades carentes
                  e avaliação de suas necessidades energéticas.
                </li>
                <li>
                  <strong>Planejamento:</strong> Design dos microgrids, incluindo
                  dimensionamento de painéis solares e baterias.
                </li>
                <li>
                  <strong>Implementação:</strong> Instalação de sistemas solares e
                  treinamento de moradores para operação e manutenção.
                </li>
                <li>
                  <strong>Monitoramento:</strong> Uso de tecnologias para acompanhar o
                  desempenho dos sistemas e garantir eficiência contínua.
                </li>
              </ol>
            </Col>
            <Col md={6}>
              <img
                src={SolarImplementatedImg}
                alt="Processo de implementação"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="call-to-action-section py-5 text-center">
        <Container>
          <h2 className="section-title">Faça Parte da Solução</h2>
          <p className="section-text">
            Junte-se a nós neste projeto que transforma vidas e promove um futuro
            mais sustentável para todos. Com sua ajuda, podemos levar energia limpa e
            acessível para mais comunidades.
          </p>
          <Button as={NavLink} to="/contato" size="lg">
            Entre em Contato
          </Button>
        </Container>
      </section>
    </div>
  );
}

export default SolucaoPage;
