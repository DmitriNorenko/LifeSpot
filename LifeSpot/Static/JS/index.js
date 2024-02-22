let session = new Map();
function checkAge() {
    session.set("age", prompt("Введите свой возраст: "));
    if (session.get("age") >= 18) {
        handleSession();
        alert("Доступ разрешен\n" + session.get("date"));
    }
    else {
        alert('Для лиц старше 18 лет.');
        window.location.href = "http://www.google.com";
    }
}

function handleSession() {
    session.set("userAgent", window.navigator.userAgent);
    let dataNow = new Date().toLocaleString();
    session.set("date", dataNow)
}

const sessionLog = function () {
    for (let item in session) {
        console.log(item);
    }
}

const inputParseFunction = function () {
    return document.getElementsByTagName('input')[0].value.toLowerCase();
}

function searchFilter() {
    let elements = document.getElementsByClassName('video-container');
    for (let i = 0; i < elements.length; i++) {
        let titleVideo = elements[i];
        let discriptionVideo = titleVideo.getElementsByTagName('h3')[0];
        if (discriptionVideo.innerText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            titleVideo.style.display = 'inline-block';
        }
        else {
            titleVideo.style.display = 'none';
        }
    }
}

function subOnMy() {
    setTimeout(() => alert('Подпишись!'), 60000);
}