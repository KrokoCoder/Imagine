var drawOnCanvas; // Define drawOnCanvas globally
var currentColor = "#000000";
var context;
var lineWidth = [0, 5, 10, 20, 30, 40, 50, 75, 100]
var font = "Arial";
var fontSize = 30;
var shapeMakerList = {
    "line": function(x1, y1, x2, y2) {
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    },
    "circle": function(x, y, radius, startAngle, endAngle, anticlockwise) {
        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        context.stroke();
    },
    "rectangle": function(x, y, width, height) {
        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke();
    },
    "triangle": function(x1, y1, x2, y2, x3, y3) {
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);
        context.closePath();
        context.stroke();
    },
    "square": function(x, y, size) {
        context.beginPath();
        context.rect(x, y, size, size);
        context.stroke();
    },
};


function BrushPaint() {
    var canvas = document.getElementById('board');
    drawOnCanvas = canvas.getContext('2d'); // Assign to the global variable
    var isDrawing = false;
    var mouse = { x: 0, y: 0 };
    var last_mouse = { x: 0, y: 0 };

    canvas.addEventListener('mousedown', function (e) {
        isDrawing = true;
        setPosition(e);
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;
    });

    canvas.addEventListener('mousemove', function (e) {
        if (!isDrawing) return;
        drawLine(e);
        setPosition(e);
    });

    canvas.addEventListener('mouseup', function () {
        isDrawing = false;
        last_mouse = { x: 0, y: 0 };
    });

    function setPosition(e) {
        var rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    }

    function drawLine(e) {
        drawOnCanvas.beginPath();
        drawOnCanvas.strokeStyle = currentColor;
        drawOnCanvas.lineWidth = lineWidth[2];
        drawOnCanvas.lineCap = 'round';

        drawOnCanvas.moveTo(last_mouse.x, last_mouse.y);
        setPosition(e);
        drawOnCanvas.lineTo(mouse.x, mouse.y);
        drawOnCanvas.stroke();
        drawOnCanvas.closePath();

        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;
    }
}
function Pencil(){
var canvas = document.getElementById('board');
drawOnCanvas = canvas.getContext('2d'); // Assign to the global variable
var isDrawing = false;
var mouse = { x: 0, y: 0 };
var last_mouse = { x: 0, y: 0 };

canvas.addEventListener('mousedown', function (e) {
    isDrawing = true;
    setPosition(e);
    last_mouse.x = mouse.x;
    last_mouse.y = mouse.y;
});

canvas.addEventListener('mousemove', function (e) {
    if (!isDrawing) return;
    drawLine(e);
    setPosition(e);
});

canvas.addEventListener('mouseup', function () {
    isDrawing = false;
    last_mouse = { x: 0, y: 0 };
});

function setPosition(e) {
    var rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
}

function drawLine(e) {
    drawOnCanvas.beginPath();
    drawOnCanvas.strokeStyle = currentColor;
    drawOnCanvas.lineWidth = lineWidth[0];
    drawOnCanvas.lineCap = 'round';

    drawOnCanvas.moveTo(last_mouse.x, last_mouse.y);
    setPosition(e);
    drawOnCanvas.lineTo(mouse.x, mouse.y);
    drawOnCanvas.stroke();
    drawOnCanvas.closePath();

    last_mouse.x = mouse.x;
    last_mouse.y = mouse.y;
}
}
function Marker(){
    var canvas = document.getElementById('board');
    drawOnCanvas = canvas.getContext('2d'); // Assign to the global variable
    var isDrawing = false;
    var mouse = { x: 0, y: 0 };
    var last_mouse = { x: 0, y: 0 };

    canvas.addEventListener('mousedown', function (e) {
        isDrawing = true;
        setPosition(e);
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;
    });

    canvas.addEventListener('mousemove', function (e) {
        if (!isDrawing) return;
        drawLine(e);
        setPosition(e);
    });

    canvas.addEventListener('mouseup', function () {
        isDrawing = false;
        last_mouse = { x: 0, y: 0 };
    });

    function setPosition(e) {
        var rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    }

    function drawLine(e) {
        drawOnCanvas.beginPath();
        drawOnCanvas.strokeStyle = currentColor;
        drawOnCanvas.lineWidth = lineWidth[4];
        drawOnCanvas.lineCap = 'round';

        drawOnCanvas.moveTo(last_mouse.x, last_mouse.y);
        setPosition(e);
        drawOnCanvas.lineTo(mouse.x, mouse.y);
        drawOnCanvas.stroke();
        drawOnCanvas.closePath();

        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;
    }
}

