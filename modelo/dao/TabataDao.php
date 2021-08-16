<?php

require_once ("DataSource.php");  //La clase que permite conectarse a la Base de Datos
require_once (__DIR__."/../entidad/Tabata.php");

class TabataDAO {

    public function registrarTabata(Tabata $tabata){
        $data_source = new DataSource();
        
        $stmt1 = "INSERT INTO tabata VALUES (NULL,:nombre,:tPreparacion,:tActividad,:tDescanso,:numSeries,:numRondas,:idUsuario)"; 
        
        $resultado = $data_source->ejecutarActualizacion($stmt1, array(
            ':nombre' => $tabata->getNombre(),
            ':tPreparacion' => $tabata->getTPreparacion(),
            ':tActividad' => $tabata->getTActividad(),
            ':tDescanso'=>$tabata->getTDescanso(),
            ':numSeries'=>$tabata->getNumSeries(),
            ':numRondas'=>$tabata->getNumRondas(),
            ':idUsuario'=>$tabata->getIdUsuario(),
            )
        ); 
        return $resultado;
    }

    public function verTabata(){
        $data_source = new DataSource();
        
        $data_table = $data_source->ejecutarConsulta("SELECT * FROM ejercicio", NULL);

        $tabata=null;
        $tabatas=array();

        foreach($data_table as $indice => $valor){
            $tabata = new Tabata(
                    $data_table[$indice]["id"],
                    $data_table[$indice]["nombre"],
                    $data_table[$indice]["tPreparacion"], 
                    $data_table[$indice]["tActividad"],
                    $data_table[$indice]["tDescanso"],
                    $data_table[$indice]["numSeries"],
                    $data_table[$indice]["numRondas"],
                    $data_table[$indice]["idUsuario"],
                    );
            array_push($tabatas,$tabata);
        }
        
    return $tabatas;
    }

    public function eliminarTabata($idTabata){
        $data_source = new DataSource();
        
        $stmt1 = "DELETE FROM tabata WHERE id = :idTabata"; 
        
        $resultado = $data_source->ejecutarActualizacion($stmt1, array(
            ':idTabata' => $idTabata
            )
        ); 

        return $resultado;
    }

    public function verTabataPorId($idTabata){
        $data_source = new DataSource();
        
        $data_table = $data_source->ejecutarConsulta("SELECT * FROM tabata WHERE id = :idTabata", array(':idTabata'=>$idTabata));

        $tabata=null;
        //Si $data_table retornó una fila, quiere decir que se encontro el usuario en la base de datos
        if(count($data_table)==1){
            $tabata = new Tabata(
                    $data_table[0]["id"],
                    $data_table[0]["nombre"],
                    $data_table[0]["tPreparacion"], 
                    $data_table[0]["tActividad"],
                    $data_table[0]["tDescanso"],
                    $data_table[0]["numSeries"],
                    $data_table[0]["numRondas"],
                    $data_table[0]["idUsuario"],
                    );
        }

        
    return $tabata;
    }

    public function editarTabata($tabata){
        $data_source = new DataSource();
        
        $stmt1 = "UPDATE tabata SET nombre = :nombre, tPreparacion = :tPreparacion, tActividad = :tActividad, tDescanso = :tDescanso, numSeries = :numSeries,numRondas = :numRondas,idUsuario = :idUsuario WHERE id = :idTabata"; 
        
        $resultado = $data_source->ejecutarActualizacion($stmt1, array(
            ':nombre' => $tabata->getNombre(),
            ':tPreparacion' => $tabata->getTPreparacion(),
            ':tActividad' => $tabata->getTActividad(),
            ':tDescanso' => $tabata->getTDescanso(),
            ':numSeries' => $tabata->getNumSeries(),
            ':numRondas' => $tabata->getNumRondas(),
            ':idUsuario' => $tabata->getIdUsuario()
            )
        ); 

        return $resultado;
    }

}

