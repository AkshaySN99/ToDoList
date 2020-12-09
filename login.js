function validate() {
    var usn = document.getElementById('usn').value;
    var psw = document.getElementById('psw').value;
    if((usn == "admin") && (psw == "12345")) {
        window.location.href = './todo.html';
    }
    else {
        alert("Incorrect username or password!")
    }
}