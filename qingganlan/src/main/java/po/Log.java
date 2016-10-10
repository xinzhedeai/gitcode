package po;

import java.util.Date;
import javax.persistence.*;

public class Log {
    /**
     * 日志编号
     */
    @Id
    @Column(name = "LOG_ID")
    private String logId;

    /**
     * 用户id
     */
    @Column(name = "US_ID")
    private String usId;

    /**
     * 日志内容
     */
    @Column(name = "LOG_CONTENT")
    private String logContent;

    /**
     * 发表日期
     */
    @Column(name = "SEND_DATE")
    private Date sendDate;

    /**
     * 是否删除
     */
    @Column(name = "IS_DELETE")
    private String isDelete;

    /**
     * 是否为转载
     */
    @Column(name = "IS_FORWARD")
    private String isForward;

    /**
     * 是否可转载
     */
    @Column(name = "FORWARDING_VALIABLE")
    private String forwardingValiable;

    /**
     * 被转载数目
     */
    @Column(name = "FORWARDED_NO")
    private Integer forwardedNo;

    /**
     * 访问权限状态
     */
    @Column(name = "LOG_STATE")
    private String logState;

    /**
     * 修改日期
     */
    @Column(name = "LOG_UPDATE_DATE")
    private Date logUpdateDate;

    /**
     * 获取日志编号
     *
     * @return LOG_ID - 日志编号
     */
    public String getLogId() {
        return logId;
    }

    /**
     * 设置日志编号
     *
     * @param logId 日志编号
     */
    public void setLogId(String logId) {
        this.logId = logId == null ? null : logId.trim();
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
     * 获取日志内容
     *
     * @return LOG_CONTENT - 日志内容
     */
    public String getLogContent() {
        return logContent;
    }

    /**
     * 设置日志内容
     *
     * @param logContent 日志内容
     */
    public void setLogContent(String logContent) {
        this.logContent = logContent == null ? null : logContent.trim();
    }

    /**
     * 获取发表日期
     *
     * @return SEND_DATE - 发表日期
     */
    public Date getSendDate() {
        return sendDate;
    }

    /**
     * 设置发表日期
     *
     * @param sendDate 发表日期
     */
    public void setSendDate(Date sendDate) {
        this.sendDate = sendDate;
    }

    /**
     * 获取是否删除
     *
     * @return IS_DELETE - 是否删除
     */
    public String getIsDelete() {
        return isDelete;
    }

    /**
     * 设置是否删除
     *
     * @param isDelete 是否删除
     */
    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete == null ? null : isDelete.trim();
    }

    /**
     * 获取是否为转载
     *
     * @return IS_FORWARD - 是否为转载
     */
    public String getIsForward() {
        return isForward;
    }

    /**
     * 设置是否为转载
     *
     * @param isForward 是否为转载
     */
    public void setIsForward(String isForward) {
        this.isForward = isForward == null ? null : isForward.trim();
    }

    /**
     * 获取是否可转载
     *
     * @return FORWARDING_VALIABLE - 是否可转载
     */
    public String getForwardingValiable() {
        return forwardingValiable;
    }

    /**
     * 设置是否可转载
     *
     * @param forwardingValiable 是否可转载
     */
    public void setForwardingValiable(String forwardingValiable) {
        this.forwardingValiable = forwardingValiable == null ? null : forwardingValiable.trim();
    }

    /**
     * 获取被转载数目
     *
     * @return FORWARDED_NO - 被转载数目
     */
    public Integer getForwardedNo() {
        return forwardedNo;
    }

    /**
     * 设置被转载数目
     *
     * @param forwardedNo 被转载数目
     */
    public void setForwardedNo(Integer forwardedNo) {
        this.forwardedNo = forwardedNo;
    }

    /**
     * 获取访问权限状态
     *
     * @return LOG_STATE - 访问权限状态
     */
    public String getLogState() {
        return logState;
    }

    /**
     * 设置访问权限状态
     *
     * @param logState 访问权限状态
     */
    public void setLogState(String logState) {
        this.logState = logState == null ? null : logState.trim();
    }

    /**
     * 获取修改日期
     *
     * @return LOG_UPDATE_DATE - 修改日期
     */
    public Date getLogUpdateDate() {
        return logUpdateDate;
    }

    /**
     * 设置修改日期
     *
     * @param logUpdateDate 修改日期
     */
    public void setLogUpdateDate(Date logUpdateDate) {
        this.logUpdateDate = logUpdateDate;
    }
}