# 🎵 Moodify — The Power of Music

Moodify is a mood-based music web application that curates song recommendations based on how you're feeling. Simply pick your current vibe, and Moodify serves up a playlist tailored to your emotional state — all within a clean, visually immersive interface.

---

## 🌐 Overview

Moodify is a front-end web app built with HTML, CSS, and JavaScript. It features animated emoji mood selectors, an in-browser audio player, user authentication forms, motivational quotes, and a custom-styled UI with multiple font choices and mood-specific themes.

---

## ✨ Features

### 🏠 Home Page
- Animated hero section with the Moodify logo and tagline *"The Power of Music"*
- Six animated emoji mood cards (using looping MP4 videos) that the user can click to enter a mood-specific page
- Motivational quote cards displayed below the mood selector
- Footer with contact info (phone & email) and social media links (WhatsApp, Facebook, Instagram)

### 😄 Mood Pages
Each of the six moods has its own dedicated page with a unique theme and song playlist:

| Mood | Emoji | 
|------|-------|
| Happy | 😄 | 
| Sad | 😢 | 
| Love | 😍 | 
| Sleepy | 😴 | 
| Calm | 😇 | 
| Tension | 😤 | 

Each mood page includes:
- An animated hero banner with a mood-specific headline
- A song grid with album art, song name, artist, and duration
- An in-browser **audio player** with play/pause controls
- A **like button** (♡) per song card

### 🔐 Login & Sign Up
- A tabbed authentication form on a single page (`Login.html`)
- **Log In** tab: Username and password fields
- **Sign Up** tab: Full name, username, email, password, and confirm password fields
- Client-side form validation (password match check, required field enforcement)
- Smooth tab switching with visual active-state styling

### 🎨 Design & Theming
- Mood-specific color schemes per page (e.g., warm tones for Happy, cool tones for Calm)
- Custom font library with six included typefaces: Alice, Andika, Averia Sans Libre, Inria Sans, Inria Serif, and Irish Grover
- Responsive navigation bar with a **Mood dropdown menu**
- Animated emoji videos for an expressive, lively feel

---

## 📁 Project Structure

```
phase_02/
│
├── Home.html            # Landing page with mood selector
├── Home.css             # Shared styles (header, footer, nav)
│
├── Login.html           # Login & Sign Up page
├── login.css            # Authentication form styles
├── login.js             # Tab switching & form validation logic
│
├── Happy.html           # Happy mood page
├── Happy.css            # Happy mood styles
├── Happy.js             # Audio player logic
│
├── Sad.html             # Sad mood page
├── Sad.css
│
├── Love.html            # Love mood page
├── Love.Css
│
├── Sleepy.html          # Sleepy mood page
├── Sleepy.css
│
├── Calm.html            # Calm mood page
├── Calm.css
│
├── Tension.html         # Tension mood page
├── Tension.css
│
├── Fonts/               # Custom font files (.ttf)
├── Images/              # Logo, social icons, contact icons
├── Moods/               # Animated emoji MP4 videos (one per mood)
└── Songs/               # MP3 audio files for the player
```

---

## 🚀 Getting Started

### Prerequisites
No build tools or server setup required. This is a static HTML/CSS/JS project.

### Running Locally

1. **Download or clone** the project folder.
2. Open **`Home.html`** in any modern web browser (Chrome, Firefox, Edge, Safari).
3. That's it — no installation needed.

> **Tip:** For audio and video files to load correctly, open the project from a local or hosted server rather than directly from the file system. You can use the VS Code **Live Server** extension, Python's built-in server, or any static file host.

```bash
# Using Python (from inside the phase_02 folder)
python -m http.server 8000
# Then open http://localhost:8000/Home.html
```

---

## 🧭 Usage Instructions

1. **Visit the Home page** — You'll see six animated mood emojis.
2. **Click your current mood** (e.g., 😄 Happy) or use the **Mood** dropdown in the navigation bar.
3. **Browse the song grid** on your mood's page.
4. **Press the play button** on any song card to start listening in-browser.
5. **Like songs** using the ♡ button on each card.
6. **Switch moods** anytime via the top navigation dropdown.
7. To **create an account** or **log in**, click the Login or Sign Up button in the nav bar.

---

## 🛠️ Technologies Used

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure and audio/video elements |
| CSS3 | Styling, animations, and mood-specific themes |
| JavaScript (Vanilla) | Audio playback, form validation, tab switching |
| MP4 (Video) | Animated mood emoji visuals |
| MP3 (Audio) | In-browser music playback |
| Custom Fonts (TTF) | Typography and branding |

---

## 📬 Contact

- **Phone:** 071 5643879
- **Email:** moodify@gmail.com
- **Social:** WhatsApp · Facebook · Instagram

