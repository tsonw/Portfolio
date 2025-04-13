<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "hoangthaison05dhp@gmail.com";
    $subject = "Tin nhắn mới từ website";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $body = "Tên: $name\nEmail: $email\n\nNội dung:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Đã gửi thành công!";
    } else {
        echo "Gửi thất bại.";
    }
}
?>