var Light = "on";
const LightSwitch = document.getElementById("LightSwitch");
LightSwitch.addEventListener("click", function () {
    if(Light == "on"){
        alert("The light is on")
        Light = "off"
    }
    else{
        alert("The light is off")
        Light = "on"
    }

});