function createAbout() {
    const about = document.createElement('div');
    about.classList.add('about');   

    const aboutText = document.createElement('p');
    aboutText.textContent = 'About us at: 123-456-7890';

    about.appendChild(aboutText);

    return about;
}

export default createAbout