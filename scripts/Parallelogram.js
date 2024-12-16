function ParallelogramCalculate(){
    const parallelogramBase = InputValue('parallelogram-base');
    
    const parallelogramHeight = InputValue('parallelogram-height');

    const area = parallelogramBase * parallelogramHeight;
    // console.log(area);

    setInnerTextById('parallelogram-area', area);
}