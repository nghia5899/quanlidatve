-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 08, 2021 at 08:48 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `datvexe`
--

-- --------------------------------------------------------

--
-- Table structure for table `chuyenxe`
--

CREATE TABLE `chuyenxe` (
  `MaChuyen` int(10) NOT NULL,
  `MaTuyen` int(11) NOT NULL,
  `Ngay` date NOT NULL,
  `MaXe` int(11) NOT NULL,
  `TinhTrangDiChuyen` int(11) NOT NULL,
  `ThoiGianKhoiHanh` datetime NOT NULL,
  `ThoiGianDenBen` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chuyenxe`
--

INSERT INTO `chuyenxe` (`MaChuyen`, `MaTuyen`, `Ngay`, `MaXe`, `TinhTrangDiChuyen`, `ThoiGianKhoiHanh`, `ThoiGianDenBen`) VALUES
(1, 46, '2021-04-14', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 67, '2021-04-16', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 47, '2021-04-16', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 46, '2021-04-16', 3, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 46, '2021-04-16', 3, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 46, '2021-04-29', 2, 2, '2021-05-04 16:45:45', '2021-05-04 16:47:32'),
(7, 67, '2021-04-29', 3, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 46, '2021-05-09', 3, 0, '2021-05-08 11:12:48', '2021-05-08 11:12:55'),
(9, 46, '2021-05-10', 1, 0, '2021-05-08 05:44:59', '2021-05-08 05:44:59');

-- --------------------------------------------------------

--
-- Table structure for table `datvexe`
--

CREATE TABLE `datvexe` (
  `MaDatVe` int(11) NOT NULL,
  `SoDienThoai` varchar(11) NOT NULL,
  `MaGhe` int(11) NOT NULL,
  `TinhTrangVe` int(11) NOT NULL,
  `MaChuyen` int(10) NOT NULL,
  `ThanhToan` int(11) NOT NULL,
  `LenXe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `datvexe`
--

INSERT INTO `datvexe` (`MaDatVe`, `SoDienThoai`, `MaGhe`, `TinhTrangVe`, `MaChuyen`, `ThanhToan`, `LenXe`) VALUES
(23, '833801526', 10, 1, 1, 0, 1),
(24, '833801526', 1, 0, 2, 1, 0),
(25, '833801526', 1, 1, 6, 0, 1),
(26, '833801526', 5, 0, 6, 1, 0),
(27, '833801526', 1, 0, 8, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `diemdung`
--

CREATE TABLE `diemdung` (
  `MaDiemDung` int(11) NOT NULL,
  `TenDiemDung` varchar(30) NOT NULL,
  `MaTinh` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `diemdung`
--

INSERT INTO `diemdung` (`MaDiemDung`, `TenDiemDung`, `MaTinh`) VALUES
(1, 'Bến xe Điện Biên', 1),
(2, 'Bến xe Bản phủ', 1),
(3, 'Bến xe Tuần Giáo', 1),
(4, 'Bến xe Sơn La', 3),
(5, 'Bến xe Hòa Bình', 4),
(6, 'Bến xe Mỹ Đình', 2),
(7, 'Bến xe Yên Nghĩa', 2);

-- --------------------------------------------------------

--
-- Table structure for table `ghe`
--

CREATE TABLE `ghe` (
  `MaGhe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ghe`
--

INSERT INTO `ghe` (`MaGhe`) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19),
(20);

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

CREATE TABLE `khachhang` (
  `SoDienThoai` varchar(11) NOT NULL,
  `Ten` varchar(30) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `AnhDaiDien` varchar(50) NOT NULL,
  `GioiTinh` int(11) NOT NULL,
  `MatKhau` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `khachhang`
--

INSERT INTO `khachhang` (`SoDienThoai`, `Ten`, `Email`, `AnhDaiDien`, `GioiTinh`, `MatKhau`) VALUES
('0111222333', 'nghia', 'nghia@gmail.com', '', 1, 'Tr@12345'),
('0111222444', 'huan', 'huan@gmail.com', '', 1, 'Tr@12345'),
('0123123123', 'nghia', 'nghia@gmail.com', '', 1, 'Tr@12345'),
('0123456123', 'tvquyen', 'quyen@gmail.com', '', 1, 'Tr@12345'),
('0123456456', 'hai', 'hai@gmail.com', '', 1, 'Tr@12345'),
('0123456788', 'nghia', 'nghia@gmail.com', '', 1, 'Tr@12345'),
('0123456789', 'nghia', 'nghia@mail.com', '', 1, 'undefined'),
('0833801526', 'luuquangnghia', 'nghia050899@gmail.com', '', 1, 'Tr@12345'),
('833801526', 'nghia', 'nghia050899@gmail.com', '', 1, 'Tr@123456');

-- --------------------------------------------------------

--
-- Table structure for table `laixe`
--

CREATE TABLE `laixe` (
  `MaNhanVien` int(10) NOT NULL,
  `Ten` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `Email` varchar(30) CHARACTER SET utf8 NOT NULL,
  `DiaChi` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `Tuoi` int(3) NOT NULL,
  `MatKhau` varchar(20) CHARACTER SET utf8 NOT NULL,
  `GioiTinh` int(11) NOT NULL,
  `SoDienThoai` varchar(20) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `laixe`
--

INSERT INTO `laixe` (`MaNhanVien`, `Ten`, `Email`, `DiaChi`, `Tuoi`, `MatKhau`, `GioiTinh`, `SoDienThoai`) VALUES
(1, 'Vũ Văn Sự', 'su@gmail.com', 'Hải Phòng', 23, 'Tr@12345', 0, '0888613989'),
(2, 'Tạ Đăng Huân', 'huan@gmail.com', 'Đan Phượng', 25, 'Tr@12345', 0, '0938140990');

-- --------------------------------------------------------

--
-- Table structure for table `phancong`
--

CREATE TABLE `phancong` (
  `MaPhanCong` int(11) NOT NULL,
  `MaChuyen` int(10) NOT NULL,
  `MaNhanVien` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `phancong`
--

INSERT INTO `phancong` (`MaPhanCong`, `MaChuyen`, `MaNhanVien`) VALUES
(1, 6, 1),
(2, 7, 2),
(3, 9, 1),
(4, 8, 1);

-- --------------------------------------------------------

--
-- Table structure for table `thoigian`
--

CREATE TABLE `thoigian` (
  `MaThoiGian` int(10) NOT NULL,
  `ThoiGianDi` varchar(10) NOT NULL,
  `ThoiGianDen` varchar(10) NOT NULL,
  `GiaVe` int(10) NOT NULL,
  `SoCho` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `thoigian`
--

INSERT INTO `thoigian` (`MaThoiGian`, `ThoiGianDi`, `ThoiGianDen`, `GiaVe`, `SoCho`) VALUES
(1, '19:00', '6:00', 320000, 30),
(2, '20:00', '7;00', 320000, 30),
(3, '19:30', '6:30', 400000, 30),
(4, '14:00', '20:00', 200000, 30),
(5, '6:00', '16:00', 300000, 28),
(6, '20:30', '7:30', 320000, 30);

-- --------------------------------------------------------

--
-- Table structure for table `tinh`
--

CREATE TABLE `tinh` (
  `MaTinh` int(11) NOT NULL,
  `TenTinh` varchar(30) NOT NULL,
  `MaVung` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tinh`
--

INSERT INTO `tinh` (`MaTinh`, `TenTinh`, `MaVung`) VALUES
(1, 'Điện Biên', 1),
(2, 'Hà Nội', 2),
(3, 'Sơn La', 1),
(4, 'Hòa BÌnh', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tuyenxe`
--

CREATE TABLE `tuyenxe` (
  `MaTuyen` int(11) NOT NULL,
  `MaDiemDi` int(11) NOT NULL,
  `MaDiemDen` int(11) NOT NULL,
  `mathoigian` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tuyenxe`
--

INSERT INTO `tuyenxe` (`MaTuyen`, `MaDiemDi`, `MaDiemDen`, `mathoigian`) VALUES
(46, 6, 1, 4),
(47, 6, 2, 1),
(48, 6, 3, 1),
(49, 6, 4, 1),
(50, 6, 5, 1),
(51, 7, 1, 1),
(52, 7, 2, 1),
(53, 7, 3, 1),
(54, 7, 4, 1),
(55, 7, 5, 1),
(56, 1, 6, 1),
(57, 2, 6, 1),
(58, 3, 6, 1),
(59, 4, 6, 1),
(60, 5, 6, 1),
(61, 1, 7, 1),
(62, 2, 7, 1),
(63, 3, 7, 1),
(64, 4, 7, 1),
(65, 5, 7, 1),
(66, 6, 1, 2),
(67, 6, 1, 6);

-- --------------------------------------------------------

--
-- Table structure for table `xe`
--

CREATE TABLE `xe` (
  `MaXe` int(11) NOT NULL,
  `BienSo` varchar(20) NOT NULL,
  `SoCho` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `xe`
--

INSERT INTO `xe` (`MaXe`, `BienSo`, `SoCho`) VALUES
(1, '30A-66666', 30),
(2, '27A-12345', 32),
(3, '27A-88888', 32);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chuyenxe`
--
ALTER TABLE `chuyenxe`
  ADD PRIMARY KEY (`MaChuyen`),
  ADD KEY `fk_matuyen` (`MaTuyen`),
  ADD KEY `fk_xe` (`MaXe`);

--
-- Indexes for table `datvexe`
--
ALTER TABLE `datvexe`
  ADD PRIMARY KEY (`MaDatVe`),
  ADD KEY `fk_manguoidat` (`SoDienThoai`),
  ADD KEY `fk_maghe` (`MaGhe`),
  ADD KEY `fk_machuyen1` (`MaChuyen`);

--
-- Indexes for table `diemdung`
--
ALTER TABLE `diemdung`
  ADD PRIMARY KEY (`MaDiemDung`),
  ADD KEY `fk_matinh` (`MaTinh`);

--
-- Indexes for table `ghe`
--
ALTER TABLE `ghe`
  ADD PRIMARY KEY (`MaGhe`);

--
-- Indexes for table `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`SoDienThoai`);

--
-- Indexes for table `laixe`
--
ALTER TABLE `laixe`
  ADD PRIMARY KEY (`MaNhanVien`);

--
-- Indexes for table `phancong`
--
ALTER TABLE `phancong`
  ADD PRIMARY KEY (`MaPhanCong`),
  ADD KEY `fk_manhanvien` (`MaNhanVien`),
  ADD KEY `fk_machuyen` (`MaChuyen`);

--
-- Indexes for table `thoigian`
--
ALTER TABLE `thoigian`
  ADD PRIMARY KEY (`MaThoiGian`);

--
-- Indexes for table `tinh`
--
ALTER TABLE `tinh`
  ADD PRIMARY KEY (`MaTinh`),
  ADD KEY `fk_mavung` (`MaVung`);

--
-- Indexes for table `tuyenxe`
--
ALTER TABLE `tuyenxe`
  ADD PRIMARY KEY (`MaTuyen`),
  ADD KEY `fk_madiemdi` (`MaDiemDi`),
  ADD KEY `fk_madiemden` (`MaDiemDen`),
  ADD KEY `fk_thoigian` (`mathoigian`);

--
-- Indexes for table `xe`
--
ALTER TABLE `xe`
  ADD PRIMARY KEY (`MaXe`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chuyenxe`
--
ALTER TABLE `chuyenxe`
  MODIFY `MaChuyen` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `datvexe`
--
ALTER TABLE `datvexe`
  MODIFY `MaDatVe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `diemdung`
--
ALTER TABLE `diemdung`
  MODIFY `MaDiemDung` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `ghe`
--
ALTER TABLE `ghe`
  MODIFY `MaGhe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `phancong`
--
ALTER TABLE `phancong`
  MODIFY `MaPhanCong` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `thoigian`
--
ALTER TABLE `thoigian`
  MODIFY `MaThoiGian` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tinh`
--
ALTER TABLE `tinh`
  MODIFY `MaTinh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tuyenxe`
--
ALTER TABLE `tuyenxe`
  MODIFY `MaTuyen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `xe`
--
ALTER TABLE `xe`
  MODIFY `MaXe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chuyenxe`
--
ALTER TABLE `chuyenxe`
  ADD CONSTRAINT `fk_matuyen` FOREIGN KEY (`MaTuyen`) REFERENCES `tuyenxe` (`MaTuyen`),
  ADD CONSTRAINT `fk_xe` FOREIGN KEY (`MaXe`) REFERENCES `xe` (`MaXe`);

--
-- Constraints for table `datvexe`
--
ALTER TABLE `datvexe`
  ADD CONSTRAINT `fk_machuyen1` FOREIGN KEY (`MaChuyen`) REFERENCES `chuyenxe` (`MaChuyen`),
  ADD CONSTRAINT `fk_maghe` FOREIGN KEY (`MaGhe`) REFERENCES `ghe` (`MaGhe`),
  ADD CONSTRAINT `fk_sodienthoai` FOREIGN KEY (`SoDienThoai`) REFERENCES `khachhang` (`SoDienThoai`);

--
-- Constraints for table `diemdung`
--
ALTER TABLE `diemdung`
  ADD CONSTRAINT `fk_matinh` FOREIGN KEY (`MaTinh`) REFERENCES `tinh` (`MaTinh`);

--
-- Constraints for table `phancong`
--
ALTER TABLE `phancong`
  ADD CONSTRAINT `fk_machuyen` FOREIGN KEY (`MaChuyen`) REFERENCES `chuyenxe` (`MaChuyen`),
  ADD CONSTRAINT `fk_manhanvien` FOREIGN KEY (`MaNhanVien`) REFERENCES `laixe` (`MaNhanVien`);

--
-- Constraints for table `tuyenxe`
--
ALTER TABLE `tuyenxe`
  ADD CONSTRAINT `fk_madiemden` FOREIGN KEY (`MaDiemDen`) REFERENCES `diemdung` (`MaDiemDung`),
  ADD CONSTRAINT `fk_madiemdi` FOREIGN KEY (`MaDiemDi`) REFERENCES `diemdung` (`MaDiemDung`),
  ADD CONSTRAINT `fk_thoigian` FOREIGN KEY (`mathoigian`) REFERENCES `thoigian` (`MaThoiGian`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
