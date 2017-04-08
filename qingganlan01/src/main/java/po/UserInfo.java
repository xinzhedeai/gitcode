package po;

import java.util.Date;
import javax.persistence.*;

@Table(name = "user_info")
public class UserInfo {
    /**
     * 用户id
     */
    @Id
    @Column(name = "US_ID")
    private String usId;

    /**
     * 用户名称
     */
    @Column(name = "US_NAME")
    private String usName;

    /**
     * 用户年龄
     */
    @Column(name = "AGE")
    private Integer age;

    /**
     * 用户性别
     */
    @Column(name = "SEX")
    private String sex;

    /**
     * 出生日期
     */
    @Column(name = "BIRTH_DATE")
    private Date birthDate;

    /**
     * 用户密码
     */
    @Column(name = "US_PS")
    private String usPs;

    /**
     * 电话号码
     */
    @Column(name = "TEL")
    private String tel;

    /**
     * 电子邮箱
     */
    @Column(name = "EMAIL")
    private String email;

    /**
     * qq号
     */
    @Column(name = "QQ")
    private String qq;

    /**
     * 微信号
     */
    @Column(name = "WEICHAT")
    private String weichat;

    /**
     * 个性签名
     */
    @Column(name = "PS")
    private String ps;

    /**
     * 兴趣爱好
     */
    @Column(name = "HOBBY")
    private String hobby;

    /**
     * 居住地
     */
    @Column(name = "AREA")
    private String area;

    /**
     * 毕业学校
     */
    @Column(name = "GRADUATE_SCHOOL")
    private String graduateSchool;

    /**
     * 职业
     */
    @Column(name = "PROFESSION")
    private String profession;

    /**
     * 敬拜地点类型
     */
    @Column(name = "CHIRCH_TYPE")
    private String chirchType;

    /**
     * 用户账号状态
     */
    @Column(name = "STATE")
    private String state;

    /**
     * 开始信主日期
     */
    @Column(name = "START_TRUTH")
    private Date startTruth;

    /**
     * 注册日期
     */
    @Column(name = "REG_DATE")
    private Date regDate;

    /**
     * 最后登录时间
     */
    @Column(name = "LAST_LOGIN_TIME")
    private Date lastLoginTime;

    /**
     * 用户头像
     */
    @Column(name = "HEAD_IMG")
    private String headImg;

    /**
     * 用户等级
     */
    @Column(name = "LEVEL")
    private String level;

    /**
     * 用户类型
     */
    @Column(name = "TYPE")
    private String type;

    /**
     * TOKEN_ID
     */
    @Column(name = "TK_ID")
    private String tkId;

    /**
     * 是否认证
     */
    @Column(name = "AUTHENTICATION")
    private String authentication;

    /**
     * 是否受洗
     */
    @Column(name = "IS_BAPTISM")
    private String isBaptism;

    /**
     * 是否有信仰
     */
    @Column(name = "IS_TRUTH")
    private String isTruth;

    /**
     * 我发表的帖子的数量
     */
    @Column(name = "BLOG_NO")
    private Integer blogNo;

    /**
     * 收藏的说说数目
     */
    @Column(name = "COLLECT_BLOG_NO")
    private Integer collectBlogNo;

    /**
     * 所关注的用户数量
     */
    @Column(name = "CONCERN_NO")
    private Integer concernNo;

    /**
     * 关注我的用户数量
     */
    @Column(name = "FANS_NO")
    private Integer fansNo;

    /**
     * 我的好友数量
     */
    @Column(name = "MY_FRIEND_NO")
    private Integer myFriendNo;

    /**
     * 我发表评论的数量
     */
    @Column(name = "COMMENT_NO")
    private Integer commentNo;

    /**
     * 评论我的帖子的评论数量
     */
    @Column(name = "COMMENT_ME_COMMENT_NO")
    private Integer commentMeCommentNo;

    /**
     * 获取用户id
     *
     * @return US_ID - 用户id
     */
    public String getUsId() {
        return usId;
    }

    /**
     * 设置用户id
     *
     * @param usId 用户id
     */
    public void setUsId(String usId) {
        this.usId = usId == null ? null : usId.trim();
    }

    /**
     * 获取用户名称
     *
     * @return US_NAME - 用户名称
     */
    public String getUsName() {
        return usName;
    }

    /**
     * 设置用户名称
     *
     * @param usName 用户名称
     */
    public void setUsName(String usName) {
        this.usName = usName == null ? null : usName.trim();
    }

    /**
     * 获取用户年龄
     *
     * @return AGE - 用户年龄
     */
    public Integer getAge() {
        return age;
    }

    /**
     * 设置用户年龄
     *
     * @param age 用户年龄
     */
    public void setAge(Integer age) {
        this.age = age;
    }

    /**
     * 获取用户性别
     *
     * @return SEX - 用户性别
     */
    public String getSex() {
        return sex;
    }

    /**
     * 设置用户性别
     *
     * @param sex 用户性别
     */
    public void setSex(String sex) {
        this.sex = sex == null ? null : sex.trim();
    }

    /**
     * 获取出生日期
     *
     * @return BIRTH_DATE - 出生日期
     */
    public Date getBirthDate() {
        return birthDate;
    }

