-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-07-2022 a las 15:01:21
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `e4cc_patform`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_usu_usuarios` (IN `in_usu_id` INT(11), IN `in_usu_nombre` VARCHAR(80), IN `in_usu_apellido` VARCHAR(80), IN `in_usu_email` VARCHAR(120), IN `in_usu_password` VARCHAR(160), IN `in_usu_estado` INT(11), IN `in_usu_rol` INT(11), IN `bandera` VARCHAR(12))  BEGIN
	CASE bandera
		WHEN 'table' THEN 
			SELECT * FROM usu_usuarios;
		WHEN "I" THEN
			INSERT INTO usu_usuarios(usu_id, usu_nombre, usu_apellido, usu_email, usu_password, usu_estado, usu_rol)
			VALUES(in_usu_id,in_usu_nombre,in_usu_apellido,in_usu_email,in_usu_password,in_usu_estado,in_usu_rol);
		WHEN 'U' THEN
			UPDATE usu_usuarios
				SET usu_id = in_usu_id, 
						usu_nombre = in_usu_nombre,
						usu_apellido = in_usu_apellido,
						usu_email = in_usu_email,
						usu_password = in_usu_password,
						usu_estado = in_usu_estado,
						usu_rol = in_usu_rol
				WHERE usu_id = in_usu_id;
		WHEN 'D' THEN
			DELETE FROM usu_usuarios WHERE usu_id = in_usu_id;
    END CASE;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_roles`
--

CREATE TABLE `rol_roles` (
  `rol_id` int(11) NOT NULL COMMENT 'Entidad Rol',
  `rol_nombre` varchar(60) DEFAULT NULL COMMENT 'Rol nombre'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol_roles`
--

INSERT INTO `rol_roles` (`rol_id`, `rol_nombre`) VALUES
(1, 'Administrador'),
(2, 'Usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usu_usuarios`
--

CREATE TABLE `usu_usuarios` (
  `usu_id` int(11) NOT NULL COMMENT 'Entidad Usuario',
  `usu_nombre` varchar(80) NOT NULL COMMENT 'Usuario nombre',
  `usu_apellido` varchar(80) DEFAULT NULL COMMENT 'Usuario apellido',
  `usu_email` varchar(160) DEFAULT NULL COMMENT 'Usuario email',
  `usu_password` varchar(120) NOT NULL COMMENT 'Usuario Contraseña',
  `usu_estado` int(11) DEFAULT NULL COMMENT 'Usuario Estado',
  `usu_rol` int(11) DEFAULT NULL COMMENT 'Usuario Rol'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usu_usuarios`
--

INSERT INTO `usu_usuarios` (`usu_id`, `usu_nombre`, `usu_apellido`, `usu_email`, `usu_password`, `usu_estado`, `usu_rol`) VALUES
(1, 'Luis', 'Gutierrez', 'lguti_12@gmail.com', 'admin', 1, 1),
(2, 'Maria', 'Castellanos', 'mcastellanos_23@gmail.com', '1234', 1, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `rol_roles`
--
ALTER TABLE `rol_roles`
  ADD PRIMARY KEY (`rol_id`);

--
-- Indices de la tabla `usu_usuarios`
--
ALTER TABLE `usu_usuarios`
  ADD PRIMARY KEY (`usu_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usu_usuarios`
--
ALTER TABLE `usu_usuarios`
  MODIFY `usu_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Entidad Usuario', AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
