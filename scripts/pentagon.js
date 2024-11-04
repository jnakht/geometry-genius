
function calculatePentagonArea() {
    const pValue = getValueById('pentagon-p-input');
    const bValue = getValueById('pentagon-b-input');
    const pentagonArea = 0.5 * pValue * bValue;
    setInnerTextById('calculatedPentagonArea', pentagonArea);
}