<?php
// ═══════════════════════════════════════
//  Moodify — Login Handler
//  Called by: login.js → handleLogin()
// ═══════════════════════════════════════

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

session_start();
require 'includes/db.php';

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
    exit;
}

// Read JSON body from JavaScript fetch()
$input = json_decode(file_get_contents("php://input"), true);

$username = trim($input['username'] ?? '');
$password = trim($input['password'] ?? '');

// ── Validation ──────────────────────────
if (!$username || !$password) {
    echo json_encode(["success" => false, "message" => "Please fill in all fields."]);
    exit;
}

// ── Find user by username ────────────────
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
$stmt->execute([$username]);
$user = $stmt->fetch();

// ── Verify password ──────────────────────
if (!$user || !password_verify($password, $user['password'])) {
    echo json_encode(["success" => false, "message" => "Invalid username or password."]);
    exit;
}

// ── Start session ────────────────────────
$_SESSION['user_id']   = $user['id'];
$_SESSION['username']  = $user['username'];
$_SESSION['full_name'] = $user['full_name'];

echo json_encode([
    "success"   => true,
    "message"   => "Login successful!",
    "username"  => $user['username'],
    "full_name" => $user['full_name']
]);
?>