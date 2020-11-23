const valueRef = document.querySelector('#value');
let valueCounter = Number(valueRef.textContent);

const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');

btnDecrementRef.addEventListener('click', handleDecrement);
btnIncrementRef.addEventListener('click',  handleIncrement);

function handleDecrement () {
    if (valueCounter> 0) {
        valueCounter -= 1;
        valueRef.textContent = valueCounter
    }
} 

function handleIncrement() {
    valueCounter += 1;
    valueRef.textContent = valueCounter
}
