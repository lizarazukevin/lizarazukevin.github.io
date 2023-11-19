/* About Navigation Button Functionality */
const buttons = [
    { button: document.getElementById("about-summary-button"), section: document.querySelector(".about-summary") },
    { button: document.getElementById("about-education-button"), section: document.querySelector(".about-education") },
    { button: document.getElementById("about-skills-button"), section: document.querySelector(".about-skills") },
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

/* Contact Form */
const form_components = [
    { textfield: document.getElementById("form-name") },
    { textfield: document.getElementById("form-email") },
    { textfield: document.getElementById("form-message") },
]

let contactSendButton = document.getElementById("send-button");

const validateForm = (event) => {
    event.preventDefault();
    // Check name
    if (form_components[0].textfield.value.length < 2) {
        form_components[0].textfield.classList.add("contact-error");
        form_components[0].textfield.style.borderWidth = "2px";
    } else {
        form_components[0].textfield.classList.remove("contact-error");
        form_components[0].textfield.style.borderWidth = "0px";
    }

    // Check email
    const emailRegex = /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
    if (!emailRegex.test(form_components[1].textfield.value)) {
        form_components[1].textfield.classList.add("contact-error");
        form_components[1].textfield.style.borderWidth = "2px";
    } else {
        form_components[1].textfield.classList.remove("contact-error");
        form_components[1].textfield.style.borderWidth = "0px";
    }

    // Check message
    if (form_components[2].textfield.value.length === 0) {
        form_components[2].textfield.classList.add("contact-error");
        form_components[2].textfield.style.borderWidth = "2px";
    } else {
        form_components[2].textfield.classList.remove("contact-error");
        form_components[2].textfield.style.borderWidth = "0px";
    }
};

contactSendButton.addEventListener('click', validateForm);