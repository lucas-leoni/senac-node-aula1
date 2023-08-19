import app from '../index.js';

export function um() {
  app.post('/api/exercicio1', (req, res) => {
    const result = somar(req.body.num1, req.body.num2);

    res.status(200).json({
      message: `Resultado: ${result}`,
    });
  });
}

export function somar(num1, num2) {
  return num1 + num2;
}