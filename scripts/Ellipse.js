function EllipseCalculate(){
    const ellipseMajor = InputValue('ellipse-major');

    const ellipseMinor = InputValue('ellipse-minor');

    const area = Math.PI * ellipseMajor * ellipseMinor;
    // console.log(area);

    setInnerTextById('ellipse-area', area);
}