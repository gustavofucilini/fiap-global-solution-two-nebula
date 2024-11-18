import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <Container className="py-5">
      <h2>Contato</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" name="nome" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mensagem</Form.Label>
          <Form.Control as="textarea" name="mensagem" onChange={handleChange} />
        </Form.Group>
        <Button type="submit" className="mt-3">
          Enviar
        </Button>
      </Form>
      {success && <Alert variant="success">Mensagem enviada com sucesso!</Alert>}
    </Container>
  );
}

export default ContatoPage;
