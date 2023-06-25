let botaoContar = document.getElementById('contar')
botaoContar.addEventListener('click', contar)

function contar(){
    let inicioTxt = document.getElementById('inicioTxt')
    let fimTxt = document.getElementById('fimTxt')
    let passoTxt = document.getElementById('passoTxt')
    let contagem = document.getElementById('contagem')

    if (inicioTxt.value.length == 0 || fimTxt.value.length == 0 || passoTxt.value.length == 0){
        contagem.innerHTML = 'Impossivel contar'
        window.alert('[ERRO] Faltam dados!')
    } else {
        contagem.innerHTML = 'Contando: <br>'
        let inicio = Number(inicioTxt.value)
        let fim = Number(fimTxt.value)
        let passo = Number(passoTxt.value)

        if (passo <= 0){
            window.alert('Passo invalido! considerando passo com o valor 1')
            passo = 1
        }

        if(inicio < fim){
            //Contagem crescente
            for(let c = inicio;c <= fim; c += passo){
                contagem.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem decrescente
            for(let c = inicio;c >= fim;c -= passo) {
                contagem.innerHTML += ` ${c} \u{1F449}`
            }
        }
        contagem.innerHTML += `\u{1F3C1}`
    }
}