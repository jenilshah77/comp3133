document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const loginData = { username, password };
  
    try {
      const response = await fetch('http://127.0.0.1:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Login successful:', data);
        window.location.href = '/dashboard.html'; // Change to your desired page
      } else {
        console.error('Login failed:', data.message);
        const errorMessageDiv = document.getElementById('error-message');
        errorMessageDiv.innerText = data.message || 'Login failed';
        errorMessageDiv.style.display = 'block';
      }
    } catch (error) {
      console.error('Error during login:', error);
      const errorMessageDiv = document.getElementById('error-message');
      errorMessageDiv.innerText = 'Something went wrong. Please try again.';
      errorMessageDiv.style.display = 'block';
    }
  });
  