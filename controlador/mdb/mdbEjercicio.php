<?php

require_once(__DIR__."/../../modelo/dao/EjercicioDAO.php");       

function registrarEjercicio(Ejercicio $ejercicio){
    
    $dao=new EjercicioDAO();

    $ejercicio = $dao->registrarEjercicio($ejercicio);

    return $ejercicio;
}

function verEjercicio(){
    $dao=new EjercicioAO();

    $ejercicio = $dao->verEjercicio();

    return $ejercicio;
} 

function eliminarEjercicio($idEjercicio){
    $dao=new EjercicioDAO();
    $dao->eliminarEjercicio($idEjercicio);
}

function verEjercicioPorId($idEjercicio){
    $dao=new EjercicioDAO();
    $ejercicio = $dao->verEjercicioPorId($idEjercicio);
    return $ejercicio;
}

function editarEjercicio($ejercicio){
    $dao=new EjercicioDAO();
    $dao->editarEjercicio($ejercicio);
}