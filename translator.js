document.getElementById("txt").addEventListener("input", translate);
function translate(){
    let txt = document.getElementById("txt").value;
    let res = txt.replace(/ನಾನು/g, "ಯಾನ್").replace(/ನಾ/g, "c");
    document.getElementById("res").value = res;
}
