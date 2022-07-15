import {home_model} from './home_model.js';
import {home_view} from './home_view.js';

class home{
	constructor() {
		this.Home_model = new home_model;
		this.Home_view = new home_view();
		//Definicion de actions
		this.iud_usuario = null;
		//Inicializacion de datos
		this.data_usuarios = [];
		this.data_usuario_seleccion = {};
	}
	
	row_getter(dataname, id) {
		let result = this[dataname].filter(function (el) {
		  return el.id == id;
		});
		return result[0];
	}

   modal(modal, display, tmp){
      let modals = document.getElementsByClassName('modalcover');
      let templates = document.getElementsByClassName('template');
      modals[modal].style.display = display;
      modals[modal].innerHTML = '';
      if (tmp >= 0) {
         modals[modal].innerHTML = templates[tmp].innerHTML;
      }
   }

	async set_usuarios(){
		let params = { id: 0, nombre: 0, apellido: 0, email: 0, password: 0, rol: 0, estado: 0, bandera: 'table' };
		this.data_usuarios = await this.Home_model.usuarios(params);
		this.Home_view.set_table_usuarios(this.data_usuarios);
	}

	async create_usuario(){
		this.iud_usuario = 'I';
		this.modal(0,'inline-block', 0);
		let roles = await this.Home_model.roles();
		select_roles.innerHTML = this.Home_view.select_roles(roles);
	}

	async update_usuario(dtset){
		this.iud_usuario = 'U';
		let row = await this.row_getter('data_usuarios', dtset.id);
		this.data_usuario_seleccion = row;
		await this.modal({ state: 'show', template: 'tmp_form_usuario'});
		let grados = await this.Home_model.grados();
		select_grados_usuario.innerHTML = this.Home_view.select_grados(grados);
		in_nombre_usuario.value =  row.alm_nombre;
		in_edad_usuario.value = row.alm_edad;
		in_sexo_usuario.value = row.alm_sexo;
		select_grados_usuario.value = row.alm_id_grd;
		in_observacion_usuario.value = row.alm_observacion;
		
	}

	async delete_usuario(){
		this.iud_usuario = 'D';
		let row = await this.row_getter('data_usuarios', event.target.dataset.id);
		this.data_usuario_seleccion = row;
		if(await question('Esta seguro que desea eleminar el elemento seleccionado?')){
			this.IUD_usuario();
		}
	}

	validarForm_usuario(){
		if (nombre.value.trim() == '') {
			info('ingrese el nombre del usuario.');
		}else if (apellido.value.trim() == '') {
			info('Ingrese el apellido del usuario.');
		}else if (email.value == "") {
			info('Ingrese el email del usuario.');
		}else if (select_roles.value == 'null') {
			info('Seleccione el rol del usuario.');
		}else{
			this.IUD_usuario();
		}
	}

	async IUD_usuario(){
		let datarow;
	   let params = { bandera: this.iud_usuario };					
		switch(this.iud_usuario){
				case 'I':
					  		 params.id = 0;
					  		 params.nombre = nombre.value.trim();
					  		 params.apellido = apellido.value.trim();
					  		 params.email = email.value;
					  		 params.password = password.value;
					  		 params.estado = (estado.checked == true) ? 1 : 0;
					  		 params.rol = select_roles.value;
				break;
				case 'D':
					  		 params.id = this.data_usuario_seleccion.usu_id;
					  		 params.nombre = 0;
					  		 params.apellido = 0;
					  		 params.email = 0;
					  		 params.password = 0;
					  		 params.estado = 0;
					  		 params.rol = 0;
				break;
		}
		let dt = await this.Home_model.usuarios(params);
		this.modal(0,'none', -1);
		if (Array.isArray(dt)) {
			  info("Operación realizada correctamente");
		}else{
			  info("Error en la operación");
		}
		this.set_usuarios();
	}
}
window.home = new home();
window.home.set_usuarios();



