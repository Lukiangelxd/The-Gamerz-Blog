const formHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the form
    const email = document.querySelector('.email-input').value.trim();
    const password = document.querySelector('.password-input').value.trim();
    
    if (checkbox.checked) {
      // Handle signup
      const name = document.querySelector('.name-input').value.trim();
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
    } else {
      // Handle login
      if (email && password) {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
      }
    }
  };

const checkbox = document.getElementById('flexCheckDefault');
const mainElement = document.getElementById('main-login-background');

let  nameInputContainer;

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      mainElement.classList.replace('form-signin', 'form-signup');
      nameInputContainer = document.createElement('div');
      nameInputContainer.className = 'form-floating';

      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.className = 'form-control name-input';
      nameInput.id = 'floatingName';
      nameInput.placeholder = 'Your Name';

      const nameLabel = document.createElement('label');
      nameLabel.htmlFor = 'floatingName';
      nameLabel.textContent = 'Your Name';

      nameInputContainer.appendChild(nameInput);
      nameInputContainer.appendChild(nameLabel);

      const h2Element = document.querySelector('.sign-in-text');
      h2Element.insertAdjacentElement('afterend', nameInputContainer);

      document.querySelector('.sign-in-text').textContent= 'Welcome!';
      document.getElementById('log-in-btn').textContent='Sign Up'
    } else {
      mainElement.classList.replace('form-signup', 'form-signin');
      if (nameInputContainer) {
        nameInputContainer.remove();
        nameInputContainer= null;
      }
      document.querySelector('.sign-in-text').textContent= 'Please sign in';
      document.getElementById('log-in-btn').textContent='Sign in'
    }
  });
mainElement.addEventListener('submit', formHandler)