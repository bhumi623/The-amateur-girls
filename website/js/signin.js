// signin.js
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
document.getElementById('signUpForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();
    if (data.token) {
        // If the sign-up is successful, store the token and redirect to index.html
        localStorage.setItem('token', data.token);
        window.location.href = 'index.html'; // Redirect to the home page
    } else {
        alert(data.message);
    }
});
// Sign-Up Route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        const token = jwt.sign({ userId: newUser._id }, 'yourSecretKey', { expiresIn: '1h' });
        res.status(201).json({ message: 'User created successfully', token }); // Send token and message
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

