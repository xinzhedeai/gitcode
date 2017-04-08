package po;

import java.util.Date;
import javax.persistence.*;

@Table(name = "log_forwarding")
public class LogForwarding {
    /**
     * 日志编号
     */
    @Id
    @Column(name = "LOG_ID")
    private String logId;

    /**
     * 转载日期
     */
    @Column(name = "FORWARD_DATE")
    private Date forwardDate;

    /**
     * 发表日期
     */
    @Column(name = "SALE_DATE")
    private Date saleDate;

    /**
     * 日志访问权限
     */
    @Column(name = "IS_DELETE")
    private String isDelete;

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
     * 获取转载日期
     *
     * @return FORWARD_DATE - 转载日期
     */
    public Date getForwardDate() {
        return forwardDate;
    }

    /**
     * 设置转载日期
     *
     * @param forwardDate 转载日期
     */
    public void setForwardDate(Date forwardDate) {
        this.forwardDate = forwardDate;
    }

    /**
     * 获取发表日期
     *
     * @return SALE_DATE - 发表日期
     */
    public Date getSaleDate() {
        return saleDate;
    }

    /**
     * 设置发表日期
     *
     * @param saleDate 发表日期
     */
    public void setSaleDate(Date saleDate) {
        this.saleDate = saleDate;
    }

    /**
     * 获取日志访问权限
     *
     * @return IS_DELETE - 日志访问权限
     */
    public String getIsDelete() {
        return isDelete;
    }

    /**
     * 设置日志访问权限
     *
     * @param isDelete 日志访问权限
     */
    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete == null ? null : isDelete.trim();
    }
}