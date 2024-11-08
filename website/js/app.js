

// Anonymous Doubts
let doubtForm = document.getElementById('doubtForm');
let doubtList = document.getElementById('doubt-list');
doubtForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let doubtInput = document.getElementById('doubtInput').value;
    if (doubtInput) {
        let doubtItem = document.createElement('p');
        doubtItem.textContent = `Doubt: ${doubtInput}`;
        doubtList.appendChild(doubtItem);
        document.getElementById('doubtInput').value = '';  // Clear input
    }
});

// Vehicle Rentals
let vehicleList = document.getElementById('vehicle-list');
document.getElementById('addVehicleBtn').addEventListener('click', function() {
    let vehicle = prompt('Enter your vehicle details (e.g., Bike, Car):');
    if (vehicle) {
        let vehicleItem = document.createElement('p');
        vehicleItem.textContent = `Vehicle: ${vehicle}`;
        vehicleList.appendChild(vehicleItem);
    }
});

// Get references to elements
const copilotLogo = document.getElementById('copilotLogo');
const copilotChat = document.getElementById('copilotChat');
const closeChat = document.getElementById('closeChat');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
const chatBox = document.getElementById('chatBox');

// Show/Hide the chat window when the logo is clicked
copilotLogo.addEventListener('click', () => {
    if (copilotChat.style.display === "none" || copilotChat.style.display === "") {
        copilotChat.style.display = "block"; // Show the chat window
    } else {
        copilotChat.style.display = "none"; // Hide the chat window
    }
});

// Close the chat window
closeChat.addEventListener('click', () => {
    copilotChat.style.display = "none";
});

// Handle sending a message
sendMessage.addEventListener('click', () => {
    const userMessage = chatInput.value;
    if (userMessage.trim() !== "") {
        // Display the user's message
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('message', 'user');
        userMessageDiv.textContent = userMessage;
        chatBox.appendChild(userMessageDiv);

        // Scroll to the bottom of the chat
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear the input
        chatInput.value = "";

        // Simulate AI response (You can replace this with actual AI functionality)
        setTimeout(() => {
            const aiResponseDiv = document.createElement('div');
            aiResponseDiv.classList.add('message', 'ai');
            aiResponseDiv.textContent = "This is the AI response to: " + userMessage;
            chatBox.appendChild(aiResponseDiv);

            // Scroll to the bottom of the chat
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }
});
setTimeout(async () => {
    const aiResponse = await fetch('/api/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMessage })
    });
    const data = await aiResponse.json();

    const aiResponseDiv = document.createElement('div');
    aiResponseDiv.classList.add('message', 'ai');
    aiResponseDiv.textContent = data.answer; // Assume 'answer' is the AI's response
    chatBox.appendChild(aiResponseDiv);

    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;
}, 1000);



