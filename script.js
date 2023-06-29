
var button = document.getElementById("button");
var body = document.body; 

button.addEventListener("click", function(){
    console.log("click!");
    body.setAttribute("style", "background-color: pink");
})
