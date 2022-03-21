const expandBtn = document.querySelector(".expend")
const element = document.querySelector(".js-header");
const closeWindow = document.querySelector(".js-close");
const chatWindow = document.querySelector('.chatBox');
const chatBox = document.querySelector('.chat-thread');
const input =document.querySelector(".message-input")
window.onload = function () {
    chatBox.scrollTop = chatBox.scrollHeight;
    expandBtn.style.display = 'block';
}

expandBtn.addEventListener("click",openElement)
closeWindow.addEventListener("click",closeElement)

function closeElement() {
    chatWindow.classList.add("close")
    expandBtn.style.display = 'block';
}
function openElement() {
    chatWindow.classList.remove("close")
    expandBtn.style.display = 'none';
    chatBox.scrollTop = chatBox.scrollHeight;
}

function setDate() {
    d = new Date();
    m = 0;
    if (m != d.getMinutes()) {
        m = ('0' + d.getMinutes()).substr(-2);
        console.log(m);
        $('.timestamp').text(d.getHours() + ':' + m)
    }
}

function insertMessage() {
    const regexp = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
    msg = input.value.replace(regexp, '<a target="_blank" href="$1">$1</a>');
    if (msg.trim() == '') {
        return false;
    }
    creatNode(msg)
    setDate();
    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = " ";
}

function creatNode(x) {
    const newLi = document.createElement("li");
    const newSmall = document.createElement("small");
    newLi.setAttribute("class", "message")
    newSmall.setAttribute("class", "timestamp")
    newLi.innerHTML = x;
    newLi.appendChild(newSmall)
    document.querySelector(".chat-thread").appendChild(newLi)
}
input.addEventListener("keydown", (e) => {
    e = window.event || e;
    if (e.code == "Enter") {
        insertMessage();
        return false;
    }
})
// input.addEventListener("compositionstart", (e) => {
//     document.querySelector(".chat-feedback").innerHTML = "Your partner is typing…"
//     console.log("Your partner is typing…");
// })

document.querySelector(".message-submit").addEventListener("click", () => {
    insertMessage();
})