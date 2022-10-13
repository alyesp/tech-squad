const signUpFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if(userName && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok){
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.signup-form');
document.addEventListener('submit', signUpFormHandler);