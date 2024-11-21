import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDB, closeConnection } from '../oracleClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { nome, dataNascimento } = req.body;

  if (!nome || !dataNascimento) {
    return res.status(400).json({ message: 'Nome e Data de Nascimento são obrigatórios' });
  }

  const connection = await connectToDB();

  try {
    const query = `
      INSERT INTO USERS (NOME, DATA_NASCIMENTO) 
      VALUES (:nome, TO_DATE(:dataNascimento, 'YYYY-MM-DD'))
    `;
    await connection.execute(query, { nome, dataNascimento }, { autoCommit: true });

    res.status(200).json({ message: 'Cadastro realizado com sucesso!' });
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ message: 'Erro ao salvar os dados' });
  } finally {
    await closeConnection(connection);
  }
}