function Eraser(){
    currentColor = "#ffffff";
}
function Fill(){
    var canvas = document.getElementById("board");
    var context = canvas.getContext("2d");
    context.fillStyle = currentColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

}
function BlackBoard(){
    var canvas = document.getElementById("board");
    var context = canvas.getContext("2d");
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function RedBrush() {
    currentColor = "#ff0000";
}
function BlueBrush() {
    currentColor = "#0000ff";
}
function GreenBrush() {
    currentColor = "#00ff00";
}
function YellowBrush() {
    currentColor = "#ffff00";
}
function BlackBrush() {
    currentColor = "#000000";
}
function WhiteBrush(){
    currentColor = "#ffffff";
}
function OrangeBrush(){
    currentColor = "#ffa500"; 
}
function PurpleBrush(){
    currentColor = "#800080";
}
function PinkBrush(){
    currentColor = "#ffc0cb";
}
function BrownBrush(){
    currentColor = "#7c4c2c";
}
function GreyBrush(){
    currentColor = "#808080";
}
function CustomColor(){
    currentColor = document.getElementById("color").value;
}
function ClearBoard(){
    var canvas = document.getElementById("board");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}
function Circle(){
    var canvas = document.getElementById("board");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100, 75, 50, 0, 2 * Math.PI);
    context.FillStyle = currentColor;
    context.fill();
    context.stroke();
}
function FillNotFullBoard(){
    var canvas = document.getElementById('board');
    fillOnCanvas = canvas.getContext('2d'); // Assign to the global variable
    var isFilling = false;
    var mouse = { x: 0, y: 0 };
    var last_mouse = { x: 0, y: 0 };

    canvas.addEventListener('mousedown', function (e) {
        isFilling = true;
        setPosition2(e);
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;
    });

    canvas.addEventListener('mousemove', function (e) {
        if (!isFilling) return;
        FillLine(e);
        setPosition2(e);
    });

    canvas.addEventListener('mouseup', function () {
        isFilling = false;
        last_mouse = { x: 0, y: 0 };
    });

    function setPosition2(e) {
        var rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    }

    function FillLine(e) {
        fillOnCanvas.beginPath();
        fillOnCanvas.strokeStyle = currentColor;
        fillOnCanvas.lineWidth = lineWidth[6];
        fillOnCanvas.lineCap = 'round';

        fillOnCanvas.moveTo(last_mouse.x, last_mouse.y);
        setPosition2(e);
        fillOnCanvas.lineTo(mouse.x, mouse.y);
        fillOnCanvas.stroke();
        fillOnCanvas.closePath();

        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;
    }
}
function LineWidthChanger() {
    var canvas = document.getElementById("board");
    var drawOnCanvas = canvas.getContext("2d");

    document.addEventListener('keydown', function(event) {
        if (event.key === '1') {
            drawOnCanvas.lineWidth = lineWidth[0];
        } else if (event.key === '2') {
            drawOnCanvas.lineWidth = lineWidth[1];
        } else if (event.key === '3') {
            drawOnCanvas.lineWidth = lineWidth[2];
        } else if (event.key === '4') {
            drawOnCanvas.lineWidth = lineWidth[3];
        } else if (event.key === '5') {
            drawOnCanvas.lineWidth = lineWidth[4];
        } else if (event.key === '6') {
            drawOnCanvas.lineWidth = lineWidth[5];
        } else if (event.key === '7') {
            drawOnCanvas.lineWidth = lineWidth[6];
        } else if (event.key === '8') {
            drawOnCanvas.lineWidth = lineWidth[7];
        } else if (event.key === '9') {
            drawOnCanvas.lineWidth = lineWidth[8];
        } else {
            console.error("Wrong key!!!");
        }
    });
}

function CheckedBoard(){
    var canvas = document.getElementById('board');
    var context = document.getContext('2d');
    canvas.style = "background-image: none";
    context.style = canvas.style = "background-image: url('static/images/checkers.jpg')";
    
}
function LineBtn() {
    var canvas = document.getElementById('board');
    var context = canvas.getContext('2d');
    context.beginPath();
    shapeMakerList["line"](10, 10, 100, 100);
    context.strokeStyle = currentColor;
    context.stroke();
    document.body.appendChild(canvas);
}

function CircleBtn() {
    var canvas = document.getElementById('board');
    var context = canvas.getContext('2d');
    context.beginPath();
    shapeMakerList["circle"](100, 75, 50, 0, 2 * Math.PI);
    context.strokeStyle = currentColor;
    context.stroke();
    document.body.appendChild(canvas);
}

function RectangleBtn() {
    var canvas = document.getElementById('board');
    var context = canvas.getContext('2d');
    context.beginPath();
    shapeMakerList["rectangle"](10, 10, 100, 100);
    context.strokeStyle = currentColor;
    context.stroke();
    document.body.appendChild(canvas);
}

