//the below is what I know actually works 

 function randomColours(){
    let button = document.getElementById("#generateColour")

 // get the color picker elements
 let colourPickers = document.querySelectorAll("#colourPicker")
 let hexValue = document.querySelectorAll("#colourPicker").value;
 //put pickers into an array
 let picker = [...colourPickers];

 //loop over the array of pickers
    picker.forEach((element, index) => {
        //create a random hexcode
        let hexCode = '#' + Math.random().toString(16).substring(2, 8);
        //make the value of each colourpicker equal to a random hexcode
        element.value = hexCode;
        const bigBox = document.getElementById(`p${index + 1}`);
        const hexText = document.getElementById(`p${index + 1}Text`);
        bigBox.style.background = hexCode;
        hexText.innerHTML = hexCode
    });
//function to match colour picker to div
    colourPickers.forEach(function (colourPicker) {
        colourPicker.addEventListener('input', function() {
          var color = colourPicker.value;
          var colorBox = colourPicker.parentNode;
          colorBox.style.backgroundColor = color;         
        });
      });
};

// colourPickers.forEach(function (colourPicker) {
//     colourPicker.addEventListener('input', function() {
//         var color = colourPicker.value;
//         var colorBox = colourPicker.parentNode;
//         colorBox.style.backgroundColor = color;
//         const colorBoxes = document.getElementsByClassName("colour");
//         const p = document.createElement('p');
//         p.innerHTML = color;
//         colorBoxes.forEach(colorBox => colorBox.appendChild(p));
//     });
// });