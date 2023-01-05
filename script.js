// let paletteBackground = document.querySelectorAll("div.colour");
// let text = document.querySelectorAll("p.hexText")

// let palette = [...paletteBackground];
// let texts = [...text];

let button = document.getElementById("#generateColour")

 // get the color picker elements
 let colourPickers = document.querySelectorAll("#colourPicker");
 let picker = [...colourPickers];

 function randomColours(){
    picker.forEach((index) => {
        let hexCode = '#' + Math.random().toString(16).substring(2, 8);
        index.value = hexCode;
    });
};

 // set the background color of the div element when the corresponding color picker value changes

 colourPickers.forEach(function hello(colourPicker) {
   colourPicker.addEventListener('change', function() {
     var color = this.value;
     var colorBox = this.parentNode;
     colorBox.style.backgroundColor = color;
   });
 });



