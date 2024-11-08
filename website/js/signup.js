// Switch to Sign Up
document.getElementById('show-sign-up').addEventListener('click', () => {
    document.getElementById('sign-in-box').classList.add('collapsed');
    document.getElementById('sign-up-box').classList.add('expanded');
});

// Switch to Sign In
document.getElementById('show-sign-in').addEventListener('click', () => {
    document.getElementById('sign-in-box').classList.remove('collapsed');
    document.getElementById('sign-up-box').classList.remove('expanded');
});

// Handle Sign In Form Submission
document.getElementById('signInForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    const response = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (data.token) {
        // Store token and redirect
        localStorage.setItem('token', data.token);
        window.location.href = 'index.html'; // Redirect to home page
    } else {
        alert(data.message);
    }
});

// Handle Sign Up Form Submission
document.getElementById('signUpForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
    if (data.token) {
        // Store token and redirect
        localStorage.setItem('token', data.token);
        window.location.href = 'index.html'; // Redirect to home page
    } else {
        alert(data.message);
    }
});
