
export class home_view{
	constructor(){
	}

	select_alumnos(data){
		let options = `<option value="null">Seleccione una opcion</option>`;
		for (let i in data) {
			options += `<option value="${data[i].alm_id}">${data[i].alm_nombre}</option>`;
		}
		return options;
	}

	createDatatable(tbname, dt, columns) {
		if (document.getElementById(tbname).innerHTML != '') {
			$('#'+tbname).DataTable().clear().destroy();
		}
		$(document).ready(function() {
		    $('#'+tbname).DataTable( {
		        responsive: true,
		        data: dt,
		        columnDefs: [
		            { responsivePriority: 1, targets: 1 }
		        ],
		        columns: columns,
						language: {
							emptyTable: "Vacío",
							info: "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
							infoEmpty: "Mostrando 0 to 0 of 0 Entradas",
							infoFiltered: "(Filtrado de _MAX_ total entradas)",
							infoPostFix: "",
							thousands: ",",
							lengthMenu: "Mostrar _MENU_ Entradas",
							loadingRecords: "Cargando...",
							processing: "Procesando...",
							search: "Buscar:",
							zeroRecords: "Sin resultados encontrados",
							paginate: {
								first: "Primero",
								last: "Ultimo",
								next: "Siguiente",
								previous: "Anterior"
							}
						}
		    } );
		} );
	}

	set_table_usuarios(dt){
		let tbname = 'table_usuarios';
		let columns = [
	    { title: "#", data: "usu_id" },
	    { title: "Nombre", data: "usu_nombre" },
	    { title: "Apellido", data: "usu_apellido" },
	    { title: "Email", data: "usu_email" },
	    { title: "Estado", data: "usu_estado" },
	    { title: "Rol", data: "rol_nombre" },
	    { title: "Pagina de inicio", data: "rol_startpage" },
	    { title: "Acciones", data: "acciones" }
		];
		for (let i = 0; i < dt.length; i++) {
			dt[i].id = (i+1);
			dt[i].acciones = `
			  <button type="button" class="btn btn-group-sm btn-secondary p-0 mdi mdi-trash-can-outline" 
			  data-action="delete_user" data-id="${dt[i].id}">
			  </button>
			  <button type="button" class="btn btn-group-sm btn-primary p-0 mdi mdi-square-edit-outline" 
			  data-action="update_user" data-id="${dt[i].id}">
			  </button>`;
		}
		this.createDatatable(tbname, dt, columns);
	}

}


