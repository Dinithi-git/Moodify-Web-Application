document.querySelectorAll('.play-pill').forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.song-card');
        const audio = card.querySelector('.song-audio');

        // Pause all other songs first
        document.querySelectorAll('.song-card').forEach(otherCard => {
            if (otherCard !== card) {
                const otherAudio = otherCard.querySelector('.song-audio');
                const otherBtn = otherCard.querySelector('.play-pill');
                if (otherAudio) {
                    otherAudio.pause();
                    otherAudio.currentTime = 0;
                }
                if (otherBtn) {
                    otherBtn.classList.remove('playing');
                    otherBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
                }
            }
        });

        // Toggle current song
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

// Like button toggle
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