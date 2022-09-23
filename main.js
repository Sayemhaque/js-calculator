const button = document.querySelectorAll('#btn');
const resultBtn = document.querySelector('#resultBtn');
const resetBtn = document.querySelector('#resetBtn');
const deleteLastDigit = document.querySelector('#deleteLastDigit');
const display = document.getElementById('display');



button.forEach((btn) => {
    btn.addEventListener('click' , () => {
        display.value += btn.value;
        console.log(btn.value)
    })
})

function calculate () {
     const typedValue = display.value;
     const resultValue = eval(typedValue)
     display.value = resultValue;
}


resultBtn.addEventListener('click' , calculate)


function reset () {
    return display.value = ""
}


resetBtn.addEventListener('click' , reset)



function del () {
    display.value = display.value.slice(0 , -1)
}

deleteLastDigit.addEventListener('click' , del)