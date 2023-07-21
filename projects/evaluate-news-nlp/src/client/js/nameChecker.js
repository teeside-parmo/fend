function checkForName(inputText) {
    console.log("::: Running checkForInputText :::", inputText);
    if (inputText === '') {
        return true
    } else {
        return false
    }
}

function onBlur(){}

export { checkForName, onBlur }