package po;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BlogExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public BlogExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andBlogIdIsNull() {
            addCriterion("BLOG_ID is null");
            return (Criteria) this;
        }

        public Criteria andBlogIdIsNotNull() {
            addCriterion("BLOG_ID is not null");
            return (Criteria) this;
        }

        public Criteria andBlogIdEqualTo(String value) {
            addCriterion("BLOG_ID =", value, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdNotEqualTo(String value) {
            addCriterion("BLOG_ID <>", value, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdGreaterThan(String value) {
            addCriterion("BLOG_ID >", value, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdGreaterThanOrEqualTo(String value) {
            addCriterion("BLOG_ID >=", value, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdLessThan(String value) {
            addCriterion("BLOG_ID <", value, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdLessThanOrEqualTo(String value) {
            addCriterion("BLOG_ID <=", value, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdLike(String value) {
            addCriterion("BLOG_ID like", value, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdNotLike(String value) {
            addCriterion("BLOG_ID not like", value, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdIn(List<String> values) {
            addCriterion("BLOG_ID in", values, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdNotIn(List<String> values) {
            addCriterion("BLOG_ID not in", values, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdBetween(String value1, String value2) {
            addCriterion("BLOG_ID between", value1, value2, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdNotBetween(String value1, String value2) {
            addCriterion("BLOG_ID not between", value1, value2, "blogId");
            return (Criteria) this;
        }

        public Criteria andUsIdIsNull() {
            addCriterion("US_ID is null");
            return (Criteria) this;
        }

        public Criteria andUsIdIsNotNull() {
            addCriterion("US_ID is not null");
            return (Criteria) this;
        }

        public Criteria andUsIdEqualTo(String value) {
            addCriterion("US_ID =", value, "usId");
            return (Criteria) this;
        }

        public Criteria andUsIdNotEqualTo(String value) {
            addCriterion("US_ID <>", value, "usId");
            return (Criteria) this;
        }

        public Criteria andUsIdGreaterThan(String value) {
            addCriterion("US_ID >", value, "usId");
            return (Criteria) this;
        }

        public Criteria andUsIdGreaterThanOrEqualTo(String value) {
            addCriterion("US_ID >=", value, "usId");
            return (Criteria) this;
        }

        public Criteria andUsIdLessThan(String value) {
            addCriterion("US_ID <", value, "usId");
            return (Criteria) this;
        }

        public Criteria andUsIdLessThanOrEqualTo(String value) {
            addCriterion("US_ID <=", value, "usId");
            return (Criteria) this;
        }

        public Criteria andUsIdLike(String value) {
            addCriterion("US_ID like", value, "usId");
            return (Criteria) this;
        }

        public Criteria andUsIdNotLike(String value) {
            addCriterion("US_ID not like", value, "usId");
            return (Criteria) this;
        }

        public Criteria andUsIdIn(List<String> values) {
            addCriterion("US_ID in", values, "usId");
            return (Criteria) this;
        }

        public Criteria andUsIdNotIn(List<String> values) {
            addCriterion("US_ID not in", values, "usId");
            return (Criteria) this;
        }

        public Criteria andUsIdBetween(String value1, String value2) {
            addCriterion("US_ID between", value1, value2, "usId");
            return (Criteria) this;
        }

        public Criteria andUsIdNotBetween(String value1, String value2) {
            addCriterion("US_ID not between", value1, value2, "usId");
            return (Criteria) this;
        }

        public Criteria andSendTimeIsNull() {
            addCriterion("SEND_TIME is null");
            return (Criteria) this;
        }

        public Criteria andSendTimeIsNotNull() {
            addCriterion("SEND_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andSendTimeEqualTo(Date value) {
            addCriterion("SEND_TIME =", value, "sendTime");
            return (Criteria) this;
        }

        public Criteria andSendTimeNotEqualTo(Date value) {
            addCriterion("SEND_TIME <>", value, "sendTime");
            return (Criteria) this;
        }

        public Criteria andSendTimeGreaterThan(Date value) {
            addCriterion("SEND_TIME >", value, "sendTime");
            return (Criteria) this;
        }

        public Criteria andSendTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("SEND_TIME >=", value, "sendTime");
            return (Criteria) this;
        }

        public Criteria andSendTimeLessThan(Date value) {
            addCriterion("SEND_TIME <", value, "sendTime");
            return (Criteria) this;
        }

        public Criteria andSendTimeLessThanOrEqualTo(Date value) {
            addCriterion("SEND_TIME <=", value, "sendTime");
            return (Criteria) this;
        }

        public Criteria andSendTimeIn(List<Date> values) {
            addCriterion("SEND_TIME in", values, "sendTime");
            return (Criteria) this;
        }

        public Criteria andSendTimeNotIn(List<Date> values) {
            addCriterion("SEND_TIME not in", values, "sendTime");
            return (Criteria) this;
        }

        public Criteria andSendTimeBetween(Date value1, Date value2) {
            addCriterion("SEND_TIME between", value1, value2, "sendTime");
            return (Criteria) this;
        }

        public Criteria andSendTimeNotBetween(Date value1, Date value2) {
            addCriterion("SEND_TIME not between", value1, value2, "sendTime");
            return (Criteria) this;
        }

        public Criteria andUpvoteNoIsNull() {
            addCriterion("UPVOTE_NO is null");
            return (Criteria) this;
        }

        public Criteria andUpvoteNoIsNotNull() {
            addCriterion("UPVOTE_NO is not null");
            return (Criteria) this;
        }

        public Criteria andUpvoteNoEqualTo(Integer value) {
            addCriterion("UPVOTE_NO =", value, "upvoteNo");
            return (Criteria) this;
        }

        public Criteria andUpvoteNoNotEqualTo(Integer value) {
            addCriterion("UPVOTE_NO <>", value, "upvoteNo");
            return (Criteria) this;
        }

        public Criteria andUpvoteNoGreaterThan(Integer value) {
            addCriterion("UPVOTE_NO >", value, "upvoteNo");
            return (Criteria) this;
        }

        public Criteria andUpvoteNoGreaterThanOrEqualTo(Integer value) {
            addCriterion("UPVOTE_NO >=", value, "upvoteNo");
            return (Criteria) this;
        }

        public Criteria andUpvoteNoLessThan(Integer value) {
            addCriterion("UPVOTE_NO <", value, "upvoteNo");
            return (Criteria) this;
        }

        public Criteria andUpvoteNoLessThanOrEqualTo(Integer value) {
            addCriterion("UPVOTE_NO <=", value, "upvoteNo");
            return (Criteria) this;
        }

        public Criteria andUpvoteNoIn(List<Integer> values) {
            addCriterion("UPVOTE_NO in", values, "upvoteNo");
            return (Criteria) this;
        }

        public Criteria andUpvoteNoNotIn(List<Integer> values) {
            addCriterion("UPVOTE_NO not in", values, "upvoteNo");
            return (Criteria) this;
        }

        public Criteria andUpvoteNoBetween(Integer value1, Integer value2) {
            addCriterion("UPVOTE_NO between", value1, value2, "upvoteNo");
            return (Criteria) this;
        }

        public Criteria andUpvoteNoNotBetween(Integer value1, Integer value2) {
            addCriterion("UPVOTE_NO not between", value1, value2, "upvoteNo");
            return (Criteria) this;
        }

        public Criteria andCommentNoIsNull() {
            addCriterion("COMMENT_NO is null");
            return (Criteria) this;
        }

        public Criteria andCommentNoIsNotNull() {
            addCriterion("COMMENT_NO is not null");
            return (Criteria) this;
        }

        public Criteria andCommentNoEqualTo(Integer value) {
            addCriterion("COMMENT_NO =", value, "commentNo");
            return (Criteria) this;
        }

        public Criteria andCommentNoNotEqualTo(Integer value) {
            addCriterion("COMMENT_NO <>", value, "commentNo");
            return (Criteria) this;
        }

        public Criteria andCommentNoGreaterThan(Integer value) {
            addCriterion("COMMENT_NO >", value, "commentNo");
            return (Criteria) this;
        }

        public Criteria andCommentNoGreaterThanOrEqualTo(Integer value) {
            addCriterion("COMMENT_NO >=", value, "commentNo");
            return (Criteria) this;
        }

        public Criteria andCommentNoLessThan(Integer value) {
            addCriterion("COMMENT_NO <", value, "commentNo");
            return (Criteria) this;
        }

        public Criteria andCommentNoLessThanOrEqualTo(Integer value) {
            addCriterion("COMMENT_NO <=", value, "commentNo");
            return (Criteria) this;
        }

        public Criteria andCommentNoIn(List<Integer> values) {
            addCriterion("COMMENT_NO in", values, "commentNo");
            return (Criteria) this;
        }

        public Criteria andCommentNoNotIn(List<Integer> values) {
            addCriterion("COMMENT_NO not in", values, "commentNo");
            return (Criteria) this;
        }

        public Criteria andCommentNoBetween(Integer value1, Integer value2) {
            addCriterion("COMMENT_NO between", value1, value2, "commentNo");
            return (Criteria) this;
        }

        public Criteria andCommentNoNotBetween(Integer value1, Integer value2) {
            addCriterion("COMMENT_NO not between", value1, value2, "commentNo");
            return (Criteria) this;
        }

        public Criteria andCollectNoIsNull() {
            addCriterion("COLLECT_NO is null");
            return (Criteria) this;
        }

        public Criteria andCollectNoIsNotNull() {
            addCriterion("COLLECT_NO is not null");
            return (Criteria) this;
        }

        public Criteria andCollectNoEqualTo(Integer value) {
            addCriterion("COLLECT_NO =", value, "collectNo");
            return (Criteria) this;
        }

        public Criteria andCollectNoNotEqualTo(Integer value) {
            addCriterion("COLLECT_NO <>", value, "collectNo");
            return (Criteria) this;
        }

        public Criteria andCollectNoGreaterThan(Integer value) {
            addCriterion("COLLECT_NO >", value, "collectNo");
            return (Criteria) this;
        }

        public Criteria andCollectNoGreaterThanOrEqualTo(Integer value) {
            addCriterion("COLLECT_NO >=", value, "collectNo");
            return (Criteria) this;
        }

        public Criteria andCollectNoLessThan(Integer value) {
            addCriterion("COLLECT_NO <", value, "collectNo");
            return (Criteria) this;
        }

        public Criteria andCollectNoLessThanOrEqualTo(Integer value) {
            addCriterion("COLLECT_NO <=", value, "collectNo");
            return (Criteria) this;
        }

        public Criteria andCollectNoIn(List<Integer> values) {
            addCriterion("COLLECT_NO in", values, "collectNo");
            return (Criteria) this;
        }

        public Criteria andCollectNoNotIn(List<Integer> values) {
            addCriterion("COLLECT_NO not in", values, "collectNo");
            return (Criteria) this;
        }

        public Criteria andCollectNoBetween(Integer value1, Integer value2) {
            addCriterion("COLLECT_NO between", value1, value2, "collectNo");
            return (Criteria) this;
        }

        public Criteria andCollectNoNotBetween(Integer value1, Integer value2) {
            addCriterion("COLLECT_NO not between", value1, value2, "collectNo");
            return (Criteria) this;
        }

        public Criteria andDeleteYnIsNull() {
            addCriterion("DELETE_YN is null");
            return (Criteria) this;
        }

        public Criteria andDeleteYnIsNotNull() {
            addCriterion("DELETE_YN is not null");
            return (Criteria) this;
        }

        public Criteria andDeleteYnEqualTo(String value) {
            addCriterion("DELETE_YN =", value, "deleteYn");
            return (Criteria) this;
        }

        public Criteria andDeleteYnNotEqualTo(String value) {
            addCriterion("DELETE_YN <>", value, "deleteYn");
            return (Criteria) this;
        }

        public Criteria andDeleteYnGreaterThan(String value) {
            addCriterion("DELETE_YN >", value, "deleteYn");
            return (Criteria) this;
        }

        public Criteria andDeleteYnGreaterThanOrEqualTo(String value) {
            addCriterion("DELETE_YN >=", value, "deleteYn");
            return (Criteria) this;
        }

        public Criteria andDeleteYnLessThan(String value) {
            addCriterion("DELETE_YN <", value, "deleteYn");
            return (Criteria) this;
        }

        public Criteria andDeleteYnLessThanOrEqualTo(String value) {
            addCriterion("DELETE_YN <=", value, "deleteYn");
            return (Criteria) this;
        }

        public Criteria andDeleteYnLike(String value) {
            addCriterion("DELETE_YN like", value, "deleteYn");
            return (Criteria) this;
        }

        public Criteria andDeleteYnNotLike(String value) {
            addCriterion("DELETE_YN not like", value, "deleteYn");
            return (Criteria) this;
        }

        public Criteria andDeleteYnIn(List<String> values) {
            addCriterion("DELETE_YN in", values, "deleteYn");
            return (Criteria) this;
        }

        public Criteria andDeleteYnNotIn(List<String> values) {
            addCriterion("DELETE_YN not in", values, "deleteYn");
            return (Criteria) this;
        }

        public Criteria andDeleteYnBetween(String value1, String value2) {
            addCriterion("DELETE_YN between", value1, value2, "deleteYn");
            return (Criteria) this;
        }

        public Criteria andDeleteYnNotBetween(String value1, String value2) {
            addCriterion("DELETE_YN not between", value1, value2, "deleteYn");
            return (Criteria) this;
        }

        public Criteria andForwardingIsNull() {
            addCriterion("FORWARDING is null");
            return (Criteria) this;
        }

        public Criteria andForwardingIsNotNull() {
            addCriterion("FORWARDING is not null");
            return (Criteria) this;
        }

        public Criteria andForwardingEqualTo(String value) {
            addCriterion("FORWARDING =", value, "forwarding");
            return (Criteria) this;
        }

        public Criteria andForwardingNotEqualTo(String value) {
            addCriterion("FORWARDING <>", value, "forwarding");
            return (Criteria) this;
        }

        public Criteria andForwardingGreaterThan(String value) {
            addCriterion("FORWARDING >", value, "forwarding");
            return (Criteria) this;
        }

        public Criteria andForwardingGreaterThanOrEqualTo(String value) {
            addCriterion("FORWARDING >=", value, "forwarding");
            return (Criteria) this;
        }

        public Criteria andForwardingLessThan(String value) {
            addCriterion("FORWARDING <", value, "forwarding");
            return (Criteria) this;
        }

        public Criteria andForwardingLessThanOrEqualTo(String value) {
            addCriterion("FORWARDING <=", value, "forwarding");
            return (Criteria) this;
        }

        public Criteria andForwardingLike(String value) {
            addCriterion("FORWARDING like", value, "forwarding");
            return (Criteria) this;
        }

        public Criteria andForwardingNotLike(String value) {
            addCriterion("FORWARDING not like", value, "forwarding");
            return (Criteria) this;
        }

        public Criteria andForwardingIn(List<String> values) {
            addCriterion("FORWARDING in", values, "forwarding");
            return (Criteria) this;
        }

        public Criteria andForwardingNotIn(List<String> values) {
            addCriterion("FORWARDING not in", values, "forwarding");
            return (Criteria) this;
        }

        public Criteria andForwardingBetween(String value1, String value2) {
            addCriterion("FORWARDING between", value1, value2, "forwarding");
            return (Criteria) this;
        }

        public Criteria andForwardingNotBetween(String value1, String value2) {
            addCriterion("FORWARDING not between", value1, value2, "forwarding");
            return (Criteria) this;
        }

        public Criteria andContentIsNull() {
            addCriterion("CONTENT is null");
            return (Criteria) this;
        }

        public Criteria andContentIsNotNull() {
            addCriterion("CONTENT is not null");
            return (Criteria) this;
        }

        public Criteria andContentEqualTo(String value) {
            addCriterion("CONTENT =", value, "content");
            return (Criteria) this;
        }

        public Criteria andContentNotEqualTo(String value) {
            addCriterion("CONTENT <>", value, "content");
            return (Criteria) this;
        }

        public Criteria andContentGreaterThan(String value) {
            addCriterion("CONTENT >", value, "content");
            return (Criteria) this;
        }

        public Criteria andContentGreaterThanOrEqualTo(String value) {
            addCriterion("CONTENT >=", value, "content");
            return (Criteria) this;
        }

        public Criteria andContentLessThan(String value) {
            addCriterion("CONTENT <", value, "content");
            return (Criteria) this;
        }

        public Criteria andContentLessThanOrEqualTo(String value) {
            addCriterion("CONTENT <=", value, "content");
            return (Criteria) this;
        }

        public Criteria andContentLike(String value) {
            addCriterion("CONTENT like", value, "content");
            return (Criteria) this;
        }

        public Criteria andContentNotLike(String value) {
            addCriterion("CONTENT not like", value, "content");
            return (Criteria) this;
        }

        public Criteria andContentIn(List<String> values) {
            addCriterion("CONTENT in", values, "content");
            return (Criteria) this;
        }

        public Criteria andContentNotIn(List<String> values) {
            addCriterion("CONTENT not in", values, "content");
            return (Criteria) this;
        }

        public Criteria andContentBetween(String value1, String value2) {
            addCriterion("CONTENT between", value1, value2, "content");
            return (Criteria) this;
        }

        public Criteria andContentNotBetween(String value1, String value2) {
            addCriterion("CONTENT not between", value1, value2, "content");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}