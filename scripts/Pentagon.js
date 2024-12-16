function PentagonCalculate(){
    const pentagonPerimater = InputValue('pentagon-perimater');

    const pentagonApothem = InputValue('pentagon-apothem');

    const area = 0.5 * pentagonPerimater * pentagonApothem;
    // console.log (area);

    setInnerTextById('pentagon-area', area);
}
