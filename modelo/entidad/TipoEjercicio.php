<?php
    //tipo de ejercicio
class TipoEjerciocio
{
    public $id;
    public $nombre;

    public function __construct($id,$nombre){
        $this ->id =$id;
        $this ->nombre =$nombre;
    }
    //metodos get
    public function getId(){
        return $this->id;
    }
    public function getNombre(){
        return $this->nombre;
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
}