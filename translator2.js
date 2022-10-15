let kannada = ["","","","","","","","","","","",""];
let tulu = ["", "","","","","","","","","","",""];
let word = "";
function(){
for (let i = 0; i < tulu.length; i++) {
  word = txt.indexOf(kannada[i]);
  while(word>-1){
    txt = txt.replace(kannada[i], tulu[i]);
  }
}
}