    /**
     * 设置出生日期
     *
     * @param birthDate 出生日期
     */
    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    /**
     * 获取用户密码
     *
     * @return US_PS - 用户密码
     */
    public String getUsPs() {
        return usPs;
    }

    /**
     * 设置用户密码
     *
     * @param usPs 用户密码
     */
    public void setUsPs(String usPs) {
        this.usPs = usPs == null ? null : usPs.trim();
    }

    /**
     * 获取电话号码
     *
     * @return TEL - 电话号码
     */
    public String getTel() {
        return tel;
    }

    /**
     * 设置电话号码
     *
     * @param tel 电话号码
     */
    public void setTel(String tel) {
        this.tel = tel == null ? null : tel.trim();
    }

    /**
     * 获取电子邮箱
     *
     * @return EMAIL - 电子邮箱
     */
    public String getEmail() {
        return email;
    }

    /**
     * 设置电子邮箱
     *
     * @param email 电子邮箱
     */
    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    /**
     * 获取qq号
     *
     * @return QQ - qq号
     */
    public String getQq() {
        return qq;
    }

    /**
     * 设置qq号
     *
     * @param qq qq号
     */
    public void setQq(String qq) {
        this.qq = qq == null ? null : qq.trim();
    }

    /**
     * 获取微信号
     *
     * @return WEICHAT - 微信号
     */
    public String getWeichat() {
        return weichat;
    }

    /**
     * 设置微信号
     *
     * @param weichat 微信号
     */
    public void setWeichat(String weichat) {
        this.weichat = weichat == null ? null : weichat.trim();
    }

    /**
     * 获取个性签名
     *
     * @return PS - 个性签名
     */
    public String getPs() {
        return ps;
    }

    /**
     * 设置个性签名
     *
     * @param ps 个性签名
     */
    public void setPs(String ps) {
        this.ps = ps == null ? null : ps.trim();
    }

    /**
     * 获取兴趣爱好
     *
     * @return HOBBY - 兴趣爱好
     */
    public String getHobby() {
        return hobby;
    }

    /**
     * 设置兴趣爱好
     *
     * @param hobby 兴趣爱好
     */
    public void setHobby(String hobby) {
        this.hobby = hobby == null ? null : hobby.trim();
    }

    /**
     * 获取居住地
     *
     * @return AREA - 居住地
     */
    public String getArea() {
        return area;
    }

    /**
     * 设置居住地
     *
     * @param area 居住地
     */
    public void setArea(String area) {
        this.area = area == null ? null : area.trim();
    }

    /**
     * 获取毕业学校
     *
     * @return GRADUATE_SCHOOL - 毕业学校
     */
    public String getGraduateSchool() {
        return graduateSchool;
    }

    /**
     * 设置毕业学校
     *
     * @param graduateSchool 毕业学校
     */
    public void setGraduateSchool(String graduateSchool) {
        this.graduateSchool = graduateSchool == null ? null : graduateSchool.trim();
    }

    /**
     * 获取职业
     *
     * @return PROFESSION - 职业
     */
    public String getProfession() {
        return profession;
    }

    /**
     * 设置职业
     *
     * @param profession 职业
     */
    public void setProfession(String profession) {
        this.profession = profession == null ? null : profession.trim();
    }

    /**
     * 获取敬拜地点类型
     *
     * @return CHIRCH_TYPE - 敬拜地点类型
     */
    public String getChirchType() {
        return chirchType;
    }

    /**
     * 设置敬拜地点类型
     *
     * @param chirchType 敬拜地点类型
     */
    public void setChirchType(String chirchType) {
        this.chirchType = chirchType == null ? null : chirchType.trim();
    }

    /**
     * 获取用户账号状态
     *
     * @return STATE - 用户账号状态
     */
    public String getState() {
        return state;
    }

    /**
     * 设置用户账号状态
     *
     * @param state 用户账号状态
     */
    public void setState(String state) {
        this.state = state == null ? null : state.trim();
    }

    /**
     * 获取开始信主日期
     *
     * @return START_TRUTH - 开始信主日期
     */
    public Date getStartTruth() {
        return startTruth;
    }

    /**
     * 设置开始信主日期
     *
     * @param startTruth 开始信主日期
     */
    public void setStartTruth(Date startTruth) {
        this.startTruth = startTruth;
    }

    /**
     * 获取注册日期
     *
     * @return REG_DATE - 注册日期
     */
    public Date getRegDate() {
        return regDate;
    }

    /**
     * 设置注册日期
     *
     * @param regDate 注册日期
     */
    public void setRegDate(Date regDate) {
        this.regDate = regDate;
    }

    /**
     * 获取最后登录时间
     *
     * @return LAST_LOGIN_TIME - 最后登录时间
     */
    public Date getLastLoginTime() {
        return lastLoginTime;
    }

    /**
     * 设置最后登录时间
     *
     * @param lastLoginTime 最后登录时间
     */
    public void setLastLoginTime(Date lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
    }

    /**
     * 获取用户头像
     *
     * @return HEAD_IMG - 用户头像
     */
    public String getHeadImg() {
        return headImg;
    }

