package normalPo;

import java.util.Date;

public class FellowshipUserRelation {
    private String fsUsRelationId;

    private String fsId;

    private String usId;

    private Date joinDate;

    public String getFsUsRelationId() {
        return fsUsRelationId;
    }

    public void setFsUsRelationId(String fsUsRelationId) {
        this.fsUsRelationId = fsUsRelationId == null ? null : fsUsRelationId.trim();
    }

    public String getFsId() {
        return fsId;
    }

    public void setFsId(String fsId) {
        this.fsId = fsId == null ? null : fsId.trim();
    }

    public String getUsId() {
        return usId;
    }

    public void setUsId(String usId) {
        this.usId = usId == null ? null : usId.trim();
    }

    public Date getJoinDate() {
        return joinDate;
    }

    public void setJoinDate(Date joinDate) {
        this.joinDate = joinDate;
    }
}