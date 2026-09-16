import { describe, expect, it } from 'vitest'
import { calcularParcelamento } from './parcelamento'

describe('calcularParcelamento', () => {
    describe('sem juros (1x a 4x)', () => {
        it('retorna o valor total em parcela única quando for 1x', () => {
            //Act
            const valorTotalParcelaUnica = calcularParcelamento(1000, 1)
    
            //Assert
            expect(valorTotalParcelaUnica).toBe(1000)
        })
        
        it('divide o valor sem juros quando for 4x', () => {
            //Act
            const valorParcelaQuatro = calcularParcelamento(1000, 4)
    
            //Assert
            expect(valorParcelaQuatro).toBe(250)
        })
    })

    describe('com juros', () => {
        it('aplica 5% sobre o total quando for de 5x a 8x', () => {
            const valorParcelaOito = calcularParcelamento(1000, 8)
            expect(valorParcelaOito).toBe(131.25)
        })

        it('aplica 8% sobre o total quando for de 9x a 12x', () => {
        })

        it('aplica 10% sobre o total quando for de 13x a 18x', () => {
        })

        it('aplica a faixa correta nos limites (4x, 5x, 8x, 9x, 12x, 13x)', () => {
        })
    })

    describe('arredondamento', () => {
        it('arredonda o valor da parcela para 2 casas decimais')
    })

    describe('validações', () => {
        it('lança erro quando o número de parcelas for menor que 1')
        it('lança erro quando o número de parcelas for maior que 18')
        it('lança erro quando o número de parcelas não for inteiro')
        it('lança erro quando o valor da compra for zero ou negativo')
    })
})