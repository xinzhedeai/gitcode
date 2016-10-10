package po;

import javax.persistence.*;

@Table(name = "wanted_web")
public class WantedWeb {
    /**
     * 主内应聘网站ID
     */
    @Column(name = "WANTED_ID")
    private String wantedId;

    /**
     * 主内应聘网站链接地址
     */
    @Column(name = "WANTED_ADDRESS")
    private String wantedAddress;

    /**
     * 备注
     */
    @Column(name = "WANTED_DESC")
    private String wantedDesc;

    /**
     * 获取主内应聘网站ID
     *
     * @return WANTED_ID - 主内应聘网站ID
     */
    public String getWantedId() {
        return wantedId;
    }

    /**
     * 设置主内应聘网站ID
     *
     * @param wantedId 主内应聘网站ID
     */
    public void setWantedId(String wantedId) {
        this.wantedId = wantedId == null ? null : wantedId.trim();
    }

    /**
     * 获取主内应聘网站链接地址
     *
     * @return WANTED_ADDRESS - 主内应聘网站链接地址
     */
    public String getWantedAddress() {
        return wantedAddress;
    }

    /**
     * 设置主内应聘网站链接地址
     *
     * @param wantedAddress 主内应聘网站链接地址
     */
    public void setWantedAddress(String wantedAddress) {
        this.wantedAddress = wantedAddress == null ? null : wantedAddress.trim();
    }

    /**
     * 获取备注
     *
     * @return WANTED_DESC - 备注
     */
    public String getWantedDesc() {
        return wantedDesc;
    }

    /**
     * 设置备注
     *
     * @param wantedDesc 备注
     */
    public void setWantedDesc(String wantedDesc) {
        this.wantedDesc = wantedDesc == null ? null : wantedDesc.trim();
    }
}