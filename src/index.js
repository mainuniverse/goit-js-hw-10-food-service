import './sass/main.scss';
import './menu-card.hbs';
import './menu.json';
import menuCardFile from './menu-card.hbs';
import mainMenu from './menu.json';

const markup = menuCardFile(mainMenu);

const menuEl = document.querySelector('.js-menu');
menuEl.insertAdjacentHTML('beforeend', markup);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };


const inputRef = document.querySelector('#theme-switch-toggle');
inputRef.addEventListener('change', changeInput);

// check event toggle
function changeInput(event) {
  event.currentTarget.checked ? checkedInput() : notCheckedInput();
}

// add dark theme
function checkedInput() {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
  inputRef.checked = true;
}

// add light theme
function notCheckedInput() {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
  inputRef.checked = false;
}

// theme by defoult
function currentTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.LIGHT || savedTheme === null) {
    notCheckedInput();
    return;
  }

  if (savedTheme === Theme.DARK) {
    checkedInput();
    return;
  }
}
currentTheme();


 //localStorage
 const savedData = localStorage.getItem('my-data');
 const parsedData = JSON.parse(savedData);
 document.body.classList.add(parsedData);
 if(document.body.classList.contains(Theme.DARK)){
    themeToggle.checked = true;
 }


