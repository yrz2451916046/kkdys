/*
Navicat MySQL Data Transfer

Source Server         : day2
Source Server Version : 100121
Source Host           : localhost:3306
Source Database       : zhuce1

Target Server Type    : MYSQL
Target Server Version : 100121
File Encoding         : 65001

Date: 2017-05-09 14:38:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for shujukuu1
-- ----------------------------
DROP TABLE IF EXISTS `shujukuu1`;
CREATE TABLE `shujukuu1` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `idcard` int(18) DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `mobil` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of shujukuu1
-- ----------------------------
INSERT INTO `shujukuu1` VALUES ('1', '123', '123', '1', '1231231231', '12345', '1234567890');
INSERT INTO `shujukuu1` VALUES ('2', '213', '123', '1', '123', '123123123', '1231231');
INSERT INTO `shujukuu1` VALUES ('3', null, null, null, null, null, null);
INSERT INTO `shujukuu1` VALUES ('4', '小红', '23', '1', '2147483647', 'd7a0766b3e8b1a330ddab0aca9bfca51', '65416165');
INSERT INTO `shujukuu1` VALUES ('5', '小红', '23', '1', '2147483647', 'd7a0766b3e8b1a330ddab0aca9bfca51', '65416165');
INSERT INTO `shujukuu1` VALUES ('6', 'xiaohong', '12', '2', '2147483647', '0f9c4a5b2565ba3ca8a5be8f1e5dff46', '1161968165');
SET FOREIGN_KEY_CHECKS=1;
