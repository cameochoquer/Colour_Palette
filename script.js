let x = document.getElementById("colourPicker");

setInterval(()=>{
    let colour = x.value;
    document.getElementById("p1Text").innerHTML = colour;
    document.getElementById("p1").style.backgroundColor = colour;
  },200);
