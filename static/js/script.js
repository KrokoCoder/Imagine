var drawOnCanvas; // Define drawOnCanvas globally
var currentColor = "#000000";
var context;
var lineWidth = [0, 5, 10, 20, 30, 40, 50, 75, 100];
var sizes = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 30, 36, 48, 72];
function BrushPaint() {
    var canvas = document.getElementById('board');
    var drawOnCanvas = canvas.getContext('2d'); // Assign to the local variable
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
    var drawOnCanvas = canvas.getContext('2d'); // Assign to the local variable
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
    var drawOnCanvas = canvas.getContext('2d'); // Assign to the local variable
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
    currentColor = "#32f04b";
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
    currentColor = "#f700ff";
}

function BrownBrush(){
    currentColor = "#7c4c2c";
}

function GreyBrush(){
    currentColor = "#808080";
}
function LightBlueBrush(){
    currentColor = "#00ffff";
}
function FleshBrush(){
    currentColor = "#ffe4c4";
}
function CustomColor(){
    var colorCanvas = document.getElementById('board');
    var ColorCtx = colorCanvas.getContext('2d');  // This create a 2D context for the canvas
    
    var color = 'rgba(0,0,255,1)';
    let gradientH = ColorCtx.createLinearGradient(0, 0, ColorCtx.canvas.width, 0);
    gradientH.addColorStop(0, '#fff');
    gradientH.addColorStop(1, color);
    ColorCtx.fillStyle = gradientH;
    ColorCtx.fillRect(0, 0, ColorCtx.canvas.width, ColorCtx.canvas.height);
    
    // Create a Vertical Gradient(white to black)
     let gradientV = ColorCtx.createLinearGradient(0, 0, 0, 300);
     gradientV.addColorStop(0, 'rgba(0,0,0,0)');
     gradientV.addColorStop(1, '#000');
     ColorCtx.fillStyle = gradientV;
     ColorCtx.fillRect(0, 0, ColorCtx.canvas.width, 
     ColorCtx.canvas.height); 
     
     colorCanvas.addEventListener('click',function(event){
        let x = event.clientX;  // Get X coordinate
        let y = event.clientY;  // Get Y coordinate
        pixel = ColorCtx.getImageData(x,y,1,1)['data'];   // Read pixel Color
        rgb = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
        document.body.style.background = rgb; 
     });
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
    context.fillStyle = currentColor;
    context.fill();
    context.stroke();
}

function FillNotFullBoard(){
    var canvas = document.getElementById('board');
    var fillOnCanvas = canvas.getContext('2d'); // Assign to the local variable
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
    var context = canvas.getContext('2d');
    canvas.style = "background-image: none";
    context.style = canvas.style = "background-image: url('static/images/checkers.jpg')";
}

function Line() {
    var canvas = document.getElementById('board');
    var ctx = canvas.getContext('2d');
    var lines = [];
    var mouseXInput = document.getElementById("mouseXinput");
    var mouseYInput = document.getElementById("mouseYinput");
    var lengthInput = document.getElementById("sideInput");
    var rotationAngleInput = document.getElementById("rotationAngleInput");

    var mouseX = parseFloat(mouseXInput.value);
    var mouseY = parseFloat(mouseYInput.value);
    var length = parseFloat(lengthInput.value);
    var rotationAngle = parseFloat(rotationAngleInput.value);


    var line1 = {
        startX: mouseX,
        startY: mouseY,
        endX: mouseX + length * Math.cos(rotationAngle),
        endY: mouseY + length * Math.sin(rotationAngle)
    };

    lines.push(line1);

    for (var i = 0; i < lines.length; i++) {
        var l = lines[i];
        ctx.beginPath();
        ctx.moveTo(l.startX, l.startY);
        ctx.lineTo(l.endX, l.endY);
        ctx.closePath();
        ctx.fillStyle = currentColor;
        ctx.fill();
        ctx.stroke();  // Consider using stroke() for lines
    }
}

