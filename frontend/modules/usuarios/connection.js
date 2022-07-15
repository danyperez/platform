
export class connections{
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
}



	 
