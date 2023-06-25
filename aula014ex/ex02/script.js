var botaoTabuada = document.getElementById('botaoTabuada')
botaoTabuada.addEventListener('click', gerarTabuada)

function gerarTabuada(){
    var numeroTxt = document.getElementById('numeroTxt')
    var selectTabuada = document.getElementById('selectTabuada')

    if (numeroTxt.value.length == 0){
        window.alert('Por favor, digite um numero!')
    } else {
        selectTabuada.innerHTML = ''
        var numero = Number(numeroTxt.value)
        for(var c = 1; c <= 10; c++){
            var option = document.createElement('option')
            option.text += `${numero} x ${c} = ${numero*c}`
            option.value = `selectTabuada${c}`
            selectTabuada.appendChild(option)
        }
    }
}