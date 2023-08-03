import { createHomeContent } from './home.js';
import { createMenuContent } from './menu.js';
import { createContactContent } from './contact.js';

function createHeader() {
  const header = document.createElement('header');
  const logo = document.createElement('h1');
  logo.textContent = 'Mozzafiato';
  header.appendChild(logo)

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const homeTab = createNavItem('Home');
  const menuTab = createNavItem('Menu');
  const contactTab = createNavItem('Contact');

  ul.appendChild(homeTab);
  ul.appendChild(menuTab);
  ul.appendChild(contactTab);
  nav.appendChild(ul);
  header.appendChild(nav);
  
  homeTab.addEventListener('click', handleButtonClick);
  menuTab.addEventListener('click', handleButtonClick);
  contactTab.addEventListener('click', handleButtonClick);

  function createNavItem(text) {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
  }
  
  const footer = document.createElement('footer');
  footer.textContent = `Copyright © 2023 LaythAlqadhi`;
  
  const container = document.querySelector('#container');
  
  container.insertAdjacentElement('beforebegin', header);
  
  container.insertAdjacentElement('afterend', footer);
  
  container.appendChild(createHomeContent());
  
  function handleButtonClick() {
    if (this.textContent === 'Home') {
      container.textContent = '';
      container.appendChild(createHomeContent());
    }else if (this.textContent === 'Menu') {
      container.textContent = '';
      container.appendChild(createMenuContent());
    }else if (this.textContent === 'Contact') {
      container.textContent = '';
      container.appendChild(createContactContent());
    }
  }
}
createHeader()