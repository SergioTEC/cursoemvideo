var botaoAdicionar = document.getElementById('adicionar')
botaoAdicionar.addEventListener('click', adicionar)
var armazenaValor = []

function adicionar(){
    var numeroTxt = document.getElementById('numeroTxt')
    var numero = Number(numeroTxt.value)
    var select = document.getElementById('select')
    var resultado = document.getElementById('resultado')
    
    if(numero >= 1 && numero <= 100){

        //Limpa resultado ao adicionar um novo numero
        resultado.innerHTML = ''

        //Manipulação do Select/Option
        var option = document.createElement('option')
        option.text = `Valor ${numero} adicionado.`
        option.value = numero
        select.appendChild(option)

        //Manipulação do Array
        armazenaValor.push(option.value)

    } else {
        window.alert('Valor invalido ou já encontrado na lista')
    }

}

var botaoFinalizar = document.getElementById('finalizar')
botaoFinalizar.addEventListener('click', finalizar)

function finalizar(){

    resultado.innerHTML = `Ao todo, temos ${armazenaValor.length} numeros cadastrados.`

    /*
    if(Select vazio){
        window.alert('Adicione valores antes de finalizar')
    } else{

        //Mostra o resultado
        resultado.innerHTML = 'Ao todo, temos Array[all] numeros cadastrados.'
        resultado.innerHTML = 'O maior valor informado foi o Array[maior].'
        resultado.innerHTML = 'O menor valor informado foi o Array[menor].'
        resultado.innerHTML = 'Somando todos os valores, temos Soma=Array[All]'
        resultado.innerHTML = 'A media dos valores digitados é media=Array[All]/Qtd'
    }
    */
}