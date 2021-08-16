-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 09, 2021 at 03:46 PM
-- Server version: 8.0.11
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tabatadb`
--

-- --------------------------------------------------------

--
-- Table structure for table `ejercicio`
--

CREATE TABLE `ejercicio` (
  `id` int(11) NOT NULL,
  `nombre` varchar(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `idTipoEjercicio` int(11) NOT NULL,
  `imagen` varchar(50) NOT NULL,
  `video` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ejercicio`
--

INSERT INTO `ejercicio` (`id`, `nombre`, `descripcion`, `idTipoEjercicio`, `imagen`, `video`) VALUES
(1, 'Brazo 1', NULL, 1, 'imgbrazo.jpg', 'https://www.youtube.com/embed/ZIm_qrJSOds'),
(2, 'Brazo 2', NULL, 1, 'imgbrazo2.jpg', 'https://www.youtube.com/embed/ZIm_qrJSOds'),
(3, 'Brazo 3', NULL, 1, 'imgbrazo.jpg', 'https://www.youtube.com/embed/ZIm_qrJSOds'),
(4, 'Brazo 4', NULL, 1, 'imgbrazo.jpg', 'https://www.youtube.com/embed/ZIm_qrJSOds'),
(5, 'Brazo 5', NULL, 1, 'imgbrazo.jpg', 'https://www.youtube.com/embed/ZIm_qrJSOds'),
(6, 'Brazo 6', NULL, 1, 'imgbrazo.jpg', 'https://www.youtube.com/embed/ZIm_qrJSOds'),
(7, 'Pierna 1', NULL, 2, 'imgpierna.jpg', 'https://www.youtube.com/embed/HNosAVcpsz4'),
(8, 'Piernas 2', NULL, 2, 'imgpierna.jpg', 'https://www.youtube.com/embed/HNosAVcpsz4'),
(9, 'Piernas 3', NULL, 2, 'imgpierna.jpg', 'https://www.youtube.com/embed/HNosAVcpsz4'),
(10, 'Piernas 4', NULL, 2, 'imgpierna.jpg', 'https://www.youtube.com/embed/HNosAVcpsz4'),
(11, 'Piernas 5', NULL, 2, 'imgpierna.jpg', 'https://www.youtube.com/embed/HNosAVcpsz4'),
(12, 'Piernas 6', NULL, 2, 'imgpierna.jpg', 'https://www.youtube.com/embed/HNosAVcpsz4'),
(13, 'Abdomen 1', NULL, 3, 'imgabdomen.jpg', 'https://www.youtube.com/embed/k_u8obkaGE4'),
(14, 'Abdomen 2', NULL, 3, 'imgabdomen.jpg', 'https://www.youtube.com/embed/k_u8obkaGE4'),
(15, 'Abdomen 3', NULL, 3, 'imgabdomen.jpg', 'https://www.youtube.com/embed/k_u8obkaGE4'),
(16, 'Abdomen 4', NULL, 3, 'imgabdomen.jpg', 'https://www.youtube.com/embed/k_u8obkaGE4'),
(17, 'Abdomen 5', NULL, 3, 'imgabdomen.jpg', 'https://www.youtube.com/embed/k_u8obkaGE4'),
(18, 'Abdomen 6', NULL, 3, 'imgabdomen.jpg', 'https://www.youtube.com/embed/k_u8obkaGE4');

-- --------------------------------------------------------

--
-- Table structure for table `ejercicioxtabata`
--

