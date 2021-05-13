let btn = document.getElementById('btn')
let output = document.getElementById('output')

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click', function () {
    let input = document.getElementById('inputNumber').value;
    if (input == number) {
        output.innerHTML = `Your guess is Right, your number was ${number}!`
    } else if (input < number) {
        output.innerHTML = "Your guess is too Low, guess Higher!"
    } else if (input > number) {
        output.innerHTML = "Your guess is too High, guess Lower!"
    }

});