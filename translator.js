document.getElementById("txt").addEventListener("input", translate);
function translate(){
    let txt = document.getElementById("txt").value;
    
    //pronoun
    txt = txt.replace(/ನಾನು/g, "ಯಾನ್").replace(/ನೀವು/g, "ಈರ್").replace(/ಅವನು/g, "ಆಯೆ").replace(/ಅವರು/g, "ಆರ್").replace(/ಇವನು/g, "ಇಂಬೆ").replace(/ಇವಳು/g, "ಇಂಬಲ್").replace(/ಇವರು/g, "ಇಂಬೆರ್").replace(/ಅವಳು/g, "ಆಲ್").replace(/ನಾವು/g, "ನಮ").replace(/ನೀನು/g, "ಈ").replace(/ನನಗೆ/g, "ಎಂಕ್").replace(/ಅವನಿಗೆ/g, "ಆಯೆಗ್").replace(/ಅವಳಿಗೆ/g, "ಅಲೆಗ್").replace(/ಅವರಿಗೆ/g, "ಅರೆಗ್").replace(/ಅವನಿಂದ/g, "ಆಯೆರ್ದ್").replace(/ಅವಳಿಂದ/g, "ಅಲೆರ್ದ್").replace(/ಅವರಿಂದ/g, "ಅರೆರ್ದ್").replace(/ನಿಮಗೆ/g, "ನಿಕ್ಲೆಗ್");
    //ACTIONS 
    txt = txt.replace(/ಗುದ್ದಿ/g, "ಗುದ್ದುದು").replace(/ನಡೆಯಿತು/g, "ನಡತ್ಂಡ್").replace(/ಆಗಿದ್ದಾರೆ/g, "ಆತೆರ್").replace(/ಒಳ್ಳೆ/g, "ಎಡ್ಡೆ").replace(/ಆಗುವ/g, "ಆಪಿನ").replace(/ಹೇಳುತ್ತಿದ್ದಾರೆ/g, "ಪನೊಂದುಲ್ಲೆರ್").replace(/ಆಗಬೇಕು/g, "ಆವೊಡು").replace(/ಗೆಲ್ಲಬೇಕು/g, "ಗೆಂದೊಡು").replace(/ಮುಗಿಯಲು/g, "ಮುಗಿಯರೆ").replace(/ಆಗುತ್ತಾರೆ/g, "ಆಪೆರ್").replace(/ಕಾಯುತ್ತಿದ್ದಾರೆ/g, "ಕಾತೊಂದುಲ್ಲೆರ್").replace(/ನೋಡು/g, "ತೂಲ").replace(/ಮಲಗು/g, "ಜೆಪ್ಪು").replace(/ಅಲ್ಲಾಡಿಸಿ/g, "ಗದ್ದಾದ್").replace(/ಬೊಗಳಿ/g, "ಕೊರೆತ್ ದ್").replace(/ಬೊಗಳಿದಕ್ಕೆ/g, "ಕೊರೆತಿನೆೃಕ್").replace(/ಜಗಳ/g, "ಗಲಾಟೆ").replace(/ಬಿಸಾಡಿ/g, "ದಕ್ಕ್‌ದ್").replace(/ಮುರಿದು/g, "ಪೊಲ್ತ್‌ದು").replace(/ಮಾಡಿ/g, "ಮಲ್ತ್‌ದ್").replace(/ಅಪಹಾಸ್ಯ/g, "ಮಕ್ಕರ್").replace(/ಆಕ್ಸಿಡೆಂಟ್/g, "ತಾಂಟ್ ದ್").replace(/ಕಾರಿ/g, "ಕಕ್ಕ್ ದ್").replace(/ವಾಂತಿ ಮಾಡಿ/g, "ಕಕ್ಕ್ ದ್").replace(/ಎಳೆಯುವಾಗ/g, "ಒಯಿಪುನಗ").replace(/ಸಿಕ್ಕಿಹಾಕಿ/g, "ತಿಕುಬೂರ್ದು").replace(/ಸಿಕ್ಕಿಹಾಕಿ/g, "ತಿಕುಬೂರ್ದು").replace(/ನಡೆಯಲಿಕ್ಕಿದೆ/g, "ನಡಪೆರೆ ಉಂಡು");
    //question
    txt = txt.replace(/ಯಾರಿಗೆ/g, "ಏರೆಗ್").replace(/ಯಾವಾಗ/g, "ಏಪ").replace(/ಏನು/g, "ದಾದ").replace(/ಹೇಗೆ/g, "ಎಂಚ").replace(/ಎಲ್ಲಿ/g, "ಒಲ್ಪ").replace(/ಯಾಕೆ/g, "ದಾಯೆ").replace(/ಯಾವುದು/g, "ಒವ್").replace(/ಹೌದಾ/g, "ಅಂದಾ").replace(/ಹೌದೆ/g, "ಅಂದೆ").replace(/ಉಂಟಾ/g, "ಉಂಡಾ").replace(/ಎಲ್ಲಿಂದ/g, "ಒಲ್ಪರ್ದ್").replace(/ಎಲ್ಲಿಯವರೆಗೆ/g, "ಓಡೆ ಮುಟ").replace(/ಅಲ್ಲವೆ/g, "ಅತ್ತೇ").replace(/ಅಲ್ಲವಾ/g, "ಅತ್ತಾ").replace(/ಅಲ್ಲವೇ/g, "ಅತ್ತೇ").replace(/ಆಗುತ್ತದೆಯೇ/g, "ಆಪುಂಡೆ").replace(/ಆಗುತ್ತಾ/g, "ಆಪುಂಡಾ").replace(/ಆಗುತ್ತಿದೆಯೇ/g, "ಆವೊಂದುಂಡೆ").replace(/ಮಾಡುವೆಯಾ/g, "ಮಲ್ಪುವನಾ").replace(/ಮಾಡುತ್ತೀರಾ/g, "ಮಲ್ಪುವರಾ").replace(/ಮಾಡುತ್ತೀಯಾ/g, "ಮಲ್ಪುವನಾ").replace(/ಎನಂತೆ/g, "ದಾದಗೆ").replace(/ಎಷ್ಟು/g, "ಏತ್");
    //relations 
    txt = txt.replace(/ತ೦ಗಿ/g, "ತಂಗಡಿ").replace(/ಮಗು/g, "ಬಾಲೆ");
    //animals
    txt = txt.replace(/ಎಮ್ಮೆ/g, "ಎರ್ಮೆ").replace(/ಹಸು/g, "ಪೆತ್ತ").replace(/ಕಾಗೆ/g, "ಕಕ್ಕೆ").replace(/ಬೆಕ್ಕು/g, "ಪುಚ್ಚೆ").replace(/ಹುಲಿ/g, "ಪಿಲಿ").replace(/ಸಿಂಹ/g, "ಸಿಮ್ಮ").replace(/ಕೋಳಿ/g, "ಕೋರಿ").replace(/ಕೋಗಿಲೆ/g, "ಪಿಲಿ").replace(/ನಾಯಿಗಳು/g, "ನಾಯಿಲು").replace(/ನಾಯಿಗಳಿಂದ/g, "ನಾಯಿಲೆರ್ದ್").replace(/ನಾಯಿಗಳಿಗೆ/g, "ನಾಯಿಲೆಗ್").replace(/ನಾಯಿ ಕಚ್ಚಿ/g, "ನಾಯಿ ತುಚ್ಚಿದ್").replace(/ಹುಚ್ಚುನಾಯಿ/g, "ಮರ್ಲ್ ನಾಯಿ").replace(/ಹುಚ್ಚು ನಾಯಿ/g, "ಮರ್ಲ್ ನಾಯಿ").replace(/ನಾಯಿ ಮರಿ/g, "ನಾಯಿದ ಕಿನ್ನಿ").replace(/ನಾಯಿಯೊಂದಿಗೆ/g, "ನಾಯಿದೊಟ್ಟಿಗೆ").replace(/ನಾಯಿಯ/g, "ನಾಯಿದ").replace(/ಮೊಸಳೆ/g, "ಮುದಲೆ");
    //fruits
    txt = txt.replace(/ಹಳಸಿನಹಣ್ಣು/g, "ಪೆಲಕೈ").replace(/ಹಳಸಿನಕಾಯಿ/g, "ಗುಜ್ಜೆ").replace(/ಹಲಸಿನಕಾಯಿ/g, " ಗುಜ್ಜೆ");
    //verbs
    txt = txt.replace(/ನಿಲ್ಲು/g, "ಉಂತು").replace(/ಕುಳಿತುಕೋ/g, "ಕುಲ್ಲು").replace(/ಓಡು/g, "ಬಲಿಪು").replace(/ನಡಿ/g, "ನಡಪು").replace(/ನಡೆದುಕೊಂಡು/g, "ನಡತೊಂದು").replace(/ಓಡಿಕೊಂಡು/g, "ಬಲಿತೊಂದು");
    //things
    txt = txt.replace(/ಮನೆ/g, "ಇಲ್ಲ").replace(/ವಾಹನ/g, "ಗಾಡಿ").replace(/ಬಾಚಣಿಗೆ/g, "ಬರ್ಚನೆ").replace(/ಬಟ್ಟೆ/g, "ಕುಂಟು").replace(/ಇಡುಸುಡಿ/g, "ಮೈಸುಡಿ");
    //plants 
    //body parts
    txt = txt.replace(/ಕಾಲು/g, "ಕಾರ್").replace(/ಮುಖ/g, "ಮೋನೆ").replace(/ಮೂಗು/g, "ಮೂಂಕು").replace(/ಕೂದಲು/g, "ಕುಜಲ್").replace(/ಬೆರಳು/g, "ಬಿರೆಲ್").replace(/ಕಣ್ಣು/g, "ಕಣ್ಣ್").replace(/ಕಿವಿ/g, "ಕೆಬಿ").replace(/ಕುತ್ತಿಗೆ/g, "ಕೆಕ್ಕಿಲ್").replace(/ಹೊಟ್ಟೆ/g, "ಬಂಜಿ").replace(/ತಲೆ/g, "ತರೆ").replace(/ಹೃದಯ/g, "ಉಡಲ್").replace(/ಹಲ್ಲು/g, "ಕೂಲಿ").replace(/ನಾಲಗೆ/g, "ನಾಲಯಿ").replace(/ಹುಬ್ಬು/g, "ಕುರ್ಬು").replace(/ಭುಜ/g, "ಪುಗೆಲ್").replace(/ಹಣೆ/g, "ಮುಂಡ").replace(/ಬೆನ್ನು/g, "ಬೆರಿ").replace(/ಬಾಲ/g, "ಬೀಲ").replace(/ಕೂದಲು/g, "ಕುಜಲ್").replace(/ಕಣ್ಣಿನ/g, "ಕಣ್ಣ್‌ದ").replace(/ಕುಂಡೆ/g, "ಪಿಂಕನ್").replace(/ಉಗುರು/g, "ಉಗುರ್").replace(/ಮೂಳೆ/g, "ಎಲು").replace(/ಕಾಲಿನ ಗಂಟು/g, "ಕಾರ್‌ದ ಗಂಟ್").replace(/ಕಿವಿ ಅಲ್ಲಾಡಿಸು/g, "ಕೆಬಿ ಪಂದಾವು").replace(/ಕಿವಿ ಅಲ್ಲಾಡಿಸುತ್ತ/g, "ಕೆಬಿ ಪಂದಾವೊಂದು").replace(/ಎಂಜಲು/g, "ಮಡೆ").replace(/ಲಾಲರಸ/g, "ದೊಲ್ಲೆ").replace(/ಮುಖಕ್ಕೆ/g, "ಮುಸುಂಟುಗ್").replace(/ರಕ್ತ/g, "ನೆತ್ತೆರ್");
    //Numbers
    txt = txt.replace(/ಒಂದು/g, "ಒಂಜಿ").replace(/ಎರಡು/g, "ರಡ್ಡ್").replace(/ಮೂರು/g, "ಮೂಜಿ").replace(/ನಾಲ್ಕು/g, "ನಾಲ್").replace(/ಐದು/g, "ಐನ್").replace(/ಆರು/g, "ಆಜಿ").replace(/ಏಳು/g, "ಏಲ್").replace(/ಎಂಟು/g, "ಎಣ್ಮ").replace(/ಒಂಬತ್ತು/g, "ಒರ್ಂಬ").replace(/ಹತ್ತು/g, "ಪತ್ತ್");
    //colours
    txt = txt.replace(/ಹಳದಿ/g, "ಮಂಜಲ್").replace(/ಬಿಳಿ/g, "ಬೊಲ್ದು").replace(/ಹಸಿರು/g, "ಪಚ್ಚೆ").replace(/ಕಂದು/g, "ಬೂದು");
    //other words (including nouns)
    txt = txt.replace(/ಇವತ್ತು/g, "ಇನಿ").replace(/ಇಂದು/g, "ಇನಿ").replace(/ಹತ್ತಿರ/g, "ಕೈತಲ್").replace(/ಅಭಿಮಾನಿಗಳು/g, "ಅಭಿಮಾನಿಲು").replace(/ವರ್ಷ/g, "ವರ್ಸ").replace(/ಹೊರಗೆ/g, "ಪಿದಯಿ").replace(/ಬೇರೆ/g, "ಬೇತೆ").replace(/ಭಾಷೆ/g, "ಬಾಸೆ").replace(/ಮತ್ತು/g, "ಬೊಕ್ಕ").replace(/ಹಾಗೂ/g, "ಬೊಕ್ಕ").replace(/ಖುಷಿ/g, "ಕುಸಿ").replace(/ಬದುಕು/g, "ಬದ್‌ಕ್").replace(/ಧನ್ಯವಾದ/g, "ಸೊಲ್ಮೆಲು").replace(/ಕಾಡು/g, "ಕಾಡ್").replace(/ಉಂಟು/g, "ಉಂಡು").replace(/ಬೇಕು/g, "ಬೋಡು").replace(/ತಿಳಿಸಿ/, "ತೆರಿಪಾಲೆ").replace(/ಮನವಿ/g, "ಬಿನ್ನಾಪು").replace(/ದಿನಾಂಕ/g, "ತೇದಿ").replace(/ಆಮಂತ್ರಣ/g, "ಲೆಪ್ಪೋಲೆ").replace(/ಕೆಲಸ/g, "ಬೇಲೆ").replace(/ಬೆಳಕು/g, "ಬೊಲ್ಪು").replace(/ಸ್ವರ/g, "ಸೊರ").replace(/ಅಭಿನಂದನೆ/g, "ಎಡ್ದೆಪ್ಪುಲು").replace(/ಹಬ್ಬ/g, "ಪರ್ಬ").replace(/ಹೊಸ/g, "ಪೊಸ").replace(/ಪುಸ್ತಕ/g, "ಮಸ್ತಿರೆ").replace(/ಹೊಟ್ಟೆಪಾಡಿಗಾಗಿ/g, "ಬಂಜಿದ ಪಡಿಗಾದ್").replace(/ಪದ್ಯ/g, "ಪದ").replace(/ಹೊಟ್ಟೆ ನೋವು/g, "ಬಂಜಿ ಬೆೇನೆ").replace(/ಹೊಟ್ಟೆನೋವು/g, "ಬಂಜಿ ಬೆೇನೆ").replace(/ಹಳೆಯ/g, "ಪರತ್ತ್").replace(/ಹುಳ ಎದ್ದಿದೆ/g, "ಪುರಿ ಲಕ್ಕ್ ದ್ಂಡ್").replace(/ರಾತ್ರಿ/g, "ತಿರ್ಲ್").replace(/ಹುಳ ಎದ್ದು/g, "ಪುರಿ ಲಕ್ಕ್ ದ್").replace(/ಹುಳ ಬಾದೆ/g, "ಪುರಿ ಬಾದೆ").replace(/ಗೆಲುವು/g, "ಗೆಲ್ಮೆ").replace(/ಮೆದುಳು/g, "ತರೆತ ಬೊಂಡು").replace(/ಬಿರುದು/g, "ಬಿರ್ದ್").replace(/ಮುಖಾಮುಖಿ/g, "ಎದುರೆದುರು").replace(/ಹೊತ್ತಿಗೆ/g, "ಪೊರ್ತುಗು").replace(/ಬೊಗಲಿದಕ್ಕೆ/g, "ಕೊರೆತಿನ್ನೆೃಕ್").replace(/ಒಟ್ಟಿಗೆ/g, "ಒಟ್ಟುಗು").replace(/ಡ್ರೃವರ್/g, "ಗಾಡಿ ಬುಡ್ಪುನಾಯೆ").replace(/ರಥ/g, "ತೆೇರ್").replace(/ರಥೋತ್ಸವ/g, "ತೇರ ಉಚ್ಚಯ").replace(/ಟಯರ್/g, "ಚಕ್ರ").replace(/ಚಕ್ರಕ್ಕೆ/g, "ಚಕ್ರೊಗ್").replace(/ಜಾತ್ರೆೊತ್ಸವ/g, "ಜಾತ್ರೆ").replace(/ದೇವರ ಗುಡಿ/g, "ದೇವೆರೆನ ಗುಂಡ").replace(/ದೇವರು/g, "ದೇವೆರ್").replace(/ದೇವಸ್ತಾನ/g, " ದೇವಲ್ಯೊ").replace(/ದೇವಸ್ಥಾನ/g, "ದೇವಲ್ಯೊ");
   //uncategorised
    txt = txt.replace(/ನಿನ್ನೆ/g, "ಕೋಡೆ").replace(/ಹೆಚ್ಚಿನ/g, "ಎಚ್ಚದ").replace(/ಸತ್ತುಹೋದ/g, "ತೀರ್ ಪೋಯಿನ").replace(/ಈಗ/g, "ಇತ್ತೆ").replace(/ವರ್ಷಕ್ಕಿಂತ/g, "ವರ್ಸರ್ದ್");
    //if no words found
    txt = txt;
    document.getElementById("res").value = txt;
    
}
