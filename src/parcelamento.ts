export type Parcelamento = {
  valor: number
  qtdParcelas: number
}

export function calcularParcelamento(valor:number, qtdParcelas:number): number {
    if (!Number.isInteger(qtdParcelas))
        throw new Error('Erro: número de parcelas tem que ser um número inteiro')
    if (qtdParcelas < 1)
        throw new Error('Erro: número de parcelas menor que 1')
    if (qtdParcelas > 18)
        throw new Error('Erro: número de parcelas maior que 18')
    if (valor <= 0)
        throw new Error('Erro: valor da compra tem que ser maior que zero')

    let resultado: number

    if (qtdParcelas <= 4) {
        resultado = valor / qtdParcelas
    } else if (qtdParcelas <= 8) {
        resultado = (valor * 1.05) / qtdParcelas
    } else if (qtdParcelas <= 12) {
        resultado = (valor * 1.08) / qtdParcelas
    } else {
        resultado = (valor * 1.10) / qtdParcelas
    }

    return Math.round(resultado * 100) / 100
}