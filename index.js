const express = require('express');
const exercicios = require('./exercicios/exercicios.js');

const app = express();
app.use(express.json());

const port = 3000;

exercicios.run(app);

app.listen(port, () => {
  console.log(`App rodando na url: "http://localhost:${port}/api/"`);
});