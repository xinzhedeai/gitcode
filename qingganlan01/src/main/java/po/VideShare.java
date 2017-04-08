package po;

import javax.persistence.*;

@Table(name = "vide_share")
public class VideShare {
    /**
     * 视频ID
     */
    @Id
    @Column(name = "VIDEO_ID")
    private String videoId;

    /**
     * 分享人ID
     */
    @Column(name = "US_ID")
    private String usId;

    /**
     * 视频名称
     */
    @Column(name = "VIDEO_NAME")
    private String videoName;

    /**
     * 备注
     */
    @Column(name = "VIDEO_DESC")
    private String videoDesc;

    /**
     * 获取视频ID
     *
     * @return VIDEO_ID - 视频ID
     */
    public String getVideoId() {
        return videoId;
    }

    /**
     * 设置视频ID
     *
     * @param videoId 视频ID
     */
    public void setVideoId(String videoId) {
        this.videoId = videoId == null ? null : videoId.trim();
    }

    /**
     * 获取分享人ID
     *
     * @return US_ID - 分享人ID
     */
    public String getUsId() {
        return usId;
    }

    /**
     * 设置分享人ID
     *
     * @param usId 分享人ID
     */
    public void setUsId(String usId) {
        this.usId = usId == null ? null : usId.trim();
    }

    /**
     * 获取视频名称
     *
     * @return VIDEO_NAME - 视频名称
     */
    public String getVideoName() {
        return videoName;
    }

    /**
     * 设置视频名称
     *
     * @param videoName 视频名称
     */
    public void setVideoName(String videoName) {
        this.videoName = videoName == null ? null : videoName.trim();
    }

    /**
     * 获取备注
     *
     * @return VIDEO_DESC - 备注
     */
    public String getVideoDesc() {
        return videoDesc;
    }

    /**
     * 设置备注
     *
     * @param videoDesc 备注
     */
    public void setVideoDesc(String videoDesc) {
        this.videoDesc = videoDesc == null ? null : videoDesc.trim();
    }
}