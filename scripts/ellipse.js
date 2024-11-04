

function calculateEllipseArea() {
    const aValue = getValueById('ellipse-a-input');
    const bValue = getValueById('ellipse-b-input');

    const ellipseArea = 3.1416 * aValue * bValue;
    setInnerTextById('calculatedEllipseArea', ellipseArea);
}