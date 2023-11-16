/* Scrolling Roles Implementation */
let rolesField = document.getElementById("rotating-roles")
const roles = [
    "Bolivian",
    "A Computer Engineer",
    "An Entrepreneur",
    "A Hokie",
    "A Photographer",
    "A Researcher",
    "A Multi-Instrumentalist",
    "A Web Developer",
    "A Tennis Player",
]

const scrollAnimtation = {
    transitionDuration: '3s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease'
}

let currentIndex = 0;
const rotateRoles = () => {
    rolesField.textContent = roles[currentIndex];
    currentIndex = (currentIndex + 1) % roles.length;
}

setInterval(rotateRoles, 4000);