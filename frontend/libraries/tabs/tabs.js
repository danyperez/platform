/*##############################			TABS		#############################*/
var tabheaders = document.getElementsByClassName('tab-header');
var tabheadersactive = document.getElementsByClassName('tab-header-active');
var tabbodies = document.getElementsByClassName('tab-body');
//Asigna los eventos click a los tab headers
for (var i = 0; i < tabheaders.length; i++){
	let selecttab = tabheaders[i].dataset.tabody;
	tabheaders[i].onclick = () => changetab(selecttab);
}
//Oculta/muestra el tabbody y cambia el color del tabheader
function changetab(n) {
	for (let i = 0; i < tabbodies.length; i++){
		tabbodies[i].style.display = 'none';
	}
	for (let j = 0; j < tabheadersactive.length; j++){
		tabheadersactive[j].classList = 'tab-header';
	}
	tabheaders[n].className = 'tab-header-active';
	tabbodies[n].style.display = 'block';
}
changetab(0);