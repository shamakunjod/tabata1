<?php

    session_start();

    require_once (__DIR__."/../mdb/mdbTabata.php");
    require_once (__DIR__."/../../modelo/entidad/Tabata.php");


    $nombre= $_POST['nombre'];
    $tPreparacion= $_POST['preparacion'];
    $tActividad= $_POST['actividad'];
    $tDescanso= $_POST['descanso'];
    $numSeries= $_POST['series'];
    $numRondas= $_POST['rondas'];

    $idUsuario= $_SESSION['ID_USUARIO'];

    $tabata = new Tabata(null,$nombre,$tPreparacion,$tActividad,$tDescanso,$numSeries,$numRondas,$idUsuario);

    registrarTabata($tabata);

    header("Location: ../../vista/tabata.php"); 