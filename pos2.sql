-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-06-2024 a las 19:39:31
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pos2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL,
  `memebresia` varchar(255) NOT NULL,
  `sexo` varchar(255) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `correo` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `memebresia`, `sexo`, `fecha_nacimiento`, `correo`) VALUES
(12530, 'Platinum', 'Femenino', '2003-08-20', 'roblesangie@gmail.com'),
(23456, 'Oro', 'Maculino', '1970-11-23', 'felixr@gmail.com'),
(97843, 'Diamante', 'Femenino', '1968-08-20', 'luzanilla@gmail.com'),
(49900, 'Platinum', 'Femenino', '1988-11-17', 'medrano@gmail.com'),
(91145, 'Basica', 'Masculino', '2002-09-15', 'daniel@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `codigo` varchar(10) NOT NULL,
  `nombre_producto` varchar(255) NOT NULL,
  `precio` float(9,2) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`codigo`, `nombre_producto`, `precio`, `descripcion`) VALUES
('P001', 'Manzana', 10.99, NULL),
('P002', 'Banana', 15.49, NULL),
('P003', 'Naranja', 7.99, NULL),
('P004', 'Pera', 12.50, NULL),
('P005', 'Uvas', 22.30, NULL),
('P006', 'Melón', 18.00, NULL),
('P007', 'Sandía', 9.75, NULL),
('P008', 'Piña', 25.99, NULL),
('P009', 'Mango', 30.00, NULL),
('P010', 'Fresas', 5.49, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_venta` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `sexo` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_venta`, `apellido`, `sexo`) VALUES
('Rodolfo', 'Marquez', 'Masculino'),
('Jose', 'Ramirez', 'Masculino'),
('Julia', 'Nuñez', 'Femenino'),
('Maria', 'Lopez', 'Femenino'),
('Eduardo', 'Robles', 'Mascuino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id_venta` int(10) UNSIGNED NOT NULL,
  `hora_venta` time NOT NULL,
  `fecha_venta` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id_venta`, `hora_venta`, `fecha_venta`) VALUES
(1, '09:48:13', '2024-06-01'),
(2, '09:48:37', '2024-06-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta_detalle`
--

CREATE TABLE `venta_detalle` (
  `id_venta` int(10) UNSIGNED NOT NULL,
  `id_producto` varchar(10) NOT NULL,
  `precio_producto` float UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `venta_detalle`
--

INSERT INTO `venta_detalle` (`id_venta`, `id_producto`, `precio_producto`) VALUES
(1, 'P010', 20);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD UNIQUE KEY `correo` (`correo`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD UNIQUE KEY `codigo` (`codigo`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id_venta`);

--
-- Indices de la tabla `venta_detalle`
--
ALTER TABLE `venta_detalle`
  ADD PRIMARY KEY (`id_venta`,`id_producto`,`precio_producto`),
  ADD KEY `codigo` (`id_producto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id_venta` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `venta_detalle`
--
ALTER TABLE `venta_detalle`
  ADD CONSTRAINT `codigo` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`codigo`),
  ADD CONSTRAINT `fk_id_venta` FOREIGN KEY (`id_venta`) REFERENCES `ventas` (`id_venta`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
