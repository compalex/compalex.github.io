function signUpFunction(){
    var name = document.getElementById('signName').value;
    var pswrd = document.getElementById('signPswrd').value;
    var permit = true;
    signUp(permit, name, pswrd);
    console.log(name);
    console.log(pswrd);
}

function logInFunction(){
    var name = document.getElementById('logName').value;
    var pswrd = document.getElementById('logPswrd').value;
    var permit = true;
    logIn(permit, name, pswrd);
    setUsername = name;
    setPassword = pswrd;
    console.log(name);
    console.log(pswrd);
}

function signUp(pr, nm, ps) {
    console.log('here');
    var setPassword = ps;
    var setUsername = nm;
    permit = false;
    var data = JSON.stringify({
        "password": setPassword,
        "username": setUsername
    });
    var url = "https://felix-cat-developer-edition.ap4.force.com/services/apexrest/signup";
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if(this.responseText == 'OK') {
                document.getElementById("result").innerHTML = setUsername + ' is now registered';
            }
            if(this.responseText == 'Bad Request') {
                document.getElementById("result").innerHTML = setUsername + ' exists already';
            }
            console.log(this.responseText);
        }
    });
    xhr.open("POST", url, true);
    xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");
    xhr.setRequestHeader("accept", "application/json");
    xhr.send(data);
}

function logIn(pr, nm, ps) {

    console.log('here');
    var setPassword = ps;
    var setUsername = nm;
    permit = false;
    var data = JSON.stringify({
        "password": setPassword,
        "username": setUsername
    });
    var url = "https://felix-cat-developer-edition.ap4.force.com/services/apexrest/login";
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if(this.responseText == 'OK') {
                document.getElementById("result").innerHTML = 'successfully logged as '+ setUsername;
            }
            if(this.responseText == 'Unauthorized') {
                document.getElementById("result").innerHTML = 'wrong username or password';
            }
            console.log(this.responseText);
        }
    });
    xhr.open("POST", url, true);
    xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");
    xhr.setRequestHeader("accept", "application/json");
    xhr.send(data);
}