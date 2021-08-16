<?php
    //clase tabata
class Tabata
{
    public $id;
    public $nombre;
    public $tPreparacion;
    public $tActividad;
    public $tDescanso;
    public $numSeries;
    public $numRondas;
    public $idUsuario;

    public function __construct($id,$nombre,$tPreparacion,$tActividad,$tDescanso,$numSeries,$numRondas,$idUsuario){
        $this ->id =$id;
        $this ->nombre =$nombre;
        $this ->tPreparacion =$tPreparacion;
        $this ->tActividad =$tActividad;
        $this ->tDescanso =$tDescanso;
        $this ->numSeries =$numSeries;
        $this ->numRondas =$numRondas;
        $this ->idUsuario =$idUsuario;
    }
    //metodos get
    public function getId(){
        return $this->id;
    }
    public function getNombre(){
        return $this->nombre;
    }
    public function getTPreparacion(){
        return $this->tPreparacion;
    }
    public function getTActividad(){
        return $this->tActividad;
    }
    public function getTDescanso(){
        return $this->tDescanso;
    }
    public function getNumSeries(){
        return $this->numSeries;
    }
    public function getNumRondas(){
        return $this->numRondas;
    }
    public function getIdUsuario(){
        return $this->idUsuario;
    }
    //metodos set
    public function setId($id){
        $this->id = $id;

        return $this;
    }
    public function setNombre($nombre){
        $this->nombre = $nombre;

        return $this;
    }
    public function setTTpreparacion($tPreparacion){
        $this->tPreparacion = $tPreparacion;

        return $this;
    }
    public function setTActividad($tActividad){
        $this->tActividad = $tActividad;

        return $this;
    }
    public function setTDescanso($tDescanso){
        $this->tDescanso = $tDescanso;

        return $this;
    }
    public function setNumSeries($numSeries){
        $this->numSeries = $numSeries;

        return $this;
    }
    public function setNumRondas($numRondas){
        $this->numRondas = $numRondas;

        return $this;
    }
    public function setIdUsuario($idUsuario){
        $this->idUsuario = $idUsuario;

        return $this;
    }
    public function toArray() {

        $vars = get_object_vars ( $this );
        
        $array = array ();
        
        foreach ( $vars as $key => $value ) {
        
        $array [ltrim ( $key, '_' )] = $value;
        
        }
        
        return $array;
        
        }
}