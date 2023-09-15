/*
9. FUP que calcule a média aritmética das 3 notas de um aluno e mostre, além do valor da média, uma
mensagem de "Aprovado", caso a média seja igual ou superior a 7, a mensagem "Recuperação", caso a média
seja igual ou superior a 5 e inferior a 7, ou a mensagem “Reprovado”, caso a média seja inferior a 5.
*/

function run(app) {
  app.post('/api/exercicio9', (req, res) => {
    try {
      const notas = req.body.notas;
      const { msg, result } = calculaMedia(notas);

      res.json({ message: msg, media: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Deu ruim' });
    }
  });
}

function calculaMedia(notas) {
  if (notas.length !== 3) {
    throw new Error('Favor informar 3 notas');
  }

  const media = (notas[0] + notas[1] + notas[2]) / 3;

  if (media >= 7) {
    return { msg: 'Aprovado!', result: media };
  } else if (media >= 5 && media < 7) {
    return { msg: 'Recuperação!', result: media };
  } else {
    return { msg: 'Reprovado!', result: media };
  }
}

module.exports = { run, calculaMedia };
