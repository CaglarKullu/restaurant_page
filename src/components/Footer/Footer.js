import './Footer.css';

/**
 * Creates a footer element with copyright text.
 *
 * @return {Element} The created footer element.
 */
function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerText = document.createElement('p');
    footerText.textContent = '© 2024 Restaurant Page. All rights reserved.';

    footer.appendChild(footerText);

    return footer;
}

export default createFooter;