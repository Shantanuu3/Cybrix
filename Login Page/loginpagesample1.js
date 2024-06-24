document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate form submission
    console.log('Email:', email);
    console.log('Password:', password);

    // Add your own form submission logic here
});
