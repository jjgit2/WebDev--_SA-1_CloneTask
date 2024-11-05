burger=document.querySelector('.burger')
navbarItems=document.querySelector('.navbar')
nav=document.querySelector('.items')

burger.addEventListener('click',()=>{
    navbarItems.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})

// Get the form elements
const signinSignupForm = document.getElementById('signin-signup-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signinBtn = document.getElementById('signin-btn');
const signupBtn = document.getElementById('signup-btn');

// Add event listeners to the buttons
signinBtn.addEventListener('click', signin);
signupBtn.addEventListener('click', signup);

// Sign in function
function signin() {
    // Get the email and password values
    const email = emailInput.value;
    const password = passwordInput.value;

    // Check if the email and password are valid
    if (email && password) {
        // Sign in logic here
        console.log('Sign in successful!');
    } else {
        console.log('Invalid email or password!');
    }
}

// Sign up function
function signup() {
    // Get the email and password values
    const email = emailInput.value;
    const password = passwordInput.value;

    // Check if the email and password are valid
    if (email && password) {
        // Sign up logic here
        console.log('Sign up successful!');
    } else {
        console.log('Invalid email or password!');
    }
}