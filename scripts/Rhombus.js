function RhombusCalculate(){
    const rhombusDiagonal1 = InputValue('rhombus-diagonal1');

    const rhombusDiagona2 = InputValue('rhombus-diagonal12');

    const area = 0.5 * rhombusDiagonal1 * rhombusDiagona2;
    // console.log(area);

    setInnerTextById('rhombus-area', area);
}