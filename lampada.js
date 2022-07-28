const liga = document.getElementById('liga')
const desliga = document.getElementById('desliga')
const lampada = document.getElementById('lampada')

function quebrouOuNao() {
    return lampada.src.indexOf('quebrada') > -1
}

function ligaLampada() {
    if(!quebrouOuNao()) {
        lampada.src = "./ligada.jpeg"
    }
}

function desligaLampada() {
    if(!quebrouOuNao()) {
        lampada.src = "./desligada.jpeg"
    }
}

function quebraLampada() {
    lampada.src = "./quebrada.jpeg"
}

lampada.addEventListener('mouseover', ligaLampada)
lampada.addEventListener('mouseleave', desligaLampada)
lampada.addEventListener('dblclick', quebraLampada)