function InputValue(InputId) {
    const InputValueText = document.getElementById(InputId).value;
    const InputValue = parseFloat(InputValueText);
    return InputValue;
}


function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}
