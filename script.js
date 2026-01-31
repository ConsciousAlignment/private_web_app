// 🔐 Firebase config (PASTE YOUR REAL ONE HERE)
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_AUTH_DOMAIN",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_STORAGE_BUCKET",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

/* ======================
   LOGIN PAGE LOGIC
====================== */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "private.html";
      })
      .catch(error => {
        document.getElementById("error").innerText = error.message;
      });
  });
}

/* ======================
   PRIVATE PAGE PROTECTION
====================== */
const logoutBtn = document.getElementById("logoutBtn");

auth.onAuthStateChanged(user => {
  if (!user && window.location.pathname.includes("private.html")) {
    window.location.href = "index.html";
  }
});

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    auth.signOut().then(() => {
      window.location.href = "index.html";
    });
  });
}
