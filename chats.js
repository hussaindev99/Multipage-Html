function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value.trim();

    if (message !== "") {
        var chatContainer = document.getElementById("chatContainer");
        var sentMessage = document.createElement("div");
        sentMessage.className = "chat-message sent enter";
        sentMessage.textContent = message;
        chatContainer.appendChild(sentMessage); 
        setTimeout(function () {
            var receivedMessage = document.createElement("div");
            receivedMessage.className = "chat-message received";
            receivedMessage.textContent = "Hello ! Nazrul How are you" 
            chatContainer.appendChild(receivedMessage);

            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 500);
        messageInput.value = "";
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}






