/* About Navigation Button Functionality */
const buttons = [
    { button: document.getElementById("about-summary-button"), section: document.querySelector(".about-summary") },
    { button: document.getElementById("about-education-button"), section: document.querySelector(".about-education") },
    { button: document.getElementById("about-skills-button"), section: document.querySelector(".about-skills") }
  ];


const clearActive = () => {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].button.classList.contains("about-active")) {
            buttons[i].button.classList.remove("about-active");
            buttons[i].button.classList.add("about-unactive");
        }
        buttons[i].section.style.display = "none";
    }
}

const handleAboutNav = (val) => {
    clearActive();
    buttons[val].button.classList.add("about-active");
    buttons[val].section.style.display = "flex";
}

buttons[0].button.addEventListener('click', () => handleAboutNav(0));
buttons[1].button.addEventListener('click', () => handleAboutNav(1));
buttons[2].button.addEventListener('click', () => handleAboutNav(2));