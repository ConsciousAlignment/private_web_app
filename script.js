const firebaseConfig = {
  apiKey: "XXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "XXXXXXXXXX",
  appId: "XXXXXXXXXXXX"
};
// --- Protect private.html ---
const logoutBtn = document.getElementById('logoutBtn');
if(logoutBtn){
    // Check if user is logged in
    auth.onAuthStateChanged(user => {
        if(!user){
            // Not logged in → redirect to login page
            window.location.href = 'index.html';
        }
    });

    // Logout button
    logoutBtn.addEventListener('click', () => {
        auth.signOut().then(() => {
            window.location.href = 'index.html';
        });
    });
}



