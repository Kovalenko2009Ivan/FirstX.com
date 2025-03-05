<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];  // Отримуємо email з форми

    // Перевірка на валідність email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Тут пишемо код для відправки email
        $to = "your-email@example.com"; // Вставити свій email для отримання
        $subject = "Нове повідомлення з форми";
        $message = "Нове повідомлення: " . $email;
        $headers = "From: no-reply@example.com" . "\r\n" .
                   "Reply-To: no-reply@example.com" . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        if (mail($to, $subject, $message, $headers)) {
            echo "Повідомлення відправлено!";
        } else {
            echo "Помилка при відправці повідомлення!";
        }
    } else {
        echo "Невірний email!";
    }
}
?>