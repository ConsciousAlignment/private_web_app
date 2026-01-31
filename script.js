// Placeholder login logic for testing
document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Temporary test login (any email/password works for now)
    if(email && password){
        // Redirect to private page
        window.location.href = 'private.html';
    } else {
        document.getElementById('error').innerText = 'Please enter email and password.';
    }
});
