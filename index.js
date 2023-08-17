import express from 'express';

const app = express();
const port = 3000;

app.get('/api/', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  res.json({
    message: `Número 1: ${num1}\n Número 2: ${num2}`,
  });
});

app.listen(port, () => {
  console.log(`App rodando na url: "http://localhost:${port}/api/"`);
});

// Comentário normal
//* Comentário importante
//! Corrigir
//todo A fazer