CREATE TABLE `ejercicioxtabata` (
  `idTabata` int(11) NOT NULL,
  `idEjercicio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ejercicioxtabata`
--

INSERT INTO `ejercicioxtabata` (`idTabata`, `idEjercicio`) VALUES
(39, 6),
(39, 10),
(40, 1),
(40, 2),
(40, 3),
(40, 4),
(40, 5),
(40, 6),
(40, 7),
(40, 8),
(40, 9),
(42, 1),
(42, 8),
(42, 13),
(42, 14),
(43, 18),
(43, 7),
(43, 12),
(46, 5),
(46, 8),
(46, 11);

-- --------------------------------------------------------

--
-- Table structure for table `tabata`
--

CREATE TABLE `tabata` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `tPreparacion` int(11) NOT NULL,
  `tActividad` int(11) NOT NULL,
  `tDescanso` int(11) NOT NULL,
  `numSeries` int(11) NOT NULL,
  `numRondas` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tabata`
--

INSERT INTO `tabata` (`id`, `nombre`, `tPreparacion`, `tActividad`, `tDescanso`, `numSeries`, `numRondas`, `idUsuario`) VALUES
(1, 'Lunes', 2, 2, 2, 2, 2, 1),
(2, 'Lunes', 5, 20, 10, 9, 8, 2),
(3, 'Martes', 3, 9, 6, 2, 1, 2),
(4, 'asdasd', 5, 20, 10, 9, 8, 2),
(5, 'asdad', 5, 20, 10, 9, 8, 2),
(6, 'sasa', 5, 20, 10, 9, 8, 2),
(7, 'dgdf', 5, 20, 10, 9, 8, 2),
(8, 'sfsdf', 5, 20, 10, 9, 8, 2),
(9, 'sdfsdf', 5, 20, 10, 9, 8, 2),
(10, 'fghfhfgh', 5, 20, 10, 9, 8, 2),
(11, 'dfgd', 5, 20, 10, 9, 8, 2),
(12, 'dtg', 5, 20, 10, 9, 8, 2),
(13, 'ssd', 5, 20, 10, 9, 8, 2),
(14, 'asdasd', 5, 20, 10, 9, 8, 2),
(15, 'tgfhh', 5, 20, 10, 9, 8, 2),
(16, 'fghfgh', 5, 20, 10, 9, 8, 2),
(17, 'fghfgh', 5, 20, 10, 9, 8, 2),
(18, 'sfsdf', 5, 20, 10, 9, 8, 2),
(19, 'bnbn', 5, 20, 10, 2, 8, 2),
(20, 'asd', 5, 20, 10, 3, 8, 2),
(21, 'sdfsdf', 5, 20, 10, 3, 8, 2),
(22, 'ghfgh', 5, 20, 10, 3, 8, 2),
(23, 'aasdadadasda', 5, 20, 10, 3, 8, 2),
(24, 'fggj', 2, 20, 10, 3, 4, 2),
(25, 'fghfgh', 5, 20, 10, 2, 8, 2),
(26, 'ffhfgh', 5, 20, 10, 4, 8, 2),
(27, 'mh', 5, 20, 10, 9, 8, 2),
(28, 'asasa', 5, 20, 10, 3, 8, 2),
(29, 'mnm', 5, 20, 10, 3, 8, 2),
(30, 'saas', 5, 20, 10, 3, 8, 2),
(31, 'vccv', 5, 20, 10, 3, 8, 2),
(32, 'fghfgh', 5, 20, 10, 9, 8, 2),
(33, 'asd', 5, 20, 10, 9, 8, 2),
(34, 'ghfg', 5, 20, 10, 3, 8, 2),
(35, 'h', 5, 20, 10, 9, 8, 2),
(36, 'hj', 5, 20, 10, 3, 8, 2),
(37, 'ccxc', 5, 20, 10, 9, 8, 2),
(38, 'gh', 5, 20, 10, 9, 8, 2),
(39, 'asdasd', 5, 20, 10, 2, 8, 2),
(40, 'asdasdad', 5, 20, 10, 9, 8, 2),
(41, 'YOOOOO', 5, 20, 10, 4, 8, 2),
(42, 'ESOO', 5, 20, 10, 4, 8, 2),
(43, 'prrrr', 5, 20, 10, 3, 8, 2),
(44, 'xdd', 5, 20, 10, 9, 8, 3),
(45, 'Martes', 1, 11, 60, 2, 4, 1),
(46, 'Miercoles', 5, 20, 10, 3, 2, 1),
(47, 'Tabata Sábado', 5, 20, 10, 9, 8, 28),
(48, 'Tabata V', 5, 25, 28, 8, 8, 29),
(49, 'Miércoles-Brazo', 5, 20, 10, 9, 4, 1),
(50, 'Viernes - Pierna y Brazo', 8, 25, 22, 8, 4, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tipoejercicio`
--

CREATE TABLE `tipoejercicio` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tipoejercicio`
--

INSERT INTO `tipoejercicio` (`id`, `nombre`) VALUES
(1, 'Brazos'),
(2, 'Piernas'),
(3, 'Abdomen');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `correo` varchar(50) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `password` varchar(30) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `telefono` varchar(15) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL,
  `fechanac` date NOT NULL,
  `sexo` char(1) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `pesokg` float NOT NULL,
  `administrador` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `correo`, `password`, `telefono`, `fechanac`, `sexo`, `pesokg`, `administrador`) VALUES
(1, 'Johan Robles Solano', 'johanrobless@gmail.com', '123456', '3008005050', '1978-08-07', 'M', 76, 0),
(2, 'Administrador', 'admintabata@gmail.com', '12345', '123456', '2019-05-16', 'M', 50, 1),
(3, 'prueba', 'prueba@gmail.com', '123', '123123', '2019-05-01', 'F', 100, 0),
(28, 'Yamile Algarín', 'yamial@gmail.com', '123456', '3044058989', '2020-09-01', 'F', 55, 0),
(29, 'Camilo Robles', 'camilorobles@gmail.com', '1234', '30000001223', '2020-06-01', 'M', 50, 0),
(30, 'Valery Robles Algarin', 'valeryrobles@gmail.com', '123456', '', '2014-04-06', 'F', 30, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ejercicio`
--
ALTER TABLE `ejercicio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTipoEjercicio` (`idTipoEjercicio`);

--
-- Indexes for table `ejercicioxtabata`
--
ALTER TABLE `ejercicioxtabata`
  ADD KEY `idTabata` (`idTabata`),
  ADD KEY `idEjercicio` (`idEjercicio`);

--
-- Indexes for table `tabata`
--
ALTER TABLE `tabata`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indexes for table `tipoejercicio`
--
ALTER TABLE `tipoejercicio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo_index` (`correo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tabata`
--
ALTER TABLE `tabata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ejercicio`
--
ALTER TABLE `ejercicio`
  ADD CONSTRAINT `ejercicio_ibfk_1` FOREIGN KEY (`idTipoEjercicio`) REFERENCES `tipoejercicio` (`id`);

--
-- Constraints for table `ejercicioxtabata`
--
ALTER TABLE `ejercicioxtabata`
  ADD CONSTRAINT `ejercicioxtabata_ibfk_1` FOREIGN KEY (`idTabata`) REFERENCES `tabata` (`id`),
  ADD CONSTRAINT `ejercicioxtabata_ibfk_2` FOREIGN KEY (`idEjercicio`) REFERENCES `ejercicio` (`id`);

--
-- Constraints for table `tabata`
--
ALTER TABLE `tabata`
  ADD CONSTRAINT `tabata_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
