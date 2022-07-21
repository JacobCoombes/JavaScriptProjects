let counter = 0

let number = document.getElementById('number')

document.getElementById('decrease-btn').onclick = function(){
    counter -= 1
    number.innerText = counter
}
document.getElementById('reset-btn').onclick = function(){
    counter = 0
    number.innerText = counter
}
document.getElementById('increase-btn').onclick = function(){
    counter += 1
    number.innerText = counter
}