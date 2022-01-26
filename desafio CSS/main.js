const BGC = document.getElementById('background_color')
const PAD_TOP_BOT = document.getElementById('paddingTopBotton')
const PAD_LEFT_RIGHT = document.getElementById('paddingLeftRigth')
const TXT = document.getElementById('text')
const BORDER_RAD = document.getElementById('border_radius')
const FONT_SIZE = document.getElementById('font_size')
const COLOUR = document.getElementById('color')
const BOTAO = document.querySelector('#resultado button')

// BGC.addEventListener('input', input => bcg(input.target.value))

inputListener(BGC, bcg)
inputListener(PAD_TOP_BOT, padTP)
inputListener(PAD_LEFT_RIGHT, padLR)
inputListener(TXT, buttonText)
inputListener(BORDER_RAD, borderRad)
inputListener(FONT_SIZE, fontSize)
inputListener(COLOUR, buttonColor)

BOTAO.addEventListener('click', function (click) {
    document.getElementById('css').innerText = BOTAO.getAttribute('style')
})


function bcg(valor) {
    BOTAO.style.backgroundColor = valor
}
function padTP(valor) {
    BOTAO.style.paddingTop = `${valor}px`
    BOTAO.style.paddingBottom = `${valor}px`
}
function padLR(valor) {
    BOTAO.style.paddingLeft = `${valor}px`
    BOTAO.style.paddingRight = `${valor}px`
}
function buttonText(valor) {
    BOTAO.innerText = valor
}
function borderRad(valor) {
    BOTAO.style.borderRadius = `${valor}px`
}
function fontSize(valor) {
    BOTAO.style.fontSize = `${valor}px`
}
function buttonColor(valor) {
    BOTAO.style.color = valor
}
function inputListener(variavel, fun) {
    variavel.addEventListener('input', input => fun(input.target.value))
}
