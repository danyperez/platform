<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Usuarios extends CI_Controller {
	public function __construct(){
		date_default_timezone_set('America/El_Salvador');
		parent::__construct();
		$this->load->model('seguridad_model');
	}

	public function usuarios(){
		$datos = json_decode(file_get_contents('php://input'));
		$result = $this->seguridad_model->usuarios($datos);
		$response = json_encode($result);
		print_r($response);
	}

	public function roles(){
		$datos = json_decode(file_get_contents('php://input'));
		$result = $this->seguridad_model->roles($datos);
		$response = json_encode($result);
		print_r($response);
	}

	public function index(){
		$data['data'] = $this->session->userdata();
		$this->load->view('administracion/usuarios', $data);
	}


}
