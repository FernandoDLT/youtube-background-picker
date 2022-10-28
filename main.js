document.getElementById('violet').onclick = partyViolet
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('yellow').onclick = partyYellow
document.getElementById('red').onclick = partyRed
document.getElementById('orange').onclick = partyOrange
document.getElementById('dodgerBlue').onclick = partyDodgerBlue

function partyViolet() {
    document.querySelector('body').style.backgroundColor = 'rgb(240, 100, 240)'
    document.querySelector('body').style.color = 'yellow'
}

function partyGreen() {
    document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
    document.querySelector('body').style.color = 'blue'
}

function partyBlue() {
    document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
    document.querySelector('body').style.color = 'yellow'
}
function partyYellow() {
    document.querySelector('body').style.backgroundColor = 'rgb(238, 238, 83)'
    document.querySelector('body').style.color = 'red'
}

function partyRed() {
    document.querySelector('body').style.backgroundColor = 'rgb(232, 41, 41)'
    document.querySelector('body').style.color = 'pink'
}
function partyOrange() {
    document.querySelector('body').style.backgroundColor = 'rgb(241, 139, 5)'
    document.querySelector('body').style.color = 'green'
}
function partyDodgerBlue() {
    document.querySelector('body').style.backgroundColor = 'rgb(30, 144, 255)'
    document.querySelector('body').style.color = 'yellow'
}