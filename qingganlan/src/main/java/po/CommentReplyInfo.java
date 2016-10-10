package po;

import java.util.Date;
import javax.persistence.*;

@Table(name = "comment_reply_info")
public class CommentReplyInfo {
    /**
     * 评论编号
     */
    @Id
    @Column(name = "COMMENT_ID")
    private String commentId;

    /**
     * 帖子id
     */
    @Column(name = "BLOG_ID")
    private String blogId;

    /**
     * 评论人id
     */
    @Column(name = "COMMENT_US_ID")
    private String commentUsId;

    /**
     * 回复人id
     */
    @Column(name = "REPLY_US_ID")
    private String replyUsId;

    /**
     * n内容
     */
    @Column(name = "COMMENT_CONTENT")
    private String commentContent;

    /**
     * s时间
     */
    @Column(name = "COMMENT_DATE")
    private Date commentDate;

    /**
     * 回复内容
     */
    @Column(name = "REPLY_CONTENT")
    private String replyContent;

    /**
     * 回复时间
     */
    @Column(name = "REPLY_DATE")
    private Date replyDate;

    /**
     * 是否删除
     */
    @Column(name = "IS_DELETE")
    private String isDelete;

    /**
     * 获取评论编号
     *
     * @return COMMENT_ID - 评论编号
     */
    public String getCommentId() {
        return commentId;
    }

    /**
     * 设置评论编号
     *
     * @param commentId 评论编号
     */
    public void setCommentId(String commentId) {
        this.commentId = commentId == null ? null : commentId.trim();
    }

    /**
     * 获取帖子id
     *
     * @return BLOG_ID - 帖子id
     */
    public String getBlogId() {
        return blogId;
    }

    /**
     * 设置帖子id
     *
     * @param blogId 帖子id
     */
    public void setBlogId(String blogId) {
        this.blogId = blogId == null ? null : blogId.trim();
    }

    /**
     * 获取评论人id
     *
     * @return COMMENT_US_ID - 评论人id
     */
    public String getCommentUsId() {
        return commentUsId;
    }

    /**
     * 设置评论人id
     *
     * @param commentUsId 评论人id
     */
    public void setCommentUsId(String commentUsId) {
        this.commentUsId = commentUsId == null ? null : commentUsId.trim();
    }

    /**
     * 获取回复人id
     *
     * @return REPLY_US_ID - 回复人id
     */
    public String getReplyUsId() {
        return replyUsId;
    }

    /**
     * 设置回复人id
     *
     * @param replyUsId 回复人id
     */
    public void setReplyUsId(String replyUsId) {
        this.replyUsId = replyUsId == null ? null : replyUsId.trim();
    }

    /**
     * 获取n内容
     *
     * @return COMMENT_CONTENT - n内容
     */
    public String getCommentContent() {
        return commentContent;
    }

    /**
     * 设置n内容
     *
     * @param commentContent n内容
     */
    public void setCommentContent(String commentContent) {
        this.commentContent = commentContent == null ? null : commentContent.trim();
    }

    /**
     * 获取s时间
     *
     * @return COMMENT_DATE - s时间
     */
    public Date getCommentDate() {
        return commentDate;
    }

    /**
     * 设置s时间
     *
     * @param commentDate s时间
     */
    public void setCommentDate(Date commentDate) {
        this.commentDate = commentDate;
    }

    /**
     * 获取回复内容
     *
     * @return REPLY_CONTENT - 回复内容
     */
    public String getReplyContent() {
        return replyContent;
    }

    /**
     * 设置回复内容
     *
     * @param replyContent 回复内容
     */
    public void setReplyContent(String replyContent) {
        this.replyContent = replyContent == null ? null : replyContent.trim();
    }

    /**
     * 获取回复时间
     *
     * @return REPLY_DATE - 回复时间
     */
    public Date getReplyDate() {
        return replyDate;
    }

    /**
     * 设置回复时间
     *
     * @param replyDate 回复时间
     */
    public void setReplyDate(Date replyDate) {
        this.replyDate = replyDate;
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
}