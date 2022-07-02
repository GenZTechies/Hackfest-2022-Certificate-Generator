const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const nameInput = document.getElementById("name");
const downloadBtn = document.getElementById("download-btn");

const haystack = ['adetunji.com', 'bamidele.com'];


function emailCheck(needle) {
    if( haystack.includes(needle)){
        console.log("This email exists")
    }else{
        console.log("This email does not exist")
    }
}

const image = new Image();
image.src = "certificate.png";
image.onload = function () {
	drawImage();
};

function generateImage(width, height) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    ctx.font = "70px Alex Brush";
    ctx.fillStyle = "#13640a";

    var textWidth = ctx.measureText(nameInput.value).width;
    var textPosition = image.naturalHeight / 2 - 125;

    ctx.fillText(nameInput.value, canvas.width / 2 - textWidth / 2, textPosition);
    ctx.imageSmoothingEnabled = false;

    return canvas.toDataURL("image/png");
}

function drawImage() {
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

	ctx.font = "70px Alex Brush";
	ctx.fillStyle = "#13640a";

	var textWidth = ctx.measureText(nameInput.value).width;
    var textPosition = canvas.height / 2 - 50;

	ctx.fillText(nameInput.value, canvas.width / 2 - textWidth / 2, textPosition);
}

nameInput.addEventListener("input", function () {
    drawImage();
});

downloadBtn.addEventListener("click", function () {
	downloadBtn.href = generateImage(image.naturalWidth, image.naturalHeight);
	downloadBtn.download = "Certificate - " + nameInput.value;
});
