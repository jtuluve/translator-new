let kannada = ["ನಾನು","ಅವನು","ಅದು","ಅವನ","ಅವಳು","ಅದಕ್ಕೆ","ಎಲ್ಲಿ","ಅದರ","ಹಸು","ಕಾಗೆ","ಎಮ್ಮೆ"];
let tulu = ["ಯಾನ್", "ಆಯೆ","ಅವ್","ಆಯೇನ","ಆಲ್","ಐಕ್","ಓಲು","ಐತ","ಪೆತ್ತ","ಕಕ್ಕೆ","ಎರ್ಮೆ"];
let word = "";
document.getElementById("txt").addEventListener("input", neww);
function neww(){
for (let i = 0; i < tulu.length; i++){
var re = new RegExp(kannada[i], 'g');

str = str.replace(re, tulu[i]);
    document.getElementById("res").value = txt;
}

