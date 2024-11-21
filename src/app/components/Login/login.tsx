'use client';

import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px 40px;
  font-family: Arial, sans-serif;
  background-color: white;
  border-radius: 30px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #555;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  color: white;
  background-color: #0070f3;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: green;
  text-align: center;
`;

const Login = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, dataNascimento }),
    });

    const data = await response.json();
    setMessage(data.message);

    if (response.ok) {
      setNome('');
      setDataNascimento('');
    }
  };

  return (
    <Container>
      <Title>Cadastro</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="nome">Nome Completo</Label>
          <Input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="dataNascimento">Data de Nascimento</Label>
          <Input
            type="date"
            id="dataNascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </FormGroup>
        <Button type="submit">Cadastrar</Button>
      </Form>
      {message && <Message>{message}</Message>}
    </Container>
  );
};

export default Login;
