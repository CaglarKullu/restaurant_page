import { getState, setState,renderTabs, renderContent } from '../../store.js';
import './Header.css'; 

function createHeader() {
    const { tabs } = getState();
    const header = document.createElement('header');
    header.classList.add('header');

    const nav = document.createElement('nav');
    nav.classList.add('nav-tabs');

    tabs.forEach(tab => {
      const button = document.createElement('button');
      button.textContent = tab.name;
      button.classList.add('tab-button'); 
      if (tab.active) button.classList.add('active');
      button.addEventListener('click', () => {
          setState({ activeTab: tab.id });
          renderTabs();
          renderContent();
      });
      nav.appendChild(button);
  });

    header.appendChild(nav);
    return header;
}

export default createHeader;
