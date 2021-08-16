<?php

require_once ("DataSource.php");  //La clase que permite conectarse a la Base de Datos
require_once (__DIR__."/../entidad/Ejercicio.php");

class EjercicioDAO {

    public function registrarEjercicio(Ejercicio $ejercicio){
        $data_source = new DataSource();
        
        $stmt1 = "INSERT INTO ejercicio VALUES (NULL,:nombre,:descripcion,:idTipoEjercicio,:imagen,:video)"; 
        
        $resultado = $data_source->ejecutarActualizacion($stmt1, array(
            ':nombre' => $ejercicio->getNombre(),
            ':descripcion' => $ejercicio->getDescripcion(),
            ':idTipoEjercicio' => $ejercicio->getIdTipoEjercicio(),
            ':imagen'=>$ejercicio->getImagen(),
            ':video'=>$ejercicio->getVideo(),
            )
        ); 
        return $resultado;
    }

    public function verEjercicio(){
        $data_source = new DataSource();
        
        $data_table = $data_source->ejecutarConsulta("SELECT * FROM ejercicio", NULL);

        $ejercicio=null;
        $ejercicios=array();

        foreach($data_table as $indice => $valor){
            $ejercicio = new Ejercicio(
                    $data_table[$indice]["id"],
                    $data_table[$indice]["nombre"],
                    $data_table[$indice]["descripcion"], 
                    $data_table[$indice]["idTipoEjercicio"],
                    $data_table[$indice]["imagen"],
                    $data_table[$indice]["video"],
                    );
            array_push($ejercicios,$ejercicio);
        }
        
    return $ejercicios;
    }

    public function eliminarEjercicio($idEjercicio){
        $data_source = new DataSource();
        
        $stmt1 = "DELETE FROM usuario WHERE id = :idEjercicio"; 
        
        $resultado = $data_source->ejecutarActualizacion($stmt1, array(
            ':idEjercicio' => $idEjercicio
            )
        ); 

        return $resultado;
    }

    public function verEjercicioPorId($idEjercicio){
        $data_source = new DataSource();
        
        $data_table = $data_source->ejecutarConsulta("SELECT * FROM ejercicio WHERE id = :idEjercicio", array(':idEjercicio'=>$idEjercicio));

        $ejercicio=null;
        //Si $data_table retornó una fila, quiere decir que se encontro el usuario en la base de datos
        if(count($data_table)==1){
            $ejercicio = new Ejercicio(
                    $data_table[0]["id"],
                    $data_table[0]["nombre"],
                    $data_table[0]["descripcion"],
                    $data_table[0]["idTipoEjercicio"],
                    $data_table[0]["imagen"],
                    $data_table[0]["video"]
                    );
        }

        
    return $ejercicio;
    }

    public function editarEjercicio($ejercicio){
        $data_source = new DataSource();
        
        $stmt1 = "UPDATE ejercicio SET nombre = :nombre, descripcion = :descripcion, idTipoEjercicio = :idTipoEjercicio, imagen = :imagen, video = :video WHERE id = :idEjercicio"; 
        
        $resultado = $data_source->ejecutarActualizacion($stmt1, array(
            ':nombre' => $ejercicio->getNombre(),
            ':descripcion' => $ejercicio->getDescripcion(),
            ':idTipoEjercicio' => $ejercicio->getIdTipoEjercicio(),
            ':imagen' => $ejercicio->getImagen(),
            ':video' => $ejercicio->getVideo(),
            )
        ); 

        return $resultado;
    }

}



