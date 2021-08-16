<?php
    class EjercicioXtabata{
        public $idTabata;
        public $idEjercicio;

        function __construct($idTabata,%$idEjercicio){
            $this->idTabata = $idTabata;
            $this->idEjercicio = $idEjercicio;
        }

        function getIdTabata(){
            return $this->idTabata;
        }

        function getIdEjercicio(){
            return $this->idEjercicio;
        }

        function setIdEjercicio($idEjercicio){
            $this->idEjercicio = $idEjercicio;
            return $this;
        }
        function setIdTabata($idTabata){
            $this->idTabata = $idTabata;
            return $this;
        }
    }