package normalPo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class OptionBlogInfoExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public OptionBlogInfoExample() {
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

        public Criteria andBlogOptIdIsNull() {
            addCriterion("BLOG_OPT_ID is null");
            return (Criteria) this;
        }

        public Criteria andBlogOptIdIsNotNull() {
            addCriterion("BLOG_OPT_ID is not null");
            return (Criteria) this;
        }

        public Criteria andBlogOptIdEqualTo(String value) {
            addCriterion("BLOG_OPT_ID =", value, "blogOptId");
            return (Criteria) this;
        }

        public Criteria andBlogOptIdNotEqualTo(String value) {
            addCriterion("BLOG_OPT_ID <>", value, "blogOptId");
            return (Criteria) this;
        }

        public Criteria andBlogOptIdGreaterThan(String value) {
            addCriterion("BLOG_OPT_ID >", value, "blogOptId");
            return (Criteria) this;
        }

        public Criteria andBlogOptIdGreaterThanOrEqualTo(String value) {
            addCriterion("BLOG_OPT_ID >=", value, "blogOptId");
            return (Criteria) this;
        }

        public Criteria andBlogOptIdLessThan(String value) {
            addCriterion("BLOG_OPT_ID <", value, "blogOptId");
            return (Criteria) this;
        }

        public Criteria andBlogOptIdLessThanOrEqualTo(String value) {
            addCriterion("BLOG_OPT_ID <=", value, "blogOptId");
            return (Criteria) this;
        }

        public Criteria andBlogOptIdLike(String value) {
            addCriterion("BLOG_OPT_ID like", value, "blogOptId");
            return (Criteria) this;
        }

        public Criteria andBlogOptIdNotLike(String value) {
            addCriterion("BLOG_OPT_ID not like", value, "blogOptId");
            return (Criteria) this;
        }

        public Criteria andBlogOptIdIn(List<String> values) {
            addCriterion("BLOG_OPT_ID in", values, "blogOptId");
            return (Criteria) this;
        }

        public Criteria andBlogOptIdNotIn(List<String> values) {
            addCriterion("BLOG_OPT_ID not in", values, "blogOptId");
            return (Criteria) this;
        }

        public Criteria andBlogOptIdBetween(String value1, String value2) {
            addCriterion("BLOG_OPT_ID between", value1, value2, "blogOptId");
            return (Criteria) this;
        }

        public Criteria andBlogOptIdNotBetween(String value1, String value2) {
            addCriterion("BLOG_OPT_ID not between", value1, value2, "blogOptId");
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

        public Criteria andCollectDateIsNull() {
            addCriterion("COLLECT_DATE is null");
            return (Criteria) this;
        }

        public Criteria andCollectDateIsNotNull() {
            addCriterion("COLLECT_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andCollectDateEqualTo(Date value) {
            addCriterion("COLLECT_DATE =", value, "collectDate");
            return (Criteria) this;
        }

        public Criteria andCollectDateNotEqualTo(Date value) {
            addCriterion("COLLECT_DATE <>", value, "collectDate");
            return (Criteria) this;
        }

        public Criteria andCollectDateGreaterThan(Date value) {
            addCriterion("COLLECT_DATE >", value, "collectDate");
            return (Criteria) this;
        }

        public Criteria andCollectDateGreaterThanOrEqualTo(Date value) {
            addCriterion("COLLECT_DATE >=", value, "collectDate");
            return (Criteria) this;
        }

        public Criteria andCollectDateLessThan(Date value) {
            addCriterion("COLLECT_DATE <", value, "collectDate");
            return (Criteria) this;
        }

        public Criteria andCollectDateLessThanOrEqualTo(Date value) {
            addCriterion("COLLECT_DATE <=", value, "collectDate");
            return (Criteria) this;
        }

        public Criteria andCollectDateIn(List<Date> values) {
            addCriterion("COLLECT_DATE in", values, "collectDate");
            return (Criteria) this;
        }

        public Criteria andCollectDateNotIn(List<Date> values) {
            addCriterion("COLLECT_DATE not in", values, "collectDate");
            return (Criteria) this;
        }

        public Criteria andCollectDateBetween(Date value1, Date value2) {
            addCriterion("COLLECT_DATE between", value1, value2, "collectDate");
            return (Criteria) this;
        }

        public Criteria andCollectDateNotBetween(Date value1, Date value2) {
            addCriterion("COLLECT_DATE not between", value1, value2, "collectDate");
            return (Criteria) this;
        }

        public Criteria andUpvoteDateIsNull() {
            addCriterion("UPVOTE_DATE is null");
            return (Criteria) this;
        }

        public Criteria andUpvoteDateIsNotNull() {
            addCriterion("UPVOTE_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andUpvoteDateEqualTo(Date value) {
            addCriterion("UPVOTE_DATE =", value, "upvoteDate");
            return (Criteria) this;
        }

        public Criteria andUpvoteDateNotEqualTo(Date value) {
            addCriterion("UPVOTE_DATE <>", value, "upvoteDate");
            return (Criteria) this;
        }

        public Criteria andUpvoteDateGreaterThan(Date value) {
            addCriterion("UPVOTE_DATE >", value, "upvoteDate");
            return (Criteria) this;
        }

        public Criteria andUpvoteDateGreaterThanOrEqualTo(Date value) {
            addCriterion("UPVOTE_DATE >=", value, "upvoteDate");
            return (Criteria) this;
        }

        public Criteria andUpvoteDateLessThan(Date value) {
            addCriterion("UPVOTE_DATE <", value, "upvoteDate");
            return (Criteria) this;
        }

        public Criteria andUpvoteDateLessThanOrEqualTo(Date value) {
            addCriterion("UPVOTE_DATE <=", value, "upvoteDate");
            return (Criteria) this;
        }

        public Criteria andUpvoteDateIn(List<Date> values) {
            addCriterion("UPVOTE_DATE in", values, "upvoteDate");
            return (Criteria) this;
        }

        public Criteria andUpvoteDateNotIn(List<Date> values) {
            addCriterion("UPVOTE_DATE not in", values, "upvoteDate");
            return (Criteria) this;
        }

        public Criteria andUpvoteDateBetween(Date value1, Date value2) {
            addCriterion("UPVOTE_DATE between", value1, value2, "upvoteDate");
            return (Criteria) this;
        }

        public Criteria andUpvoteDateNotBetween(Date value1, Date value2) {
            addCriterion("UPVOTE_DATE not between", value1, value2, "upvoteDate");
            return (Criteria) this;
        }

        public Criteria andForwardDateIsNull() {
            addCriterion("FORWARD_DATE is null");
            return (Criteria) this;
        }

        public Criteria andForwardDateIsNotNull() {
            addCriterion("FORWARD_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andForwardDateEqualTo(Date value) {
            addCriterion("FORWARD_DATE =", value, "forwardDate");
            return (Criteria) this;
        }

        public Criteria andForwardDateNotEqualTo(Date value) {
            addCriterion("FORWARD_DATE <>", value, "forwardDate");
            return (Criteria) this;
        }

        public Criteria andForwardDateGreaterThan(Date value) {
            addCriterion("FORWARD_DATE >", value, "forwardDate");
            return (Criteria) this;
        }

        public Criteria andForwardDateGreaterThanOrEqualTo(Date value) {
            addCriterion("FORWARD_DATE >=", value, "forwardDate");
            return (Criteria) this;
        }

        public Criteria andForwardDateLessThan(Date value) {
            addCriterion("FORWARD_DATE <", value, "forwardDate");
            return (Criteria) this;
        }

        public Criteria andForwardDateLessThanOrEqualTo(Date value) {
            addCriterion("FORWARD_DATE <=", value, "forwardDate");
            return (Criteria) this;
        }

        public Criteria andForwardDateIn(List<Date> values) {
            addCriterion("FORWARD_DATE in", values, "forwardDate");
            return (Criteria) this;
        }

        public Criteria andForwardDateNotIn(List<Date> values) {
            addCriterion("FORWARD_DATE not in", values, "forwardDate");
            return (Criteria) this;
        }

        public Criteria andForwardDateBetween(Date value1, Date value2) {
            addCriterion("FORWARD_DATE between", value1, value2, "forwardDate");
            return (Criteria) this;
        }

        public Criteria andForwardDateNotBetween(Date value1, Date value2) {
            addCriterion("FORWARD_DATE not between", value1, value2, "forwardDate");
            return (Criteria) this;
        }

        public Criteria andIsCollectedIsNull() {
            addCriterion("IS_COLLECTED is null");
            return (Criteria) this;
        }

        public Criteria andIsCollectedIsNotNull() {
            addCriterion("IS_COLLECTED is not null");
            return (Criteria) this;
        }

        public Criteria andIsCollectedEqualTo(String value) {
            addCriterion("IS_COLLECTED =", value, "isCollected");
            return (Criteria) this;
        }

        public Criteria andIsCollectedNotEqualTo(String value) {
            addCriterion("IS_COLLECTED <>", value, "isCollected");
            return (Criteria) this;
        }

        public Criteria andIsCollectedGreaterThan(String value) {
            addCriterion("IS_COLLECTED >", value, "isCollected");
            return (Criteria) this;
        }

        public Criteria andIsCollectedGreaterThanOrEqualTo(String value) {
            addCriterion("IS_COLLECTED >=", value, "isCollected");
            return (Criteria) this;
        }

        public Criteria andIsCollectedLessThan(String value) {
            addCriterion("IS_COLLECTED <", value, "isCollected");
            return (Criteria) this;
        }

        public Criteria andIsCollectedLessThanOrEqualTo(String value) {
            addCriterion("IS_COLLECTED <=", value, "isCollected");
            return (Criteria) this;
        }

        public Criteria andIsCollectedLike(String value) {
            addCriterion("IS_COLLECTED like", value, "isCollected");
            return (Criteria) this;
        }

        public Criteria andIsCollectedNotLike(String value) {
            addCriterion("IS_COLLECTED not like", value, "isCollected");
            return (Criteria) this;
        }

        public Criteria andIsCollectedIn(List<String> values) {
            addCriterion("IS_COLLECTED in", values, "isCollected");
            return (Criteria) this;
        }

        public Criteria andIsCollectedNotIn(List<String> values) {
            addCriterion("IS_COLLECTED not in", values, "isCollected");
            return (Criteria) this;
        }

        public Criteria andIsCollectedBetween(String value1, String value2) {
            addCriterion("IS_COLLECTED between", value1, value2, "isCollected");
            return (Criteria) this;
        }

        public Criteria andIsCollectedNotBetween(String value1, String value2) {
            addCriterion("IS_COLLECTED not between", value1, value2, "isCollected");
            return (Criteria) this;
        }

        public Criteria andIsForwardIsNull() {
            addCriterion("IS_FORWARD is null");
            return (Criteria) this;
        }

        public Criteria andIsForwardIsNotNull() {
            addCriterion("IS_FORWARD is not null");
            return (Criteria) this;
        }

        public Criteria andIsForwardEqualTo(String value) {
            addCriterion("IS_FORWARD =", value, "isForward");
            return (Criteria) this;
        }

        public Criteria andIsForwardNotEqualTo(String value) {
            addCriterion("IS_FORWARD <>", value, "isForward");
            return (Criteria) this;
        }

        public Criteria andIsForwardGreaterThan(String value) {
            addCriterion("IS_FORWARD >", value, "isForward");
            return (Criteria) this;
        }

        public Criteria andIsForwardGreaterThanOrEqualTo(String value) {
            addCriterion("IS_FORWARD >=", value, "isForward");
            return (Criteria) this;
        }

        public Criteria andIsForwardLessThan(String value) {
            addCriterion("IS_FORWARD <", value, "isForward");
            return (Criteria) this;
        }

        public Criteria andIsForwardLessThanOrEqualTo(String value) {
            addCriterion("IS_FORWARD <=", value, "isForward");
            return (Criteria) this;
        }

        public Criteria andIsForwardLike(String value) {
            addCriterion("IS_FORWARD like", value, "isForward");
            return (Criteria) this;
        }

        public Criteria andIsForwardNotLike(String value) {
            addCriterion("IS_FORWARD not like", value, "isForward");
            return (Criteria) this;
        }

        public Criteria andIsForwardIn(List<String> values) {
            addCriterion("IS_FORWARD in", values, "isForward");
            return (Criteria) this;
        }

        public Criteria andIsForwardNotIn(List<String> values) {
            addCriterion("IS_FORWARD not in", values, "isForward");
            return (Criteria) this;
        }

        public Criteria andIsForwardBetween(String value1, String value2) {
            addCriterion("IS_FORWARD between", value1, value2, "isForward");
            return (Criteria) this;
        }

        public Criteria andIsForwardNotBetween(String value1, String value2) {
            addCriterion("IS_FORWARD not between", value1, value2, "isForward");
            return (Criteria) this;
        }

        public Criteria andIsUpvoteIsNull() {
            addCriterion("IS_UPVOTE is null");
            return (Criteria) this;
        }

        public Criteria andIsUpvoteIsNotNull() {
            addCriterion("IS_UPVOTE is not null");
            return (Criteria) this;
        }

        public Criteria andIsUpvoteEqualTo(String value) {
            addCriterion("IS_UPVOTE =", value, "isUpvote");
            return (Criteria) this;
        }

        public Criteria andIsUpvoteNotEqualTo(String value) {
            addCriterion("IS_UPVOTE <>", value, "isUpvote");
            return (Criteria) this;
        }

        public Criteria andIsUpvoteGreaterThan(String value) {
            addCriterion("IS_UPVOTE >", value, "isUpvote");
            return (Criteria) this;
        }

        public Criteria andIsUpvoteGreaterThanOrEqualTo(String value) {
            addCriterion("IS_UPVOTE >=", value, "isUpvote");
            return (Criteria) this;
        }

        public Criteria andIsUpvoteLessThan(String value) {
            addCriterion("IS_UPVOTE <", value, "isUpvote");
            return (Criteria) this;
        }

        public Criteria andIsUpvoteLessThanOrEqualTo(String value) {
            addCriterion("IS_UPVOTE <=", value, "isUpvote");
            return (Criteria) this;
        }

        public Criteria andIsUpvoteLike(String value) {
            addCriterion("IS_UPVOTE like", value, "isUpvote");
            return (Criteria) this;
        }

        public Criteria andIsUpvoteNotLike(String value) {
            addCriterion("IS_UPVOTE not like", value, "isUpvote");
            return (Criteria) this;
        }

        public Criteria andIsUpvoteIn(List<String> values) {
            addCriterion("IS_UPVOTE in", values, "isUpvote");
            return (Criteria) this;
        }

        public Criteria andIsUpvoteNotIn(List<String> values) {
            addCriterion("IS_UPVOTE not in", values, "isUpvote");
            return (Criteria) this;
        }

        public Criteria andIsUpvoteBetween(String value1, String value2) {
            addCriterion("IS_UPVOTE between", value1, value2, "isUpvote");
            return (Criteria) this;
        }

        public Criteria andIsUpvoteNotBetween(String value1, String value2) {
            addCriterion("IS_UPVOTE not between", value1, value2, "isUpvote");
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