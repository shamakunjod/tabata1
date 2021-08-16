<?php

require_once(__DIR__."/../../modelo/dao/TabataDAO.php");       

function registrarTabata(Tabata $tabata){
    
    $dao=new TabataDAO();

    $tabata = $dao->registrarTabata($tabata);

    return $tabata;
}

function verTabata(){
    $dao=new TabataDAO();

    $tabata = $dao->verTabata();

    return $tabata;
} 

function eliminarTabata($idTabata){
    $dao=new TabataDAO();
    $dao->eliminarTabata($idTabata);
}

function verTabataPorId($idTabata){
    $dao=new TabataDAO();
    $tabata = $dao->verTabataPorId($idTabata);
    return $tabata;
}

function editarTabata($tabata){
    $dao=new TabataDAO();
    $dao->editarTabata($tabata);
}