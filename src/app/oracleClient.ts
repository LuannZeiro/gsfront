import oracledb from 'oracledb';

const dbConfig = {
  user: 'rm558548',
  password: '020603',
  connectString: 'oracle.fiap.com.br/ORCL',
};

export const connectToDB = async () => {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log('Connected to Oracle Database');
    return connection;
  } catch (err) {
    console.error('Error connecting to Oracle Database:', err);
    throw err;
  }
};

export const closeConnection = async (connection: oracledb.Connection) => {
  try {
    await connection.close();
    console.log('Connection closed');
  } catch (err) {
    console.error('Error closing connection:', err);
  }
};
