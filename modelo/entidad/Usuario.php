<?php

//Esta clase POJO sirve para guardar los datos de un Usuario
//Por ejemplo, un objeto creado a partir de esta clase
//tendrá guardado los datos de un usuario de la tabla Usuarios de la
//base de datos

class Usuario
{
    public $id;
    public $nombre;
    public $correo;
    public $password;
    public $telefono;
    public $fechaNac;
    public $sexo;
    public $pesoKg;
    public $administrador;
    
    public function __construct($id,$nombre, $correo, $password,$telefono, $fechaNac, $sexo, $pesoKg, $administrador){

        $this->id = $id;
        $this->nombre = $nombre;
		$this->correo = $correo;
		$this->password = $password;
        $this->telefono = $telefono;
        $this->fechaNac = $fechaNac;
		$this->sexo = $sexo;
        $this->pesoKg = $pesoKg;
        $this->administrador = $administrador;
    }
    //metodos get
    public function getId(){
        return $this->id;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function getCorreo()
    {
        return $this->correo;
    }
    
     public function getPassword()
    {
        return $this->password;
    }

	 public function getTelefono()
    {
        return $this->telefono;
    }

    public function getFechaNac()
    {
        return $this->fechaNac;
    }

    public function getSexo()
    {
        return $this->sexo;
    }

    public function getPesoKg(){
        return $this->pesoKg;
    }
    //para el admin
    public function esAdministrador(){
        return $this->administrador;
    }
    //metodos set
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    public function setCorreo($correo)
    {
        $this->correo = $correo;

        return $this;
    }

    public function setPassword($password)
    {
        $this->correo = $correo;

        return $this;
    }

    public function setTelefono($telefono)
    {
        $this->telefono = $telefono;

        return $this;
    }

    public function setFechaNac($fechaNac)
    {
        $this->getFechaNac = $fechaNac;

        return $this;
    }

    public function setSexo($sexo)
    {
        $this->sexo = $sexo;

        return $this;
    }

    public function setPesoKg($pesoKg)
    {
        $this->getPesoKg = $pesoKg;

        return $this;
    }

    public function setAdministrador($administrador)
    {
        $this->administrador = $administrador;

        return $this;
    }

}