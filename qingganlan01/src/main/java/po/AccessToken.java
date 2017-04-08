package po;

import java.util.Date;
import javax.persistence.*;

@Table(name = "access_token")
public class AccessToken {
    /**
     * 访问令牌
     */
    @Id
    @Column(name = "access_token")
    private String accessToken;

    /**
     * 用户id
     */
    @Id
    @Column(name = "US_ID")
    private String usId;

    /**
     * 创建时间
     */
    @Column(name = "CREATE_TIME")
    private Date createTime;

    /**
     * 过期日期
     */
    @Column(name = "EXPIRE_TS")
    private Date expireTs;

    /**
     * 最后访问日期
     */
    @Column(name = "LT_REQ_TS")
    private Date ltReqTs;

    /**
     * 登录设备
     */
    @Column(name = "REG_DC")
    private String regDc;

    /**
     * 获取访问令牌
     *
     * @return access_token - 访问令牌
     */
    public String getAccessToken() {
        return accessToken;
    }

    /**
     * 设置访问令牌
     *
     * @param accessToken 访问令牌
     */
    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken == null ? null : accessToken.trim();
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
     * 获取创建时间
     *
     * @return CREATE_TIME - 创建时间
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 设置创建时间
     *
     * @param createTime 创建时间
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 获取过期日期
     *
     * @return EXPIRE_TS - 过期日期
     */
    public Date getExpireTs() {
        return expireTs;
    }

    /**
     * 设置过期日期
     *
     * @param expireTs 过期日期
     */
    public void setExpireTs(Date expireTs) {
        this.expireTs = expireTs;
    }

    /**
     * 获取最后访问日期
     *
     * @return LT_REQ_TS - 最后访问日期
     */
    public Date getLtReqTs() {
        return ltReqTs;
    }

    /**
     * 设置最后访问日期
     *
     * @param ltReqTs 最后访问日期
     */
    public void setLtReqTs(Date ltReqTs) {
        this.ltReqTs = ltReqTs;
    }

    /**
     * 获取登录设备
     *
     * @return REG_DC - 登录设备
     */
    public String getRegDc() {
        return regDc;
    }

    /**
     * 设置登录设备
     *
     * @param regDc 登录设备
     */
    public void setRegDc(String regDc) {
        this.regDc = regDc == null ? null : regDc.trim();
    }
}