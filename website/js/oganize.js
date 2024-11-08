// Function to handle task addition in the daily planner
function addTask() {
    const taskInput = document.getElementById('task');
    const taskTimeInput = document.getElementById('taskTime');

    if (taskInput.value && taskTimeInput.value) {
        const taskList = document.getElementById('taskList');

        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <strong>Task:</strong> ${taskInput.value} 
            <br> 
            <strong>Time:</strong> ${taskTimeInput.value}
        `;

        taskList.appendChild(taskElement);

        taskInput.value = '';
        taskTimeInput.value = '';
    } else {
        alert('Please enter a task and time.');
    }
}

// Handle timetable form submission
document.getElementById('timetableForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Timetable uploaded successfully.');
});

// Handle club form submission
document.getElementById('clubForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const clubName = document.getElementById('clubName').value;
    const clubActivity = document.getElementById('clubActivity').value;
    const clubDate = document.getElementById('clubDate').value;
    const clubDescription = document.getElementById('clubDescription').value;

    if (clubName && clubActivity && clubDate && clubDescription) {
        alert(`Club activity for ${clubName} created: ${clubActivity} on ${clubDate}.`);
    } else {
        alert('Please fill in all the fields.');
    }
});
