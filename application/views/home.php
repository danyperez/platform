<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Home</title>
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>frontend/libraries/bootstrap.5.02/dist/css/bootstrap.css">
</head>
<body>
	<nav class="navbar navbar-light bg-light">
	  <div class="container-fluid">
	    <span class="navbar-brand mb-0 h1">Home</span>
	    <a href="<?php echo base_url(); ?>login/cerrar_sesion" type="button" class="btn btn-sm btn-primary">Cerrar sesión</a>
	  </div>
	</nav>

	<div class="container mt-5">
		<div class="card shadow-sm">
			<div class="card-body">
			<h2>Bienvenid@! <?php echo $data['usu_nombre'].' '.$data['usu_apellido'] ?></h2>
			</div>
		</div>
	</div>

</body>
</html>