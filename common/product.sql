/*
Navicat MySQL Data Transfer

Source Server         : mystore
Source Server Version : 80013
Source Host           : localhost:3306
Source Database       : store

Target Server Type    : MYSQL
Target Server Version : 80013
File Encoding         : 65001

Date: 2018-12-03 16:05:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `product_desc` varchar(255) NOT NULL,
  `product_price` varchar(255) NOT NULL,
  `product_img` longtext NOT NULL,
  `product_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `create_time` varchar(255) NOT NULL,
  `swiper_imgs` longtext,
  `detail_imgs` longtext,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '测试', '这是一个测试商品', '12', 'http://localhost:3030/images\\Siuc8_mXApFKYLVd-eUXvBqn.png', '1', '1', null, null);
INSERT INTO `product` VALUES ('4', '商品标题随便填', '商品介绍随便填', '321', 'http://localhost:3030/images\\StNwLmFTYZr1241UibYEC4QE.png', '3', '1542442586496', null, null);
INSERT INTO `product` VALUES ('5', '商品标题2', '商品介绍2', '123', 'http://localhost:3030/images\\ddZyWavbnYnIv68ipKt5EMpi.png', '4', '1542442641903', null, null);
INSERT INTO `product` VALUES ('6', '商品标题3', '商品介绍3', '321', 'http://localhost:3030/images\\7e1BAOdjomGurhBwFWd_jyik.png', '1', '1542442664451', null, null);
INSERT INTO `product` VALUES ('7', '商品标题4', '商品介绍4', '42', 'http://localhost:3030/images\\EIfFPpUDlM2S-THSL40XEfaE.png', '2', '1542442685078', null, null);
INSERT INTO `product` VALUES ('8', '新的商品标题312', '新的商品介绍231', '334', 'http://localhost:3030/images\\B1sRVNsueX_aE5rYe04kBc9m.jpg', '1', '1542442712663', null, null);
INSERT INTO `product` VALUES ('9', '新的标题', '商品介绍22', '22', 'http://localhost:3030/images\\z3fXrcUo3F7cGitHm5Z4zng1.jpg', '2', '1542442739576', null, null);
INSERT INTO `product` VALUES ('10', '大红灯笼', '大红灯笼高高挂，大大红的红蜘蛛做做做', '123', 'http://localhost:3030/images\\vRVcfWoHtXaTgiqSxU4OTOHj.png', '3', '1542958512253', null, null);
INSERT INTO `product` VALUES ('11', 'lontext', '凄凄切切群群', '123123', 'http://localhost:3030/images\\w9SKJXJ0DJxbsAXe0EheSq8n.png', '1', '1542959550295', null, null);
