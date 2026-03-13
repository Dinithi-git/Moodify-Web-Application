/* ═══════════════════════════════════════
   TAB SWITCHING
═══════════════════════════════════════ */
function switchTab(tab) {
    const loginForm    = document.getElementById('login-form');
    const signupForm   = document.getElementById('signup-form');
    const formContent  = document.querySelector('.form-content');
    const loginTab     = document.getElementById('login-tab');
    const signupTab    = document.getElementById('signup-tab');

    if (tab === 'login') {
        loginForm.style.display   = 'block';
        signupForm.style.display  = 'none';
        formContent.style.height  = '380px';
        loginTab.style.backgroundColor  = '#5C1677';
        signupTab.style.backgroundColor = '#c280dd';

    } else {
        loginForm.style.display   = 'none';
        signupForm.style.display  = 'block';
        formContent.style.height  = '380px';
        signupTab.style.backgroundColor = '#5C1677';
        loginTab.style.backgroundColor  = '#c280dd';
    }
}

/* ═══════════════════════════════════════
   HANDLE LOGIN SUBMIT
═══════════════════════════════════════ */
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    console.log('Login:', username, password);
    // e.g. redirect: window.location.href = 'dashboard.html';
}

/* ═══════════════════════════════════════
   HANDLE SIGNUP SUBMIT
═══════════════════════════════════════ */
function handleSignup(event) {
    event.preventDefault();

    const fullname        = document.getElementById('fullname').value;
    const newUsername     = document.getElementById('Newusername').value;
    const email           = document.getElementById('email').value;
    const newPassword     = document.getElementById('newpassword').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    console.log('Signup:', fullname, newUsername, email);
    // e.g. redirect: window.location.href = 'home.html';
}