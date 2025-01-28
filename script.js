function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    // Display user's message
    displayMessage(userInput, 'user');

    // Generate bot's response
    let botResponse = getBotResponse(userInput);

    // Display bot's response after a slight delay
    setTimeout(() => {
        displayMessage(botResponse, 'bot');
    }, 1000);

    // Clear the input field
    document.getElementById("user-input").value = "";
}

function displayMessage(message, sender) {
    let chatBox = document.getElementById("chat-box");
    
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", `${sender}-message`);
    messageDiv.innerHTML = `<span>${message}</span>`;
    
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}

function getBotResponse(input) {
    // Simple responses
    const responses = {
        "hi": "Hello! How can I assist you today?",
        "how are you?": "I'm doing great, thank you for asking!",
        "bye": "Goodbye! Take care.",
        "what is your name?": "I am your friendly AI assistant.",
        "default": "Sorry, I didn't quite understand that. Can you try rephrasing?"
    };
    
    return responses[input.toLowerCase()] || responses["default"];
}
