export type Parcelamento = {
  valor: number
  qtdParcelas: number
}

export function calcularParcelamento(valor:number, qtdParcelas:number): number {

    if (qtdParcelas <= 4) {
        return valor / qtdParcelas
    } else if (qtdParcelas >= 5 && qtdParcelas <=8) {
         return (valor * 1.05) / qtdParcelas
    }
    return valor
}