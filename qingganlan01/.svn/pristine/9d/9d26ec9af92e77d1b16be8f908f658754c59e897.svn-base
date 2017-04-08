package normalPo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class LogExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public LogExample() {
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

        public Criteria andLogIdIsNull() {
            addCriterion("LOG_ID is null");
            return (Criteria) this;
        }

        public Criteria andLogIdIsNotNull() {
            addCriterion("LOG_ID is not null");
            return (Criteria) this;
        }

        public Criteria andLogIdEqualTo(String value) {
            addCriterion("LOG_ID =", value, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdNotEqualTo(String value) {
            addCriterion("LOG_ID <>", value, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdGreaterThan(String value) {
            addCriterion("LOG_ID >", value, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdGreaterThanOrEqualTo(String value) {
            addCriterion("LOG_ID >=", value, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdLessThan(String value) {
            addCriterion("LOG_ID <", value, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdLessThanOrEqualTo(String value) {
            addCriterion("LOG_ID <=", value, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdLike(String value) {
            addCriterion("LOG_ID like", value, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdNotLike(String value) {
            addCriterion("LOG_ID not like", value, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdIn(List<String> values) {
            addCriterion("LOG_ID in", values, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdNotIn(List<String> values) {
            addCriterion("LOG_ID not in", values, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdBetween(String value1, String value2) {
            addCriterion("LOG_ID between", value1, value2, "logId");
            return (Criteria) this;
        }

        public Criteria andLogIdNotBetween(String value1, String value2) {
            addCriterion("LOG_ID not between", value1, value2, "logId");
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

        public Criteria andLogContentIsNull() {
            addCriterion("LOG_CONTENT is null");
            return (Criteria) this;
        }

        public Criteria andLogContentIsNotNull() {
            addCriterion("LOG_CONTENT is not null");
            return (Criteria) this;
        }

        public Criteria andLogContentEqualTo(String value) {
            addCriterion("LOG_CONTENT =", value, "logContent");
            return (Criteria) this;
        }

        public Criteria andLogContentNotEqualTo(String value) {
            addCriterion("LOG_CONTENT <>", value, "logContent");
            return (Criteria) this;
        }

        public Criteria andLogContentGreaterThan(String value) {
            addCriterion("LOG_CONTENT >", value, "logContent");
            return (Criteria) this;
        }

        public Criteria andLogContentGreaterThanOrEqualTo(String value) {
            addCriterion("LOG_CONTENT >=", value, "logContent");
            return (Criteria) this;
        }

        public Criteria andLogContentLessThan(String value) {
            addCriterion("LOG_CONTENT <", value, "logContent");
            return (Criteria) this;
        }

        public Criteria andLogContentLessThanOrEqualTo(String value) {
            addCriterion("LOG_CONTENT <=", value, "logContent");
            return (Criteria) this;
        }

        public Criteria andLogContentLike(String value) {
            addCriterion("LOG_CONTENT like", value, "logContent");
            return (Criteria) this;
        }

        public Criteria andLogContentNotLike(String value) {
            addCriterion("LOG_CONTENT not like", value, "logContent");
            return (Criteria) this;
        }

        public Criteria andLogContentIn(List<String> values) {
            addCriterion("LOG_CONTENT in", values, "logContent");
            return (Criteria) this;
        }

        public Criteria andLogContentNotIn(List<String> values) {
            addCriterion("LOG_CONTENT not in", values, "logContent");
            return (Criteria) this;
        }

        public Criteria andLogContentBetween(String value1, String value2) {
            addCriterion("LOG_CONTENT between", value1, value2, "logContent");
            return (Criteria) this;
        }

        public Criteria andLogContentNotBetween(String value1, String value2) {
            addCriterion("LOG_CONTENT not between", value1, value2, "logContent");
            return (Criteria) this;
        }

        public Criteria andSendDateIsNull() {
            addCriterion("SEND_DATE is null");
            return (Criteria) this;
        }

        public Criteria andSendDateIsNotNull() {
            addCriterion("SEND_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andSendDateEqualTo(Date value) {
            addCriterion("SEND_DATE =", value, "sendDate");
            return (Criteria) this;
        }

        public Criteria andSendDateNotEqualTo(Date value) {
            addCriterion("SEND_DATE <>", value, "sendDate");
            return (Criteria) this;
        }

        public Criteria andSendDateGreaterThan(Date value) {
            addCriterion("SEND_DATE >", value, "sendDate");
            return (Criteria) this;
        }

        public Criteria andSendDateGreaterThanOrEqualTo(Date value) {
            addCriterion("SEND_DATE >=", value, "sendDate");
            return (Criteria) this;
        }

        public Criteria andSendDateLessThan(Date value) {
            addCriterion("SEND_DATE <", value, "sendDate");
            return (Criteria) this;
        }

        public Criteria andSendDateLessThanOrEqualTo(Date value) {
            addCriterion("SEND_DATE <=", value, "sendDate");
            return (Criteria) this;
        }

        public Criteria andSendDateIn(List<Date> values) {
            addCriterion("SEND_DATE in", values, "sendDate");
            return (Criteria) this;
        }

        public Criteria andSendDateNotIn(List<Date> values) {
            addCriterion("SEND_DATE not in", values, "sendDate");
            return (Criteria) this;
        }

        public Criteria andSendDateBetween(Date value1, Date value2) {
            addCriterion("SEND_DATE between", value1, value2, "sendDate");
            return (Criteria) this;
        }

        public Criteria andSendDateNotBetween(Date value1, Date value2) {
            addCriterion("SEND_DATE not between", value1, value2, "sendDate");
            return (Criteria) this;
        }

        public Criteria andIsDeleteIsNull() {
            addCriterion("IS_DELETE is null");
            return (Criteria) this;
        }

        public Criteria andIsDeleteIsNotNull() {
            addCriterion("IS_DELETE is not null");
            return (Criteria) this;
        }

        public Criteria andIsDeleteEqualTo(String value) {
            addCriterion("IS_DELETE =", value, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteNotEqualTo(String value) {
            addCriterion("IS_DELETE <>", value, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteGreaterThan(String value) {
            addCriterion("IS_DELETE >", value, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteGreaterThanOrEqualTo(String value) {
            addCriterion("IS_DELETE >=", value, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteLessThan(String value) {
            addCriterion("IS_DELETE <", value, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteLessThanOrEqualTo(String value) {
            addCriterion("IS_DELETE <=", value, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteLike(String value) {
            addCriterion("IS_DELETE like", value, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteNotLike(String value) {
            addCriterion("IS_DELETE not like", value, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteIn(List<String> values) {
            addCriterion("IS_DELETE in", values, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteNotIn(List<String> values) {
            addCriterion("IS_DELETE not in", values, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteBetween(String value1, String value2) {
            addCriterion("IS_DELETE between", value1, value2, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteNotBetween(String value1, String value2) {
            addCriterion("IS_DELETE not between", value1, value2, "isDelete");
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

        public Criteria andForwardingValiableIsNull() {
            addCriterion("FORWARDING_VALIABLE is null");
            return (Criteria) this;
        }

        public Criteria andForwardingValiableIsNotNull() {
            addCriterion("FORWARDING_VALIABLE is not null");
            return (Criteria) this;
        }

        public Criteria andForwardingValiableEqualTo(String value) {
            addCriterion("FORWARDING_VALIABLE =", value, "forwardingValiable");
            return (Criteria) this;
        }

        public Criteria andForwardingValiableNotEqualTo(String value) {
            addCriterion("FORWARDING_VALIABLE <>", value, "forwardingValiable");
            return (Criteria) this;
        }

        public Criteria andForwardingValiableGreaterThan(String value) {
            addCriterion("FORWARDING_VALIABLE >", value, "forwardingValiable");
            return (Criteria) this;
        }

        public Criteria andForwardingValiableGreaterThanOrEqualTo(String value) {
            addCriterion("FORWARDING_VALIABLE >=", value, "forwardingValiable");
            return (Criteria) this;
        }

        public Criteria andForwardingValiableLessThan(String value) {
            addCriterion("FORWARDING_VALIABLE <", value, "forwardingValiable");
            return (Criteria) this;
        }

        public Criteria andForwardingValiableLessThanOrEqualTo(String value) {
            addCriterion("FORWARDING_VALIABLE <=", value, "forwardingValiable");
            return (Criteria) this;
        }

        public Criteria andForwardingValiableLike(String value) {
            addCriterion("FORWARDING_VALIABLE like", value, "forwardingValiable");
            return (Criteria) this;
        }

        public Criteria andForwardingValiableNotLike(String value) {
            addCriterion("FORWARDING_VALIABLE not like", value, "forwardingValiable");
            return (Criteria) this;
        }

        public Criteria andForwardingValiableIn(List<String> values) {
            addCriterion("FORWARDING_VALIABLE in", values, "forwardingValiable");
            return (Criteria) this;
        }

        public Criteria andForwardingValiableNotIn(List<String> values) {
            addCriterion("FORWARDING_VALIABLE not in", values, "forwardingValiable");
            return (Criteria) this;
        }

        public Criteria andForwardingValiableBetween(String value1, String value2) {
            addCriterion("FORWARDING_VALIABLE between", value1, value2, "forwardingValiable");
            return (Criteria) this;
        }

        public Criteria andForwardingValiableNotBetween(String value1, String value2) {
            addCriterion("FORWARDING_VALIABLE not between", value1, value2, "forwardingValiable");
            return (Criteria) this;
        }

        public Criteria andForwardedNoIsNull() {
            addCriterion("FORWARDED_NO is null");
            return (Criteria) this;
        }

        public Criteria andForwardedNoIsNotNull() {
            addCriterion("FORWARDED_NO is not null");
            return (Criteria) this;
        }

        public Criteria andForwardedNoEqualTo(Integer value) {
            addCriterion("FORWARDED_NO =", value, "forwardedNo");
            return (Criteria) this;
        }

        public Criteria andForwardedNoNotEqualTo(Integer value) {
            addCriterion("FORWARDED_NO <>", value, "forwardedNo");
            return (Criteria) this;
        }

        public Criteria andForwardedNoGreaterThan(Integer value) {
            addCriterion("FORWARDED_NO >", value, "forwardedNo");
            return (Criteria) this;
        }

        public Criteria andForwardedNoGreaterThanOrEqualTo(Integer value) {
            addCriterion("FORWARDED_NO >=", value, "forwardedNo");
            return (Criteria) this;
        }

        public Criteria andForwardedNoLessThan(Integer value) {
            addCriterion("FORWARDED_NO <", value, "forwardedNo");
            return (Criteria) this;
        }

        public Criteria andForwardedNoLessThanOrEqualTo(Integer value) {
            addCriterion("FORWARDED_NO <=", value, "forwardedNo");
            return (Criteria) this;
        }

        public Criteria andForwardedNoIn(List<Integer> values) {
            addCriterion("FORWARDED_NO in", values, "forwardedNo");
            return (Criteria) this;
        }

        public Criteria andForwardedNoNotIn(List<Integer> values) {
            addCriterion("FORWARDED_NO not in", values, "forwardedNo");
            return (Criteria) this;
        }

        public Criteria andForwardedNoBetween(Integer value1, Integer value2) {
            addCriterion("FORWARDED_NO between", value1, value2, "forwardedNo");
            return (Criteria) this;
        }

        public Criteria andForwardedNoNotBetween(Integer value1, Integer value2) {
            addCriterion("FORWARDED_NO not between", value1, value2, "forwardedNo");
            return (Criteria) this;
        }

        public Criteria andLogStateIsNull() {
            addCriterion("LOG_STATE is null");
            return (Criteria) this;
        }

        public Criteria andLogStateIsNotNull() {
            addCriterion("LOG_STATE is not null");
            return (Criteria) this;
        }

        public Criteria andLogStateEqualTo(String value) {
            addCriterion("LOG_STATE =", value, "logState");
            return (Criteria) this;
        }

        public Criteria andLogStateNotEqualTo(String value) {
            addCriterion("LOG_STATE <>", value, "logState");
            return (Criteria) this;
        }

        public Criteria andLogStateGreaterThan(String value) {
            addCriterion("LOG_STATE >", value, "logState");
            return (Criteria) this;
        }

        public Criteria andLogStateGreaterThanOrEqualTo(String value) {
            addCriterion("LOG_STATE >=", value, "logState");
            return (Criteria) this;
        }

        public Criteria andLogStateLessThan(String value) {
            addCriterion("LOG_STATE <", value, "logState");
            return (Criteria) this;
        }

        public Criteria andLogStateLessThanOrEqualTo(String value) {
            addCriterion("LOG_STATE <=", value, "logState");
            return (Criteria) this;
        }

        public Criteria andLogStateLike(String value) {
            addCriterion("LOG_STATE like", value, "logState");
            return (Criteria) this;
        }

        public Criteria andLogStateNotLike(String value) {
            addCriterion("LOG_STATE not like", value, "logState");
            return (Criteria) this;
        }

        public Criteria andLogStateIn(List<String> values) {
            addCriterion("LOG_STATE in", values, "logState");
            return (Criteria) this;
        }

        public Criteria andLogStateNotIn(List<String> values) {
            addCriterion("LOG_STATE not in", values, "logState");
            return (Criteria) this;
        }

        public Criteria andLogStateBetween(String value1, String value2) {
            addCriterion("LOG_STATE between", value1, value2, "logState");
            return (Criteria) this;
        }

        public Criteria andLogStateNotBetween(String value1, String value2) {
            addCriterion("LOG_STATE not between", value1, value2, "logState");
            return (Criteria) this;
        }

        public Criteria andLogUpdateDateIsNull() {
            addCriterion("LOG_UPDATE_DATE is null");
            return (Criteria) this;
        }

        public Criteria andLogUpdateDateIsNotNull() {
            addCriterion("LOG_UPDATE_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andLogUpdateDateEqualTo(Date value) {
            addCriterion("LOG_UPDATE_DATE =", value, "logUpdateDate");
            return (Criteria) this;
        }

        public Criteria andLogUpdateDateNotEqualTo(Date value) {
            addCriterion("LOG_UPDATE_DATE <>", value, "logUpdateDate");
            return (Criteria) this;
        }

        public Criteria andLogUpdateDateGreaterThan(Date value) {
            addCriterion("LOG_UPDATE_DATE >", value, "logUpdateDate");
            return (Criteria) this;
        }

        public Criteria andLogUpdateDateGreaterThanOrEqualTo(Date value) {
            addCriterion("LOG_UPDATE_DATE >=", value, "logUpdateDate");
            return (Criteria) this;
        }

        public Criteria andLogUpdateDateLessThan(Date value) {
            addCriterion("LOG_UPDATE_DATE <", value, "logUpdateDate");
            return (Criteria) this;
        }

        public Criteria andLogUpdateDateLessThanOrEqualTo(Date value) {
            addCriterion("LOG_UPDATE_DATE <=", value, "logUpdateDate");
            return (Criteria) this;
        }

        public Criteria andLogUpdateDateIn(List<Date> values) {
            addCriterion("LOG_UPDATE_DATE in", values, "logUpdateDate");
            return (Criteria) this;
        }

        public Criteria andLogUpdateDateNotIn(List<Date> values) {
            addCriterion("LOG_UPDATE_DATE not in", values, "logUpdateDate");
            return (Criteria) this;
        }

        public Criteria andLogUpdateDateBetween(Date value1, Date value2) {
            addCriterion("LOG_UPDATE_DATE between", value1, value2, "logUpdateDate");
            return (Criteria) this;
        }

        public Criteria andLogUpdateDateNotBetween(Date value1, Date value2) {
            addCriterion("LOG_UPDATE_DATE not between", value1, value2, "logUpdateDate");
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