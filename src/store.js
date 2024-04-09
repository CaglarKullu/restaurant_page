import createHomePage from './components/HomePage/HomePage.js';
import createAbout from './components/About/About.js';
import createContact from './components/Contact/Contact.js';
import createMenu from './components/Menu/Menu.js';
const state = {
    activeTab: 0,
    tabs: [
      {
        id: 0,
        name: 'Home',
        active: true,
        content: createHomePage
      },
      {
        id: 1,
        name: 'About',
        active: false,
        content: createAbout
      },
      {
        id: 2,
        name: 'Contact',
        active: false,
        content: createContact
      },
      {
        id: 3,
        name: 'Menu',
        active: false,
        content: createMenu
      }
    ]
  };
  
  // Function to get state
  const getState = () => state;
  
  // Function to set state
  const setState = (newState) => {
    Object.keys(newState).forEach(key => {
      if (state.hasOwnProperty(key)) {
        state[key] = newState[key];
      }
    });

    // Update activeTab in the state
    if (newState.hasOwnProperty('activeTab')) {
        const newActiveTabId = newState.activeTab;
        
        // Update activeTab in the state
        state.activeTab = newActiveTabId;
        
        // Update the active status of all tabs
        state.tabs.forEach(tab => {
          tab.active = (tab.id === newActiveTabId);
        });
      }
  };

  function activateTab(newTabId) {
    setState({ activeTab: newTabId });
    renderTabs();
    renderContent();
  }
  
  // Function to render tabs with the active class based on the current state
  function renderTabs() {
    const { tabs, activeTab } = getState();
    document.querySelectorAll('.tab-button').forEach((button, index) => {
      if (tabs[index].id === activeTab) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
  
  // Function to render the content for the active tab
  function renderContent() {
    let mainContent = document.getElementById('main-content');
    // If mainContent doesn't exist, create and append it
    if (!mainContent) {
        mainContent = document.createElement('div');
        mainContent.id = 'main-content';
        mainContent.classList.add('main-content');
        app.appendChild(mainContent);
    }
    // Update content
    const { tabs, activeTab } = getState();
    const activeTabContent = tabs[activeTab].content;
    mainContent.innerHTML = ''; // Clear existing content
    mainContent.appendChild(activeTabContent()); // Update with new content
}


  export { getState, setState, activateTab, renderTabs, renderContent };
  