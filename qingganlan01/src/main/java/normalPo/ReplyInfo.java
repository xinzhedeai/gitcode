package normalPo;

import java.util.Date;

public class ReplyInfo {
    private String replyId;

    private String commentId;

    private String replyUsId;

    private String replyContent;

    private Date replyDate;

    private String isDelete;

    private String replyReplyUsId;

    public String getReplyId() {
        return replyId;
    }

    public void setReplyId(String replyId) {
        this.replyId = replyId == null ? null : replyId.trim();
    }

    public String getCommentId() {
        return commentId;
    }

    public void setCommentId(String commentId) {
        this.commentId = commentId == null ? null : commentId.trim();
    }

    public String getReplyUsId() {
        return replyUsId;
    }

    public void setReplyUsId(String replyUsId) {
        this.replyUsId = replyUsId == null ? null : replyUsId.trim();
    }

    public String getReplyContent() {
        return replyContent;
    }

    public void setReplyContent(String replyContent) {
        this.replyContent = replyContent == null ? null : replyContent.trim();
    }

    public Date getReplyDate() {
        return replyDate;
    }

    public void setReplyDate(Date replyDate) {
        this.replyDate = replyDate;
    }

    public String getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete == null ? null : isDelete.trim();
    }

    public String getReplyReplyUsId() {
        return replyReplyUsId;
    }

    public void setReplyReplyUsId(String replyReplyUsId) {
        this.replyReplyUsId = replyReplyUsId == null ? null : replyReplyUsId.trim();
    }
}