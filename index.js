/*
1. FUP que solicite dois numeros reais, realize a soma; Imprima o resultado.
2. FUP que leia o valor da hora do trabalhador e a quantidade de horas trabalhadas.
   Imprima o valor que o trabalhador deverá receber ao final do mês.
3. FUP que solicite o peso de 5 pessoas e calcule a media; Imprima o resultado.
4. Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit.
   A fórmula de conversão é : F = (9*C+160)/5 Sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
5. FUP que solicite a quantidade de milhas e converta para quilometros (1milha = 1.60934kms);
*/

import express from 'express';
import { somar } from './exercicios/um.js';

const app = express();
app.use(express.json());

const port = 3000;

app.get('/api/exercicio1', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  res.json({
    message: `Resultado: ${num1 + num2}`,
  });
});

app.post('/api/exercicio1', (req, res) => {
  const result = somar(req.body.num1, req.body.num2);

  res.status(200).json({
    message: `Resultado: ${result}`,
  });
});

app.listen(port, () => {
  console.log(`App rodando na url: "http://localhost:${port}/api/"`);
});

// Comentário normal
//* Comentário importante
//! Corrigir
//todo A fazer
