import './HomePage.css';
import restaurantImage from '../../assets/restaurant.jpg'; // Make sure the path is correct

function createHomePage() {
    const homePage = document.createElement('div');
    homePage.classList.add('homepage');
    // Set the background image dynamically
    homePage.style.backgroundImage = `url(${restaurantImage})`;

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Our Restaurant';

    homePage.appendChild(heading);

    return homePage;
}

export default createHomePage;
