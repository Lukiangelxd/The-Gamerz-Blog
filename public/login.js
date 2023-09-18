const loginFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    const email = document.querySelector('.email-input').value.trim();
    const password = document.querySelector('.password-input').value.trim();
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        // If successful, redirect the browser to the homepage
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('.name-signup').value.trim();
    const email = document.querySelector('.email-signup').value.trim();
    const password = document.querySelector('.password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };



    document.addEventListener("DOMContentLoaded", function () {
      const loginForm = document.getElementById("login-form");
      const signupForm = document.getElementById("signup-form");
      const toggleButton = document.getElementById("toggle-form-button");
    
      toggleButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (loginForm.style.display === "block") {
          loginForm.style.display = "none";
          signupForm.style.display = "block";
          toggleButton.textContent = "Switch to Login";
        } else {
          loginForm.style.display = "block";
          signupForm.style.display = "none";
          toggleButton.textContent = "Switch to Register";
        }
      });
    });   