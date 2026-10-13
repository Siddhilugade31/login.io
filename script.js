// HTML elements ko select kiya
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Form submit event par check lagaya
loginForm.addEventListener('submit', function(event) {
    // Shuru me error message ko chupa do
    errorMessage.style.display = 'none';
    errorMessage.innerText = '';

    // Inputs ki values se aage-piche ke spaces hataye (Trim kiya)
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // Validation Check: Agar fields khali hain
    if (usernameValue === '' || passwordValue === '') {
        // Form ko submit hone se roko
        event.preventDefault(); 
        
        // Error message dikhao
        errorMessage.innerText = 'Kripya Username aur Password dono bharein!';
        errorMessage.style.display = 'block';
    }
});
