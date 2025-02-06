const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(signupForm);
  const userData = {
    username: formData.get('username'),
    firstname: formData.get('firstname'),
    lastname: formData.get('lastname'),
    password: formData.get('password'),
  };

  const username = document.getElementById('username');
  const password = document.getElementById('password');

  // Simple front-end validation
  if (username.value.trim() === '' || password.value.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

  try {
    const response = await fetch('http://127.0.0.1:5000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('User signed up successfully:', data);
      alert('Sign up successful!');
      // Redirect to login page or dashboard
      window.location.href = "login.html";
    } else {
      console.error('Error:', data.message);
      alert(data.message || 'Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Network error. Please try again later.');
  }
});
