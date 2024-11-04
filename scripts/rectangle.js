

function calculateRectangleArea() {
    // const widthInput = document.getElementById('width-input');
    // const widthValue = widthInput.value ;
    // const widthOfRectangle = parseFloat(widthValue);

    // const lengthInput = document.getElementById('length-input');
    // const lengthValue = lengthInput.value ;
    // const lengthOfRectangle = parseFloat(lengthValue);

    // // calculating
    // const area = widthOfRectangle * lengthOfRectangle;

    // // displaying
    // document.getElementById('calculated-rectangle-area').innerText = area;


    const widthValue = getValueById('width-input');
    const lengthValue = getValueById('length-input');
    const rectangleArea = widthValue * lengthValue;
    setInnerTextById('calculated-rectangle-area', rectangleArea);
    
}