package po;

import java.util.Date;

public class ConcernInfo {
    private String usId;

    private String concernedUsId;

    private Date concernTime;

    public String getUsId() {
        return usId;
    }

    public void setUsId(String usId) {
        this.usId = usId == null ? null : usId.trim();
    }

    public String getConcernedUsId() {
        return concernedUsId;
    }

    public void setConcernedUsId(String concernedUsId) {
        this.concernedUsId = concernedUsId == null ? null : concernedUsId.trim();
    }

    public Date getConcernTime() {
        return concernTime;
    }

    public void setConcernTime(Date concernTime) {
        this.concernTime = concernTime;
    }
}