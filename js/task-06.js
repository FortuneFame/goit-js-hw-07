const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', handleInputChange);
inputRef.addEventListener('focus', handleInputFocus);
    
function handleInputChange (event) {
    if (event.target.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.add('valid') 
    } else {
        inputRef.classList.remove('valid')
        inputRef.classList.add('invalid')
    }
}

function handleInputFocus() {
    inputRef.classList.remove('valid', 'invalid')
}

