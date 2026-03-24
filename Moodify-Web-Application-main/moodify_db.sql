-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 24, 2026 at 04:20 PM
-- Server version: 8.4.7
-- PHP Version: 8.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moodify_db`
--
CREATE DATABASE IF NOT EXISTS `moodify_db` DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci;
USE `moodify_db`;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `message` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `name`, `email`, `message`, `created_at`) VALUES
(1, 'Dinithi Thathsarani', 'thathsaranidinithi46@gmail.com', 'nice', '2026-03-22 10:35:01'),
(2, 'Dinithi Thathsarani', 'thathsaranidinithi46@gmail.com', 'bye', '2026-03-23 06:10:06'),
(3, 'Tharusha', 'tharushawijithaweera4@gmail.com', 'hiii gn', '2026-03-23 18:57:26');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `username`, `email`, `password`, `created_at`) VALUES
(1, 'Dinithi Thathsarani', 'Dinu', 'thathsaranidinithi46@gmail.com', '$2y$10$VAUfg2vXE5m1u31Us3GZWe0MhDOgOoyma0Kb1/PMTUBYB5mDGPjqu', '2026-03-22 03:11:17'),
(2, 'Chamika Tharindu', 'katu', 'chamikakariyawasam579@gmail.com', '$2y$10$Eaxnkxd1sQE6B7yo.moCnOOqOl3XVGU.DKS2LSEVClvhy107XwuDi', '2026-03-22 03:42:43'),
(3, 'Rita Ramani', 'Rita', 'thathsaranidinithi190@gmail.com', '$2y$10$5wN9lH2Me3KLdcFRzJHEY.joYSunweu/G5VYPc7/GFSQNmQarRd2u', '2026-03-22 09:38:24'),
(4, 'Bhagya Sandareka', 'Bhagi', 'dinithit44@gmail.com', '$2y$10$.Q4w8EqeB6JhmWNvy09XEeHA1ot143k6YSO68GhJjpcsRqPYCnTfi', '2026-03-22 14:29:31'),
(5, 'Nawodhya Wijesinghe', 'Nawo', 'nawowije2003@gmail.com', '$2y$10$tDtMdUnRW3M6GB5Bf8hJ6ORmx1w4Cvex7wSL9kTCeaXlY1xZhuoei', '2026-03-23 18:59:41');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
