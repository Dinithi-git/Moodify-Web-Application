/* ═══════════════════════════════════════
   HAMBURGER MENU
═══════════════════════════════════════ */
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
}

// Close menu when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar').classList.remove('open');
    });
});

// Mobile dropdown toggle
document.querySelectorAll('.dropdown').forEach(drop => {
    drop.querySelector('.dropbtn').addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            drop.classList.toggle('open');
        }
    });
});

/* ═══════════════════════════════════════
   PLAY / PAUSE BUTTONS
═══════════════════════════════════════ */
document.querySelectorAll('.play-pill').forEach(button => {
    button.addEventListener('click', function () {
        const card  = this.closest('.song-card');
        const audio = card.querySelector('.song-audio');

        document.querySelectorAll('.song-card').forEach(otherCard => {
            if (otherCard !== card) {
                const otherAudio = otherCard.querySelector('.song-audio');
                const otherBtn   = otherCard.querySelector('.play-pill');
                if (otherAudio) { otherAudio.pause(); otherAudio.currentTime = 0; }
                if (otherBtn) {
                    otherBtn.classList.remove('playing');
                    otherBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
                }
            }
        });

        if (audio) {
            if (audio.paused) {
                audio.play();
                this.classList.add('playing');
                this.innerHTML = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
            } else {
                audio.pause();
                this.classList.remove('playing');
                this.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
            }
        }
    });
});

/* ═══════════════════════════════════════
   LIKE BUTTON TOGGLE
═══════════════════════════════════════ */
document.querySelectorAll('.song-like').forEach(btn => {
    btn.addEventListener('click', function () {
        if (this.textContent === '♡') {
            this.textContent = '♥';
            this.style.color = '#e63946';
        } else {
            this.textContent = '♡';
            this.style.color = '';
        }
    });
});

/* ═══════════════════════════════════════
   NAVBAR — SHOW USERNAME AFTER LOGIN
═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
    const user       = localStorage.getItem('moodify_user');
    const signUpLink = document.querySelector('a.sign');

    if (!signUpLink || !user) return;

    const li = signUpLink.closest('li');
    if (!li) return;

    li.innerHTML = `
        <div class="user-info">
            <span class="user-greeting">👤 ${user}</span>
            <a href="#" class="logout-btn" onclick="logoutUser(event)">Log Out</a>
        </div>
    `;
});

/* ═══════════════════════════════════════
   LOGOUT
═══════════════════════════════════════ */
async function logoutUser(event) {
    event.preventDefault();
    try { await fetch('Logout.php'); } catch (e) {}
    localStorage.removeItem('moodify_user');
    window.location.href = 'home.html';
}