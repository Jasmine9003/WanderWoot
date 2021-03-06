-- MySQL dump 10.13  Distrib 8.0.12, for macos10.13 (x86_64)
--
-- Host: localhost    Database: wanderwoot
-- ------------------------------------------------------
SET NAMES utf8 ;
--
-- Table structure for table `Booking_Table`
--
DROP TABLE IF EXISTS `Booking_Table`;

SET character_set_client = utf8mb4 ;
CREATE TABLE `Booking_Table` (
  `bid` int(11) NOT NULL AUTO_INCREMENT,
  `pid` varchar(45) DEFAULT NULL,
  `uemail` varchar(45) DEFAULT NULL,
  `from` varchar(80) DEFAULT NULL,
  `to` varchar(80) DEFAULT NULL,
  `cost` int(5) DEFAULT NULL,
  `currency` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `owneremail` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`bid`),
  UNIQUE KEY `bid_UNIQUE` (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Booking_Table`
--

LOCK TABLES `Booking_Table` WRITE;

INSERT INTO `Booking_Table` VALUES (19,'60','sweta@gmail.com','Mon Nov 25 2019 12:00:00 GMT-0700 (Pacific Daylight Time)','Wed Nov 27 2019 12:00:00 GMT-0700 (Pacific Daylight Time)',224,'USD','San Francisco','sandeep@gmail.com'),(20,'59','jasmeen@gmail.com','Tue Dec 3 2019 12:00:00 GMT-0700 (Pacific Daylight Time)','Fri Dec 6 2019 12:00:00 GMT-0700 (Pacific Daylight Time)',660,'USD','San Jose','sandeep@gmail.com');

UNLOCK TABLES;

--
-- Table structure for table `Property_Table`
--

DROP TABLE IF EXISTS `Property_Table`;

SET character_set_client = utf8mb4 ;
CREATE TABLE `Property_Table` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `uemail` varchar(45) NOT NULL,
  `adl1` varchar(40) DEFAULT NULL,
  `adl2` varchar(20) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `zip` int(11) DEFAULT NULL,
  `country` varchar(30) DEFAULT NULL,
  `headline` varchar(40) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `bedrooms` int(11) DEFAULT NULL,
  `bathrooms` int(11) DEFAULT NULL,
  `accomodates` int(11) DEFAULT NULL,
  `photos` varchar(200) DEFAULT NULL,
  `availablefrom` varchar(40) DEFAULT NULL,
  `availableto` varchar(40) DEFAULT NULL,
  `currency` varchar(45) DEFAULT NULL,
  `baserent` int(11) DEFAULT NULL,
  `minimumstay` int(11) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`pid`),
  UNIQUE KEY `pid_UNIQUE` (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;
--
-- Dumping data for table `Property_Table`
--

LOCK TABLES `Property_Table` WRITE;

INSERT INTO `Property_Table` VALUES (59,'sandeep@gmail.com','500 Race Street','5211','San Jose','California',95126,'USA','Petite Palace in Pacific Heights!','Welcome to Petite Palace! I am so excited to share my home with you! I especially love the travelers I get to meet and the stories I get to hear. ','apartment',2,2,5,'photos_1538949434091.jpg,photos_1538949434093.jpg,photos_1538949434095.jpg,photos_1538949434096.jpg,photos_1538949434098.jpg','Mon Dec 2 2019 12:00:00 GMT-0700','Fri Dec 6 2019 12:00:00 GMT-0700','USD',220,2,'6692610936'),(60,'sandeep@gmail.com','121 Gough Street','122','San Francisco','California',98765,'United States of America','Stanford Court San Francisco ','Stanford Court San Francisco is centrally located in San Francisco, a 4-minute walk from Grace Cathedral and 6 minutes by foot from Cable Car Museum.','apartment',2,2,5,'photos_1538949678863.jpg,photos_1538949678862.jpg,photos_1538949678862.jpg','Sun Nov 24 2019 12:00:00 GMT-0700','Mon Dec 23 2019 12:00:00 GMT-0700','USD',112,2,'1234567890'),(61,'sweta@gmail.com','2095 California','101','San Francisco','California',98765,'United States of America','Huge Charming Edwardian Home in SF','A charming Edwardian 1 bedroom 1 bath high ceiling home with a large windows for lots of sunlight! This home was built over 100 years ago and is the classic San Francisco Home!','apartment',5,3,10,'photos_1538949859061.jpg,photos_1538949859062.jpg,photos_1538949859063.jpg,photos_1538949859064.jpg,photos_1538949859065.jpg','Sun Nov 24 2019 12:00:00 GMT-0700','Mon Dec 23 2019 12:00:00 GMT-0700','USD',800,2,'1234567890'),(62,'jasmine@gmail.com','123 Farm Drive','23','Tampa','Florida',123456,'USA','Waterfront Luxury Condo...Casa Del Sol','Enjoy a relaxing stay at our beautiful condo Casa Del Sol with breathtaking sunset views. Whether you are staying a day or two or a few weeks, ','apartment',2,2,2,'photos_1538975836772.jpg,photos_1538975836774.jpg','Sun Nov 24 2019 12:00:00 GMT-0700','Wed Dec 25 2019 12:00:00 GMT-0700','USD',200,5,'1234567890');
UNLOCK TABLES;

--
-- Table structure for table `User_Table`
--

DROP TABLE IF EXISTS `User_Table`;

 SET character_set_client = utf8mb4 ;
CREATE TABLE `User_Table` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `uemail` varchar(45) NOT NULL,
  `ufname` varchar(45) DEFAULT NULL,
  `uphone` varchar(15) DEFAULT NULL,
  `uabout` varchar(200) DEFAULT NULL,
  `ucity` varchar(30) DEFAULT NULL,
  `ucountry` varchar(45) DEFAULT NULL,
  `ucompany` varchar(45) DEFAULT NULL,
  `uschool` varchar(45) DEFAULT NULL,
  `uhometown` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `ulanguages` varchar(45) DEFAULT NULL,
  `ugender` varchar(7) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `oid` int(11) DEFAULT NULL,
  `ulname` varchar(45) DEFAULT NULL,
  `upasswordhash` varchar(100) NOT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `uid_UNIQUE` (`uid`),
  UNIQUE KEY `uemail_UNIQUE` (`uemail`),
  UNIQUE KEY `oid_UNIQUE` (`oid`)
) ENGINE=InnoDB AUTO_INCREMENT=100000032 DEFAULT CHARSET=utf8;
--
-- Dumping data for table `User_Table`
--
LOCK TABLES `User_Table` WRITE;
/*!40000 ALTER TABLE `User_Table` DISABLE KEYS */;
INSERT INTO `User_Table` VALUES (100000028,'sandeep@gmail.com','Sandeep','6692610936','Love to Code','San Jose',NULL,'Honeywell','San Jose State University','Salem','English','Male',NULL,'Singh','$2b$12$81Ua1P.XrrlURVw.bqvus.BZfNhuxU2PDwpvJpPng9IqZ2/ThW5Dy'),(100000029,'sweta@gmail.com','Sweta',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Kumari','$2b$12$MQR70vS0955XYvvJv/1fu.aFv86mHk/EDh0uSfQxY/95WZds2WInS'),(100000031,'jasmine@gmail.com','jasmine',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Dhunna','$2b$12$zkfaKR4mm1rXOhXJM.vGMuMwOphznJy/QF9mlIpzz1Tki1.5ygXQS');
/*!40000 ALTER TABLE `User_Table` ENABLE KEYS */;
UNLOCK TABLES;

