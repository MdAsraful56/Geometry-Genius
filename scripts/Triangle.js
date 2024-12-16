function TriangleCalculate(){
    const triangleBaseText = document.getElementById('triangle-base').value;
    const triangleBase = parseFloat(triangleBaseText);
    // console.log(triangleBase);

    const triangleHeightText = document.getElementById('triangle-height').value;
    const triangleHeight = parseFloat(triangleHeightText);
    // console.log(triangleHeight);

    const area = 0.5 * triangleBase * triangleHeight;
    // console.log(area);


    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}