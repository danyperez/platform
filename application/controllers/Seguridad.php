<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Seguridad extends CI_Controller {
	public function __construct(){
		date_default_timezone_set('America/El_Salvador');
		parent::__construct();
		$this->load->model('seguridad_model');
	}

	public function MateriasxGrado(){
		$package = json_decode(file_get_contents('php://input'));
		$query_result = $this->seguridad_model->materias_grado($package);
		$json_response = json_encode($query_result);
		print_r($json_response);
	}
	
	public function roles(){
		$result = $this->seguridad_model->roles();
		$response = json_encode($result);
		print_r($response);
	}

	public function index(){
		$this->load->view('login/login');
	}


}
