<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {
	public function __construct(){
		date_default_timezone_set('America/El_Salvador');
		parent::__construct();
		$this->load->model('seguridad_model');
	}
	
	public function roles(){
		$result = $this->seguridad_model->roles();
		$response = json_encode($result);
		print_r($response);
	}

	public function iniciar_sesion(){
      // $this->session->sess_destroy();
		$datos = json_decode(file_get_contents('php://input'));
		/*$datos = new stdClass();
		$datos->email = 'lguti_12@gmail.com';
		$datos->password = 'admin';*/
		$result = $this->seguridad_model->validate_user($datos);
		if (sizeof($result) > 0) {
			$data = $result[0];
			$usuario_data=array(
				'usu_id'=>$data->usu_id,
				'usu_nombre'=>$data->usu_nombre,
				'usu_apellido'=>$data->usu_apellido,
				'usu_email'=>$data->usu_email,
				'usu_estado'=>$data->usu_estado,
				'usu_rol_id'=>$data->rol_id,
				'usu_rol_nombre'=>$data->rol_nombre,
				'usu_rol_startpage'=>$data->rol_startpage,
				'usu_logueado'=> TRUE,
				'usu_initime'=> date("Y-m-d H:i:s"),
				'Auth'=>''
			);
			$sesion = $this->session->set_userdata($usuario_data);
			$this->session->sess_expiration = 0;
			$this->sesiontest();
		}else{
			echo 'false';
		}
	}

	public function sesiontest(){
		$sesion = $this->session->userdata();
		if (isset($sesion['usu_logueado'])) {
			$response = json_encode($sesion);
			print_r($response);
		}else{
			echo 'false';
		}
	}

	public function cerrar_sesion(){
      $this->session->sess_destroy();
		redirect(base_url());
	}

	public function index(){
		$this->load->view('login/login');
	}


}
