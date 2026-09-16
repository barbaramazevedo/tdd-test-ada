export type Parcelamento = {
  valor: number
  qtdParcelas: number
}

const TAXAS_JUROS = [
    { limiteMax: 4, taxa: 0 },
    { limiteMax: 8, taxa: 0.05 },
    { limiteMax: 12, taxa: 0.08 },
    { limiteMax: 18, taxa: 0.10 }
]

function validarEntradas(valor: number, qtdParcelas: number): void {
    if (!Number.isInteger(qtdParcelas))
        throw new Error('Erro: número de parcelas tem que ser um número inteiro')
    if (qtdParcelas < 1)
        throw new Error('Erro: número de parcelas menor que 1')
    if (qtdParcelas > 18)
        throw new Error('Erro: número de parcelas maior que 18')
    if (valor <= 0)
        throw new Error('Erro: valor da compra tem que ser maior que zero')
}

export function calcularParcelamento(valor:number, qtdParcelas:number): number {
    validarEntradas(valor, qtdParcelas)

    const { taxa } = TAXAS_JUROS.find(f => qtdParcelas <= f.limiteMax)!
    const resultado = (valor * (1 + taxa)) / qtdParcelas

    return Math.round(resultado * 100) / 100
}