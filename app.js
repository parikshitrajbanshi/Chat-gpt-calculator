function clearResult() {
    document.getElementById("result").value = "";
}

function deleteChar() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}

function appendChar(char) {
    document.getElementById("result").value += char;
}

function calculate() {
    var result = document.getElementById("result").value;
    var answer = eval(result);
    document.getElementById("result").value = answer;
}
