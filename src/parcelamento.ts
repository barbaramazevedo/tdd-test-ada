export type Parcelamento = {
  valor: number
  qtdParcelas: number
}

export function calcularParcelamento(valor:number, qtdParcelas:number): number {
    let resultado : number

    if (qtdParcelas <= 4) {
        resultado = valor / qtdParcelas
    } else if (qtdParcelas >= 5 && qtdParcelas <= 8) {
        resultado = (valor * 1.05) / qtdParcelas
    } else if (qtdParcelas >= 9 && qtdParcelas <= 12) {
        resultado = (valor * 1.08) / qtdParcelas
     } else {
        resultado = (valor * 1.10) / qtdParcelas
    }


    return Math.round(resultado * 100) / 100
}