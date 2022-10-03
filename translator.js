document.getElementById("txt").addEventListener("input", translate);
function translate(){
    let txt = document.getElementById("txt").value;
    let res = txt.replace(/ನಾನು/g, "ಯಾನ್").replace(/ನೀವು/g, "ಈರ್").replace(/ಆಯೆ/g, "ಅವನು").replace(/ಮನೆ/g, "ಇಲ್ಲ").replace(/ಬೇರೆ/g, "ಬೇತೆ").replace(/ಭಾಷೆ/g, "ಬಾಸೆ").replace(/ಅವನು/g, "ಆಯೆ").replace(/ಮತ್ತು/g, "ಬೊಕ್ಕ").replace(/ಹಾಗೂ/g, "ಬೊಕ್ಕ").replace(/ಖುಷಿ/g, "ಕುಸಿ").replace(/ಅವಳು/g, "ಆಲ್").replace(/ಬದುಕು/g, "ಬದ್‌ಕ್").replace(/ನಾವು/g, "ನಮ").replace(/ಧನ್ಯವಾದ/g, "ಸೊಲ್ಮೆಲು").replace(/ಕಾಡು/g, "ಕಾಡ್").replace(/ಹಳದಿ/g, "ಮಂಜಲ್").replace(/ನೀನು/g, "ಈ").replace(/ಉಂಟು/g, "ಉಂಡು").replace(/ವಾಹನ/g, "ಗಾಡಿ").replace(/ನನಗೆ/g, "ಎಂಕ್").replace(/ಏನು/g, "ದಾದ").replace(/ಬೇಕು/g, "ಬೋಡು").replace(/ಬೆಕ್ಕು/g, "ಪುಚ್ಚೆ");
    document.getElementById("res").value = res;
}
