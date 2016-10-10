package po;

import javax.persistence.*;

@Table(name = "web_family")
public class WebFamily {
    /**
     * 网址之家ID
     */
    @Column(name = "WEB_FAMILY_ID")
    private String webFamilyId;

    /**
     * 网址之家名称
     */
    @Column(name = "WEB_FAMILY_NAME")
    private String webFamilyName;

    /**
     * 主内网址之家网站链接地址
     */
    @Column(name = "WEB_FAMILY_ADDRESS")
    private String webFamilyAddress;

    /**
     * 备注
     */
    @Column(name = "VIDEO_DESC")
    private String videoDesc;

    /**
     * 获取网址之家ID
     *
     * @return WEB_FAMILY_ID - 网址之家ID
     */
    public String getWebFamilyId() {
        return webFamilyId;
    }

    /**
     * 设置网址之家ID
     *
     * @param webFamilyId 网址之家ID
     */
    public void setWebFamilyId(String webFamilyId) {
        this.webFamilyId = webFamilyId == null ? null : webFamilyId.trim();
    }

    /**
     * 获取网址之家名称
     *
     * @return WEB_FAMILY_NAME - 网址之家名称
     */
    public String getWebFamilyName() {
        return webFamilyName;
    }

    /**
     * 设置网址之家名称
     *
     * @param webFamilyName 网址之家名称
     */
    public void setWebFamilyName(String webFamilyName) {
        this.webFamilyName = webFamilyName == null ? null : webFamilyName.trim();
    }

    /**
     * 获取主内网址之家网站链接地址
     *
     * @return WEB_FAMILY_ADDRESS - 主内网址之家网站链接地址
     */
    public String getWebFamilyAddress() {
        return webFamilyAddress;
    }

    /**
     * 设置主内网址之家网站链接地址
     *
     * @param webFamilyAddress 主内网址之家网站链接地址
     */
    public void setWebFamilyAddress(String webFamilyAddress) {
        this.webFamilyAddress = webFamilyAddress == null ? null : webFamilyAddress.trim();
    }

    /**
     * 获取备注
     *
     * @return VIDEO_DESC - 备注
     */
    public String getVideoDesc() {
        return videoDesc;
    }

    /**
     * 设置备注
     *
     * @param videoDesc 备注
     */
    public void setVideoDesc(String videoDesc) {
        this.videoDesc = videoDesc == null ? null : videoDesc.trim();
    }
}