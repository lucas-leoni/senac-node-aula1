/*
3. FUP que solicite o peso de 5 pessoas e calcule a media; Imprima o resultado.
4. Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit.
   A fórmula de conversão é : F = (9*C+160)/5 Sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
5. FUP que solicite a quantidade de milhas e converta para quilometros (1milha = 1.60934kms);
*/

import express from 'express';
import { exercicios } from './exercicios/exercicios.js';

const app = express();
app.use(express.json());
export default app;

const port = 3000;

exercicios();

app.listen(port, () => {
  console.log(`App rodando na url: "http://localhost:${port}/api/"`);
});
