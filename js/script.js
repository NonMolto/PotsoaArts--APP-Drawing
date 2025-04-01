const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
let isdrawing = false;

ctx.strokeStyle = "#000";
ctx.lineWidth = 5;

canvas.addEventListener("mousedown" , (e) => {
    isdrawing = true;
    ctx.lineTo(e.offsetX , e.offsetY);
    ctx.beginPath();
});

canvas.addEventListener("mousemove" , (e) => {
     if(isdrawing){
    ctx.lineTo(e.offsetX , e.offsetY);
    ctx.stroke();
    }
});

canvas.addEventListener("mouseup" , (e) => {
    isdrawing = false;
    ctx.closePath();
}); 

canvas.addEventListener("mouseout" , (e) => {
    isdrawing = false;
});

var btn_clean = document.getElementById('cleanCanvas');

btn_clean.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

const colorPincel = document.getElementById('color');
const sizePincel = document.getElementById('size');

colorPincel.addEventListener('input', (e) => {
    ctx.strokeStyle = e.target.value;
});

sizePincel.addEventListener('input', (e) => {
    ctx.lineWidth = e.target.value;
});

function baixar_imagem() {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    link.href = image;
    link.download = "desenho.png";
    link.click();
}