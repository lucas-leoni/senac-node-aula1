// 1. FUP que solicite dois números reais, realize a soma. Imprima o resultado.

function run(app) {
  app.post('/api/exercicio1', (req, res) => {
    try {
      const result = somar(req.body.num1, req.body.num2);
      res.status(200).json({
        message: `Resultado: ${result}`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Deu ruim' });
    }
  });
}

function somar(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error('Favor informar números');
  }

  return num1 + num2;
}

module.exports = { run, somar };
