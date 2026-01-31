// 🔐 Firebase configuration (YOUR REAL CONFIG)
const firebaseConfig = {
  apiKey: "AIzaSyDMsNzep2kpFANzXZfH_J56i2Bu0FqpB2A",
  authDomain: "private-web-app-9903c.firebaseapp.com",
  projectId: "private-web-app-9903c",
  storageBucket: "private-web-app-9903c.firebasestorage.app",
  messagingSenderId: "641087792177",
  appId: "1:641087792177:web:36ff5fcf0707c664fae110"
};

// Initialize Firebase (compat version)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login logic
if(document.getElementById("loginForm")){
  document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("Login successful!");
        window.location.href = "private.html";
      })
      .catch(error => {
        document.getElementById("error").innerText = error.message;
      });
  });
}

// Check if user is logged in on private.html
auth.onAuthStateChanged(user => {
  if(document.body.innerHTML.includes("Private Page")) {
    if(!user){
      window.location.href = "index.html";
    }
  }
});

// Logout button
if(document.getElementById("logoutBtn")){
  document.getElementById("logoutBtn").addEventListener("click", ()=>{
    auth.signOut().then(() => {
      window.location.href = "index.html";
    });
  });
}
