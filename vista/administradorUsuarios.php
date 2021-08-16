<?php
	session_start();
	if(!$_SESSION['NOMBRE_USUARIO']){
		header("location:login.php");
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>bienvenido <?php 
                    echo($_SESSION['NOMBRE_USUARIO']);?> 
    </p>
    <button onclick="location.href='logout.php'">cerrar sesion</button>
</body>
</html>