const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const nameInput = document.getElementById("name");
const downloadBtn = document.getElementById("download-btn");

const image = new Image();
image.src = "certificate.png";
image.onload = function () {
	drawImage();
};

function resize(canvas, width, height) {
	var c = document.createElement("canvas");
	c.width = width;
	c.height = height;
	c.getContext("2d").drawImage(
			canvas,
			0,
			0,
			canvas.width,
			canvas.height,
			0,
			0,
			width,
			height
	);
	return c.toDataURL("image/png");
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
	ctx.font = "70px Alex Brush";
	ctx.fillStyle = "#13640a";
	var textWidth = ctx.measureText(nameInput.value).width;
	ctx.fillText(nameInput.value, canvas.width / 2 - textWidth / 2, 300);
}

nameInput.addEventListener("input", function () {
    drawImage();
});

downloadBtn.addEventListener("click", function () {
	const natWidth = image.naturalWidth;
	console.log(natWidth)
	const natHeight = image.naturalHeight;
	console.log(natHeight)
	downloadBtn.href = resize(canvas, natWidth, natHeight);
	downloadBtn.download = "Certificate - " + nameInput.value;
});
