function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'dia.png'
        document.body.style.background = '#a0b8b8'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#c87451'
    } else {
        // BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#324c58'
    }
}
