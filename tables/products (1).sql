-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 11, 2021 at 01:08 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bakreydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productId` int(20) NOT NULL,
  `productImage` varchar(500) NOT NULL,
  `productPrice` int(30) NOT NULL,
  `productQuantity` int(30) NOT NULL,
  `productName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productId`, `productImage`, `productPrice`, `productQuantity`, `productName`) VALUES
(1, 'https://firebasestorage.googleapis.com/v0/b/medical-app-ebc60.appspot.com/o/DoctorsProfiles%2F1612775437691.png?alt=media&token=1015f683-7977-48ef-b23d-8f1d5922470e', 439, 903, 'Chaye'),
(2, 'https://firebasestorage.googleapis.com/v0/b/medical-app-ebc60.appspot.com/o/DoctorsProfiles%2F1612775437691.png?alt=media&token=1015f683-7977-48ef-b23d-8f1d5922470e', 9489, 43, 'Coffe'),
(3, 'https://firebasestorage.googleapis.com/v0/b/medical-app-ebc60.appspot.com/o/DoctorsProfiles%2F1612775437691.png?alt=media&token=1015f683-7977-48ef-b23d-8f1d5922470e', 90, 90, 'Nothing'),
(6, 'https://firebasestorage.googleapis.com/v0/b/medical-app-ebc60.appspot.com/o/DoctorsProfiles%2F1612775437691.png?alt=media&token=1015f683-7977-48ef-b23d-8f1d5922470e', 43, 439, 'new item'),
(7, 'https://firebasestorage.googleapis.com/v0/b/medical-app-ebc60.appspot.com/o/DoctorsProfiles%2F1612775437691.png?alt=media&token=1015f683-7977-48ef-b23d-8f1d5922470e', 43, 439, 'uireio');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productId` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
