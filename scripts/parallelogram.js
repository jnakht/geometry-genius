



function calculateParallelogramArea() {

    const baseOfParallelogram = getValueById('parallelogram-base');
    

    const heightOfParallelogram = getValueById('parallelogram-height');

    // area calculation
    const areaOfParallelogram = baseOfParallelogram * heightOfParallelogram;

    // set innertext by function
    setInnerTextById('parallelogram-area', areaOfParallelogram);

}

