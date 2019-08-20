const div = document.createElement('div');
const usernameInput = document.createElement('input');
const passwordInput = document.createElement('input');
const submitBtn = document.createElement('input');
const sectionHeader = document.createElement('h1');
const sectionSubHeader = document.createElement('h2');
const tileWrap = document.createElement('div');
submitBtn.classList.add('button', 'is-primary');
sectionHeader.classList.add('title');
sectionSubHeader.classList.add('subtitle');
div.classList.add('login-wrap', 'section');
usernameInput.classList.add('input');
passwordInput.classList.add('input');
tileWrap.classList.add('tile', 'is-8', 'is-warning');

sectionHeader.innerText = 'snake game';
sectionSubHeader.innerText = 'A simple container to divide your page into sections, like the one you\'re currently reading ';

usernameInput.setAttribute('type', 'text');
passwordInput.setAttribute('type', 'password');
submitBtn.setAttribute('type', 'button');
submitBtn.setAttribute('value', 'Login');

submitBtn.addEventListener('click',() => {
  location.hash = 'home';
});

div.append(sectionHeader, sectionSubHeader, usernameInput, passwordInput, submitBtn);
tileWrap.append(div);

export const loginPage = tileWrap;
