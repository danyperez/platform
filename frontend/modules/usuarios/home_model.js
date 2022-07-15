import {routes} from './../config/routes.js';

export class home_model{
	constructor(){
		this.Routes = new routes;
		this.matxalm_grid = [];
		this.matxgrd_grid = [];
		this.alumnos_grid = [];
		this.grados_grid = [];
		this.materias_grid = [];
	}

	/**
	 * @author Daniel Perez
	 * Conexion Fetch
	**/
	async transfer(format, packet, url) {
		let res = await fetch(url, {
					method: 'POST', mode: 'no-cors', cache: 'no-cache',
					/*credentials: 'omit',*/
					headers: {
					'Content-Type': 'application/json'
					}, body: JSON.stringify(packet)});
		if (res) {
			if (format == 'json') {
				return await res.json();
			}else if (format == 'text') {
				return await res.text();
			}
		}else{
			return 'Error: ${res.status}';
		}
	}

	/**
	 * @author Daniel Perez
	 * Define un identificador temporal
	**/
	setTemporalIDs(dataname){
		for (let i = 0; i < this[dataname].length; i++) {
			this[dataname][i].id = parseInt(i)+1;
		}
	}

	/**
	 * @author Daniel Perez
	 * Filtra un registro de un array
	**/
	ObjectFilter(dataname, id){
		let result = this[dataname].filter(function(obj) {
		   return obj.id == id;
		});
		return result[0];
	}

	/**
	 * @author Daniel Perez
	 * Recupera la lista de roles
	**/
	async roles(params){
		let url = window.base_url+'usuarios/roles';
		let result = await this.transfer('json', params, url);
		return result;
	}

	/**
	 * @author Daniel Perez
	 * Acciones de usuarios get, create, delete
	**/
	async usuarios(params){
		let url = window.base_url+'usuarios/usuarios';
		let result = await this.transfer('json', params, url);
		return result;
	}


}
