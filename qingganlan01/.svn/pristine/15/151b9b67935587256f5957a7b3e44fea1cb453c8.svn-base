package po;

import java.util.Date;
import javax.persistence.*;

@Table(name = "my_friends_info")
public class MyFriendsInfo {
    /**
     * 好友id
     */
    @Column(name = "FRIEND_ID")
    private String friendId;

    /**
     * 用户id
     */
    @Column(name = "US_ID")
    private String usId;

    /**
     * 建立好友关系日期
     */
    @Column(name = "DATETIME")
    private Date datetime;

    /**
     * 是否为特别关注
     */
    @Column(name = "IS_SPECIAL")
    private String isSpecial;

    /**
     * 获取好友id
     *
     * @return FRIEND_ID - 好友id
     */
    public String getFriendId() {
        return friendId;
    }

    /**
     * 设置好友id
     *
     * @param friendId 好友id
     */
    public void setFriendId(String friendId) {
        this.friendId = friendId == null ? null : friendId.trim();
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
     * 获取建立好友关系日期
     *
     * @return DATETIME - 建立好友关系日期
     */
    public Date getDatetime() {
        return datetime;
    }

    /**
     * 设置建立好友关系日期
     *
     * @param datetime 建立好友关系日期
     */
    public void setDatetime(Date datetime) {
        this.datetime = datetime;
    }

    /**
     * 获取是否为特别关注
     *
     * @return IS_SPECIAL - 是否为特别关注
     */
    public String getIsSpecial() {
        return isSpecial;
    }

    /**
     * 设置是否为特别关注
     *
     * @param isSpecial 是否为特别关注
     */
    public void setIsSpecial(String isSpecial) {
        this.isSpecial = isSpecial == null ? null : isSpecial.trim();
    }
}