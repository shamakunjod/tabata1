<?php
    //clase ejercicio
    class Ejercicio
    {
        public $id;
        public $nombre;
        public $descripcion;
        public $idTipoEjercicio;
        public $imagen;
        public $video;

        function __construct($id,$nombre,$descripcion,$idTipoEjercicio,$imagen,$video){
            $this->id=$id;
            $this->nombre=$nombre;
            $this->descripcion=$descripcion;
            $this->idTipoEjercicio=$idTipoEjercicio;
            $this->imagen=$imagen;
            $this->video=$video;
        }
        //metodos get
        function getId(){
            return $this->id;
        }
        function getNombre() {
            return $this->nombre;
        }
        function getDescripcion(){
            return $this->descripcion;
        }
        function getIdTipoEjercicio(){
            return $this->idTipoEjercicio;
        }
        function getImagen(){
            return $this->imagen;
        }
        function getVideo(){
            return $this->video;
        }
        //metodos set
        function setId($id){
            $this->id=$id;
            return $this;
        }
        function setNombre($nombre){
            $this->nombre=$nombre;
            return $this;
        }
        function setDescripcion($descripcion){
            $this->descripcion=$descripcion;
            return $this;
        }
        function setIdTipoEjercicio($idTipoEjercicio){
            $this->idTipoEjercicio=$idTipoEjercicio;
            return $this;
        }
        function setImagen($imagen){
            $this->imagen=$imagen;
            return $this;
        }
        function setVideo($video){
            $this->video=$video;
            return $this;
        }
}
