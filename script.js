
const contactForm = document.getElementById("contactForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const successMessage = document.getElementById("successMessage");

// Validate email format
function isValidEmail(emailValue) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(emailValue);
}

// Show error message
function showError(input, errorId, message) {
    document.getElementById(errorId).textContent = message;
    input.style.borderColor = "#dc3545";
}

// Clear error message
function clearError(input, errorId) {
    document.getElementById(errorId).textContent = "";
    input.style.borderColor = "#d5dbe3";
}

// Handle form submission
contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let isValid = true;

    // Clear previous errors
    clearError(fullName, "nameError");
    clearError(email, "emailError");
    clearError(subject, "subjectError");
    clearError(message, "messageError");

    successMessage.textContent = "";

    // Check Full Name
    if (fullName.value.trim() === "") {
        showError(fullName, "nameError", "Full name is required.");
        isValid = false;
    }

    // Check Email
    if (email.value.trim() === "") {
        showError(email, "emailError", "Email address is required.");
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, "emailError", "Please enter a valid email address.");
        isValid = false;
    }

    // Check Subject
    if (subject.value.trim() === "") {
        showError(subject, "subjectError", "Subject is required.");
        isValid = false;
    }

    // Check Message
    if (message.value.trim() === "") {
        showError(message, "messageError", "Message is required.");
        isValid = false;
    }

    // If validation fails
    if (!isValid) {
        return;
    }

    // If validation succeeds
    successMessage.textContent =
        "Your message has been submitted successfully!";

    contactForm.reset();

    // Reset input borders
    [fullName, email, subject, message].forEach(input => {
        input.style.borderColor = "#d5dbe3";
    });

});
