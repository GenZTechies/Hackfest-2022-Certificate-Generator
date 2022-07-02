// Modals
const menu = document.getElementById("menu");
const error = document.getElementById("error");
const download = document.getElementById("download");

const menuToggle = () => {
    menu.classList.toggle("hidden");
};

const downloadToggle = () => {
    download.classList.toggle("hidden");
};

const errorToggle = () => {
    error.classList.toggle("hidden");
};

// Button
const downloadBtn = document.getElementById("download-btn");

// Details
var HackersName = "";
var HackersEmail = "";

// Import Hackers Data from hackers.json
var data = [];
fetch("hackers.json")
    .then((response) => response.json())
    .then((data) => {
        this.data = data;
    })
    .catch((error) => {
        console.log(error);
    });

const getName = () => {
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

const image = new Image();
image.src = "certificate.png";

function generateImage(width, height) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    ctx.font = "900 italic 250px Charis SIL";
    ctx.fillStyle = "black";

    var textWidth = ctx.measureText(HackersName).width;
    var textPosition = image.naturalHeight / 2 + 150;

    ctx.fillText(HackersName, canvas.width / 2 - textWidth / 2, textPosition);
    ctx.imageSmoothingEnabled = false;

    return canvas.toDataURL("image/png");
}

downloadBtn.addEventListener("click", function () {
    if (HackersName !== "") {
        downloadBtn.href = generateImage(
            image.naturalWidth,
            image.naturalHeight
        );
        downloadBtn.download = "Certificate - " + HackersName + ".png";
    }
});
