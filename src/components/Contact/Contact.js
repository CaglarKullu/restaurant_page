import './Contact.css'
function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    // Contact Title
    const title = document.createElement('h2');
    title.textContent = 'Get in Touch   ';
    contact.appendChild(title);

    // Contact Text
    const contactText = document.createElement('p');
    contactText.textContent = 'We’d love to hear from you! Contact us at: 123-456-7890 or use the form below.';
    contact.appendChild(contactText);

    // Contact Form
    const form = document.createElement('form');
    form.setAttribute('action', '#');
    form.innerHTML = `
        <input type="text" id="name" name="name" placeholder="Your Name" required>
        <input type="email" id="email" name="email" placeholder="Your Email" required>
        <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
    `;
    contact.appendChild(form);

    // Map - Using an iframe for Google Maps as an example
    const map = document.createElement('iframe');
    map.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4008.105048612477!2d-6.257528384936581!3d53.32117201876173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670fa0db3d832b%3A0xcb9266405519b87c!2sNob%C3%B3%20(Treathouse)!5e0!3m2!1sen!2suk!4v1712681238715!5m2!1sen!2suk");
    map.setAttribute('width', '600');
    map.setAttribute('height', '450');
    map.setAttribute('style', 'border:0;');
    map.setAttribute('allowfullscreen', '');
    map.setAttribute('loading', 'lazy');
    map.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    contact.appendChild(map);

    return contact;
}

export default createContact;
