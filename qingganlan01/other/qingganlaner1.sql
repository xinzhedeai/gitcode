/*
Navicat MySQL Data Transfer

Source Server         : mysql_qingganlan
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : qingganlaner1

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2016-05-24 20:12:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for access_token
-- ----------------------------
DROP TABLE IF EXISTS `access_token`;
CREATE TABLE `access_token` (
  `access_token` varchar(100) NOT NULL COMMENT '访问令牌',
  `US_ID` varchar(50) NOT NULL COMMENT '用户id',
  `CREATE_TIME` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  `EXPIRE_TS` timestamp NULL DEFAULT NULL COMMENT '过期日期',
  `LT_REQ_TS` timestamp NULL DEFAULT NULL COMMENT '最后访问日期',
  `REG_DC` varchar(100) DEFAULT NULL COMMENT '登录设备',
  PRIMARY KEY (`access_token`,`US_ID`),
  KEY `FK_USER_INFO_TO_ACCESS_TOKEN` (`US_ID`),
  CONSTRAINT `FK_USER_INFO_TO_ACCESS_TOKEN` FOREIGN KEY (`US_ID`) REFERENCES `user_info` (`US_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='AccessToken';

-- ----------------------------
-- Records of access_token
-- ----------------------------

-- ----------------------------
-- Table structure for apply_info
-- ----------------------------
DROP TABLE IF EXISTS `apply_info`;
CREATE TABLE `apply_info` (
  `COL` varchar(32) NOT NULL COMMENT '记录ID',
  `ORDER_ID` varchar(16) NOT NULL COMMENT '订单号',
  `WAYBILL_ID` varchar(32) NOT NULL COMMENT '运单号',
  ` COMPANY_ID` varchar(32) NOT NULL COMMENT '公司ID',
  `COL4` varchar(10) DEFAULT NULL COMMENT '申报类型',
  `COL2` varchar(10) DEFAULT NULL COMMENT '申报日期',
  `COL3` varchar(10) DEFAULT NULL COMMENT '申报状态',
  `COL5` varchar(10) DEFAULT NULL COMMENT '操作步骤',
  `COL8` varchar(10) DEFAULT NULL COMMENT '申报结果',
  `dsc` varchar(10) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`COL`),
  KEY `FK_good_info_TO_apply_info` (` COMPANY_ID`,`ORDER_ID`,`WAYBILL_ID`),
  CONSTRAINT `apply_info_ibfk_1` FOREIGN KEY (` COMPANY_ID`, `ORDER_ID`, `WAYBILL_ID`) REFERENCES `good_info` (` COMPANY_ID`, `ORDER_ID`, `WAYBILL_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='申报记录';

-- ----------------------------
-- Records of apply_info
-- ----------------------------
INSERT INTO `apply_info` VALUES ('a1', '201512100553', 'WR52010632', 'com1', null, null, null, null, null, null);
INSERT INTO `apply_info` VALUES ('a2', '201512100554', '690410172766', 'com2', null, null, null, null, null, null);
INSERT INTO `apply_info` VALUES ('a3', '201512100555', '690410172770', 'com3', null, null, null, null, null, null);
INSERT INTO `apply_info` VALUES ('a4', '201512100556', 'ADC3697852', 'com4', null, null, null, null, null, null);
INSERT INTO `apply_info` VALUES ('a5', '201512100557', '690439537114', 'com5', null, null, null, null, null, null);

-- ----------------------------
-- Table structure for authentication
-- ----------------------------
DROP TABLE IF EXISTS `authentication`;
CREATE TABLE `authentication` (
  `ID` varchar(50) NOT NULL COMMENT 'AUTH_ID',
  `US_ID` varchar(50) NOT NULL COMMENT '用户id',
  `US_NAME` varchar(30) NOT NULL COMMENT '姓名',
  `CARD_ID` varchar(20) NOT NULL COMMENT '身份证号码',
  `SEX` varchar(1) NOT NULL COMMENT '性别',
  `PROFESSION` varchar(50) NOT NULL COMMENT '职业',
  `PICTURE` varchar(100) NOT NULL COMMENT '身份证图片',
  `APPLY_TIME` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '申请时间',
  `AUTH_STATE` varchar(10) NOT NULL DEFAULT 'N' COMMENT '认证状态',
  PRIMARY KEY (`ID`),
  KEY `FK_USER_INFO_TO_AUTHENTICATION` (`US_ID`),
  CONSTRAINT `FK_USER_INFO_TO_AUTHENTICATION` FOREIGN KEY (`US_ID`) REFERENCES `user_info` (`US_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='认证信息表';

-- ----------------------------
-- Records of authentication
-- ----------------------------

-- ----------------------------
-- Table structure for blog
-- ----------------------------
DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog` (
  `BLOG_ID` varchar(50) NOT NULL COMMENT '帖子id',
  `US_ID` varchar(50) NOT NULL COMMENT '用户id',
  `SEND_TIME` timestamp NULL DEFAULT NULL COMMENT '发表时间',
  `BLOG_IMG` varchar(50) DEFAULT NULL COMMENT '帖子图片',
  `UPVOTE_NO` varchar(50) DEFAULT '0' COMMENT '被赞的数目',
  `COMMENT_NO` int(8) DEFAULT '0' COMMENT '被评论数目',
  `COLLECT_NO` int(8) DEFAULT '0' COMMENT '被收藏数目',
  `FORWARDING_NO` int(8) DEFAULT '0' COMMENT '被转发数目',
  `IS_DELETE` varchar(1) DEFAULT 'N' COMMENT '是否已删除',
  `IS_FORWARD` varchar(1) DEFAULT NULL COMMENT '是否转发',
  `CONTENT` varchar(500) NOT NULL COMMENT '动态内容',
  `FORWARD_VALIABLE` varchar(1) DEFAULT NULL COMMENT '是否可转发',
  `BLOG_STATE` varchar(1) DEFAULT NULL COMMENT '访问权限设置',
  PRIMARY KEY (`BLOG_ID`),
  KEY `US_ID` (`US_ID`),
  CONSTRAINT `blog_ibfk_1` FOREIGN KEY (`US_ID`) REFERENCES `user_info` (`US_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户发表的帖子';

-- ----------------------------
-- Records of blog
-- ----------------------------
INSERT INTO `blog` VALUES ('05b8333b81324397ae515750f7955f44', '18369162150', '2016-04-10 09:41:23', '346849_1460252482203.jpg', '0', '0', '0', '0', 'Y', null, '马太福音【19:26】耶稣看着他们说：“在人这是不能的，在神凡事都能。”', null, null);
INSERT INTO `blog` VALUES ('126e267b1a3741fa8e80eebaf2cee3c3', '18369162150', '2016-04-10 11:04:55', '1449067294_1460257494548.jpg', '0', '0', '0', '0', 'Y', null, '以马内利！神与我们同在！', null, null);
INSERT INTO `blog` VALUES ('1bcf6a09b90444c9b01a5863beca7f23', '18369162150', '2016-05-08 21:43:07', '', '0', '0', '0', '0', 'N', null, '丰盛的刻录机分开了', null, null);
INSERT INTO `blog` VALUES ('2ca1fe2babe5429196a3e3d8fa361a91', '18369162150', '2016-04-12 00:49:46', '', '0', '0', '0', '0', 'Y', null, 'skdjfkl', null, null);
INSERT INTO `blog` VALUES ('30fe5d95be2f4599b4dd63f37d61262b', '111111', '2016-04-10 15:17:53', '', '0', '0', '0', '0', 'N', null, '困死了都解放快乐', null, null);
INSERT INTO `blog` VALUES ('3b8b3306a1f2434d8a74077bbab26dd7', '18369162150', '2016-05-08 21:42:56', '', '0', '0', '0', '0', 'N', null, '得更快了房管局了', null, null);
INSERT INTO `blog` VALUES ('3c2a0a722e454be1878ceb9d2af7c54e', '18369162150', '2016-04-07 23:21:01', '346849_1460042460004.jpg', '2', '1', '0', '0', 'N', null, 'uO(∩_∩)O好的<(＾－＾)>(∩_∩)', null, null);
INSERT INTO `blog` VALUES ('3f1cc5010d3a48fe86304b3c427dbb94', '18369162150', '2016-04-21 22:06:08', 'f509385c2c28fe488a5df0ffa_1461247519808.jpg', '0', '0', '0', '0', 'N', null, '真爱是耶稣！真爱在呼唤！呼唤你的归航，亲爱的朋友，让他为你 扬帆！~O(∩_∩)O哈哈~', null, null);
INSERT INTO `blog` VALUES ('4e1f19118a4b45f590194c19f3bb4678', '111111', '2016-04-10 15:32:45', '', '0', '0', '0', '0', 'N', null, '哈哈 感谢赞美主。', null, null);
INSERT INTO `blog` VALUES ('5979dd97b33d464e85b5560aa9e344e9', '18369162150', '2016-04-10 13:02:48', '', '0', '0', '0', '0', 'Y', null, '马太福音【23:37】耶路撒冷啊，耶路撒冷啊！你常杀害先知，又用石头打死那奉差遣到你这里来的人。我多次愿意聚集你的儿女，好像母鸡把小鸡聚集在翅膀底下，只是你们不愿意。复习：马太福音【23:12】凡自高的，必降为卑；自卑的，必升为高 。马太福音【22:37-40】耶稣对他说：“你要尽心、尽性、尽意，爱主你的神。这是诫命中的第一，且是最大的。其次也相仿，就是要爱人如己。这两条诫命是律法和先知一切道理的总纲。”马太福音【20:26-28】只是在你们中间不可这样。你们中间谁愿为大，就必作你们的用人；谁愿为首，就必作你们的仆人。正如人子来，不是要受人的服侍，乃是要服侍人，并且要舍命，作多人的赎价。马太福音【19:23-24】耶稣对门徒说：“我实在告诉你们：财主进天国是难的。我又告诉你们：骆驼穿过针的眼，比财主进神的国还容易呢！”马太福音【16:23】耶稣转过来，对彼得说：“撒但，退我后边去吧！你是绊我脚的，因为你不体贴神的意思，只体贴人的意思。”马太福音【9:37-38】于是对门徒说：”要收的庄稼多， 作工的人少。所以你们当求庄稼的主，打发工人出去收他的庄稼。“', null, null);
INSERT INTO `blog` VALUES ('61eb8cde88e444fea99ffce4d4e3c731', '1003', '2016-04-10 12:47:06', 'f509385c2c28fe488a5df0ffa_1460263624731.jpg', '0', '0', '0', '0', 'N', null, '马太福音【24:4-5】耶稣回答说：“你们要谨慎，免得有人迷惑你们。因为将来有好些人冒我的名来，说：“我是基督，并且要迷惑许多人。“”复习：马太福音【23:37】耶路撒冷啊，耶路撒冷啊！你常杀害先知，又用石头打死那奉差遣到你这里来的人。我多次愿意聚集你的儿女，好像母鸡把小鸡聚集在翅膀底下，只是你们不愿意。马太福音【23:12】凡自高的，必降为卑；自卑的，必升为高。马太福音【22:21】他们说：“是凯撒的。”耶稣说：“这样，凯撒的物当归给凯撒；神的物当归给神。”马太福音【19:26】耶稣看着他们说：“在人这是不能的，在神凡事都能。”马太福音【16:26】人若赚的全世界，赔上自己的生命，有什么益处呢？人还能拿什么换生命呢？马太福音【10:16】我差你们去，如同羊进入狼群，所以你们要灵巧像蛇，驯良像鸽子。', null, null);
INSERT INTO `blog` VALUES ('7073263f03704b639fb12a46092633cc', '111111', '2016-04-10 15:06:52', 'QQtupian20160224235640_1460272010737.jpg', '0', '0', '0', '0', 'N', null, '哈利路亚感谢赞美主！O(∩_∩)O哈哈~', null, null);
INSERT INTO `blog` VALUES ('7d656aeac74b46f3aadd96ec90902391', '1003', '2016-04-10 11:49:59', '1449067294_1460260198922.jpg', '1', '0', '1', '0', 'Y', null, '我们却以为他受责罚，被神击打苦待了。5.哪知他为我们的过犯受害，为我们的罪孽压伤。因他受的刑罚，我们的平安；因他受的鞭伤，我们得医治。6我们都如羊走迷，各人偏行己路，耶和华使我们众人的罪孽都归在他身上。', null, null);
INSERT INTO `blog` VALUES ('885f4e9f58044fefbc61802d5030d491', '18369162150', '2016-05-08 21:42:59', '', '0', '0', '0', '0', 'N', null, '得更快了房管局了', null, null);
INSERT INTO `blog` VALUES ('9630db7813b0486286e6d068e77b9c66', '18369162150', '2016-05-08 21:43:03', '', '1', '0', '1', '0', 'N', null, '是考虑到积分看', null, null);
INSERT INTO `blog` VALUES ('ab1cc861df98454ea37d04d5ab0b7895', '18369162150', '2016-04-10 09:41:09', '', '0', '0', '0', '0', 'Y', null, '马太福音【19:26】耶稣看着他们说：“在人这是不能的，在神凡事都能。”', null, null);
INSERT INTO `blog` VALUES ('c2b3aa896177431ea3f7e49ab2829a6c', '18369162150', '2016-04-10 11:02:46', 'psb_1460257365003.jpg', '0', '0', '0', '0', 'Y', null, '哈利路亚赞美主！', null, null);
INSERT INTO `blog` VALUES ('cb27eb6fe5a3453e9cf085e2c0c26ca3', '18369162150', '2016-04-10 11:46:16', 'qt_1460259975330.png', '1', '0', '0', '0', 'N', null, '2他在耶和华面前生长如嫩芽，像根出于干地。他无佳形美容，我们看见他的时候，也无美貌使我们羡慕他。3他被藐视，被人厌弃，多受痛苦，常经忧患。他被藐视，好像被人掩面不看的一样，我们也不尊重他。4他诚然担当我们的忧患，背负我们的痛苦；我们却以为他受责罚，被神击打苦待了。5.哪知他为我们的过犯受害，为我们的罪孽压伤。因他受的刑罚，我们的平安；因他受的鞭伤，我们得医治。6我们都如羊走迷，各人偏行己路，耶和华使我们众人的罪孽都归在他身上。', null, null);
INSERT INTO `blog` VALUES ('ef274a2e9f1d402dbba1949f4e16a308', '111111', '2016-04-10 15:07:18', '', '0', '0', '0', '0', 'N', null, '哈哈', null, null);

-- ----------------------------
-- Table structure for church_info
-- ----------------------------
DROP TABLE IF EXISTS `church_info`;
CREATE TABLE `church_info` (
  `CHURCH_ID` varchar(50) NOT NULL COMMENT 'FELLOWSHIP_ID',
  `US_ID` varchar(50) NOT NULL COMMENT '提供教会信息的用户id',
  `CHURCH_NAME` varchar(50) NOT NULL COMMENT 'NAME',
  `TYPE` varchar(4) DEFAULT '0' COMMENT 'TYPE',
  `AREA` varchar(50) DEFAULT NULL COMMENT '教会所在地',
  `ADDRESS` varchar(100) DEFAULT NULL COMMENT 'ADDRESS',
  `ADORATION_TIME` timestamp NULL DEFAULT NULL COMMENT '教会敬拜时间',
  `CHURCH_PS` varchar(100) DEFAULT NULL COMMENT '团契简介',
  `CHURCH_MASTER_NAME` varchar(50) DEFAULT NULL COMMENT 'IS_MASTER',
  `CHURCH_MASTER_TEL` varchar(20) DEFAULT '0' COMMENT '教会负责人联系方式',
  `CHURCH_MASTER_EMAIL` varchar(50) DEFAULT NULL COMMENT '教会负责人邮箱帐号',
  PRIMARY KEY (`CHURCH_ID`),
  KEY `FK_user_info_TO_church_info` (`US_ID`),
  CONSTRAINT `FK_user_info_TO_church_info` FOREIGN KEY (`US_ID`) REFERENCES `user_info` (`US_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='青年团契信息表';

-- ----------------------------
-- Records of church_info
-- ----------------------------
INSERT INTO `church_info` VALUES ('b22f0adc-e74b-11e5-b0d0-74d02b7e28a0', '18369162150', '香柏树教会', '0', '山东|济南|历下区', '荣城小坡子村', '2016-03-11 13:34:00', '因为主的爱，牧养主的小羊！感谢主的恩典。', '彭思东', '18369162150', '2291006094@qq.com');

-- ----------------------------
-- Table structure for comment_info
-- ----------------------------
DROP TABLE IF EXISTS `comment_info`;
CREATE TABLE `comment_info` (
  `COMMENT_ID` varchar(200) NOT NULL COMMENT '评论编号',
  `BLOG_ID` varchar(50) NOT NULL COMMENT '帖子id',
  `COMMENT_US_ID` varchar(50) NOT NULL COMMENT '评论人id',
  `COMMENT_DATE` timestamp NULL DEFAULT NULL COMMENT '评论时间',
  `COMMENT_CONTENT` varchar(200) DEFAULT NULL COMMENT 'n内容',
  `IS_DELETE` varchar(1) DEFAULT 'N' COMMENT '是否删除',
  PRIMARY KEY (`COMMENT_ID`),
  KEY `FK_user_info_TO_comment_info` (`COMMENT_US_ID`),
  KEY `FK_blog_TO_comment_info` (`BLOG_ID`),
  CONSTRAINT `FK_blog_TO_comment_info` FOREIGN KEY (`BLOG_ID`) REFERENCES `blog` (`BLOG_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='评论信息表';

-- ----------------------------
-- Records of comment_info
-- ----------------------------
INSERT INTO `comment_info` VALUES ('63a110f6-fcd4-11e5-bcc9-c45444f5ce98', '3c2a0a722e454be1878ceb9d2af7c54e', '18369162150', '2016-04-07 23:21:23', '看电视了房间', 'N');

-- ----------------------------
-- Table structure for common_code
-- ----------------------------
DROP TABLE IF EXISTS `common_code`;
CREATE TABLE `common_code` (
  `b_class_cd` varchar(50) NOT NULL COMMENT '大分类编码',
  `b_class_nm` varchar(50) NOT NULL COMMENT '大分类名字',
  `s_class_cd` varchar(50) NOT NULL COMMENT '小分类编码',
  `s_class_nm` varchar(50) NOT NULL COMMENT '小分类名字',
  `exp` varchar(255) DEFAULT NULL COMMENT '备注',
  `s_class_no` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`b_class_cd`,`s_class_cd`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of common_code
-- ----------------------------
INSERT INTO `common_code` VALUES ('INCRISTWEB', '主内网址类型', 'gospelVideo', '主内福音视频类', '', 'A01');
INSERT INTO `common_code` VALUES ('INCRISTWEB', '主内网址类型', 'job', '主内工作招聘类', '', 'A03');
INSERT INTO `common_code` VALUES ('INCRISTWEB', '主内网址类型', 'makeFriend', '主内交友类', '', 'A05');
INSERT INTO `common_code` VALUES ('INCRISTWEB', '主内网址类型', 'music', '主内音乐歌谱类', '', 'A02');
INSERT INTO `common_code` VALUES ('INCRISTWEB', '主内网址类型', 'other', '主内网站其他分类', '', 'A07');
INSERT INTO `common_code` VALUES ('INCRISTWEB', '主内网址类型', 'shop', '主内购物类', '', 'A04');
INSERT INTO `common_code` VALUES ('INCRISTWEB', '主内网址类型', 'webFamily', '主内网站之家类', '', 'A06');
INSERT INTO `common_code` VALUES ('THIRDINCRISTWEB', '第三方主内交流平台', 'baiduPost', '百度贴吧', '', 'B01');
INSERT INTO `common_code` VALUES ('THIRDINCRISTWEB', '第三方主内交流平台', 'sinaWebo', '新浪微博', '', 'B03');
INSERT INTO `common_code` VALUES ('THIRDINCRISTWEB', '第三方主内交流平台', 'tcInterest', '腾讯兴趣部落', '', 'B02');

-- ----------------------------
-- Table structure for company_info
-- ----------------------------
DROP TABLE IF EXISTS `company_info`;
CREATE TABLE `company_info` (
  ` COMPANY_ID` varchar(32) NOT NULL COMMENT '公司ID',
  `cmp_tp` varchar(10) NOT NULL COMMENT '公司类型',
  `cmp_nm` varchar(10) DEFAULT NULL COMMENT '公司名',
  `cmp_adr` varchar(10) DEFAULT NULL COMMENT '公司地址',
  `cmp_tel` varchar(10) DEFAULT NULL COMMENT '公司电话',
  `cmp_fax` varchar(10) DEFAULT NULL COMMENT '公司传真',
  `chair_nm` varchar(10) DEFAULT NULL COMMENT '负责人姓名',
  `COL` varchar(10) DEFAULT NULL COMMENT '公司代码',
  PRIMARY KEY (` COMPANY_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='公司信息';

-- ----------------------------
-- Records of company_info
-- ----------------------------
INSERT INTO `company_info` VALUES ('com1', '1', null, null, null, null, null, null);
INSERT INTO `company_info` VALUES ('com2', '1', null, null, null, null, null, null);
INSERT INTO `company_info` VALUES ('com3', '1', null, null, null, null, null, null);
INSERT INTO `company_info` VALUES ('com4', '1', null, null, null, null, null, null);
INSERT INTO `company_info` VALUES ('com5', '1', null, null, null, null, null, null);

-- ----------------------------
-- Table structure for concern_info
-- ----------------------------
DROP TABLE IF EXISTS `concern_info`;
CREATE TABLE `concern_info` (
  `CONCERNED_US_ID` varchar(50) NOT NULL COMMENT '被关注者编号',
  `US_ID` varchar(50) NOT NULL COMMENT '用户id',
  `CONCERN_TIME` datetime NOT NULL COMMENT '关注时间',
  `IS_CONCERN` varchar(1) DEFAULT 'Y',
  PRIMARY KEY (`CONCERNED_US_ID`),
  KEY `FK_USER_INFO_TO_CONCERN_INFO` (`US_ID`),
  CONSTRAINT `FK_USER_INFO_TO_CONCERN_INFO` FOREIGN KEY (`US_ID`) REFERENCES `user_info` (`US_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='关注信息表 ';

-- ----------------------------
-- Records of concern_info
-- ----------------------------
INSERT INTO `concern_info` VALUES ('1001', '18369162150', '2016-02-03 13:41:50', 'Y');
INSERT INTO `concern_info` VALUES ('1002', '18369162150', '2016-02-03 13:41:32', 'Y');
INSERT INTO `concern_info` VALUES ('18369162150', '1003', '2016-02-11 09:52:45', 'Y');

-- ----------------------------
-- Table structure for fellowship_info
-- ----------------------------
DROP TABLE IF EXISTS `fellowship_info`;
CREATE TABLE `fellowship_info` (
  `FS_ID` varchar(50) NOT NULL COMMENT 'FELLOWSHIP_ID',
  `FS_NAME` varchar(50) NOT NULL COMMENT 'NAME',
  `FS_HEAD_IMG` varchar(200) DEFAULT NULL COMMENT '团契头像',
  `BUILD_DATE` timestamp NULL DEFAULT NULL COMMENT 'BUILD_TIME',
  `TYPE` varchar(4) DEFAULT NULL COMMENT 'TYPE',
  `ADDRESS` varchar(100) DEFAULT NULL COMMENT 'ADDRESS',
  `FS_BUILD_US_ID` varchar(50) DEFAULT NULL COMMENT 'IS_MASTER',
  `FS_PS` varchar(100) DEFAULT NULL COMMENT '团契简介',
  `FS_MSG_NO` int(8) DEFAULT '0',
  `FS_ALBUM_IMG_NO` int(8) DEFAULT '0' COMMENT '团契相册照片数量',
  `FS_QUESITION_NO` int(8) DEFAULT '0',
  PRIMARY KEY (`FS_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='青年团契信息表';

-- ----------------------------
-- Records of fellowship_info
-- ----------------------------
INSERT INTO `fellowship_info` VALUES ('76bedd70-fda2-11e5-9683-c45444f5ce98', '青橄榄团契001', 'psb_1460130960068.jpg', '2016-04-08 23:56:32', '0', '山东威海荣成', '18369162150', '主耶稣的小羊们的家', '0', '0', '0');
INSERT INTO `fellowship_info` VALUES ('807357aa-e535-11e5-a784-c45444f5ce98', '伯特利教会', 'yimaneili_1457445362923.jpg', '2016-03-08 21:56:05', '1', null, '18369162150', '很多爱主的弟兄姊妹们相聚在一起敬拜赞美神', '0', '0', '0');
INSERT INTO `fellowship_info` VALUES ('a252956c-e5a4-11e5-b179-74d02b7e28a0', '耶路撒冷团契', 'QQjietu20151221144551_1457493050637.png', '2016-03-09 11:11:34', '0', '耶路撒冷', '1003', '小羊的居所，让我们敬拜侍奉赞美我们的神！', '0', '6', '0');
INSERT INTO `fellowship_info` VALUES ('fs1003', '青橄榄团契', 'QQjietu20160118182540_1456046051933.png', '2016-03-23 09:05:17', '0', '威海荣成', '18369162150', '寻找主的小羊', '0', '3', '0');
INSERT INTO `fellowship_info` VALUES ('fs1993', '香柏树团契', 'QQjietu20160118182540_1456046051933.png', '2016-03-17 12:45:05', '1', '威海荣成小坡子', '1003', '神的居所，爱的港湾', '0', '30', '0');

-- ----------------------------
-- Table structure for fellowship_msg_info
-- ----------------------------
DROP TABLE IF EXISTS `fellowship_msg_info`;
CREATE TABLE `fellowship_msg_info` (
  `FS_MSG_ID` varchar(50) NOT NULL COMMENT 'FELLOWSHIP_ID',
  `FS_ID` varchar(50) NOT NULL COMMENT '团契id',
  `SEND_MSG_US_ID` varchar(50) NOT NULL COMMENT 'NAME',
  `MSG_CONTENT` varchar(1000) DEFAULT NULL COMMENT '团契头像',
  `SEND_DATE` timestamp NULL DEFAULT NULL COMMENT 'BUILD_TIME',
  PRIMARY KEY (`FS_MSG_ID`),
  KEY `FK_fellowship_info_TO_fellowship_msg_info` (`FS_ID`),
  CONSTRAINT `FK_fellowship_info_TO_fellowship_msg_info` FOREIGN KEY (`FS_ID`) REFERENCES `fellowship_info` (`FS_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='青年团契信息表';

-- ----------------------------
-- Records of fellowship_msg_info
-- ----------------------------
INSERT INTO `fellowship_msg_info` VALUES ('0d2a699a-e1aa-11e5-b80a-74d02b7e28a0', 'fs1003', '18369162150', '今天下午2点半青橄榄团契聚会，准时来哦。', '2016-03-04 09:40:10');
INSERT INTO `fellowship_msg_info` VALUES ('2853a5d0-e350-11e5-a293-c45444f5ce98', 'fs1993', '18369162150', '马太福音【7:13-14】你们要进窄门。因为引到灭亡，那门是宽的，路是大的，进去的人也多。\n复习\n马太福音【7:12】所以，无论何事，你们愿意人怎样待你们，你们也要怎样待人，因为这就是律法和先知的道理。\n马太福音【7:9-11】你们中间谁有儿子求饼，反给他石头呢？求鱼，反给他蛇呢？你们虽然不好，尚且知道拿好东西给儿女，何\n马太福音【5:18】我实在告诉你们，就是到天地都废去了，律法的一点一画也不能废去，都要成全。', '2016-03-06 12:01:51');
INSERT INTO `fellowship_msg_info` VALUES ('36a1f254-e350-11e5-a293-c45444f5ce98', 'fs1993', '18369162150', '马太福音【7:13-14】你们要进窄门。因为引到灭亡，那门是宽的，路是大的，进去的人也多。\n复习\n马太福音【7:12】所以，无论何事，你们愿意人怎样待你们，你们也要怎样待人，因为这就是律法和先知的道理。\n马太福音【7:9-11】你们中间谁有儿子求饼，反给他石头呢？求鱼，反给他蛇呢？你们虽然不好，尚且知道拿好东西给儿女，何况你们在天上的父，岂不更把好东西给求他的人吗？\n马太福音【7:6】不要把圣物给狗，也不要把你们的珍珠丢在猪前，恐怕它践踏了珍珠，转过来咬你们。\n马太福音【7:1-2】你们不要论断人，免得你们被论断。因为你们怎样论断人，也必怎样被论断；你们用什么量器量给人，也必用什么量器量给你们。\n马太福音【6:11】我们日用的饮食，今日赐给我们。\n马太福音【5:18】我实在告诉你们，就是到天地都废去了，律法的一点一画也不能废去，都要成全。', '2016-03-06 12:02:15');
INSERT INTO `fellowship_msg_info` VALUES ('62c97a1e-e2c5-11e5-88db-c45444f5ce98', 'fs1993', '18369162150', '水淀粉及客户说的纠纷', '2016-03-05 19:28:29');
INSERT INTO `fellowship_msg_info` VALUES ('684847db-e1ab-11e5-b80a-74d02b7e28a0', 'fs1003', '18369162150', '开始了解到反抗螺丝钉福克斯来的', '2016-03-04 09:49:52');
INSERT INTO `fellowship_msg_info` VALUES ('7007b504-e1ab-11e5-b80a-74d02b7e28a0', 'fs1003', '18369162150', '开始了解到反抗螺丝钉福克斯来的', '2016-03-04 09:50:05');
INSERT INTO `fellowship_msg_info` VALUES ('78887000-e1aa-11e5-b80a-74d02b7e28a0', 'fs1003', '18369162150', '哈哈 ，感谢主的恩典，昨天没有喝酒。', '2016-03-04 09:43:10');
INSERT INTO `fellowship_msg_info` VALUES ('b02d5863-e761-11e5-b0d0-74d02b7e28a0', 'a252956c-e5a4-11e5-b179-74d02b7e28a0', '18369162150', '耶和华是我的牧者，我必不至缺乏！！！', '2016-03-11 16:17:25');

-- ----------------------------
-- Table structure for fellowship_request
-- ----------------------------
DROP TABLE IF EXISTS `fellowship_request`;
CREATE TABLE `fellowship_request` (
  `QUESITION_ID` varchar(50) NOT NULL COMMENT '团契成员关系id',
  `US_ID` varchar(50) NOT NULL COMMENT '提问人id',
  `FS_ID` varchar(50) NOT NULL COMMENT 'FELLOWSHIP_ID',
  `REQUEST_DATE` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '发表问题疑问时间',
  `QUESITION_STATE` varchar(2) DEFAULT 'N' COMMENT '问题状态',
  `QUESITION_NAME` varchar(50) DEFAULT NULL COMMENT '问题名称',
  `QUESITION_CONTENT` varchar(200) DEFAULT NULL COMMENT '问题内容',
  `QUESITION_SOLUTED_DATE` timestamp NULL DEFAULT NULL COMMENT '问题被解决日期',
  `VIEWS` int(8) DEFAULT '0' COMMENT '浏览次数',
  `QUESITION_REPLY_NO` int(8) DEFAULT '0',
  PRIMARY KEY (`QUESITION_ID`),
  KEY `FK_fellowship_info_TO_fellowship_request` (`FS_ID`),
  KEY `FK_user_info_TO_fellowship_request` (`US_ID`),
  CONSTRAINT `FK_fellowship_info_TO_fellowship_request` FOREIGN KEY (`FS_ID`) REFERENCES `fellowship_info` (`FS_ID`),
  CONSTRAINT `FK_user_info_TO_fellowship_request` FOREIGN KEY (`US_ID`) REFERENCES `user_info` (`US_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='青年团契信息表';

-- ----------------------------
-- Records of fellowship_request
-- ----------------------------
INSERT INTO `fellowship_request` VALUES ('1233454654', '18369162150', 'fs1993', '2016-03-16 22:15:07', 'Y', '如何更好的传福音？', '作为一个基督徒，传福音是我们作为上帝的子女当尽的职分，但是当我们去传福音的时候我们会遇到各样的阻碍，对于我来说最大的莫过于不知道该怎么回答那些不信主的人的一些问题！', null, '0', '0');
INSERT INTO `fellowship_request` VALUES ('33612106-fee1-11e5-9b98-c45444f5ce98', '18369162150', 'fs1993', '2016-04-10 13:58:08', 'N', '要时刻向我们的神祷告！', '<p>感谢主的看顾！让孩子能时刻在里面欢喜快乐！感恩！一切都交托给主您来掌权！做孩子随时的帮助！如此感恩祷告奉我主耶稣基督宝贵的圣名！<br/></p>', null, '0', '0');
INSERT INTO `fellowship_request` VALUES ('356456465465', '1003', 'fs1993', '2016-03-10 10:31:05', 'Y', '的风景昆仑山搭街坊立刻', '手机打开了飞机快乐圣诞节', null, '0', '0');
INSERT INTO `fellowship_request` VALUES ('545646546', '1003', 'fs1993', '2016-03-10 10:30:49', 'Y', '山东就离开粉丝地方', '松井大辅库楼上的', null, '0', '0');
INSERT INTO `fellowship_request` VALUES ('bc4dde3c-fee0-11e5-9b98-c45444f5ce98', '18369162150', 'fs1993', '2016-04-10 13:54:49', 'N', '', '<p>感谢赞美主！<img src=\"http://img.baidu.com/hi/jx2/j_0028.gif\"/></p>', null, '0', '0');
INSERT INTO `fellowship_request` VALUES ('da1e7e5b-fee0-11e5-9b98-c45444f5ce98', '18369162150', 'fs1993', '2016-04-10 13:55:39', 'N', '', '<p>感谢赞美主。<br/></p>', null, '0', '0');
INSERT INTO `fellowship_request` VALUES ('dgkldjlkfgj', '18369162150', 'fs1993', '2016-03-09 22:23:36', 'N', '怎样才能不软弱？', '每次遇到一些挫折就容易软弱，读经祷告什么的都少了。', null, '0', '0');

-- ----------------------------
-- Table structure for fellowship_user_relation
-- ----------------------------
DROP TABLE IF EXISTS `fellowship_user_relation`;
CREATE TABLE `fellowship_user_relation` (
  `FS_US_RELATION_ID` varchar(50) NOT NULL COMMENT '团契成员关系id',
  `FS_ID` varchar(50) NOT NULL COMMENT 'FELLOWSHIP_ID',
  `US_ID` varchar(50) NOT NULL COMMENT '团契成员id',
  `JOIN_DATE` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'BUILD_TIME',
  `IS_MASTER` varchar(1) DEFAULT 'N',
  PRIMARY KEY (`FS_US_RELATION_ID`),
  KEY `FK_fellowship_info_TO_fellowship_user_relation` (`FS_ID`),
  KEY `FK_user_info_TO_fellowship_user_relation` (`US_ID`),
  CONSTRAINT `FK_fellowship_info_TO_fellowship_user_relation` FOREIGN KEY (`FS_ID`) REFERENCES `fellowship_info` (`FS_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_user_info_TO_fellowship_user_relation` FOREIGN KEY (`US_ID`) REFERENCES `user_info` (`US_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='青年团契信息表';

-- ----------------------------
-- Records of fellowship_user_relation
-- ----------------------------
INSERT INTO `fellowship_user_relation` VALUES ('321233', 'fs1993', '18369162150', '2016-03-09 12:47:03', 'N');
INSERT INTO `fellowship_user_relation` VALUES ('321456789', 'fs1003', '18369162150', '2016-03-15 09:07:34', 'N');
INSERT INTO `fellowship_user_relation` VALUES ('456456rf', 'fs1003', '1003', '2016-03-09 09:08:01', 'N');
INSERT INTO `fellowship_user_relation` VALUES ('642fe4a9-fcd6-11e5-bcc9-c45444f5ce98', 'a252956c-e5a4-11e5-b179-74d02b7e28a0', '18369162150', '2016-04-07 23:35:43', 'N');
INSERT INTO `fellowship_user_relation` VALUES ('6d778255-e2a9-11e5-88db-c45444f5ce98', 'fs1993', '18369162159', '2016-03-05 16:08:21', 'N');
INSERT INTO `fellowship_user_relation` VALUES ('6d77eacc-e2a9-11e5-88db-c45444f5ce98', 'fs1993', '18369162151', '2016-03-05 16:08:21', 'N');
INSERT INTO `fellowship_user_relation` VALUES ('6d784d2f-e2a9-11e5-88db-c45444f5ce98', 'fs1993', '18369162152', '2016-03-05 16:08:21', 'N');
INSERT INTO `fellowship_user_relation` VALUES ('6d78c3f4-e2a9-11e5-88db-c45444f5ce98', 'fs1993', '18369162153', '2016-03-05 16:08:21', 'N');
INSERT INTO `fellowship_user_relation` VALUES ('76beeec1-fda2-11e5-9683-c45444f5ce98', '76bedd70-fda2-11e5-9683-c45444f5ce98', '18369162150', '2016-04-08 23:56:32', 'Y');
INSERT INTO `fellowship_user_relation` VALUES ('79d9ebdb-feee-11e5-9b98-c45444f5ce98', 'fs1993', '111111', '2016-04-10 15:33:10', 'N');

-- ----------------------------
-- Table structure for good_info
-- ----------------------------
DROP TABLE IF EXISTS `good_info`;
CREATE TABLE `good_info` (
  ` COMPANY_ID` varchar(32) NOT NULL COMMENT '公司ID',
  `ORDER_ID` varchar(16) NOT NULL COMMENT '订单号',
  `WAYBILL_ID` varchar(32) NOT NULL COMMENT '运单号',
  `G_NO` int(5) NOT NULL COMMENT '序号',
  `CODE_TS` varchar(10) NOT NULL COMMENT '商品编码',
  `G_NAME` varchar(64) NOT NULL COMMENT '商品名称',
  `G_MODEL` varchar(255) DEFAULT NULL COMMENT '规格型号',
  `G_DESC` varchar(64) NOT NULL COMMENT '商品描述',
  `G_NUM` decimal(16,2) NOT NULL COMMENT '数量',
  `G_UNIT` varchar(3) NOT NULL COMMENT '计量单位',
  `PRICE` decimal(16,2) NOT NULL COMMENT '单价',
  `TOTAL_PRICE` decimal(16,2) NOT NULL COMMENT '总价',
  `CURR_CODE` varchar(3) NOT NULL COMMENT '币制',
  `FREIGHT` decimal(16,2) NOT NULL COMMENT '运保费',
  `F_CURR_CODE` varchar(3) NOT NULL COMMENT '运费币制',
  `EB_PLAT_ID` varchar(10) NOT NULL COMMENT '电商平台代码',
  `QTY_1` decimal(16,2) DEFAULT NULL COMMENT '法定数量',
  `UNIT_1` varchar(2) DEFAULT NULL COMMENT '法定单位',
  `TRADE_MARK` varchar(64) DEFAULT NULL COMMENT '品牌',
  `ORIGIN_COUNTRY` varchar(3) NOT NULL COMMENT '目的国/原产国',
  `USE_TO` varchar(2) DEFAULT NULL COMMENT '用途',
  `DUTY_MODE` varchar(2) DEFAULT NULL COMMENT '征免方式',
  `TAX_PAYMENT` decimal(16,2) DEFAULT NULL COMMENT '税款',
  `TAX_RATE` decimal(16,2) DEFAULT NULL COMMENT '税率',
  `NOTE` varchar(512) DEFAULT NULL COMMENT '备注',
  `COL11` varchar(10) DEFAULT NULL COMMENT '船名',
  `COL12` varchar(10) DEFAULT NULL COMMENT '航次',
  `COL13` varchar(10) DEFAULT NULL COMMENT '提单号',
  `COL14` varchar(10) DEFAULT NULL COMMENT '集装箱号',
  `COL15` varchar(10) DEFAULT NULL COMMENT '箱型',
  `COL16` varchar(10) DEFAULT NULL COMMENT '集装袋号',
  `COL17` varchar(10) DEFAULT NULL COMMENT '进出口日期',
  `st` varchar(10) DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (` COMPANY_ID`,`ORDER_ID`,`WAYBILL_ID`),
  CONSTRAINT `good_info_ibfk_1` FOREIGN KEY (` COMPANY_ID`) REFERENCES `company_info` (` COMPANY_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='货物信息';

-- ----------------------------
-- Records of good_info
-- ----------------------------
INSERT INTO `good_info` VALUES ('com1', '201512100553', 'WR52010632', '1', '06010000\r\n', '包\r\n', '1', '其他物品\r\n', '1.00', '1', '1.00', '0.00', '502', '1.00', '502', 'taobao', '1.00', '1', '1', '133', '1', '1', '1.00', '1.00', '1', '1', '1', '1', '1', '1', '1', '1', '1');
INSERT INTO `good_info` VALUES ('com2', '201512100554', '690410172766', '2', '06010000\r\n', '包\r\n', '1', '其他物品\r\n', '1.00', '1', '1.00', '0.00', '502', '1.00', '502', 'taobao', '1.00', '1', '1', '133', '1', '1', '1.00', '1.00', '1', '1', '1', '1', '1', '1', '1', '1', '1');
INSERT INTO `good_info` VALUES ('com3', '201512100555', '690410172770', '3', '06010000\r\n', '包\r\n', '1', '其他物品\r\n', '1.00', '1', '1.00', '0.00', '502', '1.00', '502', 'taobao', '1.00', '1', '1', '133', '1', '1', '1.00', '1.00', '1', '1', '1', '1', '1', '1', '1', '1', '1');
INSERT INTO `good_info` VALUES ('com4', '201512100556', 'ADC3697852', '4', '06010000\r\n', '包\r\n', '1', '其他物品\r\n', '1.00', '1', '1.00', '0.00', '502', '1.00', '502', 'taobao', '1.00', '1', '1', '133', '1', '1', '1.00', '1.00', '1', '1', '1', '1', '1', '1', '1', '1', '1');
INSERT INTO `good_info` VALUES ('com5', '201512100557', '690439537114', '5', '06010000\r\n', '包\r\n', '1', '其他物品\r\n', '1.00', '1', '1.00', '0.00', '502', '1.00', '502', 'taobao', '1.00', '1', '1', '133', '1', '1', '1.00', '1.00', '1', '1', '1', '1', '1', '1', '1', '1', '1');

-- ----------------------------
-- Table structure for inchrist_web_btype
-- ----------------------------
DROP TABLE IF EXISTS `inchrist_web_btype`;
CREATE TABLE `inchrist_web_btype` (
  `B_TYPE_ID` char(1) NOT NULL COMMENT '主内应聘网站ID',
  `B_TYPE_NAME` varchar(20) DEFAULT NULL COMMENT '网站父类型名称',
  `WEBSITE_NOTE` varchar(40) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`B_TYPE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='主内应聘网站信息表';

-- ----------------------------
-- Records of inchrist_web_btype
-- ----------------------------
INSERT INTO `inchrist_web_btype` VALUES ('A', '主内网站大全', null);
INSERT INTO `inchrist_web_btype` VALUES ('B', '第三方主内交流平台', null);

-- ----------------------------
-- Table structure for inchrist_web_info
-- ----------------------------
DROP TABLE IF EXISTS `inchrist_web_info`;
CREATE TABLE `inchrist_web_info` (
  `WEBSITE_ID` int(8) NOT NULL AUTO_INCREMENT COMMENT '主内应聘网站ID',
  `WEB_URL` varchar(50) NOT NULL COMMENT '主内应聘网站链接地址',
  `WEBSITE_NAME` varchar(50) NOT NULL COMMENT '备注',
  `NOTES` varchar(50) DEFAULT NULL COMMENT '备注',
  `TYPE` varchar(20) DEFAULT NULL COMMENT '网站类别',
  `US_ID` varchar(50) DEFAULT NULL COMMENT '分享人ID',
  `DATE` timestamp NULL DEFAULT NULL COMMENT '分享日期',
  `IS_OUTTIME` varchar(2) DEFAULT 'N' COMMENT '是否已过期',
  PRIMARY KEY (`WEBSITE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1234576 DEFAULT CHARSET=utf8 COMMENT='主内应聘网站信息表';

-- ----------------------------
-- Records of inchrist_web_info
-- ----------------------------
INSERT INTO `inchrist_web_info` VALUES ('1', 'http://www.yesujob.com/', '迦南招聘求职网', '主内招聘', 'A03', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('2', 'http://www.t1225.com/bus/index.html', '同在网', '主内招聘', 'A03', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('3', 'http://www.jdtzp.com/', '彼得招聘网', '主内招聘', 'A03', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('4', 'http://www.rck.cn/', '基督徒招聘求职网', '主内招聘', 'A03', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234550', 'http://www.yage.com/', '雅歌网', '婚恋交友', 'A05', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234551', 'http://www.mengai.org/', '蒙爱网', '婚恋交友', 'A05', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234552', 'http://www.zhudeai.com/', '主的爱', '婚恋交友', 'A05', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234553', 'http://www.love2in1.com/', '合二为一的爱', '婚恋交友', 'A05', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234554', 'http://www.ifreewind.net/', '耶稣自由风', '婚恋交友', 'A05', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234555', 'http://www.cnjidutu.com/', '基督徒交友网', '婚恋交友', 'A05', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234556', 'http://www.jidumusic.com/', '基督教音乐网', '音乐类', 'A02', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234557', 'http://www.musicsky.org/', '音乐天空', '音乐类', 'A02', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234558', 'http://www.ysong.org/', '雅歌', '音乐类', 'A02', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234559', 'http://www.zanmeishi.com/', '赞美诗网', '音乐类', 'A02', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234560', 'http://www.76xp.cn/', '主内歌曲网', '音乐类', 'A02', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234561', 'http://www.jdjgq.com/', '基督教歌曲网', '音乐类', 'A02', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234562', 'http://gepu.kyhs.me/', '歌谱网', '音乐类', 'A02', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234563', 'http://bbs.shenshi777.com/', '主内编曲论坛', '音乐类', 'A02', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234564', 'http://www.fzza.net/', '方舟之爱', '购物类', 'A04', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234565', 'http://www.zhuneizhe.com/', '主内折', '购物类', 'A04', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234566', 'http://www.taobao123.me/', '基督教商品导购网', '购物类', 'A04', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234567', 'www.baojiayin.com/', '报佳音', '购物类', 'A04', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234568', 'http://www.yesuhome.com/', '以马内利租房网', '其他', 'A07', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234569', 'http://www.1amen.com/', '阿门网', '主内综合网站', 'A06', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234570', 'http://www.yesu123.com/', '耶稣123', '主内综合网站', 'A06', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234571', 'http://www.god123.cn/', '上帝123', '主内综合网站', 'A06', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234572', 'http://www.fuyin.tv/', '福音影视网', '福音视频类', 'A01', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234573', 'http://www.fuyinwang.com/', '福音网', '福音视频类', 'A01', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234574', 'http://www.jidujiao.com/', '基督教中文网', '福音视频类', 'A01', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info` VALUES ('1234575', 'http://www.jnmd.org/', '基督福音网', '福音视频类', 'A01', '18369162150', '2016-12-12 12:12:12', 'N');

-- ----------------------------
-- Table structure for inchrist_web_info_copy
-- ----------------------------
DROP TABLE IF EXISTS `inchrist_web_info_copy`;
CREATE TABLE `inchrist_web_info_copy` (
  `WEBSITE_ID` int(8) NOT NULL AUTO_INCREMENT COMMENT '主内应聘网站ID',
  `WEB_URL` varchar(50) NOT NULL COMMENT '主内应聘网站链接地址',
  `WEBSITE_NAME` varchar(50) NOT NULL COMMENT '备注',
  `NOTES` varchar(50) DEFAULT NULL COMMENT '备注',
  `TYPE` varchar(20) DEFAULT NULL COMMENT '网站类别',
  `US_ID` varchar(50) DEFAULT NULL COMMENT '分享人ID',
  `DATE` timestamp NULL DEFAULT NULL COMMENT '分享日期',
  `IS_OUTTIME` varchar(2) DEFAULT 'N' COMMENT '是否已过期',
  PRIMARY KEY (`WEBSITE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1234576 DEFAULT CHARSET=utf8 COMMENT='主内应聘网站信息表';

-- ----------------------------
-- Records of inchrist_web_info_copy
-- ----------------------------
INSERT INTO `inchrist_web_info_copy` VALUES ('1', 'http://www.yesujob.com/', '迦南招聘求职网', '主内招聘', 'A03', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('2', 'http://www.t1225.com/bus/index.html', '同在网', '主内招聘', 'A03', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('3', 'http://www.jdtzp.com/', '彼得招聘网', '主内招聘', 'A03', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('4', 'http://www.rck.cn/', '基督徒招聘求职网', '主内招聘', 'A03', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234550', 'http://www.yage.com/', '雅歌网', '婚恋交友', 'A05', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234551', 'http://www.mengai.org/', '蒙爱网', '婚恋交友', 'A05', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234552', 'http://www.zhudeai.com/', '主的爱', '婚恋交友', 'A05', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234553', 'http://www.love2in1.com/', '合二为一的爱', '婚恋交友', 'A05', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234554', 'http://www.ifreewind.net/', '耶稣自由风', '婚恋交友', 'A05', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234555', 'http://www.cnjidutu.com/', '基督徒交友网', '婚恋交友', 'A05', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234556', 'http://www.jidumusic.com/', '基督教音乐网', '音乐类', 'A02', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234557', 'http://www.musicsky.org/', '音乐天空', '音乐类', 'A02', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234558', 'http://www.ysong.org/', '雅歌', '音乐类', 'A02', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234559', 'http://www.zanmeishi.com/', '赞美诗网', '音乐类', 'A02', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234560', 'http://www.76xp.cn/', '主内歌曲网', '音乐类', 'A02', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234561', 'http://www.jdjgq.com/', '基督教歌曲网', '音乐类', 'A02', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234562', 'http://gepu.kyhs.me/', '歌谱网', '音乐类', 'A02', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234563', 'http://bbs.shenshi777.com/', '主内编曲论坛', '音乐类', 'A02', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234564', 'http://www.fzza.net/', '方舟之爱', '购物类', 'A04', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234565', 'http://www.zhuneizhe.com/', '主内折', '购物类', 'A04', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234566', 'http://www.taobao123.me/', '基督教商品导购网', '购物类', 'A04', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234567', 'www.baojiayin.com/', '报佳音', '购物类', 'A04', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234568', 'http://www.yesuhome.com/', '以马内利租房网', '其他', 'A07', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234569', 'http://www.1amen.com/', '阿门网', '主内综合网站', 'A06', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234570', 'http://www.yesu123.com/', '耶稣123', '主内综合网站', 'A06', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234571', 'http://www.god123.cn/', '上帝123', '主内综合网站', 'A06', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234572', 'http://www.fuyin.tv/', '福音影视网', '福音视频类', 'A01', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234573', 'http://www.fuyinwang.com/', '福音网', '福音视频类', 'A01', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234574', 'http://www.jidujiao.com/', '基督教中文网', '福音视频类', 'A01', '18369162150', '2016-12-12 12:12:12', 'N');
INSERT INTO `inchrist_web_info_copy` VALUES ('1234575', 'http://www.jnmd.org/', '基督福音网', '福音视频类', 'A01', '18369162150', '2016-12-12 12:12:12', 'N');

-- ----------------------------
-- Table structure for inchrist_web_stype
-- ----------------------------
DROP TABLE IF EXISTS `inchrist_web_stype`;
CREATE TABLE `inchrist_web_stype` (
  `S_TYPE_ID` char(3) NOT NULL COMMENT '主内应聘网站链接地址',
  `B_TYPE_ID` char(1) NOT NULL COMMENT '网站父类型ID',
  `S_TYPE_NAME` varchar(20) DEFAULT NULL COMMENT '网站子类型名称',
  `WEBSITE_NO` int(8) DEFAULT '0' COMMENT '备注',
  PRIMARY KEY (`S_TYPE_ID`),
  KEY `FK_inchrist_web_Btype_TO_inchrist_web_Stype` (`B_TYPE_ID`),
  CONSTRAINT `FK_inchrist_web_Btype_TO_inchrist_web_Stype` FOREIGN KEY (`B_TYPE_ID`) REFERENCES `inchrist_web_btype` (`B_TYPE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='主内应聘网站信息表';

-- ----------------------------
-- Records of inchrist_web_stype
-- ----------------------------
INSERT INTO `inchrist_web_stype` VALUES ('A01', 'A', '福音视频', '4');
INSERT INTO `inchrist_web_stype` VALUES ('A02', 'A', '音乐歌谱', '8');
INSERT INTO `inchrist_web_stype` VALUES ('A03', 'A', '主内工作', '4');
INSERT INTO `inchrist_web_stype` VALUES ('A04', 'A', '主内购物', '4');
INSERT INTO `inchrist_web_stype` VALUES ('A05', 'A', '主内婚恋交友', '6');
INSERT INTO `inchrist_web_stype` VALUES ('A06', 'A', '主内网站之家', '3');
INSERT INTO `inchrist_web_stype` VALUES ('A07', 'A', '主内其他类别网站', '1');
INSERT INTO `inchrist_web_stype` VALUES ('B01', 'B', '百度贴吧', '0');
INSERT INTO `inchrist_web_stype` VALUES ('B02', 'B', '腾讯兴趣部落', '0');
INSERT INTO `inchrist_web_stype` VALUES ('B03', 'B', '新浪微博', '0');

-- ----------------------------
-- Table structure for log
-- ----------------------------
DROP TABLE IF EXISTS `log`;
CREATE TABLE `log` (
  `LOG_ID` varchar(36) NOT NULL COMMENT '日志编号',
  `LOG_TITLE` varchar(100) NOT NULL,
  `US_ID` varchar(50) NOT NULL COMMENT '用户id',
  `LOG_CONTENT` varchar(500) NOT NULL COMMENT '日志内容',
  `SEND_DATE` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '发表日期',
  `IS_DELETE` varchar(2) DEFAULT NULL COMMENT '是否删除',
  `IS_FORWARD` varchar(2) DEFAULT NULL COMMENT '是否为转载',
  `FORWARDING_VALIABLE` varchar(2) DEFAULT NULL COMMENT '是否可转载',
  `FORWARDED_NO` int(8) DEFAULT NULL COMMENT '被转载数目',
  `LOG_TYPE` varchar(5) DEFAULT '0',
  `LOG_STATE` varchar(2) DEFAULT NULL COMMENT '访问权限状态',
  `LOG_UPDATE_DATE` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '修改日期',
  PRIMARY KEY (`LOG_ID`),
  KEY `FK_user_info_TO_log` (`US_ID`),
  CONSTRAINT `FK_user_info_TO_log` FOREIGN KEY (`US_ID`) REFERENCES `user_info` (`US_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='日志(奇异恩典)';

-- ----------------------------
-- Records of log
-- ----------------------------
INSERT INTO `log` VALUES ('089ae0f7-feda-11e5-9b98-c45444f5ce98', ' 哈利路亚001', '18369162150', '<p>感谢赞美主！<br/></p>', '2016-05-19 19:40:41', 'N', null, null, null, '0', null, '2016-05-04 19:40:37');
INSERT INTO `log` VALUES ('187bc87a-feda-11e5-9b98-c45444f5ce98', '的冯绍峰', '18369162150', '<p>防守打法<br/></p>', '2016-05-19 19:40:44', 'N', null, null, null, '0', null, '2016-05-04 19:40:42');
INSERT INTO `log` VALUES ('45d9ca4f-fcd6-11e5-bcc9-c45444f5ce98', '12222', '18369162150', '<p>耶和华是我的牧者，我必不至缺乏！！<img src=\"http://img.baidu.com/hi/jx2/j_0028.gif\"/></p>', '2016-05-08 21:47:08', 'N', null, null, null, '0', null, '2016-05-08 21:47:08');
INSERT INTO `log` VALUES ('529fd196-fe21-11e5-96d5-c45444f5ce98', '上课了打飞机快乐', '18369162150', '<p><br/>是考虑到就分开了四级联考的房间圣诞快乐放假<br/></p>', '2016-05-19 19:40:48', 'N', null, null, null, '1', null, '2016-05-04 19:40:45');
INSERT INTO `log` VALUES ('88a731ca-fe21-11e5-96d5-c45444f5ce98', ' 灵修日志', '18369162150', '<p><br/>为什么布局会错位啊 。。。。<br/></p>', '2016-05-19 19:40:51', 'N', null, null, null, '1', null, '2016-05-03 19:40:49');
INSERT INTO `log` VALUES ('a1b28d65-fe20-11e5-96d5-c45444f5ce98', '奇异恩典010', '18369162150', '<p>感谢赞美主的恩典。保守孩子现在的生活，孩子满满的都是感恩。一切感恩，赞美，荣耀，都归给我的神，我的主！如此感恩祷告奉我主耶稣基督宝贵的 圣名！<img src=\"http://img.baidu.com/hi/jx2/j_0059.gif\"/></p>', '2016-05-19 19:40:55', 'N', null, null, null, '1', null, '2016-05-17 19:40:52');

-- ----------------------------
-- Table structure for log_forwarding
-- ----------------------------
DROP TABLE IF EXISTS `log_forwarding`;
CREATE TABLE `log_forwarding` (
  `LOG_ID` varchar(36) NOT NULL COMMENT '日志编号',
  `FORWARD_DATE` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '转载日期',
  `SALE_DATE` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '发表日期',
  `IS_DELETE` varchar(2) DEFAULT NULL COMMENT '日志访问权限',
  PRIMARY KEY (`LOG_ID`),
  CONSTRAINT `FK_LOG_TO_LOG_FORWARDING` FOREIGN KEY (`LOG_ID`) REFERENCES `log` (`LOG_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='转载日志表(奇异恩典)';

-- ----------------------------
-- Records of log_forwarding
-- ----------------------------

-- ----------------------------
-- Table structure for manager_info
-- ----------------------------
DROP TABLE IF EXISTS `manager_info`;
CREATE TABLE `manager_info` (
  `US_ID` varchar(50) NOT NULL DEFAULT '' COMMENT '账号',
  `US_PS` varchar(100) NOT NULL,
  `US_NAME` varchar(50) NOT NULL DEFAULT '' COMMENT '姓名',
  `SEX` varchar(1) DEFAULT '0' COMMENT '性别',
  `TEL` varchar(11) DEFAULT '' COMMENT '电话',
  `EMAIL` varchar(100) DEFAULT '' COMMENT '邮箱',
  `AUTHENTICATION` varchar(25) DEFAULT '' COMMENT '权限',
  PRIMARY KEY (`US_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of manager_info
-- ----------------------------
INSERT INTO `manager_info` VALUES ('AApel', 'e10adc3949ba59abbe56e057f20f883e', '哈利路亚赞美主！', '1', '15632145632', '15464446@qq.com', 'ADMIN');
INSERT INTO `manager_info` VALUES ('admin', 'cdf4a007e2b02a0c49fc9b7ccfbb8a10c644f635e1765dcf2a7ab794ddc7edac', '超级管理员', '0', '18369162150', '2291@qq.com', 'ADMIN');
INSERT INTO `manager_info` VALUES ('dabao', 'e10adc3949ba59abbe56e057f20f883e', '哈利路亚', '0', '18369162150', '22910@qq.com', 'ADMIN');
INSERT INTO `manager_info` VALUES ('dabao1', '1724b2a8c222a88db9385f54bbafd53d', '赵俊宝', '男', '18369162150', '22910@qq.com', 'ADMIN');
INSERT INTO `manager_info` VALUES ('haha', 'cdf4a007e2b02a0c49fc9b7ccfbb8a10c644f635e1765dcf2a7ab794ddc7edac', 'who', '0', '18369162150', '229@qq.com', 'USERMANAGER');
INSERT INTO `manager_info` VALUES ('hejing', 'cdf4a007e2b02a0c49fc9b7ccfbb8a10c644f635e1765dcf2a7ab794ddc7edac', 'hejing', '1', '18369162150', '324@qq.com', 'USERMANAGER');
INSERT INTO `manager_info` VALUES ('helloKitty', 'cdf4a007e2b02a0c49fc9b7ccfbb8a10c644f635e1765dcf2a7ab794ddc7edac', '德玛西亚', '1', '18369162150', '2291006094@qq.com', 'BLOGMANAGER');
INSERT INTO `manager_info` VALUES ('hjhkjhk', 'cdf4a007e2b02a0c49fc9b7ccfbb8a10c644f635e1765dcf2a7ab794ddc7edac', 'haha', '0', '18369162150', '22910@qq.com', 'BLOGMANAGER');
INSERT INTO `manager_info` VALUES ('jianghaipeng', 'cdf4a007e2b02a0c49fc9b7ccfbb8a10c644f635e1765dcf2a7ab794ddc7edac', 'haipeng', '0', '13421', '2324182646@qq.com', 'BLOGMANAGER');
INSERT INTO `manager_info` VALUES ('lvhejing', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', '吕何静', '1', '13613136666', '2345@qq.com', 'USERMANAGER');
INSERT INTO `manager_info` VALUES ('qqqq', 'cdf4a007e2b02a0c49fc9b7ccfbb8a10c644f635e1765dcf2a7ab794ddc7edac', 'zz', '1', '18369161250', '121211@qq.com', 'ADMIN');
INSERT INTO `manager_info` VALUES ('uiuo', 'cdf4a007e2b02a0c49fc9b7ccfbb8a10c644f635e1765dcf2a7ab794ddc7edac', 'hahah', '1', '4545', '', 'USERMANAGER');
INSERT INTO `manager_info` VALUES ('werw', 'cdf4a007e2b02a0c49fc9b7ccfbb8a10c644f635e1765dcf2a7ab794ddc7edac', 'zhao', '0', '', '12121@qq.com', 'USERMANAGER');
INSERT INTO `manager_info` VALUES ('zhangsong', 'cdf4a007e2b02a0c49fc9b7ccfbb8a10c644f635e1765dcf2a7ab794ddc7edac', '刘亮', '1', '18363122221', '456456@qq.com', 'ADMIN');
INSERT INTO `manager_info` VALUES ('zhangsong1', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', '张松', '1', '1234657910', 'qwe@126.com', 'USERMANAGER');
INSERT INTO `manager_info` VALUES ('zhangsong2', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', '张松', '1', '1234657910', 'qwe@126.com', 'BLOGMANAGER');
INSERT INTO `manager_info` VALUES ('zhangsong3', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', '张松', '1', '1234657910', 'qwe@126.com', 'USERMANAGER');
INSERT INTO `manager_info` VALUES ('zhangsong5', 'cdf4a007e2b02a0c49fc9b7ccfbb8a10c644f635e1765dcf2a7ab794ddc7edac', '张松', '1', '', '', 'USERMANAGER');
INSERT INTO `manager_info` VALUES ('zhaojunbao', 'cdf4a007e2b02a0c49fc9b7ccfbb8a10c644f635e1765dcf2a7ab794ddc7edac', '宝宝', '0', '18369162150', '2291006094@qq.com', 'ADMIN');

-- ----------------------------
-- Table structure for market_share
-- ----------------------------
DROP TABLE IF EXISTS `market_share`;
CREATE TABLE `market_share` (
  `MARKET_ID` varchar(50) NOT NULL COMMENT '商店ID',
  `MARKET_NAME` varchar(40) NOT NULL COMMENT '商店名称',
  `MARKET_ADDRESS` varchar(50) NOT NULL COMMENT '商店地址',
  `MARKET_DESC` varchar(50) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`MARKET_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='主内购物商店信息表';

-- ----------------------------
-- Records of market_share
-- ----------------------------

-- ----------------------------
-- Table structure for music_share
-- ----------------------------
DROP TABLE IF EXISTS `music_share`;
CREATE TABLE `music_share` (
  `US_ID` varchar(50) NOT NULL COMMENT '分享人ID',
  `MUSIC_ID` varchar(50) NOT NULL COMMENT '音乐ID',
  `MUSIC_NAME` varchar(30) NOT NULL COMMENT '音乐名称',
  `MUSIC_PERSON` varchar(30) DEFAULT NULL COMMENT '演唱者',
  PRIMARY KEY (`MUSIC_ID`),
  KEY `FK_user_info_TO_music_share` (`US_ID`),
  CONSTRAINT `FK_user_info_TO_music_share` FOREIGN KEY (`US_ID`) REFERENCES `user_info` (`US_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='主内音乐分享表';

-- ----------------------------
-- Records of music_share
-- ----------------------------

-- ----------------------------
-- Table structure for my_friends_info
-- ----------------------------
DROP TABLE IF EXISTS `my_friends_info`;
CREATE TABLE `my_friends_info` (
  `US_FRIEND_ID` varchar(50) NOT NULL COMMENT '好友信息表记录id',
  `FRIEND_ID` varchar(50) NOT NULL COMMENT '好友id',
  `US_ID` varchar(50) NOT NULL COMMENT '用户id',
  `DATE` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '建立好友关系日期',
  `IS_SPECIAL` varchar(2) DEFAULT 'N' COMMENT '是否为特别关注',
  PRIMARY KEY (`US_FRIEND_ID`),
  KEY `FK_user_info_TO_my_friends_info` (`US_ID`),
  CONSTRAINT `FK_user_info_TO_my_friends_info` FOREIGN KEY (`US_ID`) REFERENCES `user_info` (`US_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='我的好友表';

-- ----------------------------
-- Records of my_friends_info
-- ----------------------------
INSERT INTO `my_friends_info` VALUES ('456456456', '1002', '1003', '2016-03-08 11:09:50', 'N');
INSERT INTO `my_friends_info` VALUES ('4c996924-e5b8-11e5-b179-74d02b7e28a0', '1003', '18369162150', '2016-03-09 13:32:20', 'N');
INSERT INTO `my_friends_info` VALUES ('564489789', '18369162150', '1003', '2016-03-08 11:09:37', 'N');
INSERT INTO `my_friends_info` VALUES ('8af6ac29-e5ba-11e5-b179-74d02b7e28a0', '1003', '1003', '2016-03-09 13:48:24', 'N');
INSERT INTO `my_friends_info` VALUES ('8e6beb83-e4ee-11e5-b179-74d02b7e28a0', '1006', '18369162150', '2016-03-08 13:28:14', 'N');
INSERT INTO `my_friends_info` VALUES ('974842d4-e4ee-11e5-b179-74d02b7e28a0', '18369162153', '18369162150', '2016-03-08 13:28:29', 'N');
INSERT INTO `my_friends_info` VALUES ('d5a8dc72-feee-11e5-9b98-c45444f5ce98', '18369162150', '111111', '2016-04-10 15:35:44', 'N');

-- ----------------------------
-- Table structure for option_blog_info
-- ----------------------------
DROP TABLE IF EXISTS `option_blog_info`;
CREATE TABLE `option_blog_info` (
  `US_ID` varchar(50) DEFAULT NULL COMMENT '操作人id',
  `BLOG_ID` varchar(50) DEFAULT NULL COMMENT '帖子id',
  `COLLECT_DATE` timestamp NULL DEFAULT NULL COMMENT '收藏时间',
  `UPVOTE_DATE` timestamp NULL DEFAULT NULL COMMENT '点赞时间',
  `FORWARD_DATE` timestamp NULL DEFAULT NULL COMMENT '转发时间',
  `IS_COLLECTED` varchar(1) DEFAULT NULL COMMENT '是否收藏',
  `IS_FORWARD` varchar(1) DEFAULT NULL COMMENT '是否转发',
  `BLOG_OPT_ID` varchar(50) NOT NULL,
  `IS_UPVOTE` varchar(1) DEFAULT NULL COMMENT '是否已赞',
  PRIMARY KEY (`BLOG_OPT_ID`),
  KEY `FK_user_info_TO_option_blog_info` (`US_ID`),
  KEY `FK_blog_TO_option_blog_info` (`BLOG_ID`),
  CONSTRAINT `FK_blog_TO_option_blog_info` FOREIGN KEY (`BLOG_ID`) REFERENCES `blog` (`BLOG_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_user_info_TO_option_blog_info` FOREIGN KEY (`US_ID`) REFERENCES `user_info` (`US_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='帖子关系映射表';

-- ----------------------------
-- Records of option_blog_info
-- ----------------------------
INSERT INTO `option_blog_info` VALUES ('18369162150', 'cb27eb6fe5a3453e9cf085e2c0c26ca3', '2016-04-10 11:48:33', null, null, 'N', null, '19089d49-fecf-11e5-9b98-c45444f5ce98', 'Y');
INSERT INTO `option_blog_info` VALUES ('18369162150', '3c2a0a722e454be1878ceb9d2af7c54e', null, '2016-04-07 23:21:17', null, 'N', null, '5ff8dfcc-fcd4-11e5-bcc9-c45444f5ce98', 'Y');
INSERT INTO `option_blog_info` VALUES ('18369162150', '9630db7813b0486286e6d068e77b9c66', null, '2016-05-18 07:16:26', null, 'Y', null, '612a64b2-1c85-11e6-8170-c45444f5ce98', 'Y');
INSERT INTO `option_blog_info` VALUES ('1003', '7d656aeac74b46f3aadd96ec90902391', null, '2016-04-10 11:53:01', null, 'Y', null, 'b8bcff79-fecf-11e5-9b98-c45444f5ce98', 'Y');
INSERT INTO `option_blog_info` VALUES ('1003', '3c2a0a722e454be1878ceb9d2af7c54e', null, '2016-04-10 12:43:23', null, null, null, 'c1e7cf1e-fed6-11e5-9b98-c45444f5ce98', 'Y');

-- ----------------------------
-- Table structure for pray_wall_info
-- ----------------------------
DROP TABLE IF EXISTS `pray_wall_info`;
CREATE TABLE `pray_wall_info` (
  `PRAY_ID` int(50) NOT NULL AUTO_INCREMENT COMMENT 'FELLOWSHIP_ID',
  `RECEIVER_NAME` varchar(50) NOT NULL COMMENT 'NAME',
  `SENDER_NAME` varchar(50) NOT NULL COMMENT '团契头像',
  `PRAY_CONTENT` varchar(200) DEFAULT NULL COMMENT 'BUILD_TIME',
  `PRAY_DATE` varchar(50) DEFAULT NULL COMMENT 'TYPE',
  `FS_ID` varchar(50) DEFAULT NULL COMMENT '团契id',
  PRIMARY KEY (`PRAY_ID`),
  KEY `FK_fellowship_info_TO_pray_wall_info` (`FS_ID`),
  CONSTRAINT `FK_fellowship_info_TO_pray_wall_info` FOREIGN KEY (`FS_ID`) REFERENCES `fellowship_info` (`FS_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COMMENT='青年团契信息表';

-- ----------------------------
-- Records of pray_wall_info
-- ----------------------------
INSERT INTO `pray_wall_info` VALUES ('1', 'gdfg ', 'dfgjdlfkjg', 'kjgkldfjglk', '1212313213', 'fs1993');
INSERT INTO `pray_wall_info` VALUES ('2', '地方客观看待房管局', '进口大国', ' 大开发机构开立的 ', '13213', 'fs1993');
INSERT INTO `pray_wall_info` VALUES ('3', '主耶稣', '赵俊宝', '哈利路亚！感谢赞美主！', '2016/3/3 下午2:17:05', 'fs1003');
INSERT INTO `pray_wall_info` VALUES ('4', '主耶稣', '赵俊宝', '求主的保守，今天晚上吃饭能不喝酒就不喝酒，能少喝就少喝，让我们这些小伙伴儿吃的开心。玩得开心！孩子如此恭敬交托祷告奉我主耶稣基督宝贵的圣名！', '2016/3/3 下午3:03:18', 'fs1003');
INSERT INTO `pray_wall_info` VALUES ('5', '主耶稣', '赵俊宝', '哈利路亚！感谢赞美主！', '2016/3/3 下午2:17:05', 'fs1003');
INSERT INTO `pray_wall_info` VALUES ('7', '主耶稣', '赵俊宝', '求主的保守，今天晚上吃饭能不喝酒就不喝酒，能少喝就少喝，让我们这些小伙伴儿吃的开心。玩得开心！孩子如此恭敬交托祷告奉我主耶稣基督宝贵的圣名！', '2016/3/3 下午3:03:18', 'fs1003');
INSERT INTO `pray_wall_info` VALUES ('8', '主耶稣', '赵俊宝', '哈利路亚！感谢赞美主！', '2016/3/3 下午2:17:05', 'fs1003');
INSERT INTO `pray_wall_info` VALUES ('9', '主耶稣', '赵俊宝', '哈利路亚！感谢赞美主！', '2016/3/3 下午2:17:05', 'fs1003');
INSERT INTO `pray_wall_info` VALUES ('10', '主耶稣', '赵俊宝', '求主的保守，今天晚上吃饭能不喝酒就不喝酒，能少喝就少喝，让我们这些小伙伴儿吃的开心。玩得开心！孩子如此恭敬交托祷告奉我主耶稣基督宝贵的圣名！', '2016/3/3 下午3:03:18', 'fs1003');
INSERT INTO `pray_wall_info` VALUES ('11', '主耶稣', '赵俊宝', '哈利路亚！感谢赞美主！', '2016/3/3 下午2:17:05', 'fs1003');
INSERT INTO `pray_wall_info` VALUES ('12', '主耶稣', '赵俊宝', '求主的保守，今天晚上吃饭能不喝酒就不喝酒，能少喝就少喝，让我们这些小伙伴儿吃的开心。玩得开心！孩子如此恭敬交托祷告奉我主耶稣基督宝贵的圣名！', '2016/3/3 下午3:03:18', 'fs1003');
INSERT INTO `pray_wall_info` VALUES ('13', '主耶稣', '赵俊宝', '哈利路亚！感谢赞美主！', '2016/3/3 下午2:17:05', 'fs1003');
INSERT INTO `pray_wall_info` VALUES ('14', '主耶稣', '赵俊宝', '求主的保守，今天晚上吃饭能不喝酒就不喝酒，能少喝就少喝，让我们这些小伙伴儿吃的开心。玩得开心！孩子如此恭敬交托祷告奉我主耶稣基督宝贵的圣名！', '2016/3/3 下午3:03:18', 'fs1003');
INSERT INTO `pray_wall_info` VALUES ('15', '主耶稣', '赵俊宝', '哈利路亚！感谢赞美主！', '2016/3/3 下午2:17:05', 'fs1003');
INSERT INTO `pray_wall_info` VALUES ('16', '主耶稣', '赵俊宝', '求主的保守，今天晚上吃饭能不喝酒就不喝酒，能少喝就少喝，让我们这些小伙伴儿吃的开心。玩得开心！孩子如此恭敬交托祷告奉我主耶稣基督宝贵的圣名！', '2016/3/3 下午3:03:18', 'fs1003');
INSERT INTO `pray_wall_info` VALUES ('17', '主耶稣', '赵俊宝', '孩子感谢赞美您一天的保守。孩子现在所拥有的一切，都是您给的，孩子满满的都是感恩。如此感恩祷告奉我主耶稣基督宝贵的生命。', '2016/4/8 下午9:55:24', 'fs1003');
INSERT INTO `pray_wall_info` VALUES ('21', 'jesus', 'dabao', '爱我的主耶稣基督，孩子感谢赞美你，感谢你一直以来的看顾与保守，孩子对您赐给孩子的满满的都是感恩！求主你能继续与我同在，让我的所思所行都蒙你喜悦。蒙我的神喜悦。', '2016/4/8 下午10:28:39', 'fs1993');
INSERT INTO `pray_wall_info` VALUES ('22', ' 主耶稣', '赵俊宝', '主耶稣，我的主，孩子将以后的人生道路都交托在你的圣手当中，求你来掌权！求你来作孩子随时的的帮助，你是葡萄树，我是枝子，离了你，我什么都不能做！如此交托祷告奉我主耶稣基督宝贵的 圣名。', '2016/4/8 下午10:54:29', 'fs1993');

-- ----------------------------
-- Table structure for public_mark_info
-- ----------------------------
DROP TABLE IF EXISTS `public_mark_info`;
CREATE TABLE `public_mark_info` (
  `MARK_ID` int(8) NOT NULL AUTO_INCREMENT COMMENT '主内应聘网站ID',
  `PUBLIC_MARK` varchar(50) NOT NULL COMMENT '主内应聘网站链接地址',
  `PUBLIC_MARK_NAME` varchar(50) NOT NULL COMMENT '备注',
  `NOTES` varchar(50) DEFAULT NULL COMMENT '备注',
  `TYPE` varchar(2) DEFAULT NULL COMMENT '第三方资源号类别',
  `US_ID` varchar(50) DEFAULT NULL COMMENT '分享人ID',
  `DATE` timestamp NULL DEFAULT NULL COMMENT '分享日期',
  `IS_OUTTIME` varchar(2) DEFAULT 'N' COMMENT '是否已过期',
  PRIMARY KEY (`MARK_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1234564565 DEFAULT CHARSET=utf8 COMMENT='主内应聘网站信息表';

-- ----------------------------
-- Records of public_mark_info
-- ----------------------------
INSERT INTO `public_mark_info` VALUES ('1232132', '1231231231', '哈哈', '爱好丰盛的', '2', '1003', '2016-03-08 20:11:38', 'N');
INSERT INTO `public_mark_info` VALUES ('1234564564', '527989592', '天天背圣经①群', '天天背圣经', '3', '18369162150', '2016-03-08 20:10:24', 'N');

-- ----------------------------
-- Table structure for reply_info
-- ----------------------------
DROP TABLE IF EXISTS `reply_info`;
CREATE TABLE `reply_info` (
  `REPLY_ID` varchar(50) NOT NULL DEFAULT '' COMMENT '评论编号',
  `COMMENT_ID` varchar(200) NOT NULL COMMENT '评论id',
  `REPLY_US_ID` varchar(50) DEFAULT NULL COMMENT '回复人id',
  `REPLY_CONTENT` varchar(200) DEFAULT NULL COMMENT '回复内容',
  `REPLY_DATE` timestamp NULL DEFAULT NULL COMMENT '回复时间',
  `IS_DELETE` varchar(1) DEFAULT 'N' COMMENT '是否删除',
  `REPLY_REPLY_US_ID` varchar(20) DEFAULT '0',
  PRIMARY KEY (`REPLY_ID`),
  KEY `FK_comment_info_TO_reply_info` (`COMMENT_ID`),
  CONSTRAINT `FK_comment_info_TO_reply_info` FOREIGN KEY (`COMMENT_ID`) REFERENCES `comment_info` (`COMMENT_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='评论信息表';

-- ----------------------------
-- Records of reply_info
-- ----------------------------
INSERT INTO `reply_info` VALUES ('5d8d0888-fe57-11e5-96d5-c45444f5ce98', '63a110f6-fcd4-11e5-bcc9-c45444f5ce98', '18369162150', '圣诞节开发好看', '2016-04-09 21:31:28', 'N', '0');

-- ----------------------------
-- Table structure for request_reply
-- ----------------------------
DROP TABLE IF EXISTS `request_reply`;
CREATE TABLE `request_reply` (
  `REQUEST_REPLY_ID` varchar(50) NOT NULL COMMENT '问题回复记录id',
  `QUESITION_ID` varchar(50) NOT NULL COMMENT '团契成员关系id',
  `REPLY_US_ID` varchar(50) DEFAULT NULL COMMENT '回复人id',
  `REPLY_CONTENT` varchar(200) DEFAULT NULL COMMENT 'BUILD_TIME',
  `REPLY_REPLY_CONTENT` varchar(200) DEFAULT NULL COMMENT '解决方案的回复内容',
  `IS_OK` varchar(2) DEFAULT 'N' COMMENT '是否解决了我的问题',
  `REPLY_DATE` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`REQUEST_REPLY_ID`),
  KEY `FK_fellowship_request_TO_request_reply` (`QUESITION_ID`),
  CONSTRAINT `FK_fellowship_request_TO_request_reply` FOREIGN KEY (`QUESITION_ID`) REFERENCES `fellowship_request` (`QUESITION_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='青年团契信息表';

-- ----------------------------
-- Records of request_reply
-- ----------------------------
INSERT INTO `request_reply` VALUES ('0cb83982-e6cf-11e5-9738-c45444f5ce98', '1233454654', '18369162150', '<p>电饭锅考虑到附近个<br/></p>', '<p>黑恶hi，回复完了，抱歉哈。<img src=\"http://img.baidu.com/hi/jx2/j_0025.gif\"/></p>', 'Y', '2016-03-11 10:21:24');
INSERT INTO `request_reply` VALUES ('12345656465', '1233454654', '1003', '信者得爱', '', 'N', '2016-03-10 21:08:32');
INSERT INTO `request_reply` VALUES ('3a350c66-ea00-11e5-a732-c45444f5ce98', '356456465465', '18369162150', '<p>信者得爱！愿神祝福你！<img src=\"http://img.baidu.com/hi/jx2/j_0028.gif\"/></p>', null, 'N', '2016-03-15 00:17:20');
INSERT INTO `request_reply` VALUES ('3ed4b08d-e726-11e5-b0d0-74d02b7e28a0', '1233454654', '18369162150', '<p>三季度风流酷似立刻地方<img src=\"http://img.baidu.com/hi/jx2/j_0024.gif\"/></p>', '<p>哈哈，表情真逗！<img src=\"http://img.baidu.com/hi/jx2/j_0058.gif\"/></p>', 'Y', '2016-03-11 10:20:58');
INSERT INTO `request_reply` VALUES ('456213213', '1233454654', '1003', '哈哈，感谢赞美主！', '信就必得着。', 'Y', '2016-03-11 10:25:37');
INSERT INTO `request_reply` VALUES ('51136534-e6ce-11e5-9738-c45444f5ce98', '1233454654', '18369162150', '<p>刚才格式出了点问题！看看怎么回事！<br/></p>', null, 'Y', '2016-03-11 10:24:40');
INSERT INTO `request_reply` VALUES ('6c9c7800-fee1-11e5-9b98-c45444f5ce98', '33612106-fee1-11e5-9b98-c45444f5ce98', '18369162150', '<p>时时祷告，神必会帮助我们！成为我们的避难所！因为他是我们的阿爸父，我是他的孩子！<br/></p>', null, 'N', '2016-04-10 13:59:44');
INSERT INTO `request_reply` VALUES ('7cda23f6-e6cd-11e5-9738-c45444f5ce98', '1233454654', '1003', '<p>哈利路亚感谢赞美主！<img src=\"http://img.baidu.com/hi/jx2/j_0059.gif\"/></p>', null, 'Y', '2016-03-11 09:59:46');
INSERT INTO `request_reply` VALUES ('8bf4adaf-fe6b-11e5-96d5-c45444f5ce98', '1233454654', '18369162150', '<p>弟兄，关于你的 问题我有如下答案！希望倾听。。。<img src=\"http://img.baidu.com/hi/jx2/j_0028.gif\"/><img src=\"http://img.baidu.com/hi/jx2/j_0028.gif\"/></p>', '<p>恩恩，谢谢弟兄你的的回答。<br/></p>', 'Y', '2016-04-09 23:56:42');
INSERT INTO `request_reply` VALUES ('e43f082b-e6ce-11e5-9738-c45444f5ce98', '1233454654', '18369162150', '<p>就是测试，不解释。。。。<br/></p>', null, 'Y', '2016-03-11 10:22:43');

-- ----------------------------
-- Table structure for sys_file_info
-- ----------------------------
DROP TABLE IF EXISTS `sys_file_info`;
CREATE TABLE `sys_file_info` (
  `FILE_ID` varchar(40) NOT NULL COMMENT '文件编号',
  `MODU_CD` varchar(50) NOT NULL COMMENT '模块编号',
  `US_ID` varchar(50) DEFAULT NULL COMMENT '用户ID',
  `MODU_NO` varchar(30) DEFAULT NULL COMMENT '标识号码',
  `FILE_NM` varchar(50) NOT NULL COMMENT '文件名',
  `FILE_REL_PATH` varchar(50) NOT NULL COMMENT '相对路径',
  `FILE_ABS_PATH` varchar(500) NOT NULL COMMENT '绝对路径',
  `FILE_EXTENSION` varchar(20) NOT NULL COMMENT '文件扩展名',
  `FILE_SIZE` bigint(20) DEFAULT NULL COMMENT '文件大小',
  `FILE_CONTENT_TYPE` varchar(70) DEFAULT NULL COMMENT '文件内容类型',
  `USED_STAT` int(1) NOT NULL DEFAULT '1' COMMENT '是否使用',
  `DL_CNT` int(5) DEFAULT NULL COMMENT '下载次数',
  `EXPIRE_TS` timestamp NULL DEFAULT NULL COMMENT '过期日期',
  `UPLOAD_TS` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '上传日期',
  `FS_ID` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`FILE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='文件信息';

-- ----------------------------
-- Records of sys_file_info
-- ----------------------------
INSERT INTO `sys_file_info` VALUES ('1449067294_1459961430126', '/blog', null, null, '1449067294', '/blog', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/blog', 'jpg', '45421', 'image/jpeg', '0', '0', null, '2016-04-07 00:50:30', null);
INSERT INTO `sys_file_info` VALUES ('1449067294_1460041120845', '/head', '18369162150', null, '1449067294', '/head', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/head', 'jpg', '45421', 'image/jpeg', '0', '0', null, '2016-04-07 22:58:40', null);
INSERT INTO `sys_file_info` VALUES ('1449067294_1460041264783', '/head', '18369162150', null, '1449067294', '/head', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/head', 'jpg', '45421', 'image/jpeg', '0', '0', null, '2016-04-07 23:01:04', null);
INSERT INTO `sys_file_info` VALUES ('1449067294_1460041446806', '/head', '18369162150', null, '1449067294', '/head', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/head', 'jpg', '45421', 'image/jpeg', '0', '0', null, '2016-04-07 23:04:06', null);
INSERT INTO `sys_file_info` VALUES ('1449067294_1460041749545', '/head', '18369162150', null, '1449067294', '/head', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/head', 'jpg', '45421', 'image/jpeg', '0', '0', null, '2016-04-07 23:09:09', null);
INSERT INTO `sys_file_info` VALUES ('1449067294_1460221075204', '/fSAlbum', null, null, '1449067294', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '17568', 'image/jpeg', '1', '0', null, '2016-04-10 00:57:55', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('1449067294_1460257494548', '/blog', null, null, '1449067294', '/blog', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/blog', 'jpg', '45421', 'image/jpeg', '0', '0', null, '2016-04-10 11:04:54', null);
INSERT INTO `sys_file_info` VALUES ('1449067294_1460260198922', '/blog', null, null, '1449067294', '/blog', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/blog', 'jpg', '45421', 'image/jpeg', '0', '0', null, '2016-04-10 11:49:58', null);
INSERT INTO `sys_file_info` VALUES ('1449067294_1460264872497', '/fSAlbum', null, null, '1449067294', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '17568', 'image/jpeg', '1', '0', null, '2016-04-10 13:07:52', 'fs1003');
INSERT INTO `sys_file_info` VALUES ('1449067294_1461246986202', '/fSAlbum', null, null, '1449067294', '/fSAlbum', 'D:\\workspace\\eclipseLUNA1\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '17568', 'image/jpeg', '1', '0', null, '2016-04-21 21:56:26', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('1449067294_1463319710840', '/fSAlbum', null, null, '1449067294', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '13483', 'image/jpeg', '1', '0', null, '2016-05-15 21:41:50', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('20151021103842783_1462715690771', '/fSAlbum', null, null, '20151021103842783', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '13836', 'image/jpeg', '1', '0', null, '2016-05-08 21:54:50', 'a252956c-e5a4-11e5-b179-74d02b7e28a0');
INSERT INTO `sys_file_info` VALUES ('20151021103842783_1463319710872', '/fSAlbum', null, null, '20151021103842783', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '11129', 'image/jpeg', '1', '0', null, '2016-05-15 21:41:50', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('20_avatar_middle_1463319710388', '/fSAlbum', null, null, '20_avatar_middle', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '5057', 'image/jpeg', '1', '0', null, '2016-05-15 21:41:50', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('21645178_173604079000_2_1461246985913', '/fSAlbum', null, null, '21645178_173604079000_2', '/fSAlbum', 'D:\\workspace\\eclipseLUNA1\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '29156', 'image/jpeg', '1', '0', null, '2016-04-21 21:56:25', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('32858PIC4iy_1024_1459961358567', '/head', '18369162150', null, '32858PIC4iy_1024', '/head', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/head', 'jpg', '63961', 'image/jpeg', '0', '0', null, '2016-04-07 00:49:18', null);
INSERT INTO `sys_file_info` VALUES ('32858PIC4iy_1024_1460211644119', '/fSAlbum', null, null, '32858PIC4iy_1024', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '14177', 'image/jpeg', '1', '0', null, '2016-04-09 22:20:44', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('32858PIC4iy_1024_1460217939810', '/fSAlbum', null, null, '32858PIC4iy_1024', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '14177', 'image/jpeg', '1', '0', null, '2016-04-10 00:05:39', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('32858PIC4iy_1024_1460220273463', '/fSAlbum', null, null, '32858PIC4iy_1024', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '14177', 'image/jpeg', '1', '0', null, '2016-04-10 00:44:33', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('32858PIC4iy_1024_1460271965739', '/head', '111111', null, '32858PIC4iy_1024', '/head', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/head', 'jpg', '63961', 'image/jpeg', '1', '0', null, '2016-04-10 15:06:05', null);
INSERT INTO `sys_file_info` VALUES ('32858PIC4iy_1024_1461245597626', '/head', '18369162150', null, '32858PIC4iy_1024', '/head', 'D:\\workspace\\eclipseLUNA1\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\qingganlan\\storage\\upload/head', 'jpg', '63961', 'image/jpeg', '0', '0', null, '2016-04-21 21:33:17', null);
INSERT INTO `sys_file_info` VALUES ('32858PIC4iy_1024_1461246985442', '/fSAlbum', null, null, '32858PIC4iy_1024', '/fSAlbum', 'D:\\workspace\\eclipseLUNA1\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '14177', 'image/jpeg', '1', '0', null, '2016-04-21 21:56:25', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('32858PIC4iy_1024_1462715690700', '/fSAlbum', null, null, '32858PIC4iy_1024', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '14177', 'image/jpeg', '1', '0', null, '2016-05-08 21:54:50', 'a252956c-e5a4-11e5-b179-74d02b7e28a0');
INSERT INTO `sys_file_info` VALUES ('346849 - fuben_1460217700636', '/fSAlbum', null, null, '346849 - fuben', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '14057', 'image/jpeg', '1', '0', null, '2016-04-10 00:01:40', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('346849 - fuben_1460217940105', '/fSAlbum', null, null, '346849 - fuben', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '14057', 'image/jpeg', '1', '0', null, '2016-04-10 00:05:40', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('346849 - fuben_1460264871891', '/fSAlbum', null, null, '346849 - fuben', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '14057', 'image/jpeg', '1', '0', null, '2016-04-10 13:07:51', 'fs1003');
INSERT INTO `sys_file_info` VALUES ('346849 - fuben_1461246985645', '/fSAlbum', null, null, '346849 - fuben', '/fSAlbum', 'D:\\workspace\\eclipseLUNA1\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '14057', 'image/jpeg', '1', '0', null, '2016-04-21 21:56:25', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('346849 - fuben_1463318455295', '/head', null, null, '346849 - fuben', '/head', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/head', 'jpg', '418985', 'image/jpeg', '0', '0', null, '2016-05-15 21:20:55', null);
INSERT INTO `sys_file_info` VALUES ('346849_1457616105651', '/head', '18369162150', null, '346849', '/head', 'E:\\software\\apacheTomcat\\webapps\\ROOT\\storage\\upload/head', 'jpg', '418985', 'image/jpeg', '0', '0', null, '2016-03-10 21:21:45', null);
INSERT INTO `sys_file_info` VALUES ('346849_1460040770255', '/head', '18369162150', null, '346849', '/head', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/head', 'jpg', '418985', 'image/jpeg', '0', '0', null, '2016-04-07 22:52:50', null);
INSERT INTO `sys_file_info` VALUES ('346849_1460041047079', '/head', '18369162150', null, '346849', '/head', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/head', 'jpg', '418985', 'image/jpeg', '0', '0', null, '2016-04-07 22:57:27', null);
INSERT INTO `sys_file_info` VALUES ('346849_1460041093411', '/head', '18369162150', null, '346849', '/head', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/head', 'jpg', '418985', 'image/jpeg', '0', '0', null, '2016-04-07 22:58:13', null);
INSERT INTO `sys_file_info` VALUES ('346849_1460041199834', '/head', '18369162150', null, '346849', '/head', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/head', 'jpg', '418985', 'image/jpeg', '0', '0', null, '2016-04-07 22:59:59', null);
INSERT INTO `sys_file_info` VALUES ('346849_1460042460004', '/blog', null, null, '346849', '/blog', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/blog', 'jpg', '418985', 'image/jpeg', '0', '0', null, '2016-04-07 23:21:00', null);
INSERT INTO `sys_file_info` VALUES ('346849_1460211482540', '/fSAlbum', null, null, '346849', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '14057', 'image/jpeg', '1', '0', null, '2016-04-09 22:18:02', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('346849_1460211644316', '/fSAlbum', null, null, '346849', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '14057', 'image/jpeg', '1', '0', null, '2016-04-09 22:20:44', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('346849_1460211805105', '/fSAlbum', null, null, '346849', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '14057', 'image/jpeg', '1', '0', null, '2016-04-09 22:23:25', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('346849_1460252482203', '/blog', null, null, '346849', '/blog', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/blog', 'jpg', '418985', 'image/jpeg', '0', '0', null, '2016-04-10 09:41:22', null);
INSERT INTO `sys_file_info` VALUES ('346849_1460263380288', '/head', '1003', null, '346849', '/head', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/head', 'jpg', '418985', 'image/jpeg', '1', '0', null, '2016-04-10 12:43:00', null);
INSERT INTO `sys_file_info` VALUES ('346849_1460264872155', '/fSAlbum', null, null, '346849', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '14057', 'image/jpeg', '1', '0', null, '2016-04-10 13:07:52', 'fs1003');
INSERT INTO `sys_file_info` VALUES ('346849_1461246985800', '/fSAlbum', null, null, '346849', '/fSAlbum', 'D:\\workspace\\eclipseLUNA1\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '14057', 'image/jpeg', '1', '0', null, '2016-04-21 21:56:25', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('346849_1462714913127', '/head', null, null, '346849', '/head', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/head', 'jpg', '418985', 'image/jpeg', '0', '0', null, '2016-05-08 21:41:53', null);
INSERT INTO `sys_file_info` VALUES ('f509385c2c28fe488a5df0ffa_1460263624731', '/blog', null, null, 'f509385c2c28fe488a5df0ffaf2ebcaf', '/blog', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/blog', 'jpg', '108072', 'image/jpeg', '0', '0', null, '2016-04-10 12:47:04', null);
INSERT INTO `sys_file_info` VALUES ('f509385c2c28fe488a5df0ffa_1461245498256', '/head', null, null, 'f509385c2c28fe488a5df0ffaf2ebcaf', '/head', 'D:\\workspace\\eclipseLUNA1\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\qingganlan\\storage\\upload/head', 'jpg', '108072', 'image/jpeg', '0', '0', null, '2016-04-21 21:31:38', null);
INSERT INTO `sys_file_info` VALUES ('f509385c2c28fe488a5df0ffa_1461246986268', '/fSAlbum', null, null, 'f509385c2c28fe488a5df0ffaf2ebcaf', '/fSAlbum', 'D:\\workspace\\eclipseLUNA1\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '15064', 'image/jpeg', '1', '0', null, '2016-04-21 21:56:26', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('f509385c2c28fe488a5df0ffa_1461247519808', '/blog', null, null, 'f509385c2c28fe488a5df0ffaf2ebcaf', '/blog', 'D:\\workspace\\eclipseLUNA1\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\qingganlan\\storage\\upload/blog', 'jpg', '108072', 'image/jpeg', '0', '0', null, '2016-04-21 22:05:19', null);
INSERT INTO `sys_file_info` VALUES ('f509385c2c28fe488a5df0ffa_1462715690838', '/fSAlbum', null, null, 'f509385c2c28fe488a5df0ffaf2ebcaf', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '15064', 'image/jpeg', '1', '0', null, '2016-05-08 21:54:50', 'a252956c-e5a4-11e5-b179-74d02b7e28a0');
INSERT INTO `sys_file_info` VALUES ('f509385c2c28fe488a5df0ffa_1463319710913', '/fSAlbum', null, null, 'f509385c2c28fe488a5df0ffaf2ebcaf', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '11852', 'image/jpeg', '1', '0', null, '2016-05-15 21:41:50', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('psb (5)_1462715690931', '/fSAlbum', null, null, 'psb (5)', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '22832', 'image/jpeg', '1', '0', null, '2016-05-08 21:54:50', 'a252956c-e5a4-11e5-b179-74d02b7e28a0');
INSERT INTO `sys_file_info` VALUES ('psb.webp (1)_1463319710988', '/fSAlbum', null, null, 'psb.webp (1)', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '8755', 'image/jpeg', '1', '0', null, '2016-05-15 21:41:50', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('psb.webp (4)_1462715691065', '/fSAlbum', null, null, 'psb.webp (4)', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '11397', 'image/jpeg', '1', '0', null, '2016-05-08 21:54:51', 'a252956c-e5a4-11e5-b179-74d02b7e28a0');
INSERT INTO `sys_file_info` VALUES ('psb_1460130960068', '/fellowShip', null, null, 'psb', '/fellowShip', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fellowShip', 'jpg', '89062', 'image/jpeg', '1', '0', null, '2016-04-08 23:56:00', null);
INSERT INTO `sys_file_info` VALUES ('psb_1460257365003', '/blog', null, null, 'psb', '/blog', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/blog', 'jpg', '89062', 'image/jpeg', '0', '0', null, '2016-04-10 11:02:45', null);
INSERT INTO `sys_file_info` VALUES ('psb_1462715690998', '/fSAlbum', null, null, 'psb', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '15945', 'image/jpeg', '1', '0', null, '2016-05-08 21:54:50', 'a252956c-e5a4-11e5-b179-74d02b7e28a0');
INSERT INTO `sys_file_info` VALUES ('psb_1463319710959', '/fSAlbum', null, null, 'psb', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '13245', 'image/jpeg', '1', '0', null, '2016-05-15 21:41:50', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('psb_1463411968171', '/head', '18369162150', null, 'psb', '/head', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/head', 'jpg', '89062', 'image/jpeg', '1', '0', null, '2016-05-16 23:19:28', null);
INSERT INTO `sys_file_info` VALUES ('QQjietu20160228142227_1457523776328', '/fSAlbum', null, null, 'QQjietu20160228142227', '/fSAlbum', 'E:\\software\\apacheTomcat\\webapps\\ROOT\\storage\\upload/fSAlbum', 'png', '102672', 'image/png', '1', '0', null, '2016-03-09 19:42:56', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('QQjietu20160313213617_1461246986357', '/fSAlbum', null, null, 'QQjietu20160313213617', '/fSAlbum', 'D:\\workspace\\eclipseLUNA1\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'png', '87976', 'image/png', '1', '0', null, '2016-04-21 21:56:26', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('QQjietu20160321203227_1463319711033', '/fSAlbum', null, null, 'QQjietu20160321203227', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'png', '66523', 'image/png', '1', '0', null, '2016-05-15 21:41:51', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('QQtupian20160123133846_1457523776425', '/fSAlbum', null, null, 'QQtupian20160123133846', '/fSAlbum', 'E:\\software\\apacheTomcat\\webapps\\ROOT\\storage\\upload/fSAlbum', 'jpg', '20972', 'image/jpeg', '1', '0', null, '2016-03-09 19:42:56', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('QQtupian20160123133846_1460217700089', '/fSAlbum', null, null, 'QQtupian20160123133846', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '20972', 'image/jpeg', '1', '0', null, '2016-04-10 00:01:40', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('QQtupian20160123133846_1460257490097', '/blog', null, null, 'QQtupian20160123133846', '/blog', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/blog', 'jpg', '53495', 'image/jpeg', '0', '0', null, '2016-04-10 11:04:50', null);
INSERT INTO `sys_file_info` VALUES ('QQtupian20160224235640_1460272010737', '/blog', null, null, 'QQtupian20160224235640', '/blog', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/blog', 'jpg', '47307', 'image/jpeg', '0', '0', null, '2016-04-10 15:06:50', null);
INSERT INTO `sys_file_info` VALUES ('qt_1460259975330', '/blog', null, null, 'qt', '/blog', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/blog', 'png', '22350', 'image/png', '0', '0', null, '2016-04-10 11:46:15', null);
INSERT INTO `sys_file_info` VALUES ('qt_1461246986425', '/fSAlbum', null, null, 'qt', '/fSAlbum', 'D:\\workspace\\eclipseLUNA1\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'png', '39106', 'image/png', '1', '0', null, '2016-04-21 21:56:26', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('shizijia1_1461246986490', '/fSAlbum', null, null, 'shizijia1', '/fSAlbum', 'D:\\workspace\\eclipseLUNA1\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'png', '58014', 'image/png', '1', '0', null, '2016-04-21 21:56:26', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('shizijia2_1461246986554', '/fSAlbum', null, null, 'shizijia2', '/fSAlbum', 'D:\\workspace\\eclipseLUNA1\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '12103', 'image/jpeg', '1', '0', null, '2016-04-21 21:56:26', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('shizijia2_1463319711076', '/fSAlbum', null, null, 'shizijia2', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '10542', 'image/jpeg', '1', '0', null, '2016-05-15 21:41:51', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('yimaneili_1463319711104', '/fSAlbum', null, null, 'yimaneili', '/fSAlbum', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '9863', 'image/jpeg', '1', '0', null, '2016-05-15 21:41:51', 'fs1993');
INSERT INTO `sys_file_info` VALUES ('zTree_1460272004112', '/blog', null, null, 'zTree', '/blog', 'E:\\software\\apacheTomcat\\wtpwebapps\\qingganlan\\storage\\upload/blog', 'jpg', '36520', 'image/jpeg', '0', '0', null, '2016-04-10 15:06:44', null);
INSERT INTO `sys_file_info` VALUES ('zTree_1461246986684', '/fSAlbum', null, null, 'zTree', '/fSAlbum', 'D:\\workspace\\eclipseLUNA1\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\qingganlan\\storage\\upload/fSAlbum', 'jpg', '5701', 'image/jpeg', '1', '0', null, '2016-04-21 21:56:26', 'fs1993');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `US_ID` varchar(50) NOT NULL COMMENT '用户id',
  `US_NAME` varchar(20) NOT NULL COMMENT '用户名称',
  `AGE` int(3) DEFAULT NULL COMMENT '用户年龄',
  `SEX` varchar(4) DEFAULT NULL COMMENT '用户性别',
  `BIRTH_DATE` timestamp NULL DEFAULT NULL COMMENT '出生日期',
  `US_PS` varchar(70) DEFAULT NULL COMMENT '用户密码',
  `TEL` varchar(11) DEFAULT NULL COMMENT '电话号码',
  `EMAIL` varchar(100) DEFAULT NULL COMMENT '电子邮箱',
  `QQ` varchar(20) DEFAULT NULL COMMENT 'qq号',
  `WEICHAT` varchar(20) DEFAULT NULL COMMENT '微信号',
  `PS` varchar(200) DEFAULT NULL COMMENT '个性签名',
  `HOBBY` varchar(50) DEFAULT NULL COMMENT '兴趣爱好',
  `AREA` varchar(200) DEFAULT NULL COMMENT '居住地',
  `GRADUATE_SCHOOL` varchar(50) DEFAULT NULL COMMENT '毕业学校',
  `PROFESSION` varchar(50) DEFAULT NULL COMMENT '职业',
  `CHIRCH_TYPE` varchar(20) DEFAULT NULL COMMENT '敬拜地点类型',
  `STATE` varchar(10) DEFAULT NULL COMMENT '用户账号状态',
  `START_TRUTH` timestamp NULL DEFAULT NULL COMMENT '开始信主日期',
  `REG_DATE` timestamp NULL DEFAULT NULL COMMENT '注册日期',
  `LAST_LOGIN_TIME` timestamp NULL DEFAULT NULL COMMENT '最后登录时间',
  `HEAD_IMG` varchar(200) DEFAULT NULL COMMENT '用户头像',
  `LEVEL` varchar(5) DEFAULT NULL COMMENT '用户等级',
  `TYPE` varchar(20) DEFAULT NULL COMMENT '用户类型',
  `TK_ID` varchar(70) DEFAULT NULL COMMENT 'TOKEN_ID',
  `AUTHENTICATION` varchar(10) DEFAULT NULL COMMENT '是否认证',
  `IS_BAPTISM` varchar(2) DEFAULT NULL COMMENT '是否受洗',
  `IS_TRUTH` varchar(2) DEFAULT NULL COMMENT '是否有信仰',
  `BLOG_NO` int(8) DEFAULT '0' COMMENT '我发表的帖子的数量',
  `COLLECT_BLOG_NO` int(8) DEFAULT '0' COMMENT '收藏的说说数目',
  `CONCERN_NO` int(8) DEFAULT '0' COMMENT '所关注的用户数量',
  `FANS_NO` int(8) DEFAULT NULL COMMENT '关注我的用户数量',
  `MY_FRIEND_NO` int(8) DEFAULT '0' COMMENT '我的好友数量',
  `COMMENT_NO` int(8) DEFAULT '0' COMMENT '我发表评论的数量',
  `COMMENT_ME_COMMENT_NO` int(8) DEFAULT '0' COMMENT '评论我的帖子的评论数量',
  `RECOVER_NO` int(8) DEFAULT '0',
  `MY_FELLOWSHIP_NO` int(8) DEFAULT '0',
  `LOG_NO` int(8) DEFAULT '0',
  `MY_MSG_BOARD_NO` int(8) DEFAULT '0',
  `MY_BUILD_FELLOWSHIP_NO` int(8) DEFAULT '0',
  PRIMARY KEY (`US_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户信息表';

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('1001', 'admin', null, '女', null, '37d4d23bbb119427d7c0ede0f503b2c4', '', '', '', '', '圣经中你最喜欢的一节经文', '', '山东|济南|历下区', '', '', null, 'LIMIT', null, '2016-02-18 13:29:03', null, 'QQjietu20160118182540_1456046051933.png', null, null, null, null, null, '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `user_info` VALUES ('1002', 'admin1', null, '女', null, '1724b2a8c222a88db9385f54bbafd53d', '', '', '', '', '圣经中你最喜欢的一节经文', '', '山东|济南|历下区', '', '', null, 'LIMIT', null, '2016-02-18 13:29:20', null, 'QQjietu20151221144551_1456120397514.png', null, null, null, null, null, '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `user_info` VALUES ('1003', '以马内利', null, '0', null, '1724b2a8c222a88db9385f54bbafd53d', '', '', '', '', '圣经中你最喜欢的一节经文', '', '山东|济南|历下区', '', '', null, 'LIMIT', null, '2016-02-18 13:29:33', null, '346849_1460263380288.jpg', null, null, null, null, null, '', '1', '1', '0', '0', '3', '0', '0', '0', '3', '0', '0', '2');
INSERT INTO `user_info` VALUES ('1006', 'admin6', null, '女', null, '1724b2a8c222a88db9385f54bbafd53d', '', '', '', '', '圣经中你最喜欢的一节经文', '', '山东|济南|历下区', '', '', null, null, null, '2016-02-18 15:06:44', null, null, null, null, null, null, null, '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `user_info` VALUES ('111111', '信者得爱', null, '0', '2016-04-01 00:00:00', '3b6a0fd4e97e877ab3424ab46f7fbf9f', '1831111', '', '', '', '圣经中你最喜欢的一哈利路亚！', '读经，篮球', '山东|威海|环翠区', '哈理工', '1', 'family', null, '2016-04-01 00:00:00', null, null, '32858PIC4iy_1024_1460271965739.jpg', null, null, null, null, 'Y', 'Y', '4', '0', '0', null, '1', '0', '0', '0', '1', '0', '0', '0');
INSERT INTO `user_info` VALUES ('18369162150', '你坐着为王', null, '0', null, '3b6a0fd4e97e877ab3424ab46f7fbf9f', '', '', '', '', '圣经中你最喜欢的一节经文', '', '山东|济南|历下区', '', '', 'family', null, null, '2016-02-18 14:15:50', null, 'psb_1463411968171.jpg', null, null, null, null, 'Y', 'Y', '-4', '1', '2', '0', '3', '1', '0', '0', '5', '6', '0', '3');
INSERT INTO `user_info` VALUES ('18369162151', '赵俊宝test2', null, '0', null, '1724b2a8c222a88db9385f54bbafd53d', '18369162151', null, '2291006094', '2291006094', null, null, '山东|济南|历下区', null, '软件工程', null, null, null, '2016-03-05 16:08:21', null, null, null, null, null, null, null, null, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `user_info` VALUES ('18369162152', '赵俊宝test3', null, '0', null, '1724b2a8c222a88db9385f54bbafd53d', '18369162152', null, '2291006094', '2291006094', null, null, '山东|济南|历下区', null, '软件工程', null, null, null, '2016-03-05 16:08:21', null, null, null, null, null, null, null, null, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `user_info` VALUES ('18369162153', '赵俊宝test4', null, '0', null, '1724b2a8c222a88db9385f54bbafd53d', '18369162153', null, '2291006094', '2291006094', null, null, '山东|济南|历下区', null, '软件工程', null, null, null, '2016-03-05 16:08:21', null, null, null, null, null, null, null, null, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `user_info` VALUES ('18369162159', '赵俊宝test1', null, '0', null, '1724b2a8c222a88db9385f54bbafd53d', '18369162159', null, '2291006094', '2291006094', null, null, '山东|济南|历下区', null, '软件工程', null, null, null, '2016-03-05 16:08:21', null, null, null, null, null, null, null, null, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for vide_share
-- ----------------------------
DROP TABLE IF EXISTS `vide_share`;
CREATE TABLE `vide_share` (
  `US_ID` varchar(50) NOT NULL COMMENT '分享人ID',
  `VIDEO_ID` varchar(50) NOT NULL COMMENT '视频ID',
  `VIDEO_NAME` varchar(30) NOT NULL COMMENT '视频名称',
  `VIDEO_DESC` varchar(50) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`VIDEO_ID`),
  KEY `FK_user_info_TO_vide_share` (`US_ID`),
  CONSTRAINT `FK_user_info_TO_vide_share` FOREIGN KEY (`US_ID`) REFERENCES `user_info` (`US_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='主内好看视频分享表';

-- ----------------------------
-- Records of vide_share
-- ----------------------------

-- ----------------------------
-- Procedure structure for orderIdAuto
-- ----------------------------
DROP PROCEDURE IF EXISTS `orderIdAuto`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `orderIdAuto`(OUT `p_out` int)
BEGIN
DECLARE i TIMESTAMP;
DECLARE m INT;
SET i = DATE_FORMAT(NOW(),'%y-%m-%d');
SET m = _nextval('userid');
IF (m<10)
THEN 
SELECT CONCAT(DATE_FORMAT(NOW(),'%y%m%d'),CONCAT('00',m)); 
ELSEIF (m<100)
THEN 
SELECT CONCAT(DATE_FORMAT(NOW(),'%y%m%d'),CONCAT('0',m)); 
ELSE
SELECT CONCAT(DATE_FORMAT(NOW(),'%y%m%d'),m); 
END IF;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for proOutTest
-- ----------------------------
DROP PROCEDURE IF EXISTS `proOutTest`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `proOutTest`(OUT `p_out` int)
BEGIN
	#Routine body goes here...
 #SELECT _nextval('userid');
#CURRENT_DATE (  );
DECLARE i TIMESTAMP;
DECLARE m INT;
SET i = DATE_FORMAT(NOW(),'%y-%m-%d');
#DECLARE A1 DATETIME default '2013-10-31' 
SET m = _nextval('userid');
IF (m<10)
THEN #SET m = CONCAT('00',m);
SELECT CONCAT(DATE_FORMAT(NOW(),'%y%m%d'),CONCAT('00',m)); 
ELSEIF (m<100)
THEN #SET m = CONCAT('0',m);
#SELECT CONCAT('0',m);
SELECT CONCAT(DATE_FORMAT(NOW(),'%y%m%d'),CONCAT('0',m)); 
ELSE
SELECT CONCAT(DATE_FORMAT(NOW(),'%y%m%d'),m); 
END IF;

#SELECT CONCAT(DATE_FORMAT(NOW(),'%y%m%d'),m); 

END
;;
DELIMITER ;

-- ----------------------------
-- Function structure for _nextval
-- ----------------------------
DROP FUNCTION IF EXISTS `_nextval`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `_nextval`(n  varchar(50)) RETURNS int(11)
BEGIN
declare _cur INT;#之前说这里未定义，原来是因为这里没有声明。察看sql预览。
set _cur=(select current_value from tb_sequence where name= n);  
update tb_sequence  
 set current_value = _cur +  INCREMENT
 where name=n ;  
	RETURN _cur ;

END
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `delBlogTrigger`;
DELIMITER ;;
CREATE TRIGGER `delBlogTrigger` BEFORE UPDATE ON `blog` FOR EACH ROW begin
update user_info set BLOG_NO = BLOG_NO- 1 WHERE US_ID = old.US_ID;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `addConcernNo`;
DELIMITER ;;
CREATE TRIGGER `addConcernNo` AFTER INSERT ON `concern_info` FOR EACH ROW begin
update user_info set CONCERN_NO= CONCERN_NO+1 WHERE US_ID = new.US_ID;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `reduceConcernNo`;
DELIMITER ;;
CREATE TRIGGER `reduceConcernNo` AFTER DELETE ON `concern_info` FOR EACH ROW begin
update user_info set CONCERN_NO= CONCERN_NO-1 WHERE US_ID = old.US_ID;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `addFSNoTrigger`;
DELIMITER ;;
CREATE TRIGGER `addFSNoTrigger` BEFORE INSERT ON `fellowship_info` FOR EACH ROW begin
update user_info set MY_BUILD_FELLOWSHIP_NO = MY_BUILD_FELLOWSHIP_NO + 1 WHERE US_ID = new.FS_BUILD_US_ID;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `joinFSTrigger`;
DELIMITER ;;
CREATE TRIGGER `joinFSTrigger` AFTER INSERT ON `fellowship_info` FOR EACH ROW begin
insert into fellowship_user_relation (FS_US_RELATION_ID,FS_ID,US_ID,IS_MASTER) value (uuid(),new.FS_ID,new.FS_BUILD_US_ID,'Y');
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `FellowNoTrigger1`;
DELIMITER ;;
CREATE TRIGGER `FellowNoTrigger1` AFTER INSERT ON `fellowship_user_relation` FOR EACH ROW begin
update user_info set MY_FELLOWSHIP_NO= MY_FELLOWSHIP_NO+1 WHERE US_ID = new.US_ID;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `FellowNoTrigger2`;
DELIMITER ;;
CREATE TRIGGER `FellowNoTrigger2` AFTER DELETE ON `fellowship_user_relation` FOR EACH ROW begin
update user_info set MY_FELLOWSHIP_NO= MY_FELLOWSHIP_NO-1 WHERE US_ID = old.US_ID;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `userLogNoAddTrigger`;
DELIMITER ;;
CREATE TRIGGER `userLogNoAddTrigger` AFTER INSERT ON `log` FOR EACH ROW begin
update user_info set LOG_NO= LOG_NO+1 WHERE US_ID = new.US_ID;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `userLogNoReduceTrigger`;
DELIMITER ;;
CREATE TRIGGER `userLogNoReduceTrigger` AFTER DELETE ON `log` FOR EACH ROW begin
update  user_info set LOG_NO = LOG_NO -1 WHERE US_ID =old.US_ID;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `addFriendNo`;
DELIMITER ;;
CREATE TRIGGER `addFriendNo` AFTER INSERT ON `my_friends_info` FOR EACH ROW begin
update user_info set MY_FRIEND_NO = MY_FRIEND_NO +1 WHERE US_ID = new.US_ID;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `reduceFriendNo`;
DELIMITER ;;
CREATE TRIGGER `reduceFriendNo` AFTER DELETE ON `my_friends_info` FOR EACH ROW begin
update user_info set MY_FRIEND_NO = BLOG_NO- 1 WHERE US_ID = old.US_ID;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `addFSAlbumImgNoT`;
DELIMITER ;;
CREATE TRIGGER `addFSAlbumImgNoT` AFTER INSERT ON `sys_file_info` FOR EACH ROW begin
update fellowship_info set FS_ALBUM_IMG_NO = FS_ALBUM_IMG_NO +1 WHERE FS_ID= new.FS_ID;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `reduceFsAlbumImgNoT`;
DELIMITER ;;
CREATE TRIGGER `reduceFsAlbumImgNoT` AFTER DELETE ON `sys_file_info` FOR EACH ROW begin
update fellowship_info set FS_ALBUM_IMG_NO = FS_ALBUM_IMG_NO - 1 WHERE FS_ID= old.FS_ID;
end
;;
DELIMITER ;
