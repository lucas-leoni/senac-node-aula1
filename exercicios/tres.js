// 3. FUP que solicite o peso de 5 pessoas e calcule a média. Imprima o resultado.

function run(app) {
  app.post('/api/exercicio1', (req, res) => {
    const result = somar(req.body.num1, req.body.num2);

    res.status(200).json({
      message: `Resultado: ${result}`,
    });
  });
}

function somar(num1, num2) {
  return num1 + num2;
}

module.exports = { run };
