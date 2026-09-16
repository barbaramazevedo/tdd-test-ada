export type Parcelamento = {
  valor: number
  qtdParcelas: number
}

export function calcularParcelamento(valor:number, qtdParcelas:number): number {

    if (qtdParcelas <= 4) {
        return valor / qtdParcelas
    }

    return valor
}