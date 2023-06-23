var botaoVerificar = document.getElementById('verificar')
botaoVerificar.addEventListener('click', verificar)

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtAno')
    var resultado = document.querySelector('div#resultado')
    
    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var radgenero = document.getElementsByName('radgenero')
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'imagem')
        
        if(radgenero[0].checked){
            genero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                //Criança
                imagem.setAttribute('src', '/aula012ex/ex02/contents/m_bebe.jpg')
            } else if(idade < 22) {
                //Jovem
                imagem.setAttribute('src', '/aula012ex/ex02/contents/m_jovem.jpg')
            } else if(idade < 50) {
                //Adulto
                imagem.setAttribute('src', '/aula012ex/ex02/contents/m_adulto.jpg')
            } else {
                //Idoso
                imagem.setAttribute('src', '/aula012ex/ex02/contents/m_idoso.jpg')
            }
        } else  if(radgenero[1].checked){
            genero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                //Criança
                imagem.setAttribute('src', '/aula012ex/ex02/contents/f_bebe.jpg')
            } else if(idade < 22) {
                //Jovem
                imagem.setAttribute('src', '/aula012ex/ex02/contents/f_jovem.jpg')
            } else if(idade < 50) {
                //Adulto
                imagem.setAttribute('src', '/aula012ex/ex02/contents/f_adulto.jpg')
            } else {
                //Idoso
                imagem.setAttribute('src', '/aula012ex/ex02/contents/f_idoso.jpg')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resultado.appendChild(imagem)
    }
}