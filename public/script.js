// Predefined responses
const chatbotResponses = {
    "hii": "Hello! How can I assist you with booking tickets today? Enter the museum name.",
    "state museum,bhubaneswar": "Sure! Please provide the date and time for your visit.",
    "1st of sep at 10 am": "How many tickets do you need?",
    "6": "Click here to pay: [Payment Link]",
    "help": "You can ask me about booking, canceling tickets, or checking available slots. Type 'Hii' to start the chat.",
};



function handleUserInput(inputElement) {
    const userInput = inputElement.value.toLowerCase().trim();
    const response = chatbotResponses[userInput] || "I'm sorry, I didn't understand that. Can you please rephrase?";

    const chatContainer = document.querySelector('.chat-container');

    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = `You: ${inputElement.value}`;
    chatContainer.appendChild(userMessage);

    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');
    botMessage.textContent = `Bot: ${response}`;
    chatContainer.appendChild(botMessage);

    inputElement.value = '';

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

document.querySelector('.userInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleUserInput(this);
    }
});
