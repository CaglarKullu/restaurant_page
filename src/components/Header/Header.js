import './Header.css';
import { getState, setState } from '../../store';

/**
 * Creates a header element for the restaurant page.
 *
 * @return {Element} The created header element.
 */
function createHeader() {
  const header = document.createElement('header');
  header.textContent = 'Restaurant Page';
  header.classList.add('header'); 
 const activeTab = getState().activeTab;
 console.log(activeTab);

  return header;
}

export default createHeader;
