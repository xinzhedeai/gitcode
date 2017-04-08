package po;

import java.util.Date;
import javax.persistence.*;

@Table(name = "concern_info")
public class ConcernInfo {
    /**
     * 被关注者编号
     */
    @Id
    @Column(name = "CONCERNED_US_ID")
    private String concernedUsId;

    /**
     * 用户id
     */
    @Column(name = "US_ID")
    private String usId;

    /**
     * 关注时间
     */
    @Column(name = "CONCERN_TIME")
    private Date concernTime;

    /**
     * 获取被关注者编号
     *
     * @return CONCERNED_US_ID - 被关注者编号
     */
    public String getConcernedUsId() {
        return concernedUsId;
    }

    /**
     * 设置被关注者编号
     *
     * @param concernedUsId 被关注者编号
     */
    public void setConcernedUsId(String concernedUsId) {
        this.concernedUsId = concernedUsId == null ? null : concernedUsId.trim();
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
     * 获取关注时间
     *
     * @return CONCERN_TIME - 关注时间
     */
    public Date getConcernTime() {
        return concernTime;
    }

    /**
     * 设置关注时间
     *
     * @param concernTime 关注时间
     */
    public void setConcernTime(Date concernTime) {
        this.concernTime = concernTime;
    }
}