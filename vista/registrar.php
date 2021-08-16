<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>registro</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/bootstrap-grid.min.css">
	<link rel="stylesheet" href="css/bootstrap-reboot.min.css">
	<link rel="stylesheet" href="css/EstiloLogin.css">
</head>
<body>
    <form class="form-signin" method="post" action="../controlador/accion/act_registrar.php">
        <input name="nombre" type="text" id="user" class="form-control" placeholder="nombre" autofocus>
        <input name="correo" type="text" id="user" class="form-control" placeholder="Correo" autofocus>
        <input name="password" type="text" id="user" class="form-control" placeholder="password" autofocus>
        <input name="telefono" type="text" id="user" class="form-control" placeholder="telefono" autofocus>
        <input name="fechaNac" type="text" id="user" class="form-control" placeholder="fechaNac" autofocus>
        <input name="sexo" type="text" id="user" class="form-control" placeholder="sexo" autofocus>
        <input name="pesoKg" type="text" id="user" class="form-control" placeholder="pesoKg" autofocus>
<!--         <input name="administrador" type="text" id="user" class="form-control" placeholder="administrador" autofocus> -->
    <button class="btn btn-lg btn-primary btn-block" type="submit">
		<h8>registrar</h8>
	</button>
</form>
</body>
</html>