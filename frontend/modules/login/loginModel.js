
//CONTROLADOR DE LOGIN
export class LoginModel{
	constructor() {
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

	async validate_user(){
		console.log(window);
		let params = {
			// email: 'lguti_12@gmail.com',
			// password: 'admin'
			email: email.value.trim(),
			password: password.value.trim()
		};
		let url = window.base_url+'login/iniciar_sesion';
		let result = await this.transfer('json', params, url);
		return result;
	}

}
