function BrushPaint() {
    var canvas = document.getElementById('board');
    var drawOnCanvas = canvas.getContext('2d');
    var isDrawing = false;
    var mouse = { x: 0, y: 0 };
    var last_mouse = { x: 0, y: 0 };

    canvas.addEventListener('mousedown', function (e) {
        isDrawing = true;
        setPosition(e);
    });

    canvas.addEventListener('mousemove', function (e) {
        if (!isDrawing) return;
        drawLine(e);
        setPosition(e);
    });

    canvas.addEventListener('mouseup', function () {
        isDrawing = false;
    });

    function setPosition(e) {
        var rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    }

    function drawLine(e) {
        drawOnCanvas.beginPath();
        drawOnCanvas.strokeStyle = "#000000";
        drawOnCanvas.lineWidth = 5;
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

window.onload = function () {
    const button = document.getElementById('Brush-btn');
    button.addEventListener('click', BrushPaint);
}