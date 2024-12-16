function RectangleCalculate(){
    const rectangleWidthText = document.getElementById('rectangle-width').value;
    const rectangleWidth = parseFloat(rectangleWidthText);
    // console.log(rectangleWidth);

    const rectangleLengthText = document.getElementById('rectangle-length').value;
    const rectangleLength = parseFloat(rectangleLengthText);
    // console.log(rectangleLength);

    const area = rectangleWidth * rectangleLength;
    // console.log(area);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}
