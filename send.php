<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
            if (isset($_POST['name'])) {

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Формирование самого письма
$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 3;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'ssl://mail.hosting.reg.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'mudroff@mudroff.site'; // Логин на почте
    $mail->Password   = 'qwert321'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('mudroff@mudroff.site', 'Семен Александрович'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('mudrsemen@yandex.ru');  
     // Ещё один, если нужен

    
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('location: thankyou.html')
            }
            else if (isset($_POST['newsletter'])) {
                // Переменные, которые отправляет пользователь
$email = $_POST['newsletter'];


// Формирование самого письма
$title = "Новая заявка на рассылку Best Tour Plan";
$body = "
<h2>Новое заявкка</h2>
<b>E-mail:</b> $email<br>

";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 3;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'ssl://mail.hosting.reg.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'mudroff@mudroff.site'; // Логин на почте
    $mail->Password   = 'qwert321'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('mudroff@mudroff.site', 'Семен Александрович'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('mudrsemen@yandex.ru');  
     // Ещё один, если нужен

    
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('location: thankyounews.html')
            }
