package normalPo;

import java.util.Date;

public class FellowshipInfo {
    private String fsId;

    private String fsName;

    private String fsHeadImg;

    private Date buildDate;

    private String type;

    private String address;

    private String fsBuildUsId;

    private String fsPs;

    public String getFsId() {
        return fsId;
    }

    public void setFsId(String fsId) {
        this.fsId = fsId == null ? null : fsId.trim();
    }

    public String getFsName() {
        return fsName;
    }

    public void setFsName(String fsName) {
        this.fsName = fsName == null ? null : fsName.trim();
    }

    public String getFsHeadImg() {
        return fsHeadImg;
    }

    public void setFsHeadImg(String fsHeadImg) {
        this.fsHeadImg = fsHeadImg == null ? null : fsHeadImg.trim();
    }

    public Date getBuildDate() {
        return buildDate;
    }

    public void setBuildDate(Date buildDate) {
        this.buildDate = buildDate;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public String getFsBuildUsId() {
        return fsBuildUsId;
    }

    public void setFsBuildUsId(String fsBuildUsId) {
        this.fsBuildUsId = fsBuildUsId == null ? null : fsBuildUsId.trim();
    }

    public String getFsPs() {
        return fsPs;
    }

    public void setFsPs(String fsPs) {
        this.fsPs = fsPs == null ? null : fsPs.trim();
    }
}