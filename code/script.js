function input() {
    var code = document.getElementById("cd").value;
    document.getElementById("output").innerHTML = code;
}
function reset() {
    document.getElementById("cd").value = "";
    document.getElementById("output").innerHTML = "";
}