    /**
     * 设置用户头像
     *
     * @param headImg 用户头像
     */
    public void setHeadImg(String headImg) {
        this.headImg = headImg == null ? null : headImg.trim();
    }

    /**
     * 获取用户等级
     *
     * @return LEVEL - 用户等级
     */
    public String getLevel() {
        return level;
    }

    /**
     * 设置用户等级
     *
     * @param level 用户等级
     */
    public void setLevel(String level) {
        this.level = level == null ? null : level.trim();
    }

    /**
     * 获取用户类型
     *
     * @return TYPE - 用户类型
     */
    public String getType() {
        return type;
    }

    /**
     * 设置用户类型
     *
     * @param type 用户类型
     */
    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }

    /**
     * 获取TOKEN_ID
     *
     * @return TK_ID - TOKEN_ID
     */
    public String getTkId() {
        return tkId;
    }

    /**
     * 设置TOKEN_ID
     *
     * @param tkId TOKEN_ID
     */
    public void setTkId(String tkId) {
        this.tkId = tkId == null ? null : tkId.trim();
    }

    /**
     * 获取是否认证
     *
     * @return AUTHENTICATION - 是否认证
     */
    public String getAuthentication() {
        return authentication;
    }

    /**
     * 设置是否认证
     *
     * @param authentication 是否认证
     */
    public void setAuthentication(String authentication) {
        this.authentication = authentication == null ? null : authentication.trim();
    }

    /**
     * 获取是否受洗
     *
     * @return IS_BAPTISM - 是否受洗
     */
    public String getIsBaptism() {
        return isBaptism;
    }

    /**
     * 设置是否受洗
     *
     * @param isBaptism 是否受洗
     */
    public void setIsBaptism(String isBaptism) {
        this.isBaptism = isBaptism == null ? null : isBaptism.trim();
    }

    /**
     * 获取是否有信仰
     *
     * @return IS_TRUTH - 是否有信仰
     */
    public String getIsTruth() {
        return isTruth;
    }

    /**
     * 设置是否有信仰
     *
     * @param isTruth 是否有信仰
     */
    public void setIsTruth(String isTruth) {
        this.isTruth = isTruth == null ? null : isTruth.trim();
    }

    /**
     * 获取我发表的帖子的数量
     *
     * @return BLOG_NO - 我发表的帖子的数量
     */
    public Integer getBlogNo() {
        return blogNo;
    }

    /**
     * 设置我发表的帖子的数量
     *
     * @param blogNo 我发表的帖子的数量
     */
    public void setBlogNo(Integer blogNo) {
        this.blogNo = blogNo;
    }

    /**
     * 获取收藏的说说数目
     *
     * @return COLLECT_BLOG_NO - 收藏的说说数目
     */
    public Integer getCollectBlogNo() {
        return collectBlogNo;
    }

    /**
     * 设置收藏的说说数目
     *
     * @param collectBlogNo 收藏的说说数目
     */
    public void setCollectBlogNo(Integer collectBlogNo) {
        this.collectBlogNo = collectBlogNo;
    }

    /**
     * 获取所关注的用户数量
     *
     * @return CONCERN_NO - 所关注的用户数量
     */
    public Integer getConcernNo() {
        return concernNo;
    }

    /**
     * 设置所关注的用户数量
     *
     * @param concernNo 所关注的用户数量
     */
    public void setConcernNo(Integer concernNo) {
        this.concernNo = concernNo;
    }

    /**
     * 获取关注我的用户数量
     *
     * @return FANS_NO - 关注我的用户数量
     */
    public Integer getFansNo() {
        return fansNo;
    }

    /**
     * 设置关注我的用户数量
     *
     * @param fansNo 关注我的用户数量
     */
    public void setFansNo(Integer fansNo) {
        this.fansNo = fansNo;
    }

    /**
     * 获取我的好友数量
     *
     * @return MY_FRIEND_NO - 我的好友数量
     */
    public Integer getMyFriendNo() {
        return myFriendNo;
    }

    /**
     * 设置我的好友数量
     *
     * @param myFriendNo 我的好友数量
     */
    public void setMyFriendNo(Integer myFriendNo) {
        this.myFriendNo = myFriendNo;
    }

    /**
     * 获取我发表评论的数量
     *
     * @return COMMENT_NO - 我发表评论的数量
     */
    public Integer getCommentNo() {
        return commentNo;
    }

    /**
     * 设置我发表评论的数量
     *
     * @param commentNo 我发表评论的数量
     */
    public void setCommentNo(Integer commentNo) {
        this.commentNo = commentNo;
    }

    /**
     * 获取评论我的帖子的评论数量
     *
     * @return COMMENT_ME_COMMENT_NO - 评论我的帖子的评论数量
     */
    public Integer getCommentMeCommentNo() {
        return commentMeCommentNo;
    }

    /**
     * 设置评论我的帖子的评论数量
     *
     * @param commentMeCommentNo 评论我的帖子的评论数量
     */
    public void setCommentMeCommentNo(Integer commentMeCommentNo) {
        this.commentMeCommentNo = commentMeCommentNo;
    }
}