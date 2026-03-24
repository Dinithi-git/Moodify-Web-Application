<?php
// ═══════════════════════════════════════
//  Moodify — Signup Handler
//  Called by: login.js → handleSignup()
// ═══════════════════════════════════════

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

require '../includes/db.php';

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
    exit;
}

// Read JSON body from JavaScript fetch()
$input = json_decode(file_get_contents("php://input"), true);

$fullname  = trim($input['fullname']  ?? '');
$username  = trim($input['username']  ?? '');
$email     = trim($input['email']     ?? '');
$password  = trim($input['password']  ?? '');
$confirm   = trim($input['confirm']   ?? '');

// ── Validation ──────────────────────────
if (!$fullname || !$username || !$email || !$password || !$confirm) {
    echo json_encode(["success" => false, "message" => "All fields are required."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Invalid email address."]);
    exit;
}

if ($password !== $confirm) {
    echo json_encode(["success" => false, "message" => "Passwords do not match."]);
    exit;
}

if (strlen($password) < 6) {
    echo json_encode(["success" => false, "message" => "Password must be at least 6 characters."]);
    exit;
}

// ── Check if username or email already exists ──
$stmt = $pdo->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
$stmt->execute([$username, $email]);

if ($stmt->fetch()) {
    echo json_encode(["success" => false, "message" => "Username or email already taken."]);
    exit;
}

// ── Insert new user ──────────────────────
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$stmt = $pdo->prepare(
    "INSERT INTO users (full_name, username, email, password) VALUES (?, ?, ?, ?)"
);
$stmt->execute([$fullname, $username, $email, $hashedPassword]);

echo json_encode(["success" => true, "message" => "Account created successfully!"]);
?>