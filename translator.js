document.getElementById("txt").addEventListener("input", translate);
function translate(){
    let txt = document.getElementById("txt").value;
    //pronoun
    txt = txt.replace(/ನಾನು/g, "ಯಾನ್").replace(/ನೀವು/g, "ಈರ್").replace(/ಆಯೆ/g, "ಅವನು").replace(/ಅವನು/g, "ಆಯೆ").replace(/ಅವಳು/g, "ಆಲ್").replace(/ನಾವು/g, "ನಮ").replace(/ನೀನು/g, "ಈ").replace(/ನನಗೆ/g, "ಎಂಕ್");
    //question
    txt = txt.replace(/ಯಾವಾಗ/g, "ಏಪ").replace(/ಏನು/g, "ದಾದ").replace(/ಹೇಗೆ/g, "ಎಂಚ").replace(/ಎಲ್ಲಿ/g, "ಒಲ್ಪ").replace(/ಯಾಕೆ/g, "ದಾಯೆ");
    //animals
    txt = txt.replace(/ಎಮ್ಮೆ/g, "ಎರ್ಮೆ").replace(/ಹಸು/g, "ಪೆತ್ತ").replace(/ಕಾಗೆ/g, "ಕಕ್ಕೆ").replace(/ಬೆಕ್ಕು/g, "ಪುಚ್ಚೆ").replace(/ಹುಲಿ/g, "ಪಿಲಿ");
    //fruits
    //things
    //plants 
    //colours
    txt = txt.replace(/ಹಳದಿ/g, "ಮಂಜಲ್");
    //other words
    txt = txt.replace(/ಮನೆ/g, "ಇಲ್ಲ").replace(/ಬೇರೆ/g, "ಬೇತೆ").replace(/ಭಾಷೆ/g, "ಬಾಸೆ").replace(/ಮತ್ತು/g, "ಬೊಕ್ಕ").replace(/ಹಾಗೂ/g, "ಬೊಕ್ಕ").replace(/ಖುಷಿ/g, "ಕುಸಿ").replace(/ಬದುಕು/g, "ಬದ್‌ಕ್").replace(/ಧನ್ಯವಾದ/g, "ಸೊಲ್ಮೆಲು").replace(/ಕಾಡು/g, "ಕಾಡ್").replace(/ಉಂಟು/g, "ಉಂಡು").replace(/ವಾಹನ/g, "ಗಾಡಿ").replace(/ಬೇಕು/g, "ಬೋಡು").replace(/ತಿಳಿಸಿ/, "ತೆರಿಪಾಲೆ").replace(/ಮನವಿ/g, "ಬಿನ್ನಾಪು").replace(/ದಿನಾಂಕ/g, "ತೇದಿ").replace(/ಆಮಂತ್ರಣ/g, "ಲೆಪ್ಪೋಲೆ").replace(/ಕೆಲಸ/g, "ಬೇಲೆ");
   
    document.getElementById("txt").value = res;
}
