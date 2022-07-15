<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>frontend/libraries/bootstrap.5.02/dist/css/bootstrap.css">
	   <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>frontend/modules/login/styles.css" />
		<title>Login - E4CC</title>
		<script type="text/javascript">
			window.base_url = '<?php echo base_url(); ?>';
		</script>
	</head>
	<body>

	  <div class="d-flex justify-content-center container" style="max-width: 500px; margin-top: 17vh;">
	      <div class="container-fluid mw-75 mt-1 p-5 border loginform" id="login_form">
	      	<div class="mb-3 text-center">
	      		<h3>Login</h3>
				</div>
	      	<div class="mb-3">
				  <label class="form-label">Correo Electronico: </label>
				  <label class="form-label text-danger advertice">Requerido.</label>
				  <input type="text" maxlength="120" class="form-control" id="email" placeholder="Ingrese su nombre usuario.">
				</div>
				<div class="mb-3">
				  <label class="form-label">Contraseña: </label>
				  <label class="form-label text-danger advertice">Requerida.</label>
				  <input type="password" maxlength="120" class="form-control" id="password" placeholder="Ingrese su contraseña.">
				</div>
				<label class="form-label text-danger advertice">Email o password incorrectos.</label>
				<label class="form-label text-danger advertice">Ingresando... Espere.</label>
				<hr>
				<div class="mb-4 mt-4">
					<button class="btn btn-primary w-100" onclick="window.login.validateform()">Ingresar</button>
				  	<label class="form-label text-danger advertice">Ingresando...Por favor espere.</label>
				</div>
	      </div>
	  </div>

	</body>
    <script type="module" src="<?php echo base_url(); ?>frontend/modules/login/index.js"></script>
</html>
