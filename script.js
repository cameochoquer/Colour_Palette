let paletteBackground = document.querySelectorAll("div.colour");
let colourPicker = document.querySelectorAll("#colourPicker");
let text = document.querySelectorAll("p.hexText")

let picker = [...colourPicker];
let palette = [...paletteBackground];
let texts = [...text];

function randomColours(){
    picker.forEach((index) => {
        let hexCode = '#' + Math.random().toString(16).substring(2, 8);
        index.value = hexCode;
    });
};

const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}

console.log(palette)