//the below is what I know actually works 



 function randomColours(){
    let button = document.getElementById("#generateColour")

 // get the color picker elements
 let colourPickers = document.querySelectorAll("#colourPicker")
 let hexValue = document.querySelectorAll("#colourPicker").value;
 let picker = [...colourPickers];

    picker.forEach((element, index) => {
        let hexCode = '#' + Math.random().toString(16).substring(2, 8);
        element.value = hexCode;
        const bigBox = document.getElementById(`p${index + 1}`);
        bigBox.style.background = hexCode;
    });

    colourPickers.forEach(function (colourPicker) {
        colourPicker.addEventListener('input', function() {
          var color = this.value;
          var colorBox = this.parentNode;
          console.log(colorBox)
          colorBox.style.backgroundColor = color;

        });
      });
};


//or this? 

// function changeDivBgColors() {
//     const colorPicker = document.querySelector("#color-picker");
//     const hexValue = colorPicker.value;
//     const divElements = document.querySelectorAll("div");
  
//     divElements.forEach((div) => {
//       div.style.backgroundColor = hexValue;
//     });
//   }

//   const colorPicker = document.querySelector("#color-picker");
// colorPicker.addEventListener("change", changeDivBgColors);



// forgotten what the below does....//
// colourPickers.forEach(function (colourPicker) {
//     colourPicker.addEventListener('change', function() {
//       var color = this.value;
//       var colorBox = this.parentNode;
//       colorBox.style.backgroundColor = color;
//     });
 // set the background color of the div element when the corresponding color picker value changes

//  colourPickers.forEach(function hello(colourPicker) {
//    colourPicker.addEventListener('change', function() {
//      var color = this.value;
//      var colorBox = this.parentNode;
//      colorBox.style.backgroundColor = color;
//    });
//  });



