import express from 'express';

const app = express();
const port = 3000;

app.get('/api/:userId/pessoa/:personId', (req, res) => {
  const nome = req.query.nome;
  const userId = req.params.userId;
  const personId = req.params.personId;

  res.json({
    message:
      `Você passou queryParam nome: ${nome}, ` +
      `routeParam userId: ${userId}, routeParam personId: ${personId}`,
  });
});

app.listen(port, () => {
  console.log(`App rodando na url: "http://localhost:${port}/api/"`);
});

// Comentário normal
//* Comentário importante
//! Corrigir
//todo A fazer
