let kannada = ["","","","","","","","","","","",""];
let tulu = ["", "","","","","","","","","","",""];
let word = "";
document.getElementById("txt").addEventListener("input", new);
function new(){
for (let i = 0; i < tulu.length; i++) {
  word = txt.indexOf(kannada[i]);
  while(word>-1){
    txt = txt.replace(kannada[i], tulu[i]);
  }
    document.getElementById("res").value = txt;
}

