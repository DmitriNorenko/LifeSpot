let session = new Map();
session.set("userAgent", window.navigator.userAgent);
session.set("age", prompt("Введите свой возраст: "));
if (session.get("age") >= 18) {
    let dataNow = new Date().toLocaleString();
    session.set("date",dataNow)
    alert("Доступ разрешен\n" + session.get("date"));
}
else {
    alert('Для лиц старше 18 лет.');
    window.location.href = "http://www.google.com";
}
for (let item in session) {
    console.log(item);
}