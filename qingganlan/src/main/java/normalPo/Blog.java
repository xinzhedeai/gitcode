package normalPo;

import java.util.Date;

public class Blog {
    private String blogId;

    private String usId;

    private Date sendTime;

    private String blogImg;

    private String upvoteNo;

    private Integer commentNo;

    private Integer collectNo;

    private Integer forwardingNo;

    private String isDelete;

    private String isForward;

    private String content;

    private String forwardValiable;

    private String blogState;

    public String getBlogId() {
        return blogId;
    }

    public void setBlogId(String blogId) {
        this.blogId = blogId == null ? null : blogId.trim();
    }

    public String getUsId() {
        return usId;
    }

    public void setUsId(String usId) {
        this.usId = usId == null ? null : usId.trim();
    }

    public Date getSendTime() {
        return sendTime;
    }

    public void setSendTime(Date sendTime) {
        this.sendTime = sendTime;
    }

    public String getBlogImg() {
        return blogImg;
    }

    public void setBlogImg(String blogImg) {
        this.blogImg = blogImg == null ? null : blogImg.trim();
    }

    public String getUpvoteNo() {
        return upvoteNo;
    }

    public void setUpvoteNo(String upvoteNo) {
        this.upvoteNo = upvoteNo == null ? null : upvoteNo.trim();
    }

    public Integer getCommentNo() {
        return commentNo;
    }

    public void setCommentNo(Integer commentNo) {
        this.commentNo = commentNo;
    }

    public Integer getCollectNo() {
        return collectNo;
    }

    public void setCollectNo(Integer collectNo) {
        this.collectNo = collectNo;
    }

    public Integer getForwardingNo() {
        return forwardingNo;
    }

    public void setForwardingNo(Integer forwardingNo) {
        this.forwardingNo = forwardingNo;
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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    public String getForwardValiable() {
        return forwardValiable;
    }

    public void setForwardValiable(String forwardValiable) {
        this.forwardValiable = forwardValiable == null ? null : forwardValiable.trim();
    }

    public String getBlogState() {
        return blogState;
    }

    public void setBlogState(String blogState) {
        this.blogState = blogState == null ? null : blogState.trim();
    }
}