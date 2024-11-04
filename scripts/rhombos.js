
function calculateRhombosArea() {
    
const d1Input = getValueById('rhombos-d1-input');
const d2Input = getValueById('rhombos-d2-input');
const rhombosArea = 0.5 * d1Input * d2Input;
setInnerTextById('calculatedRhombosArea', rhombosArea);
}