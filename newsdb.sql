-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th6 20, 2019 lúc 01:24 AM
-- Phiên bản máy phục vụ: 5.7.21
-- Phiên bản PHP: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `newsdb`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `articlelevel`
--

DROP TABLE IF EXISTS `articlelevel`;
CREATE TABLE IF NOT EXISTS `articlelevel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` varchar(50) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `articlelevel`
--

INSERT INTO `articlelevel` (`id`, `level`) VALUES
(1, 'premium'),
(2, 'normal');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `articlemanagement`
--

DROP TABLE IF EXISTS `articlemanagement`;
CREATE TABLE IF NOT EXISTS `articlemanagement` (
  `idposts` int(11) NOT NULL AUTO_INCREMENT,
  `published` int(11) DEFAULT NULL,
  `approved_waitingpublication` int(11) DEFAULT NULL,
  PRIMARY KEY (`idposts`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `oder` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `oder`, `name`) VALUES
(2, 1, 'bóng đá'),
(3, 3, 'công nghệ'),
(4, 4, 'thị trường'),
(5, 5, 'sức khoẻ'),
(6, 6, 'showbiz'),
(13, 2, 'kinh doanh');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `idSubscriber` int(11) NOT NULL,
  `idPosts` int(11) NOT NULL,
  `content` varchar(2000) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`idSubscriber`,`idPosts`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `editor`
--

DROP TABLE IF EXISTS `editor`;
CREATE TABLE IF NOT EXISTS `editor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `idCategory` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `editor`
--

INSERT INTO `editor` (`id`, `name`, `idCategory`) VALUES
(1, 'lương thị thảo', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `abstract` varchar(2000) CHARACTER SET utf8 DEFAULT NULL,
  `content` varchar(10000) CHARACTER SET utf8 DEFAULT NULL,
  `date` date DEFAULT NULL,
  `articleStatus` int(11) DEFAULT NULL,
  `idWriter` int(11) DEFAULT NULL,
  `Reject` varchar(1000) CHARACTER SET utf8 DEFAULT NULL,
  `idCategory` int(11) DEFAULT NULL,
  `idTag` int(11) DEFAULT NULL,
  `idArticleLevel` int(11) DEFAULT NULL,
  `view` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `posts`
--

INSERT INTO `posts` (`id`, `title`, `image`, `abstract`, `content`, `date`, `articleStatus`, `idWriter`, `Reject`, `idCategory`, `idTag`, `idArticleLevel`, `view`) VALUES
(1, 'aaaaaaaaa', '10430399_1494538954117280_8301807020681970822_n (1).jpg', 'vvvvvvvvvvvv', '<p>bbbbbbbbbbb</p>\r\n\r\n<p>nnnnnnnnnnn</p>\r\n\r\n<p>mmmmmmmmmm</p>\r\n', '2019-05-28', 0, 1, NULL, 13, 2, NULL, NULL),
(2, 'chinh sua', '47086399_766497133700526_5516788648789409792_n.jpg', 'oooasodoasdo', '<p><a href=\"http://localhost:3000/category-details/#\"><img alt=\"img\" src=\"http://localhost:3000/category-details/uploads/images/1.jpg\" /></a></p>\r\n\r\n<h2><a href=\"http://localhost:3000/category-details/blog-single-image.html\">H&agrave;nh tr&igrave;nh từ Google DeepMind tới Viện trưởng VinAI Research</a></h2>\r\n\r\n<p>Nh&igrave;n bề ngo&agrave;i, tiến sĩ B&ugrave;i Hải Hưng tr&ocirc;ng rất thường. Kh&ocirc;ng chải chuốt, kh&ocirc;ng b&aacute;c học, cũng chẳng c&oacute; vẻ &quot;dị&quot; của một người v&ugrave;i đầu nghi&ecirc;n cứu. Nếu chỉ gặp tr&ecirc;n đường, &iacute;t ai nghĩ rằng m&igrave;nh vừa gặp một trong những nh&acirc;n vật nổi tiếng của giới khoa học c&ocirc;ng nghệ to&agrave;n cầu.</p>\r\n\r\n<p>Mặc d&ugrave; được coi l&agrave; trường hợp &quot;giỏi từ b&eacute;&quot; với rất nhiều giải thưởng To&aacute;n quốc gia, quốc tế, B&ugrave;i Hải Hưng vẫn một mực cho rằng anh c&oacute; ng&agrave;y h&ocirc;m nay ho&agrave;n to&agrave;n nhờ ngẫu nhi&ecirc;n. &quot;Ngẫu nhi&ecirc;n&quot; gi&agrave;nh được học bổng của Đại học C&ocirc;ng nghệ Curtin (Australia) d&agrave;nh cho học sinh Việt Nam duy nhất đoạt giải quốc tế v&agrave;o năm 1991.</p>\r\n\r\n<blockquote>&quot;Ngẫu nhi&ecirc;n&quot; ngay sau năm đ&oacute;, c&aacute;c chương tr&igrave;nh học bổng du học cho học sinh Việt Nam tạm thời bị gi&aacute;n đoạn. Sự &quot;ngẫu nhi&ecirc;n&quot; ấy cũng đưa anh đến với đề nghị l&ecirc;n thẳng Tiến sỹ m&agrave; kh&ocirc;ng cần qua cao học sau khi tốt nghiệp ĐH Curtin với th&agrave;nh t&iacute;ch xuất sắc. Anh sang Mỹ l&agrave;m v&agrave; nhận ra rằng với ng&agrave;nh c&ocirc;ng nghệ, m&ocirc;i trường ở đ&acirc;y mới l&agrave; l&iacute; tưởng chứ kh&ocirc;ng phải ở Australia.</blockquote>\r\n\r\n<p><a href=\"http://localhost:3000/category-details/#\"><img alt=\"img\" src=\"http://localhost:3000/category-details/uploads/images/2.jpg\" /></a></p>\r\n\r\n<p>V&igrave; sao lại n&oacute;i tới chuyện ngẫu nhi&ecirc;n? Người đ&agrave;n &ocirc;ng sinh ra v&agrave; lớn l&ecirc;n giữa l&ograve;ng phố cổ H&agrave; Nội n&agrave;y tin rằng, anh l&agrave; điển h&igrave;nh cho sự thiếu b&agrave;i bản trong việc đ&agrave;o tạo nguồn nh&acirc;n lực chất lượng cao tại Việt Nam. &quot;Khi t&ocirc;i bắt đầu ở Silicon Valley đầu những năm 2000, l&uacute;c đ&oacute; mới chỉ c&oacute; v&agrave;i người Việt. B&acirc;y giờ con số l&agrave; v&agrave;i trăm&quot;, B&ugrave;i Hải Hưng giải th&iacute;ch. &quot;Đ&oacute; l&agrave; t&iacute;n hiệu tốt nhưng phần lớn người Việt đều tới Silicon Valley theo một c&aacute;ch ngẫu nhi&ecirc;n n&agrave;o đ&oacute;. Giống như bản th&acirc;n t&ocirc;i cũng l&agrave; một sự ngẫu nhi&ecirc;n như vậy. Việt Nam m&igrave;nh vẫn thiếu một d&acirc;y chuyền, một quy tr&igrave;nh b&agrave;i bản để đ&agrave;o tạo ra những người giỏi. Tất cả l&agrave; từ những mảnh gh&eacute;p rời rạc, tự ph&aacute;t triển, tự t&igrave;m đến, tự khẳng định m&igrave;nh&quot;.</p>\r\n', '2019-05-28', 0, 1, 'do', 3, 3, NULL, NULL),
(4, 'Hành trình từ Google DeepMind tới Viện trưởng VinAI Research', '1.jpg', 'Nhìn bề ngoài, tiến sĩ Bùi Hải Hưng trông rất thường. Không chải chuốt, không bác học, cũng chẳng có vẻ \"dị\" của một người vùi đầu nghiên cứu. Nếu chỉ gặp trên đường,', '<p><a href=\"http://localhost:3000/category-details/#\"><img alt=\"img\" src=\"http://localhost:3000/category-details/uploads/images/1.jpg\" /></a></p>\r\n\r\n<h2><a href=\"http://localhost:3000/category-details/blog-single-image.html\">H&agrave;nh tr&igrave;nh từ Google DeepMind tới Viện trưởng VinAI Research</a></h2>\r\n\r\n<p>Nh&igrave;n bề ngo&agrave;i, tiến sĩ B&ugrave;i Hải Hưng tr&ocirc;ng rất thường. Kh&ocirc;ng chải chuốt, kh&ocirc;ng b&aacute;c học, cũng chẳng c&oacute; vẻ &quot;dị&quot; của một người v&ugrave;i đầu nghi&ecirc;n cứu. Nếu chỉ gặp tr&ecirc;n đường, &iacute;t ai nghĩ rằng m&igrave;nh vừa gặp một trong những nh&acirc;n vật nổi tiếng của giới khoa học c&ocirc;ng nghệ to&agrave;n cầu.</p>\r\n\r\n<p>Mặc d&ugrave; được coi l&agrave; trường hợp &quot;giỏi từ b&eacute;&quot; với rất nhiều giải thưởng To&aacute;n quốc gia, quốc tế, B&ugrave;i Hải Hưng vẫn một mực cho rằng anh c&oacute; ng&agrave;y h&ocirc;m nay ho&agrave;n to&agrave;n nhờ ngẫu nhi&ecirc;n. &quot;Ngẫu nhi&ecirc;n&quot; gi&agrave;nh được học bổng của Đại học C&ocirc;ng nghệ Curtin (Australia) d&agrave;nh cho học sinh Việt Nam duy nhất đoạt giải quốc tế v&agrave;o năm 1991.</p>\r\n\r\n<blockquote>&quot;Ngẫu nhi&ecirc;n&quot; ngay sau năm đ&oacute;, c&aacute;c chương tr&igrave;nh học bổng du học cho học sinh Việt Nam tạm thời bị gi&aacute;n đoạn. Sự &quot;ngẫu nhi&ecirc;n&quot; ấy cũng đưa anh đến với đề nghị l&ecirc;n thẳng Tiến sỹ m&agrave; kh&ocirc;ng cần qua cao học sau khi tốt nghiệp ĐH Curtin với th&agrave;nh t&iacute;ch xuất sắc. Anh sang Mỹ l&agrave;m v&agrave; nhận ra rằng với ng&agrave;nh c&ocirc;ng nghệ, m&ocirc;i trường ở đ&acirc;y mới l&agrave; l&iacute; tưởng chứ kh&ocirc;ng phải ở Australia.</blockquote>\r\n\r\n<p><a href=\"http://localhost:3000/category-details/#\"><img alt=\"img\" src=\"http://localhost:3000/category-details/uploads/images/2.jpg\" /></a></p>\r\n\r\n<p>V&igrave; sao lại n&oacute;i tới chuyện ngẫu nhi&ecirc;n? Người đ&agrave;n &ocirc;ng sinh ra v&agrave; lớn l&ecirc;n giữa l&ograve;ng phố cổ H&agrave; Nội n&agrave;y tin rằng, anh l&agrave; điển h&igrave;nh cho sự thiếu b&agrave;i bản trong việc đ&agrave;o tạo nguồn nh&acirc;n lực chất lượng cao tại Việt Nam. &quot;Khi t&ocirc;i bắt đầu ở Silicon Valley đầu những năm 2000, l&uacute;c đ&oacute; mới chỉ c&oacute; v&agrave;i người Việt. B&acirc;y giờ con số l&agrave; v&agrave;i trăm&quot;, B&ugrave;i Hải Hưng giải th&iacute;ch. &quot;Đ&oacute; l&agrave; t&iacute;n hiệu tốt nhưng phần lớn người Việt đều tới Silicon Valley theo một c&aacute;ch ngẫu nhi&ecirc;n n&agrave;o đ&oacute;. Giống như bản th&acirc;n t&ocirc;i cũng l&agrave; một sự ngẫu nhi&ecirc;n như vậy. Việt Nam m&igrave;nh vẫn thiếu một d&acirc;y chuyền, một quy tr&igrave;nh b&agrave;i bản để đ&agrave;o tạo ra những người giỏi. Tất cả l&agrave; từ những mảnh gh&eacute;p rời rạc, tự ph&aacute;t triển, tự t&igrave;m đến, tự khẳng định m&igrave;nh&quot;.</p>\r\n', '2019-02-18', 1, 1, NULL, 3, 5, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
CREATE TABLE IF NOT EXISTS `subcategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `oder` int(11) DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `idCategory` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `subcategory`
--

INSERT INTO `subcategory` (`id`, `oder`, `name`, `idCategory`) VALUES
(1, 1, 'trong nước', 2),
(14, 2, 'quốc tế', 2),
(3, 1, 'doanh nhân', 13),
(4, 2, 'tài chính', 13),
(5, 3, 'bất động sản', 13),
(6, 1, 'tin công nghệ', 3),
(7, 2, 'thế giới công nghệ', 3),
(8, 1, 'thị trường 24h', 4),
(9, 2, 'giá cả hàng hóa', 4),
(10, 1, 'bài thuốc dân gian', 5),
(11, 2, 'tin tức sức khỏe', 5),
(12, 1, 'sao việt', 6),
(13, 2, 'sao châu á', 6);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `subscriber`
--

DROP TABLE IF EXISTS `subscriber`;
CREATE TABLE IF NOT EXISTS `subscriber` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `registrationDate` date DEFAULT NULL,
  `static` tinyint(1) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `subscriber`
--

INSERT INTO `subscriber` (`id`, `email`, `name`, `registrationDate`, `static`, `password`) VALUES
(1, NULL, 'phùng thanh an', '2019-05-25', 0, ''),
(19, 'anphung@gmail.com', NULL, NULL, NULL, '1'),
(18, 'anphung2271997@gmail.com', NULL, NULL, NULL, '1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tag`
--

DROP TABLE IF EXISTS `tag`;
CREATE TABLE IF NOT EXISTS `tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `idCategory` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `tag`
--

INSERT INTO `tag` (`id`, `name`, `idCategory`) VALUES
(3, 'bongda', 2),
(2, 'kinhdoanh', 13),
(4, 'thitruong', 4),
(5, 'congnghe', 3),
(6, 'showbiz', 6);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `writer`
--

DROP TABLE IF EXISTS `writer`;
CREATE TABLE IF NOT EXISTS `writer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `idEditor` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `writer`
--

INSERT INTO `writer` (`id`, `name`, `idEditor`) VALUES
(1, 'phùng thanh an', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
