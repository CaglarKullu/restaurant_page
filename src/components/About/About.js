import './About.css';
import familyPhoto from '../../assets/family.jpg';

function createAbout() {
    const about = document.createElement('div');
    about.classList.add('about');

    // Title
    const title = document.createElement('h2');
    title.textContent = 'Our Story';
    about.appendChild(title);

    // Engaging and Personal Story
    const story = document.createElement('p');
    story.textContent = `Grandma Giovanna was born in Sicily in 1927, amidst the vineyards and rich culinary traditions of her homeland. Following the dramatic events of WWII, she brought her family's recipes to America, blending tradition with innovation. Today, at [Restaurant Name], we honor her legacy by bringing you authentic Sicilian cuisine, crafted with love and the finest locally-sourced ingredients. Our executive chef, Marisa, Giovanna's granddaughter, invites you to a unique dining experience that tells a story in every bite.`;
    about.appendChild(story);

    // Image related to the story
    const storyImage = document.createElement('img');
    storyImage.src = `${familyPhoto}`; 
    storyImage.alt = 'A family gathering in Sicily';
    storyImage.style.maxWidth = '100%';
    about.appendChild(storyImage);

    // The Benefit - What Customers Gain
    const benefit = document.createElement('p');
    benefit.textContent = `At [Restaurant Name], you're not just our guest, you're part of our family. Experience the warmth of Sicilian hospitality, innovative dishes that speak of our heritage, and a dining atmosphere that blends the past with the present. Whether it's through our heirloom grain pastas, whole animal butchery, or our commitment to sustainability, we strive to offer you a dining experience that's memorable, shareable, and utterly delectable.`;
    about.appendChild(benefit);

    // Contact Information and Invitation
    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'Join us at 123 Culinary Street, Foodville. For reservations, call us at: 123-456-7890.';
    about.appendChild(contactInfo);

    return about;
}

export default createAbout;
