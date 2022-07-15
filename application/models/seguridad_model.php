<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Seguridad_model extends CI_Model{

	public function validate_user($datos){
    $query = $this->db->query("CALL sp_usu_validation( '$datos->email', '$datos->password' )");
    $result = $query->result();
		return $result;
	}

	/**
	 * @author Daniel Perez
	 * usuarios: Gestion entidad usuarios 
	**/
	public function usuarios($datos){
		try {
		    $query = $this->db->query("call sp_usu_usuarios($datos->id, '$datos->nombre', '$datos->apellido', 
		    			'$datos->email', '$datos->password', $datos->estado, $datos->rol, '$datos->bandera' );");
		    $query = $query->result();
				return $query;
		} catch (Exception $e) {
		}
	}

	/**
	 * @author Daniel Perez
	 * roles: lista de roles de usuario 
	**/
	public function roles(){
		$result = $this->db->get('rol_roles');
		$this->db->where(array('rol_estado' => 1));
		return $result->result();
	}



}