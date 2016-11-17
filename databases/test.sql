/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2016-11-17 14:46:30
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
  `joinTime` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`) USING HASH,
  KEY `catalog` (`catalogId`),
  CONSTRAINT `catalog` FOREIGN KEY (`catalogId`) REFERENCES `think_catalog` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of think_article
-- ----------------------------
INSERT INTO `think_article` VALUES ('1', '产品123', '1233331232工工23', '1', '2016-09-02 13:36');
INSERT INTO `think_article` VALUES ('4', '新闻1', '1233331232工工', '2', '2016-09-01 14:29');
INSERT INTO `think_article` VALUES ('5', '关于我们', '这是关于我们的', '3', '2016-09-01 14:35');
INSERT INTO `think_article` VALUES ('6', '联系我们2', '1233331232工工', '1', '2016-09-01 14:27');
INSERT INTO `think_article` VALUES ('61', '测试文章', '1233331232工工', '1', '2016-09-01 14:14');
INSERT INTO `think_article` VALUES ('66', '测试工工工', '测试工工工', '4', '2016-09-02 10:19');

-- ----------------------------
-- Table structure for `think_catalog`
-- ----------------------------
DROP TABLE IF EXISTS `think_catalog`;
CREATE TABLE `think_catalog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of think_catalog
-- ----------------------------
INSERT INTO `think_catalog` VALUES ('1', '产品');
INSERT INTO `think_catalog` VALUES ('2', '新闻');
INSERT INTO `think_catalog` VALUES ('3', '关于我们');
INSERT INTO `think_catalog` VALUES ('4', '联系我们');

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
