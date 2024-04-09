import createHeader from './components/Header/Header.js';
import createFooter from './components/Footer/Footer.js';
import { activateTab, getState } from './store.js';
import './global.css';

// Get the app element
const app = document.getElementById('app');

// Function to initialize the app
function initializeApp() {
  app.innerHTML = ''; // Clear the app to re-initialize if needed
  app.appendChild(createHeader()); // Append the header to the app
  // Initialize main content for the first time or on app re-initialization
  activateTab(getState().activeTab); // Activate the default or current tab
  app.appendChild(createFooter()); // Append the footer to the app
}

// Call the function to initialize the app
initializeApp();