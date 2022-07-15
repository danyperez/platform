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

	setTemporalIDs(dataname){
		for (let i = 0; i < this[dataname].length; i++) {
			this[dataname][i].id = parseInt(i)+1;
		}
	}

	ObjectFilter(dataname, id){
		let result = this[dataname].filter(function(obj) {
		   return obj.id == id;
		});
		return result[0];
	}

	async getUsuarios(params){
		console.log(window.base_url);
		let url = window.base_url+'usuarios/usuarios';
		let result = await this.transfer('json', params, url);
		console.log(result);
		return result;
	}


}
