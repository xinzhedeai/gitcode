package normalPo;

import java.util.Date;

public class ConcernInfo {
    private String concernedUsId;

    private String usId;

    private Date concernTime;

    private String isConcern;

    public String getConcernedUsId() {
        return concernedUsId;
    }

    public void setConcernedUsId(String concernedUsId) {
        this.concernedUsId = concernedUsId == null ? null : concernedUsId.trim();
    }

    public String getUsId() {
        return usId;
    }

    public void setUsId(String usId) {
        this.usId = usId == null ? null : usId.trim();
    }

    public Date getConcernTime() {
        return concernTime;
    }

    public void setConcernTime(Date concernTime) {
        this.concernTime = concernTime;
    }

    public String getIsConcern() {
        return isConcern;
    }

    public void setIsConcern(String isConcern) {
        this.isConcern = isConcern == null ? null : isConcern.trim();
    }
}