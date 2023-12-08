function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const choices = document.getElementById('choices').value;

    if (username.trim() === '') {
        document.getElementById('usernameError').innerText = 'Username is required';
    } else {
        document.getElementById('usernameError').innerText = '';
    }

    if (email.trim() === '') {
        document.getElementById('emailError').innerText = 'Email is required';
    } else {
        document.getElementById('emailError').innerText = '';
    }

    if (password.trim() === '') {
        document.getElementById('passwordError').innerText = 'Password is required';
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    if (choices.trim() === '') {
        document.getElementById('choicesError').innerText = 'Choice is required';
    } else {
        document.getElementById('choicesError').innerText = '';
    }

    if (username && email && password && choices) {
        alert('Registration successful!');
    }
}
