package normalPo;

public class WantedWeb {
    private String wantedId;

    private String wantedAddress;

    private String wantedDesc;

    public String getWantedId() {
        return wantedId;
    }

    public void setWantedId(String wantedId) {
        this.wantedId = wantedId == null ? null : wantedId.trim();
    }

    public String getWantedAddress() {
        return wantedAddress;
    }

    public void setWantedAddress(String wantedAddress) {
        this.wantedAddress = wantedAddress == null ? null : wantedAddress.trim();
    }

    public String getWantedDesc() {
        return wantedDesc;
    }

    public void setWantedDesc(String wantedDesc) {
        this.wantedDesc = wantedDesc == null ? null : wantedDesc.trim();
    }
}