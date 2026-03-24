<?php
require 'includes/db.php';

$messageStatus = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = trim($_POST['name']);
    $email   = trim($_POST['email']);
    $message = trim($_POST['message']);

    if (!empty($name) && !empty($email) && !empty($message)) {
        try {
            $stmt = $pdo->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
            $stmt->execute([$name, $email, $message]);
            $messageStatus = "✅ Message sent successfully!";
        } catch (PDOException $e) {
            $messageStatus = "❌ Error: " . $e->getMessage();
        }
    } else {
        $messageStatus = "⚠️ Please fill all fields!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Moodify</title>
    <link rel="stylesheet" href="css/home.css">
    <link rel="stylesheet" href="css/contact.css">
</head>

<body>

    <!-- HEADER -->
    <header>
        <div class="logo">
            <img src="Images/Logo.png" alt="Moodify Logo">
        </div>
        <nav>
            <ul class="navbar">
                <li><a href="home.html">Home</a></li>
                <li class="dropdown">
                    <a href="#" class="dropbtn">Mood ▾</a>
                    <ul class="dropdown-menu">
                        <li><a href="happy.html">😄 Happy</a></li>
                        <li><a href="sad.html">😢 Sad</a></li>
                        <li><a href="love.html">😍 Love</a></li>
                        <li><a href="sleepy.html">😴 Sleepy</a></li>
                        <li><a href="calm.html">😇 Calm</a></li>
                        <li><a href="tension.html">😤 Tension</a></li>
                    </ul>
                </li>
                <li><a href="contact.php" class="contact">Contact</a></li>
                <li><a href="login.html" class="log">Login</a></li>
                <li><a href="login.html?tab=signup" class="sign">Sign Up</a></li>
            </ul>
        </nav>
    </header>

    <!-- CONTACT FORM -->
    <div class="contact-container">
        <h1>Contact Us</h1>
        <p class="status"><?php echo $messageStatus; ?></p>
        <form method="POST">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="email" name="email" placeholder="Your Email" required>
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </div>

    <script src="js/script.js"></script>
</body>
</html>