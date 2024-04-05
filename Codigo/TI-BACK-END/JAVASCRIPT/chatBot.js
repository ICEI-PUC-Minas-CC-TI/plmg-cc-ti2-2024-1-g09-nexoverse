document.addEventListener("DOMContentLoaded", function() {
    const messageList = document.querySelector(".message-list");
    const messageInput = document.querySelector(".message-input");
    const sendButton = document.querySelector(".send-button");

    sendButton.addEventListener("click", function() {
        sendMessage();
    });

    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            const messageItem = document.createElement("li");
            messageItem.textContent = "Você: " + messageText;
            messageList.appendChild(messageItem);
            messageInput.value = "";
            respondToMessage(messageText);
        }
    }

    function respondToMessage(message) {
        const respostaPadrao = "Entre em contato com nossos desenvolvedores pelos seguintes emails: camposarthur3005@gmail.com gabriel.braganca1705@gmail.com g.lopesresende@gmail.com mateushds227@gmail.com pedrogaf55@gmail.com";
        const resposta = respostas[message.toLowerCase()] || respostaPadrao;
        const respostaItem = document.createElement("li");
        respostaItem.textContent = "ChatBot: " + resposta;
        messageList.appendChild(respostaItem);
    }

    const respostas = {
        "oi": "Olá! Posso ajudar?"
    };
});