function TriangleBtn() {
    var canvas = document.getElementById('board');
    var context = canvas.getContext('2d');
    context.beginPath();
    shapeMakerList["triangle"](10, 10, 100, 100, 200, 200);
    context.strokeStyle = currentColor;
    context.stroke();
    document.body.appendChild(canvas);
}

function SquareBtn() {
    var canvas = document.getElementById('board');
    var context = canvas.getContext('2d');
    context.beginPath();
    shapeMakerList["square"](10, 10, 100);
    context.strokeStyle = currentColor;
    context.stroke();
    document.body.appendChild(canvas);
}

function TextBtn() {
    var canvas = document.getElementById("board");
    var context = canvas.getContext("2d");

    // Set the font for the canvas
    context.font = fontSize + "px " + font;

    // Create a text input element
    var textInput = document.createElement("input");
    textInput.type = "text";
    textInput.id = "textInput"; // Set a unique ID for the input
    textInput.placeholder = "Type here..."; // Set a placeholder text

    // Append the text input element to an element with the id "text"
    var textElement = document.getElementById("text");
    if (textElement) {
        textElement.innerHTML = ""; // Clear existing content
        textElement.appendChild(textInput);
    } else {
        console.error("Element with id 'text' not found.");
    }
}


function DownloadImage(){
    var canvas = document.getElementById("board");
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href=image;

}

window.onload = function (){
    const brushButton = document.getElementById('Brush-btn');
    brushButton.addEventListener('click', BrushPaint);
    const eraserButton = document.getElementById('Eraser-btn');
    eraserButton.addEventListener('click', Eraser);
    const redBrushButton = document.getElementById('Red-btn');
    redBrushButton.addEventListener('click', RedBrush);
    const blueBrushButton = document.getElementById('Blue-btn');
    blueBrushButton.addEventListener('click', BlueBrush);
    const greenBrushButton = document.getElementById('Green-btn');
    greenBrushButton.addEventListener('click', GreenBrush);
    const yellowBrushButton = document.getElementById('Yellow-btn');
    yellowBrushButton.addEventListener('click', YellowBrush);
    const blackBrushButton = document.getElementById('Black-btn');
    blackBrushButton.addEventListener('click', BlackBrush);
    const whiteBrushButton = document.getElementById('White-btn');
    whiteBrushButton.addEventListener('click', WhiteBrush);
    const orangeBrushButton = document.getElementById('Orange-btn');
    orangeBrushButton.addEventListener('click', OrangeBrush);
    const purpleBrushButton = document.getElementById('Purple-btn');
    purpleBrushButton.addEventListener('click', PurpleBrush);
    const pinkBrushButton = document.getElementById('Pink-btn');
    pinkBrushButton.addEventListener('click', PinkBrush);
    const brownBrushButton = document.getElementById('Brown-btn');
    brownBrushButton.addEventListener('click', BrownBrush);
    const greyBrushButton = document.getElementById('Grey-btn');
    greyBrushButton.addEventListener('click', GreyBrush);
    const clearAllButton = document.getElementById("Clear-All");
    clearAllButton.addEventListener('click', ClearBoard);
    const FillButton = document.getElementById("Fill-btn");
    FillButton.addEventListener('click', Fill);
    const BlackBoardButton = document.getElementById("BlackBoard");
    BlackBoardButton.addEventListener('click', BlackBoard);
    const TextBtn = document.getElementById("Text-btn");
    TextBtn.addEventListener('click', TextBtn);
    const CustomColorButton = document.getElementById("CustomColor-btn");
    CustomColorButton.addEventListener('click', CustomColor);
    const FillNotFullBoardButton = document.getElementById("FillNotFull");
    FillNotFullBoardButton.addEventListener('click', FillNotFullBoard);
    const PencilButton = document.getElementById("Pencil-btn");
    PencilButton.addEventListener('click', Pencil);
    const MarkerButton = document.getElementById("Marker-btn");
    MarkerButton.addEventListener('click', Marker);
    const DownloadButton = document.getElementById("Download-btn");
    DownloadButton.addEventListener('click', DownloadImage);
    const CheckedBoardButton = document.getElementById("CheckedBoard");
    CheckedBoardButton.addEventListener('click', CheckedBoard);
    const LineBtn = document.getElementById("Line-btn");
    LineBtn.addEventListener('click', LineBtn);
    const CircleBtn = document.getElementById("Circle-btn");
    CircleBtn.addEventListener('click', CircleBtn);
    const RectangleBtn = document.getElementById("Rectangle-btn");
    RectangleBtn.addEventListener('click', RectangleBtn);
    const TriangleBtn = document.getElementById("Triangle-btn");
    TriangleBtn.addEventListener('click', TriangleBtn);
    const SquareBtn = document.getElementById("Square-btn");
    SquareBtn.addEventListener('click', SquareBtn);
}
