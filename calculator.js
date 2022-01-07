function clik(x) {
    var y = document.getElementById("displaybox").value;
    var z = y.charAt(y.length - 1);
    var i = y.charAt(0) || x;
    var eql

    if (i == '/' || i == '+' || i == '-' || i == '*' || i == '=' || x == 'c') {
        document.getElementById("displaybox").value = "";
    } else if ((z == '/' || z == '+' || z == '-' || z == '*' || z == '=') && (x == '/' || x == '+' || x == '-' || x == '*' || x == '=')) {
        document.getElementById("displaybox").value = document.getElementById("displaybox").value;
    } else if (x == '=') {
        eql = eval(y)
        document.getElementById("displaybox").value = document.getElementById("displaybox").value + "=" + eql
    } else {
        document.getElementById("displaybox").value = document.getElementById("displaybox").value + x;
    }
}





