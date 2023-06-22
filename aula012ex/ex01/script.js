function carregar(){
    var mostraHoras = window.document.getElementById('mostraHoras')
    var imagem = window.document.getElementById('imagem')

    var date = new Date()
    var hora = date.getHours()
    
    mostraHoras.innerHTML = `<strong>Agora são ${hora} horas.</strong>`

    if(hora >= 0 & hora < 12){
        imagem.src = "/aula012ex/ex01/contents/manha01.jpg"
        document.body.style.background = '#CCC870'
    } else if(hora >= 12 & hora < 18){
        imagem.src = "/aula012ex/ex01/contents/tarde01.jpg"
        document.body.style.background = '#6A5C23'
    } else {
        imagem.src = "/aula012ex/ex01/contents/noite01.jpg"
        document.body.style.background = '#1C233B'
    }
}