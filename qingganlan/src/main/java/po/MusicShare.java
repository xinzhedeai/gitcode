package po;

import javax.persistence.*;

@Table(name = "music_share")
public class MusicShare {
    /**
     * 音乐ID
     */
    @Id
    @Column(name = "MUSIC_ID")
    private String musicId;

    /**
     * 分享人ID
     */
    @Column(name = "US_ID")
    private String usId;

    /**
     * 音乐名称
     */
    @Column(name = "MUSIC_NAME")
    private String musicName;

    /**
     * 演唱者
     */
    @Column(name = "MUSIC_PERSON")
    private String musicPerson;

    /**
     * 获取音乐ID
     *
     * @return MUSIC_ID - 音乐ID
     */
    public String getMusicId() {
        return musicId;
    }

    /**
     * 设置音乐ID
     *
     * @param musicId 音乐ID
     */
    public void setMusicId(String musicId) {
        this.musicId = musicId == null ? null : musicId.trim();
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
     * 获取音乐名称
     *
     * @return MUSIC_NAME - 音乐名称
     */
    public String getMusicName() {
        return musicName;
    }

    /**
     * 设置音乐名称
     *
     * @param musicName 音乐名称
     */
    public void setMusicName(String musicName) {
        this.musicName = musicName == null ? null : musicName.trim();
    }

    /**
     * 获取演唱者
     *
     * @return MUSIC_PERSON - 演唱者
     */
    public String getMusicPerson() {
        return musicPerson;
    }

    /**
     * 设置演唱者
     *
     * @param musicPerson 演唱者
     */
    public void setMusicPerson(String musicPerson) {
        this.musicPerson = musicPerson == null ? null : musicPerson.trim();
    }
}