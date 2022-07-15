
//CONTROLADOR DE LOGIN
export class LoginModel{
	constructor() {
		this.packet = { 
			header: { url : "" , routingcode: "" },
			params: {},
			body: [],
			token: "",
			state: false
		};
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

	async validate_user(params){
			console.log(window);
			this.packet.header.url = 'http://localhost/esa-api/api/administracion/seguridad/login/';
			/*this.packet.params = params;
			console.log(this.packet);
			return await this.transfer('json', this.packet);*/
	}

}
