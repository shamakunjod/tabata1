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
    <title>tabata</title>
<!--     <link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/bootstrap-grid.min.css">
	<link rel="stylesheet" href="css/bootstrap-reboot.min.css">
	<link rel="stylesheet" href="css/EstiloLogin.css">  -->
    <link rel="stylesheet" href="css/estiloTabata1.css">


</head>
<body>
    <div class="grid-container">
        <div class="titulo">
            es posible?
        </div>
        <div class="header">    
            <p class="text">bienvenido <?php echo($_SESSION['NOMBRE_USUARIO']);?> </p>
            <button class="logout" onclick="location.href='logout.php'">cerrar sesion</button>
        </div>
        <div class="reloj">            
            <div class="circle">
                <div id="stopwatch" class="stopwatch">00:00</div>
            </div>
            <div id="seconds-sphere" class="seconds-sphere"></div>
            <div class="buttons">
                <div class="stop" onclick="stop()"></div>
                <div id="play-pause" class="paused" onclick="playPause()"></div>
            </div>
        </div>
        <div class="tiempos">
        <form class="form-signin" method="post" action="../controlador/accion/act_guardarTabata.php">
        <p class="titulo-text">programa tu tabata</p>
            <p><input name="nombre" type="text" id="nombre" class="form-control" placeholder="nombre" autofocus>
            <p><input name="preparacion" type="number" id="preparacion" class="form-control" placeholder="preparacion" autofocus></p>
            <p><input name="actividad" type="number" id="actividad" class="form-control" placeholder="actividad" autofocus></p>
            <p><input name="descanso" type="number" id="descanso" class="form-control" placeholder="descanso" autofocus></p>
            <p><input name="series" type="number" id="series" class="form-control" placeholder="series" autofocus></p>
            <p><input name="rondas" type="number" id="rondas" class="form-control" placeholder="rondas" autofocus></p>
            
            <p><button class="btn btn-lg btn-primary btn-block" onclick="" value="empezar">empezar</button><button class="btn btn-lg btn-primary btn-block" type="submit" value="guardar">guardar</button></input></p>
        </form> 
        </div>        
        <div class="imagen"><p>tiempo total: <div id="TT"></div></p>
            la foto</div>
        <div class="descripE">la descripcion</div>
    </div>
    <script src="js/logica/cronometro.js"></script>
    <script src="js/librerias/jquery-3.3.1.min.js"></script>

    
</body>
</html>