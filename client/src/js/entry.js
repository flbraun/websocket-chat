import client from "socket.io-client";

const socket = client();
const history = document.getElementById("history");
const message = document.getElementById("message");

document.getElementById("message-form").onsubmit = function () {
    socket.emit("chat message", message.value);
    message.value = "";
    message.focus();
    return false;
};

socket.on("chat message", function (msg) {
    history.insertAdjacentHTML("beforeend", "<li>" + msg + "</li>");
});