const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', handleNameLabel)

function handleNameLabel(event) {
    inputRef.value
        ? outputRef.textContent = event.target.value
        : outputRef.textContent = 'незнакомец'
}