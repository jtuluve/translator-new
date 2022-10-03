document.getElementById("txt").addEventListener("input", translate);
function translate(){
    let txt = document.getElementById("txt").value;
    let res = txt.replace(/ನಾ/g, "b");
    document.getElementById("res").value = res;
}
