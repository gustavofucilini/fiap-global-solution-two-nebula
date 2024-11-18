import React from "react";
import "../scss/HomePage.scss";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import SolarPanelImg1 from "../assets/SolarPanel.png";
import SolarPanelImg2 from "../assets/solarpanel2.webp";

const teamMembers = [
  { name: 'Gustavo Gabriel Fucilini', role: 'Front-End', imgSrc: 'https://avatars.githubusercontent.com/u/63610589?v=4', rm: 'RM555788' },
  { name: 'Gabriel Araujo Almeida Barros', role: 'Front-End', imgSrc: 'https://avatars.githubusercontent.com/u/143835878?v=4', rm: 'RM557769' },
  { name: 'Bruno Lopes de Mello', role: 'Front-End', imgSrc: 'https://avatars.githubusercontent.com/u/10541956?v=4', rm: 'RM557343' },
  { name: 'Mikhael Groschitz Costa', role: 'Front-End', imgSrc: 'https://avatars.githubusercontent.com/u/161988867?v=4', rm: 'RM555814' },
];

function HomePage() {
  return (
    <div>
      <div className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="hero-title">
                Energia Solar para Comunidades Carentes
              </h1>
              <p className="hero-subtitle">
                Promovendo inclusão social e sustentabilidade ambiental por meio
                da energia limpa e renovável.
              </p>
              <Button as={NavLink} to="/about" size="lg" className="me-3">
                Saiba Mais
              </Button>
              <Button as={NavLink} to="/contato" variant="outline-light" size="lg">
                Fale Conosco
              </Button>
            </Col>
            <Col md={6}>
              <img src={SolarPanelImg1} alt="Energia Solar" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>

      <section className="challenges-section py-5 my-4">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h2 className="section-title">Desafios Propostos</h2>
              <br />
              <p className="section-text">
                Muitas comunidades no Brasil ainda vivem sem acesso à energia elétrica.
                Isso afeta diretamente a educação, saúde e o desenvolvimento
                econômico. Nosso objetivo é implementar microgrids solares que
                forneçam energia limpa, acessível e confiável para essas comunidades.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="benefits-section py-5 bg-light">
        <Container>
          <Row>
            <Col md={6}>
              <h3 className="section-title">Impacto Positivo</h3>
              <p className="section-text">
                Com a implantação de microgrids solares:
              </p>
              <ul>
                <li>Comunidades ganham autonomia energética.</li>
                <li>Reduzimos a emissão de carbono e protegemos o meio ambiente.</li>
                <li>Promovemos educação, saúde e novas oportunidades econômicas.</li>
              </ul>
            </Col>
            <Col md={6}>
              <img src={SolarPanelImg2} alt="Impacto Positivo" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="videos-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} className="mb-4">
              <div className="video-card">
                <h3 className="video-title text-center mb-4">Vídeo Pitch</h3>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/_VHOc7hhcDk?si=FA6Z3hFgCmutmNNZ"
                    title="Vídeo Pitch"
                    allowFullScreen
                    style={{width: "100%", height: "600px", border: "none"}}
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="team-section py-5 bg-light">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="section-title">Integrantes do Grupo</h2>
            </Col>
          </Row>
          <Row>
            {teamMembers.map((member, index) => (
              <Col md={3} key={index} className="mb-4">
                <Card className="team-card">
                  <Card.Img variant="top" src={member.imgSrc} alt={`Foto de ${member.name}`} />
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text>
                      {member.role}<br />
                      RM: {member.rm}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default HomePage;
