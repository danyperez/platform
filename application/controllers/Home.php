<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {
	public function __construct(){
		date_default_timezone_set('America/El_Salvador');
		parent::__construct();
		$this->load->model('seguridad_model');
	}

	public function index(){
		$data['data'] = $this->session->userdata();
		$this->load->view('home', $data);
	}


}
