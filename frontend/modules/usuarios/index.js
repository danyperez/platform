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
      console.log(modals);
      modals[modal].style.display = display;
      modals[modal].innerHTML = '';
      if (tmp >= 0) {
         modals[modal].innerHTML = templates[tmp].innerHTML;
      }
   }

	async set_usuarios(){
		let params = { id: 0, nombre: 0, apellido: 0, email: 0, password: 0, rol: 0, estado: 0, bandera: 'table' };
		this.data_usuarios = await this.Home_model.getUsuarios(params);
		this.Home_view.set_table_usuarios(this.data_usuarios);
	}

	async create_usuario(){
		this.iud_usuario = 'I';
		window.home.modal({ state: 'show', template: 'tmp_form_usuario'});
		let grados = await this.Home_model.grados();
		select_grados_usuario.innerHTML = this.Home_view.select_grados(grados);
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

	async delete_usuario(dtset){
		this.iud_usuario = 'D';
		let row = await this.row_getter('data_usuarios', dtset.id);
		this.data_usuario_seleccion = row;
		if(await question('Esta seguro que desea eleminar el elemento seleccionado?')){
			this.IUD_usuario();
		}
	}

	validarForm_usuario(){
		if (in_nombre_usuario.value.trim() == '') {
			info('ingrese el nombre del usuario.');
		}else if (in_edad_usuario.value.trim() == '') {
			info('ingrese la edad del usuario.');
		}else if (in_sexo_usuario.value == "undefined") {
			info('Seleccione el sexo del usuario.');
		}else if (select_grados_usuario.value == 'null') {
			info('Seleccione el grado del usuario.');
		}else if (in_observacion_usuario.value.trim() == '') {
			info('ingrese la observacion acerca del usuario.');
		}else{
			this.IUD_usuario();
		}
	}

	async IUD_usuario(){
		console.log(this.iud_usuario);
		console.log(this.data_usuario_seleccion);
		//in_nombre_usuario, in_edad_usuario, in_sexo_usuario, in_observacion_usuario
		let datarow;
	   let params = { bandera: this.iud_usuario };					
		switch(this.iud_usuario){
				case 'I':
					  		 params.id = 0;
					  		 params.codigo = 0;
					  		 params.nombre = in_nombre_usuario.value.trim();
					  		 params.edad = in_edad_usuario.value.trim();
					  		 params.sexo = in_sexo_usuario.value;
					  		 params.id_grado = select_grados_usuario.value;
					  		 params.observacion = in_observacion_usuario.value.trim();
				break;
				case 'U':
					  		 params.id = this.data_usuario_seleccion.alm_id;
					  		 params.codigo = this.data_usuario_seleccion.alm_codigo;
					  		 params.nombre = in_nombre_usuario.value.trim();
					  		 params.edad = in_edad_usuario.value.trim();
					  		 params.sexo = in_sexo_usuario.value;
					  		 params.id_grado = select_grados_usuario.value;
					  		 params.observacion = in_observacion_usuario.value.trim();
				break;
				case 'D':
					  		 params.id = this.data_usuario_seleccion.alm_id;
					  		 params.codigo = 0;
					  		 params.nombre = 0;
					  		 params.edad = 0;
					  		 params.sexo = 0;
					  		 params.id_grado = 0;
					  		 params.observacion = 0;
				break;
		}
		//if (this.validateFormAlumno()) {
			let dt = await this.Home_model.usuarios_IUD(params);
			console.log(dt);
			this.modal({ state: 'hide', template: 'template_form' });
			if (Array.isArray(dt)) {
				  info("Operación realizada correctamente");
			}else{
				  info("Error en la operación");
			}
			this.set_usuarios();
		//}
	}

	validateFormAlumno(){
  		 if (in_nombre_usuario.value.trim() == '') {
  		 	info('Ingrese el nombre del usuario/a');
  		 	return false;
  		 }else if(in_edad_usuario.value.trim() == ''){
  		 	info('Ingrese la edad del usuario/a');
  		 	return false;
  		 }else if (in_sexo_usuario.value == "undefined") {
  		 	info('Seleccione el sexo del usuario');
  		 	return false;
  		 }else if (select_grados_usuario.value == "undefined") {
  		 	info('Seleccione el grado del usuario');
  		 	return false;
  		 }else if (in_observacion_usuario.value.trim() == '') {
  		 	info('Ingrese la observacion acerca del usuario.');
  		 }else{
  		 	return true;
  		 }
	}


}

window.home = new home();

window.onload = _ => {
	window.home.set_usuarios();
}

window.onclick = _ => {
	if (event.target.dataset.action){
		if(event.target.dataset.action != "") {
			window.home[event.target.dataset.action](event.target.dataset);
		}
	}
}


