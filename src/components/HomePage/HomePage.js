import './HomePage.css'; 
import restaurantImage from '../../assets/restaurant.jpg'; 

/**
 * Creates the home page for the restaurant website.
 *
 * @return {HTMLElement} The created home page element.
 */
function createHomePage() {
    const homePage = document.createElement('div');
    homePage.classList.add('homepage');

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Our Restaurant';

    const image = new Image();
    image.src = restaurantImage;
    image.alt = 'Interior of our restaurant';

    homePage.appendChild(heading);
    homePage.appendChild(image);

    return homePage;
}

export default createHomePage;
