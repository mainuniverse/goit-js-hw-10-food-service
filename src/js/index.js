//IMPORTS//
import menus from './menu.json';
import menuCardTpl from '../templates/menu-card.hbs';
//DATA
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

 const themeToggler = document.getElementById('theme-switch-toggle');
 //Listeners//
 const palleteComtainer = document.querySelector('.js-menu');
 const onTogglerChange = themeToggler.addEventListener('change', themeChange);
 const menuMarkup = createMenuCards(menus);
 palleteComtainer.insertAdjacentHTML('beforeend' , menuMarkup);
 
 
 

 //localStorage//
 const savedData = localStorage.getItem('my-data');
 const parsedData = JSON.parse(savedData);
 document.body.classList.add(parsedData);
 if(document.body.classList.contains(Theme.DARK)){
    themeToggler.checked = true;
 }

//function//

function themeChange(){
    if(document.body.classList.contains(Theme.DARK)|| document.body.classList === ''){
        document.body.classList.toggle(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK);
        localStorage.setItem('my-data', JSON.stringify(Theme.LIGHT));
        return
    }
  document.body.classList.toggle(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  localStorage.setItem('my-data', JSON.stringify(Theme.DARK));
};
function createMenuCards(menus){
 return menus.map(menuCardTpl).join('')
}