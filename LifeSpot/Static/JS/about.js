let userAbout = new Map();
function addComment() {
    userAbout.set("name", prompt("Введите свое имя: "));
    userAbout.set("comment", prompt("Введите комментарий: "));
    userAbout.set("date", new Date().toLocaleString());
    writeFeedbacks();
}
const writeFeedbacks = () => {
    document.getElementsByClassName('userFeedback')[0].innerHTML += '<div class="showFeedback">\n' +
        `<p><em>${userAbout.get('name')}  ${userAbout.get("date")}</em></p>` +
        `<p>${userAbout.get('comment')}</p>` +
        '</div>';
}
