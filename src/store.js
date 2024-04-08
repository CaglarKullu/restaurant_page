// Initial state
const state = {
    activeTab: 0,
    tabs: [
      {
        id: 0,
        name: 'Home',
        active: true,
        content: 'Home content'
      },
      {
        id: 1,
        name: 'About',
        active: false,
        content: 'About content'
      },
      {
        id: 2,
        name: 'Contact',
        active: false,
        content: 'Contact content'
      },
      {
        id: 3,
        name: 'Menu',
        active: false,
        content: 'Menu content'
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
    const { tabs, activeTab } = getState();
    const activeContent = tabs.find(tab => tab.id === activeTab).content;
    const contentContainer = document.getElementById('main-content');
    contentContainer.innerHTML = activeContent; // Assuming content is a string or HTML
  }
  
  
  export { getState, setState, activateTab, renderTabs, renderContent };
  