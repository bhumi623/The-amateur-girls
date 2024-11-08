// Script for handling course interactions

// Example function to simulate course enrollment
document.querySelectorAll('.course-card button').forEach(button => {
    button.addEventListener('click', function() {
        alert('You have enrolled in this course!');
    });
});

// Example function for 'Teach a Skill' button
document.querySelector('.teach-skill button').addEventListener('click', function() {
    alert('Redirecting to course creation page...');
    // Redirect to course creation page (create-course.html) here if needed
});
