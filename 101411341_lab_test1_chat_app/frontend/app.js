// Example script to handle form submission and redirect
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Handle signup logic (e.g., send a POST request to the server)

    alert(`Signed up with Username: ${username}`);
    window.location.href = '/login.html'; // Redirect to login page after signup
});

document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Handle login logic (e.g., send a POST request to the server)

    alert(`Logged in as Username: ${username}`);
    window.location.href = '/chatroom.html'; // Redirect to chat room after login
});

document.getElementById('sendMessageButton')?.addEventListener('click', function () {
    const message = document.getElementById('messageInput').value;
    if (message.trim()) {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        document.getElementById('chatMessages').appendChild(messageElement);
        document.getElementById('messageInput').value = ''; // Clear input
    }
});
