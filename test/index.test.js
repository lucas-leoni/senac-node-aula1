const { describe, expect, it } = require('@jest/globals');
const { somar } = require('../exercicios/um');
const { calculaMedia } = require('../exercicios/nove');

describe('Testes dos exercícios', () => {
  it('Should sum two numbers', () => {
    const result = somar(1, 2);
    expect(result).toBe(3);
  });

  it('Should sum three grades and divide by three if approved', () => {
    const expected = { msg: 'Aprovado!', result: 7 };
    const media = calculaMedia([7, 7, 7]);

    expect(media).toStrictEqual(expected);
  });

  it('Should sum three grades and divide by three if recovery', () => {
    const expected = { msg: 'Recuperação!', result: 6 };
    const media = calculaMedia([6, 6, 6]);

    expect(media).toStrictEqual(expected);
  });

  it('Should sum three grades and divide by three if repproved', () => {
    const expected = { msg: 'Reprovado!', result: 4 };
    const media = calculaMedia([4, 4, 4]);

    expect(media).toStrictEqual(expected);
  });
});
