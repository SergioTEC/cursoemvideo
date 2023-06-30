var numero = document.getElementById('numero')
var lista = document.getElementById('sLista')
var resultado = document.getElementById('resultado')
var valores = []

//Verifica se o numero esta de acordo com o estipulado
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

//Verifica se o numero esta na lista
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        //Manipulação do Array
        valores.push(Number(numero.value))

        //Manipulação do Select
        var item = document.createElement('option')
        item.text += `Valor ${numero.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){

    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else {
        //Manipulação do Array
        let total = valores.length
        let maiorNumero = valores[0] 
        let menorNumero = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maiorNumero)
                maiorNumero = valores[pos]
            if(valores[pos] < menorNumero)
                menorNumero = valores[pos]
        }
        media = soma / valores.length

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${total} numeros cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maiorNumero}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menorNumero}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>A media dos valores digitados é ${media.toFixed(2)}</p>.`
    }
}