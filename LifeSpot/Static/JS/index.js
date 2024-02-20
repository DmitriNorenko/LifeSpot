let age = prompt("Введите возраст:");
if (age >= 18) {
    alert("Добро пожаловать! " + new Date().toLocaleString());
}
else {
    alert("Этот сайт для лиц старше 18 лет.");
    window.location.href = "http://www.google.com";
}