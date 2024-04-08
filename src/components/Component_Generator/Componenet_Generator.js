import '../../index.js';
import { getState } from '../../store.js';
function createComponentGenerator( ) {
const { tabs, activeTab } = getState();
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');
  mainContent.id = 'main-content';
  mainContent.style.display = 'contents';
  const contentCreator = tabs[activeTab].content;
  mainContent.appendChild(contentCreator());

  return mainContent;
}

export default createComponentGenerator;