/*
2. FUP que leia o valor da hora do trabalhador e a quantidade de horas trabalhadas.
Imprima o valor que o trabalhador deverá receber ao final do mês.
*/

function run(app) {
  app.post('/api/exercicio2', (req, res) => {
    const result = multiplicar(req.body.vl_hora, req.body.qtd_horas);

    res.status(200).json({
      message: `Salário: R$ ${result}`,
    });
  });
}

function multiplicar(vl_hora, qtd_horas) {
  return vl_hora * qtd_horas;
}

module.exports = { run };
