
function calculateTriangleArea() {
    // // base value
    // const baseInput = document.getElementById('base-input');
    // const baseValue = baseInput.value;
    // const baseOfTheTriangle = parseFloat(baseValue);
    


    // // height
    // const heightInput = document.getElementById('height-input');
    // const heightValue = heightInput.value;
    // const heightOfTheTriangle = parseFloat(heightValue);
    
    // // area calculation
    // const area = 0.5 * baseOfTheTriangle * heightOfTheTriangle;


    // // display area
    // document.getElementById('calculated-area').innerText = area;

    const baseValue = getValueById('base-input');
    const heightValue = getValueById('height-input');
    const triangleArea = 0.5 * baseValue * heightValue;
    setInnerTextById('calculated-area', triangleArea);
}