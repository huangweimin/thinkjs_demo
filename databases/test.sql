/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2016-07-20 18:14:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `think_article`
-- ----------------------------
DROP TABLE IF EXISTS `think_article`;
CREATE TABLE `think_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL,
  `content` text CHARACTER SET utf8 NOT NULL,
  `catalogId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `catalog` (`catalogId`),
  CONSTRAINT `catalog` FOREIGN KEY (`catalogId`) REFERENCES `think_catalog` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of think_article
-- ----------------------------
INSERT INTO `think_article` VALUES ('1', '产品1', '123333123', '1');
INSERT INTO `think_article` VALUES ('3', '产品2', 'asssssd', '1');
INSERT INTO `think_article` VALUES ('4', '新闻1', '惺惺惜惺惺', '2');

-- ----------------------------
-- Table structure for `think_catalog`
-- ----------------------------
DROP TABLE IF EXISTS `think_catalog`;
CREATE TABLE `think_catalog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of think_catalog
-- ----------------------------
INSERT INTO `think_catalog` VALUES ('1', '产品');
INSERT INTO `think_catalog` VALUES ('2', '新闻');

-- ----------------------------
-- Table structure for `think_user`
-- ----------------------------
DROP TABLE IF EXISTS `think_user`;
CREATE TABLE `think_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(16) NOT NULL,
  `password` char(32) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uname` (`uname`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of think_user
-- ----------------------------
