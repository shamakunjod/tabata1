<?php

    require_once (__DIR__."/../mdb/mdbUsuario.php");
    require_once (__DIR__."/../../modelo/entidad/Usuario.php");

    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $password = $_POST['password'];
    $telefono = $_POST['telefono'];
    $fechaNac = $_POST['fechaNac'];
    $sexo = $_POST['sexo'];
    $pesoKg = $_POST['pesoKg'];
    $administrador = 0;
    
    $usuario = new Usuario(null,$nombre,$correo,$password,$telefono,$fechaNac,$sexo,$pesoKg,$administrador);

    registrarUsuario($usuario);

    header("Location: ../../vista/login.php"); 