
function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactText = document.createElement('p');
    contactText.textContent = 'Contact us at: 123-456-7890';

    contact.appendChild(contactText);

    return contact;
}

export default createContact