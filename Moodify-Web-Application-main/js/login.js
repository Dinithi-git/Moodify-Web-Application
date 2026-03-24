/* ═══════════════════════════════════════
   TAB SWITCHING
═══════════════════════════════════════ */
function switchTab(tab) {
    const loginForm  = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginTab   = document.getElementById('login-tab');
    const signupTab  = document.getElementById('signup-tab');

    if (tab === 'login') {
        loginForm.style.display  = 'block';
        signupForm.style.display = 'none';
        loginTab.style.backgroundColor  = '#5C1677';
        signupTab.style.backgroundColor = '#c280dd';
    } else {
        loginForm.style.display  = 'none';
        signupForm.style.display = 'block';
        signupTab.style.backgroundColor = '#5C1677';
        loginTab.style.backgroundColor  = '#c280dd';
    }
}

window.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");

    if (tab === "signup") {
        switchTab("signup");
    } else {
        switchTab("login");
    }
});

/* ═══════════════════════════════════════
   HANDLE LOGIN SUBMIT
═══════════════════════════════════════ */
async function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) { alert('Please fill in all fields.'); return; }

    try {
        const response = await fetch('auth/Login.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (data.success) {
            localStorage.setItem('moodify_user', data.username);
            window.location.href = 'home.html';
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('Something went wrong. Please try again.');
    }
}

/* ═══════════════════════════════════════
   HANDLE SIGNUP SUBMIT
═══════════════════════════════════════ */
async function handleSignup(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const username = document.getElementById('Newusername').value.trim();
    const email    = document.getElementById('email').value.trim();
    const password = document.getElementById('newpassword').value.trim();
    const confirm  = document.getElementById('confirm-password').value.trim();

    if (password !== confirm) { alert('Passwords do not match!'); return; }

    try {
        const response = await fetch('auth/Signup.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullname, username, email, password, confirm })
        });

        const data = await response.json();

        if (data.success) {
            alert('Account created! Please log in.');
            switchTab('login');
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Signup error:', error);
        alert('Something went wrong. Please try again.');
    }
}