package po;

import java.util.Date;
import javax.persistence.*;

public class Authentication {
    /**
     * AUTH_ID
     */
    @Id
    @Column(name = "ID")
    private String id;

    /**
     * 用户id
     */
    @Column(name = "US_ID")
    private String usId;

    /**
     * 姓名
     */
    @Column(name = "US_NAME")
    private String usName;

    /**
     * 身份证号码
     */
    @Column(name = "CARD_ID")
    private String cardId;

    /**
     * 性别
     */
    @Column(name = "SEX")
    private String sex;

    /**
     * 职业
     */
    @Column(name = "PROFESSION")
    private String profession;

    /**
     * 身份证图片
     */
    @Column(name = "PICTURE")
    private String picture;

    /**
     * 申请时间
     */
    @Column(name = "APPLY_TIME")
    private Date applyTime;

    /**
     * 认证状态
     */
    @Column(name = "AUTH_STATE")
    private String authState;

    /**
     * 获取AUTH_ID
     *
     * @return ID - AUTH_ID
     */
    public String getId() {
        return id;
    }

    /**
     * 设置AUTH_ID
     *
     * @param id AUTH_ID
     */
    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

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
     * 获取姓名
     *
     * @return US_NAME - 姓名
     */
    public String getUsName() {
        return usName;
    }

    /**
     * 设置姓名
     *
     * @param usName 姓名
     */
    public void setUsName(String usName) {
        this.usName = usName == null ? null : usName.trim();
    }

    /**
     * 获取身份证号码
     *
     * @return CARD_ID - 身份证号码
     */
    public String getCardId() {
        return cardId;
    }

    /**
     * 设置身份证号码
     *
     * @param cardId 身份证号码
     */
    public void setCardId(String cardId) {
        this.cardId = cardId == null ? null : cardId.trim();
    }

    /**
     * 获取性别
     *
     * @return SEX - 性别
     */
    public String getSex() {
        return sex;
    }

    /**
     * 设置性别
     *
     * @param sex 性别
     */
    public void setSex(String sex) {
        this.sex = sex == null ? null : sex.trim();
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
     * 获取身份证图片
     *
     * @return PICTURE - 身份证图片
     */
    public String getPicture() {
        return picture;
    }

    /**
     * 设置身份证图片
     *
     * @param picture 身份证图片
     */
    public void setPicture(String picture) {
        this.picture = picture == null ? null : picture.trim();
    }

    /**
     * 获取申请时间
     *
     * @return APPLY_TIME - 申请时间
     */
    public Date getApplyTime() {
        return applyTime;
    }

    /**
     * 设置申请时间
     *
     * @param applyTime 申请时间
     */
    public void setApplyTime(Date applyTime) {
        this.applyTime = applyTime;
    }

    /**
     * 获取认证状态
     *
     * @return AUTH_STATE - 认证状态
     */
    public String getAuthState() {
        return authState;
    }

    /**
     * 设置认证状态
     *
     * @param authState 认证状态
     */
    public void setAuthState(String authState) {
        this.authState = authState == null ? null : authState.trim();
    }
}