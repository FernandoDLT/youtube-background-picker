document.getElementById('violet').onclick = partyViolet
document.getElementById('green').onclick = partygreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('yellow').onclick = partyYellow
document.getElementById('red').onclick = partyRed
document.getElementById('orange').onclick = partyOrange
document.getElementById('dodgerBlue').onclick = partyDodgerBlue

function partyViolet() {
    document.querySelector('body').style.backgroundColor = 'violet'
    document.querySelector('body').style.color = 'white'
}
function partygreen() {
    document.querySelector('body').style.backgroundColor = 'rgba(0, 253, 81, 1)'
    document.querySelector('body').style.color = 'white'
}
function partyBlue() {
    document.querySelector('body').style.backgroundColor = 'rgba(0, 254, 255)'
    document.querySelector('body').style.color = 'white'
}
function partyYellow() {
    document.querySelector('body').style.backgroundColor = 'yellow'
    document.querySelector('body').style.color = 'white'
}
function partyRed() {
    document.querySelector('body').style.backgroundColor = 'red'
    document.querySelector('body').style.color = 'white'
}
function partyOrange() {
    document.querySelector('body').style.backgroundColor = 'orange'
    document.querySelector('body').style.color = 'white'
}
function partyDodgerBlue() {
    document.querySelector('body').style.backgroundColor = 'dodgerBlue'
    document.querySelector('body').style.color = 'white'
}