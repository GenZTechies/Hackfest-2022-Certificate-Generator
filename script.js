// Canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Modals
const menu = document.getElementById("menu");
const error = document.getElementById("error");
const download = document.getElementById("download");

// Button
const downloadBtn = document.getElementById("download-btn");

// Details
var HackersName = "";
var HackersEmail = "";

// Data
const data = [
    {
        name: "John Doe",
        email: "tolu@hello.com",
    },
    {
        name: "Jane Doe",
        email: "a"
    }
];

const getName = (email) => {
    HackersEmail = document.getElementById("email").value;

    for (let i = 0; i < data.length; i++) {
        if (data[i].email === HackersEmail) {
            HackersName = data[i].name;
            break;
        }
    }

    if (HackersName === "") errorToggle();
    else {
        menuToggle();
        downloadToggle();
    }
};

const menuToggle = () => {
    menu.classList.toggle("hidden");
};

const downloadToggle = () => {
    download.classList.toggle("hidden");
};

const errorToggle = () => {
    error.classList.toggle("hidden");
};

const image = new Image();
image.src = "Certificate.png";

function generateImage(width, height) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    ctx.font = "70px Alex Brush";
    ctx.fillStyle = "#13640a";

    var textWidth = ctx.measureText(HackersName).width;
    var textPosition = image.naturalHeight / 2;

    ctx.fillText(HackersName, canvas.width / 2 - textWidth / 2, textPosition);
    ctx.imageSmoothingEnabled = false;

    return canvas.toDataURL("image/png");
}

downloadBtn.addEventListener("click", function () {
    if(HackersName !== "") {
        downloadBtn.href = generateImage(image.naturalWidth, image.naturalHeight);
        downloadBtn.download = "Certificate - " + HackersName + ".png";
    }
});