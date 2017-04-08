package normalPo;

import java.util.Date;

public class Log {
    private String logId;

    private String usId;

    private String logContent;

    private Date sendDate;

    private String isDelete;

    private String isForward;

    private String forwardingValiable;

    private Integer forwardedNo;

    private String logState;

    private Date logUpdateDate;

    public String getLogId() {
        return logId;
    }

    public void setLogId(String logId) {
        this.logId = logId == null ? null : logId.trim();
    }

    public String getUsId() {
        return usId;
    }

    public void setUsId(String usId) {
        this.usId = usId == null ? null : usId.trim();
    }

    public String getLogContent() {
        return logContent;
    }

    public void setLogContent(String logContent) {
        this.logContent = logContent == null ? null : logContent.trim();
    }

    public Date getSendDate() {
        return sendDate;
    }

    public void setSendDate(Date sendDate) {
        this.sendDate = sendDate;
    }

    public String getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete == null ? null : isDelete.trim();
    }

    public String getIsForward() {
        return isForward;
    }

    public void setIsForward(String isForward) {
        this.isForward = isForward == null ? null : isForward.trim();
    }

    public String getForwardingValiable() {
        return forwardingValiable;
    }

    public void setForwardingValiable(String forwardingValiable) {
        this.forwardingValiable = forwardingValiable == null ? null : forwardingValiable.trim();
    }

    public Integer getForwardedNo() {
        return forwardedNo;
    }

    public void setForwardedNo(Integer forwardedNo) {
        this.forwardedNo = forwardedNo;
    }

    public String getLogState() {
        return logState;
    }

    public void setLogState(String logState) {
        this.logState = logState == null ? null : logState.trim();
    }

    public Date getLogUpdateDate() {
        return logUpdateDate;
    }

    public void setLogUpdateDate(Date logUpdateDate) {
        this.logUpdateDate = logUpdateDate;
    }
}