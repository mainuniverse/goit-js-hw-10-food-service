import './sass/main.scss';
import './menu-card.hbs';
import './menu.json';
import menuCardFile from './menu-card.hbs';
import mainMenu from './menu.json';

const markup = menuCardFile(mainMenu);
const menuEl = document.querySelector('.js-menu');
menuEl.insertAdjacentHTML('beforeend', markup);
const mainTheme = document.querySelector('body');
const inputRef = document.querySelector('#theme-switch-toggle');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
 
function currentTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
        mainTheme.classList.add(Theme.LIGHT)
    } else {
        mainTheme.classList.add(savedTheme)
    }
    if (mainTheme.classList.contains(Theme.DARK)) {
        inputRef.checked = true;
    }
}
currentTheme();

inputRef.addEventListener('change', () => {
    mainTheme.classList.toggle(Theme.DARK);
    mainTheme.classList.toggle(Theme.LIGHT);

    if (mainTheme.classList.contains(Theme.DARK)) {
        localStorage.setItem('theme', Theme.DARK)
    } else {
       localStorage.setItem('theme', Theme.LIGHT) 
    }
})
// //function//

// function changeInput(){
//     if(document.body.classList.contains(Theme.DARK)|| document.body.classList === ''){
//         document.body.classList.toggle(Theme.LIGHT);
//         document.body.classList.remove(Theme.DARK);
//         localStorage.setItem('my-data', JSON.stringify(Theme.LIGHT));
//         return
//     }
//   document.body.classList.toggle(Theme.DARK);
//   document.body.classList.remove(Theme.LIGHT);
//   localStorage.setItem('my-data', JSON.stringify(Theme.DARK));
// };
// // theme by defoult
// function currentTheme() {
//   const savedTheme = localStorage.getItem('theme');
//   if (savedTheme === Theme.LIGHT || savedTheme === null) {
//     notCheckedInput();
//     return;
//   }

//   if (savedTheme === Theme.DARK) {
//     checkedInput();
//     return;
//   }
// }
// currentTheme();
//  //localStorage
//  const savedData = localStorage.getItem('my-data');
//  const parsedData = JSON.parse(savedData);
//  document.body.classList.add(parsedData);
//  if(document.body.classList.contains(Theme.DARK)){
//     themeToggle.checked = true;
//  }


