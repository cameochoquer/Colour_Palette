let paletteBackground = document.querySelectorAll("div.colour")
let colourPicker = document.querySelectorAll("#colourPicker");
let text = document.querySelectorAll("p.hexText")

let picker = [...colourPicker];
let palette = [...paletteBackground];
let texts = [...text];

function randomColours(){
    palette.forEach((color) => {
        let hexCode = '#' + Math.random().toString(16).substring(2, 8);
        color.style.backgroundColor = hexCode;
        color.innerHTML = hexCode
    });
};

randomColours();