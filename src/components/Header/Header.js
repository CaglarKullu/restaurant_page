import './Header.css'; // Import the CSS directly into your JS component

/**
 * Creates a header element for the restaurant page.
 *
 * @return {Element} The created header element.
 */
function createHeader() {
  const header = document.createElement('header');
  header.textContent = 'Restaurant Page';
  header.classList.add('header'); 

  return header;
}

export default createHeader;