function Circle() {
    var canvas = document.getElementById('board');
    var ctx = canvas.getContext('2d');
    var circles = [];
    var mouseXInput = document.getElementById("mouseXinput");
    var mouseYInput = document.getElementById("mouseYinput");
    var radiusInput = document.getElementById("radiusInput");
    var mouseCX = parseFloat(mouseXInput.value);
    var mouseCY = parseFloat(mouseYInput.value);
    var radius = parseFloat(radiusInput.value);


    var circle1 ={
        centerX: mouseCX,
        centerY: mouseCY,
        radius: radius
    };
    

    circles.push(circle1);

    for (var i = 0; i < circles.length; i++) {
        var c = circles[i];
        ctx.beginPath();
        ctx.arc(c.centerX, c.centerY, c.radius, 0,  2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = currentColor;
        ctx.stroke(); 
        ctx.fill(); // Consider using stroke() for lines
    };

}
function Square() {
    var canvas = document.getElementById('board');
    var context = canvas.getContext('2d');
    var squares = [];
    var mouseXInput = document.getElementById("mouseXinput");
    var mouseYInput = document.getElementById("mouseYinput");
    var sideLengthInput = document.getElementById("sideInput");
    var mouseX = mouseXInput.value;
    var mouseY = mouseYInput.value;
    var sideLength = sideLengthInput.value;

    var square1 = {
        centerX: mouseX,
        centerY: mouseY,
        sideLength: sideLength
    };
    squares.push(square1);
    for (var i = 0; i < squares.length; i++) {
    var sq = squares[i];
    context.beginPath();
    context.rect(sq.centerX, sq.centerY, sq.sideLength, sq.sideLength);
    context.closePath();
    context.fillStyle = currentColor;
    context.fill();
    
    } 
}
function Rectangle() {
    var canvas = document.getElementById('board');
    var context = canvas.getContext('2d');
    var rectangles = [];
    var mouseXInput = document.getElementById("mouseXinput");
    var mouseYInput = document.getElementById("mouseYinput");
    var LengthInput = document.getElementById("sideInput");
    var WidthInput = document.getElementById("sideInput2");
    var mouseX = mouseXInput.value;
    var mouseY = mouseYInput.value;
    var Length = LengthInput.value;
    var Width = WidthInput.value;

    var rectangle1 = {
        centerX: mouseX,
        centerY: mouseY,
        length: Length,
        width: Width
    };
    rectangles.push(rectangle1);
    for (var i = 0; i < rectangles.length; i++) {
    var rect = rectangles[i];
    context.beginPath();
    context.rect(rect.centerX, rect.centerY, rect.length, rect.width);
    context.closePath();
    context.fillStyle = currentColor;
    context.fill();
    
    } 
}

function Triangle() {
    var canvas = document.getElementById('board');
    var context = canvas.getContext('2d');
    var triangles = [];
  
    // Get values from inputs, handling potential errors
    var mouseXInput = document.getElementById("mouseXinput");
    var mouseYInput = document.getElementById("mouseYinput");
    var side1LengthInput = document.getElementById("side1Input");
    var side2LengthInput = document.getElementById("side2Input");
    var side3LengthInput = document.getElementById("side3Input");
    var angle1Input = document.getElementById("angle1Input");
    var angle2Input = document.getElementById("angle2Input");
    var angle3Input = document.getElementById("angle3Input");
    var mouseX = parseFloat(mouseXInput.value) || 0;
    var mouseY = parseFloat(mouseYInput.value) || 0;
    var side1 = parseFloat(side1LengthInput.value) || 10;
    var side2 = parseFloat(side2LengthInput.value) || 10;
    var side3 = parseFloat(side3LengthInput.value) || 10;
    var angle1 = parseFloat(angle1Input.value) || 0;
    var angle2 = parseFloat(angle2Input.value) || 0;
    var angle3 = parseFloat(angle3Input.value) || 0;
  
    // Ensure angles add up to 180 degrees
    var totalAngles = angle1 + angle2 + angle3;
    if (totalAngles !== 180) {
      console.warn("Invalid angles: Triangle angles must add up to 180 degrees. Adjusting angles.");
      // Adjust angles to 180 (e.g., reduce each angle proportionally)
    }
  
    var triangle1 = {
      centerX: mouseX,
      centerY: mouseY,
      side1length: side1,
      side2length: side2,
      side3length: side3,
      angle1deg: angle1,
      angle2deg: angle2,
      angle3deg: angle3
    };
  
    triangles.push(triangle1);
  
  
    for (var i = 0; i < triangles.length; i++) {
      var tr = triangles[i];
      context.beginPath();
  
      // Calculate triangle coordinates using side lengths and angles
      // (Implement appropriate calculation logic here)
      // ...
  
      context.closePath();
      context.fillStyle = currentColor; // Assuming `currentColor` is defined elsewhere
      context.fill();
      context.stroke();
    }
  }

var fonts = ["Arial", "Verdana", "Times New Roman", "Courier New", "Impact", "Comic Sans MS", "Georgia", "Trebuchet MS", "Palatino", "Arial Black", "Tahoma"];
function drawText() {
    var textInput = document.getElementById("text");
    var canvas = document.getElementById("board");
    var context = canvas.getContext("2d");

    var fontSize = 16; // Define fontSize here
    context.fillStyle = currentColor;
    context.font = `${fonts[0]} ${fontSize}px`;
    context.textBaseline = "top";
    context.fillText(textInput.value, 350, 0);
}

function updateFont() {
    var fontInput = document.getElementById("font");
    var canvas = document.getElementById("board");
    var context = canvas.getContext("2d");
    
    

    var fontSize = 16;
    switch (fontInput.value) {
        case fonts[0]:
            context.font = `${fonts[0]} ${fontSize}px`;
            break;
        case fonts[1]:
            context.font = `${fonts[1]} ${fontSize}px`;
            break;
        case fonts[2]:
            context.font = `${fonts[2]} ${fontSize}px`;
            break;
        case fonts[3]:
            context.font = `${fonts[3]} ${fontSize}px`;
            break;
        case fonts[4]:
            context.font = `${fonts[4]} ${fontSize}px`;
            break;
        case fonts[5]:
            context.font = `${fonts[5]} ${fontSize}px`;
            break;
        case fonts[6]:
            context.font = `${fonts[6]} ${fontSize}px`;
            break;
        case fonts[7]:
            context.font = `${fonts[7]} ${fontSize}px`;
            break;
        case fonts[8]:
            context.font = `${fonts[8]} ${fontSize}px`;
            break;
        case fonts[9]:
            context.font = `${fonts[9]} ${fontSize}px`;
            break;
        case fonts[10]:
            context.font = `${fonts[10]} ${fontSize}px`;
            break;
    }
    fontInput.value = context.font.split(" ")[0];
}
function fontChange(){
    var fontInput = document.getElementById("font");
    var canvas = document.getElementById("board");
    var context = canvas.getContext("2d");
    fontInput.value = context.font.split(" ")[0];
}
function updateSize() {
    var sizeInput = document.getElementById("size");
    var canvas = document.getElementById("board");
    var context = canvas.getContext("2d");
    sizeInput.value = context.font.split(" ")[1].replace("px", "");
    switch (sizeInput.value) {
        case sizes[0]:
            context.font = `${fonts[0]} ${sizes[0]}px`;
            break;
        case sizes[1]:
            context.font = `${fonts[0]} ${sizes[1]}px`;
            break;
        case sizes[2]:
            context.font = `${fonts[0]} ${sizes[2]}px`;
            break;
        case sizes[3]:
            context.font = `${fonts[0]} ${sizes[3]}px`;
            break;
        case sizes[4]:
            context.font = `${fonts[0]} ${sizes[4]}px`;
            break;
        case sizes[5]:
            context.font = `${fonts[0]} ${sizes[5]}px`;
            break;
        case sizes[6]:
            context.font = `${fonts[0]} ${sizes[6]}px`;
            break;
        case sizes[7]:
            context.font = `${fonts[0]} ${sizes[7]}px`;
            break;
        case sizes[8]:
            context.font = `${fonts[0]} ${sizes[8]}px`;
            break;
        case sizes[9]:
            context.font = `${fonts[0]} ${sizes[9]}px`;
            break;
        case sizes[10]:
            context.font = `${fonts[0]} ${sizes[10]}px`;
            break;
        case sizes[11]:
            context.font = `${fonts[0]} ${sizes[11]}px`;
            break;
        case sizes[12]:
            context.font = `${fonts[0]} ${sizes[12]}px`;
            break;
        case sizes[13]:
            context.font = `${fonts[0]} ${sizes[13]}px`;
            break;
    }
}
function sizeChange(){
    var sizeInput = document.getElementById("size");
    var canvas = document.getElementById("board");
    var context = canvas.getContext("2d");
    sizeInput.value = context.font.split(" ")[1].replace("px", "");
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
    TextBtn.addEventListener('click', text);
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
    LineBtn.addEventListener('click', Line);
    const CircleBtn = document.getElementById("Circle-btn");
    CircleBtn.addEventListener('click', Circle);
    const RectangleBtn = document.getElementById("Rectangle-btn");
    RectangleBtn.addEventListener('click', Rectangle);
    const TriangleBtn = document.getElementById("Triangle-btn");
    TriangleBtn.addEventListener('click', Triangle);
    const SquareBtn = document.getElementById("Square-btn");
    SquareBtn.addEventListener('click', Square);
    const CustomColorButton = document.getElementById("CustomColor-btn");
    CustomColorButton.addEventListener('click', CustomColor);
    const fontChangeButton = document.getElementById("fontChange");
    fontChangeButton.addEventListener('click', fontChange);
    const sizeChangeButton = document.getElementById("sizeChange");
    sizeChangeButton.addEventListener('click', sizeChange);
    const LightBlueBrushButton = document.getElementById("LightBlue-btn");
    LightBlueBrushButton.addEventListener('click', LightBlueBrush);
    const FleshBrushButton = document.getElementById("Flesh-btn");
    FleshBrushButton.addEventListener('click', FleshBrush);
}