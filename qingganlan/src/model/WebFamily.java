package model;

public class WebFamily {
    private String webFamilyId;

    private String webFamilyName;

    private String webFamilyAddress;

    private String videoDesc;

    public String getWebFamilyId() {
        return webFamilyId;
    }

    public void setWebFamilyId(String webFamilyId) {
        this.webFamilyId = webFamilyId == null ? null : webFamilyId.trim();
    }

    public String getWebFamilyName() {
        return webFamilyName;
    }

    public void setWebFamilyName(String webFamilyName) {
        this.webFamilyName = webFamilyName == null ? null : webFamilyName.trim();
    }

    public String getWebFamilyAddress() {
        return webFamilyAddress;
    }

    public void setWebFamilyAddress(String webFamilyAddress) {
        this.webFamilyAddress = webFamilyAddress == null ? null : webFamilyAddress.trim();
    }

    public String getVideoDesc() {
        return videoDesc;
    }

    public void setVideoDesc(String videoDesc) {
        this.videoDesc = videoDesc == null ? null : videoDesc.trim();
    }
}