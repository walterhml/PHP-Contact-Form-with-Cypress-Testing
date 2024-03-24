<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST["email"];
    $message = $_POST["message"];

echo "Formulario enviado com sucesso! Nome: $name, Email: $email, Message: $message";

} else {
    header("Location: index.php");
}

?>