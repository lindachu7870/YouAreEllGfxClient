import MessageService from "./message-service.js";

let userId = "lindachu7870";

const messageService = new MessageService(userId);

window.addEventListener("load", function () {
    document.getElementById("greeting").innerHTML = `Welcome ${userId}!`;
    messageService.getAllMessages();

});

