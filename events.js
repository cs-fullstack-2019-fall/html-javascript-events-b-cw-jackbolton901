let lab = document.getElementById("label");
let text = document.getElementById("textarea");
text.onkeydown = function(e){
    console.log(e.target.value);
    lab.innerText = e.target.value;
}




