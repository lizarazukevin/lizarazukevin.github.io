/* About Navigation Button Functionality */
let aboutSummaryButton = document.getElementById("about-summary-button");
let aboutEducationButton = document.getElementById("about-education-button");
let aboutSkillsButton = document.getElementById("about-skills-button");

let aboutSections = [".about-summary", ".about-education", ".about-skills"];

const clearActive = () => {
    // clear any active buttons
    let navItems = document.querySelectorAll(".about-nav-item");
    for (let i = 0; i < navItems.length; i++) {
        if (navItems[i].classList.contains("about-active")) {
            navItems[i].classList.remove("about-active");
            navItems[i].classList.add("about-unactive");
        }
    }

    // make all section displays be none
    for (let i = 0; i < aboutSections.length; i++) {
        let section = document.querySelector(aboutSections[i]);
        section.style.display = "none";
    }
}

const handleSummary = () => {
    let content = document.querySelector(".about-summary");
    let button = document.getElementById("about-summary-button");
    content.style.display = "flex";
    button.classList.add("about-active");
}
const handleEducation = () => {
    let content = document.querySelector(".about-education");
    let button = document.getElementById("about-education-button");
    content.style.display = "flex";
    button.classList.add("about-active");
}
const handleSkills = () => {
    let content = document.querySelector(".about-skills");
    let button = document.getElementById("about-skills-button");
    content.style.display = "flex";
    button.classList.add("about-active");
}

aboutSummaryButton.addEventListener('click', () => {
    clearActive();
    handleSummary();
})
aboutEducationButton.addEventListener('click', () => {
    clearActive();
    handleEducation();
})
aboutSkillsButton.addEventListener('click', () => {
    clearActive();
    handleSkills();
})