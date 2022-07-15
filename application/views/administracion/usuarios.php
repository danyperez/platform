<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Home</title>
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>frontend/libraries/bootstrap.5.02/dist/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>frontend/modules/usuarios/index.css">
		<script type="text/javascript">
			window.base_url = '<?php echo base_url(); ?>';
		</script>
</head>
<body>
	<nav class="navbar navbar-light bg-light">
	  <div class="container-fluid">
	    <span class="navbar-brand mb-0 h1">Administración de Usuarios</span>
	    <h5>Bienvenid@! <?php echo $data['usu_nombre'].' '.$data['usu_apellido'] ?></h5>
	    <a href="<?php echo base_url(); ?>login/cerrar_sesion" type="button" class="btn btn-sm btn-primary">Cerrar sesión</a>
	  </div>
	</nav>

	<div class="container mt-5">
		<!-- ALUMNOS -->
		<div class="tab-body">
			<div class="container-fluid p-1">
				<div class="row g-3 align-items-center">
				  <div class="col-auto">
				  	<button class="btn btn-sm btn-primary" onclick="window.home.modal(0,'block', 0)">Nuevo Usuario</button>
				  </div>
				</div>
				<hr>
				<div class="container-fluid p-0">
						<table class="table table-striped" id="table_usuarios" style="width:100%"></table>
				</div>
				<hr>
			</div>
		</div>
		<!-- ALUMNOS END -->
	</div>

	<div class="modalcover transparent">
		333
	</div>
	<template class="template" description="Formulario de clasificacion de listas">
			<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
		    <div class="modal-content">
		      <div class="modal-header p-2">
		        <h5 class="modal-title">Gestionar Usuario</h5>
		        <button type="button" class="btn-close" onclick="window.home.modal(0,'none', -1)"></button>
		      </div>
		      <div class="modal-body bg-light">
		        	<div class="mb-3">
					  	<label class="form-label">Nombre: </label>
					  	<input type="email" class="form-control form-control-sm" id="nombre">
					</div>
		        	<div class="mb-2">
					  	<label class="form-label">Apellido: </label>
					  	<input type="email" class="form-control form-control-sm" id="apellido">
					</div>
					<div class="mb-2">
					  	<label class="form-label">Email: </label>
					  	<input type="email" class="form-control form-control-sm" id="email">
					</div>
					<div class="mb-2">
					  	<label class="form-label">Password: </label>
					  	<input type="email" class="form-control form-control-sm" id="password">
					</div>
					<div class="mb-2">
					  	<label class="form-label">Estado: </label>
					  	<input type="email" class="form-control form-control-sm" id="estado">
					</div>
					<div class="mb-2">
					  	<label class="form-label">Rol: </label>
					  	<input type="email" class="form-control form-control-sm" id="rol">
					</div>
		      </div>
				<ul class="list-group m-2">
					<li class="list-group-item text-danger fw-bold p-1 advertice">Ingrese el nombre del usuario.</li>
					<li class="list-group-item text-danger fw-bold p-1 advertice">Ingrese el apellido del usuario.</li>
					<li class="list-group-item text-danger fw-bold p-1 advertice">Ingrese el correo electronico del usuario.</li>
					<li class="list-group-item text-danger fw-bold p-1 advertice">Ingrese el estado del usuario.</li>
					<li class="list-group-item text-danger fw-bold p-1 advertice">Seleccione el rol del usuario.</li>
				</ul>
		      <div class="modal-footer p-2">
		        <button type="button" class="btn btn-sm btn-secondary" onclick="window.home.modal(0,'none', -1)">Close</button>
		        <button type="button" class="btn btn-sm btn-primary" onclick="window.home.sender()">Aceptar</button>
		      </div>
		    </div>
		  </div>
	</template>
</body>

	<script src="<?php echo base_url(); ?>frontend/libraries/jquery/jquery-3.5.1.js"></script>
	<script src="<?php echo base_url(); ?>frontend/libraries/datatables/jquery.dataTables.min.js"></script>
	<script src="<?php echo base_url(); ?>frontend/libraries/datatables/dataTables.responsive.min.js"></script>
	<script src="<?php echo base_url(); ?>frontend/libraries/cute-alerts/cute-alert.js"></script>
	<script type="module" src="<?php echo base_url(); ?>frontend/modules/usuarios/index.js"></script>
</html>