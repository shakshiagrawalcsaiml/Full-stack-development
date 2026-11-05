function trafficrule(){
    let color = document.getElementById("color").value.toLowerCase();
switch(color){
     case "red":
        console.log("Stop");
        break;
     case "orange":
        console.log("Slow Down");
        break;
     case "green":
        console.log("Go");
        break;
     default:
        console.log("not found");
}}