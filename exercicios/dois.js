import app from '../index.js';

export function dois() {
  app.post('/api/exercicio2', (req, res) => {
    const result = multiplicar(req.body.vl_hora, req.body.qtd_horas);

    res.status(200).json({
      message: `Salário: R$ ${result}`,
    });
  });
}

export function multiplicar(vl_hora, qtd_horas) {
  return vl_hora * qtd_horas;
}