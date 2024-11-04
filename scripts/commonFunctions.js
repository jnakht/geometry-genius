function setInnerTextById(elementId, areaValue) {
    const whereToSet = document.getElementById(elementId);
    whereToSet.innerText = areaValue;
}

function getValueById(inputFieldId) {
    const valueOfInput = document.getElementById(inputFieldId);
    const valueText = valueOfInput.value;
    const finalValue = parseFloat(valueText);
    // console.log(finalValue);
    return finalValue;
}