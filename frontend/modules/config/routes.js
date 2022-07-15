
//CONTROLADOR DE RUTAS
export class routes{
	constructor() {
		this.hosts = {};
		this.routes = {};
	}

	setHosts(){
		this.hosts.base_url = window.parent.base_url;
	}

	setRoutes(){
		this.setHosts();
		this.routes.esa_api.sistema.clasificacion = this.hosts.base_url+'api/sistema_clasificacion/';
		return this.routes;
	}

	getRoutes(api,modulo){
		let result = this.setRoutes();
		//console.log(result[api][modulo]);
		return result[api][modulo];
	}

}

