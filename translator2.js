let kannada = ["ನಾನು","ಅವನು","ಅದು","ಅವನ","ಅವಳು","ಅದಕ್ಕೆ","ಎಲ್ಲಿ","ಅದರ","ಹಸು","ಕಾಗೆ","ಎಮ್ಮೆ"];
let tulu = ["ಯಾನ್", "ಆಯೆ","ಅವ್","ಆಯೇನ","ಆಲ್","ಐಕ್","ಓಲು","ಐತ","ಪೆತ್ತ","ಕಕ್ಕೆ","ಎರ್ಮೆ"];
let word = "";
document.getElementById("txt").addEventListener("input", new);
function new(){
for (let i = 0; i < tulu.length; i++){
  word = txt.indexOf(kannada[i]);
  while(word>-1){
    txt = txt.replace(kannada[i], tulu[i]);
    word = txt.indexOf(kannada[i]);
  }
    document.getElementById("res").value = txt;
}

