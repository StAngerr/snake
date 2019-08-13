const div = document.createElement('div');
const usernameInput = document.createElement('input');
const passwordInput = document.createElement('input');
const submitBtn = document.createElement('input');
div.classList.add('login-wrap');

usernameInput.setAttribute('type', 'text');
passwordInput.setAttribute('type', 'password');
submitBtn.setAttribute('type', 'button');
submitBtn.setAttribute('value', 'Login');

submitBtn.addEventListener('click',() => {
  location.hash = 'home';
});

div.append(usernameInput, passwordInput, submitBtn);


export const loginPage = div;
