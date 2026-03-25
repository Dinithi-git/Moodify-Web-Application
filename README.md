# 🎵 Moodify — The Power of Music

Moodify is a full-stack mood-based music web application that recommends songs based on the user's emotions. Users can select their mood, listen to songs, and interact with the system through authentication and database-powered features.

---

## 🌐 Overview

Moodify is a dynamic web application built using:

- HTML, CSS, JavaScript
- PHP (Backend)
- MySQL (Database)

It allows users to:

- Select moods
- Play songs
- Create accounts
- Log in securely
- Send messages via contact form

---

## ✨ Features

### 🏠 Home Page (`index.php`)

- Mood-based UI with animated emoji videos
- Navigation bar with dropdown menu
- Login / Signup / Contact buttons
- Clean and responsive design

---

### 😄 Mood Pages

Each mood page contains:

- Mood-specific theme
- Animated emoji/video
- Song list with audio player

| Mood    | Emoji |
|---------|-------|
| Happy   | 😄    |
| Sad     | 😢    |
| Love    | 😍    |
| Sleepy  | 😴    |
| Calm    | 😇    |
| Tension | 😤    |

---

### 🔐 Authentication System

**Login**
- Username + password authentication
- Password verification using `password_verify()`
- Session management

**Signup**
- Full name, username, email, password
- Validation checks
- Password hashing using `password_hash()`

---

### 📬 Contact System (`contact.php`)

- Users can send messages
- Data stored in MySQL database
- Input validation

---

### 🗄️ Database Integration

- **Database name:** `moodify_db`
- **Tables used:**
  - `users`
  - `messages`

---

### 🎨 UI & Design

- Custom fonts (TTF)
- Animated emoji videos (MP4)
- Responsive layout
- Modern navigation bar

---

## 📁 Project Structure
```
Moodify-Web-Application/
│
├── auth/                 # Authentication system
│   ├── login.php
│   ├── signup.php
│   └── logout.php
│
├── includes/             # Backend files
│   ├── db.php
│
├── css/                  # Styles
│   ├── home.css
│   ├── login.css
│   └── contact.css
│   └── style.css
│
├── js/                   # JavaScript
│   └── login.js
│   └── script.js
│
├── Fonts/
├── Images/
├── Moods/
├── Songs/
│
├── contact.php
│
├── happy.html
├── sad.html
├── love.html
├── sleepy.html
├── calm.html
├── tension.html
│
├── 127_0_0_1.sql

```

---

## 🚀 Getting Started

### 🔧 Requirements

- XAMPP or WAMP
- PHP (>= 7)
- MySQL
- Web browser

---

### ▶️ Run Using XAMPP

1. Move project to:
```
   C:\xampp\htdocs\
```
2. Open **XAMPP Control Panel**
3. Start:
   - Apache
   - MySQL
4. Open phpMyAdmin:
```
   http://localhost/phpmyadmin
```
5. Create database:
```
   moodify_db
```
6. Import:
   - Click **Import**
   - Select ` 127_0_0_1.sql`
   - Click **Go**
7. Run project:
```
   http://localhost/Moodify-Web-Application-main/
```

---

### ▶️ Run Using WAMP

1. Move project to:
```
   C:\wamp64\www\
```
   *(or `C:\wamp\www`)*
2. Start **WAMP** server
3. Ensure icon is **GREEN**
4. Open phpMyAdmin:
```
   http://localhost/phpmyadmin
```
5. Create database:
```
   moodify_db
```
6. Import  '127_0_0_1.sql`
7. Run project:
```
   http://localhost/Moodify-Web-Application-main/
```

---

## ⚠️ Important Notes

- Always run using:
```
  http://localhost/...
```
  ❌ **NOT:**
```
  file:///C:/...
```
- If `.php` files download instead of opening: Apache is not running *(start it via XAMPP/WAMP)*

---

## 🧭 Usage

1. Open the home page
2. Select a mood
3. Play songs 🎵
4. Sign up or login
5. Use contact form

---

## 🛠️ Technologies Used

| Technology | Usage            |
|------------|------------------|
| HTML5      | Structure         |
| CSS3       | Styling           |
| JavaScript | Frontend          |
| PHP        | Backend           |
| MySQL      | Database          |
| MP4        | Mood animations   |
| MP3        | Music             |

---

## 📬 Contact

- 📞 **Phone:** 071-5643879
- 📧 **Email:** moodify@gmail.com
- 🌐 **Social:** WhatsApp · Facebook · Instagram
