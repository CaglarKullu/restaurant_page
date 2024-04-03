// Import the necessary components
import createHeader from './components/Header/Header.js';
import createFooter from './components/Footer/Footer.js';
import createHomePage from './components/HomePage/HomePage.js'; // Assuming you have a component for the home page

// Get the app element
const app = document.getElementById('app');

// Function to initialize the app
function initializeApp() {
  app.appendChild(createHeader()); // Append the header to the app
  app.appendChild(createHomePage()); // Append the main content of the home page
  app.appendChild(createFooter()); // Append the footer to the app
}

// Call the function to initialize the app
initializeApp();