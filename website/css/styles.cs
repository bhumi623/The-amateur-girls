/* Global Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #08161d;
}

header {
    background-color: #bed7eb;
    color: white;
    padding: 20px 0;
    text-align: center;
}

header nav ul {
    list-style: none;
    padding: 0;
}

header nav ul li {
    display: inline;
    margin: 0 15px;
}

header nav ul li a {
    color: white;
    text-decoration: none;
}

.hero {
    background-color: #f4f4f4;
    padding: 50px 0;
    text-align: center;
}

.hero .btn {
    background-color: #f4cc35;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    margin-top: 20px;
}

/* Reset some default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Set up the container with Flexbox */
.section-container {
    display: flex;
    justify-content: space-between; /* Space out the sections */
    gap: 20px; /* Add space between the boxes */
    flex-wrap: wrap; /* Allows the sections to wrap onto the next line if necessary */
    padding: 20px;
}
/* Reset default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Set up the container using Flexbox */
.section-container {
    display: flex;
    justify-content: space-between; /* Space out the sections */
    gap: 20px; /* Add space between the sections */
    flex-wrap: wrap; /* Allow sections to wrap onto the next line if needed */
    padding: 20px;
}

/* Style each section */
.section {
    width: 23%; /* 4 sections side by side (approximately 25% each) */
    background-color:#bbd3eb;
    padding: 20px;
    border: 2px solid #7096a9;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Media query for small screens */
@media (max-width: 768px) {
    .section-container {
        justify-content: center; /* Center the sections */
    }
    
    .section {
        width: 90%; /* Each section takes up most of the screen width */
        margin-bottom: 20px; /* Space between stacked sections */
    }
}






#doubtInput {
    width: 80%;
    height: 100px;
    margin: 10px 0;
}

button {
    padding: 10px 20px;
    background-color: #f4cc35;
    color: #08161d;
    border: none;
    cursor: pointer;
}

footer {
    background-color: #38919f;
    color: #faf7df;
    padding: 20px 0;
    text-align: center;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}
/* Floating logo button */
.copilot-logo {
    position: fixed;
    bottom: 20px;
    right: 20px;
   
    border-radius: 50%;
    padding: 15px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.copilot-logo img {
    width: 40px;
    height: 40px;
}

/* AI Chat Window */
.copilot-chat {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 350px;
    height: 450px;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    display: none; /* Initially hidden */
    z-index: 999;
    overflow-y: auto;
}

.copilot-header {
    background-color: #007bff;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px 10px 0 0;
}

.copilot-header h2 {
    margin: 0;
}

.close-btn {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
}

.chat-box {
    padding: 10px;
    height: 350px;
    overflow-y: auto;
}

.chat-box .message {
    padding: 8px;
    margin-bottom: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
}

.chat-box .message.ai {
    background-color: #d9f7ff;
}

.chat-box .message.user {
    background-color: #cfe2f3;
    text-align: right;
}

/* Chat Input and Send Button */
#chatInput {
    width: calc(100% - 20px);
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.send-btn {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

.send-btn:hover {
    background-color: #0056b3;
}

