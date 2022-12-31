let y = document.querySelectorAll("div.colour")
let x = document.getElementById("colourPicker");

let picker = [...x];
let palette = [...y];
console.log(picker);

setInterval(()=>{
    let colour = picker.value;
    document.getElementById("p1Text").innerHTML = colour;
    document.getElementById("p1").style.backgroundColor = colour;
  },200);
