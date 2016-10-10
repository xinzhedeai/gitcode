package po;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class AccessTokenExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public AccessTokenExample() {
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

        public Criteria andAccessTokenIsNull() {
            addCriterion("access_token is null");
            return (Criteria) this;
        }

        public Criteria andAccessTokenIsNotNull() {
            addCriterion("access_token is not null");
            return (Criteria) this;
        }

        public Criteria andAccessTokenEqualTo(String value) {
            addCriterion("access_token =", value, "accessToken");
            return (Criteria) this;
        }

        public Criteria andAccessTokenNotEqualTo(String value) {
            addCriterion("access_token <>", value, "accessToken");
            return (Criteria) this;
        }

        public Criteria andAccessTokenGreaterThan(String value) {
            addCriterion("access_token >", value, "accessToken");
            return (Criteria) this;
        }

        public Criteria andAccessTokenGreaterThanOrEqualTo(String value) {
            addCriterion("access_token >=", value, "accessToken");
            return (Criteria) this;
        }

        public Criteria andAccessTokenLessThan(String value) {
            addCriterion("access_token <", value, "accessToken");
            return (Criteria) this;
        }

        public Criteria andAccessTokenLessThanOrEqualTo(String value) {
            addCriterion("access_token <=", value, "accessToken");
            return (Criteria) this;
        }

        public Criteria andAccessTokenLike(String value) {
            addCriterion("access_token like", value, "accessToken");
            return (Criteria) this;
        }

        public Criteria andAccessTokenNotLike(String value) {
            addCriterion("access_token not like", value, "accessToken");
            return (Criteria) this;
        }

        public Criteria andAccessTokenIn(List<String> values) {
            addCriterion("access_token in", values, "accessToken");
            return (Criteria) this;
        }

        public Criteria andAccessTokenNotIn(List<String> values) {
            addCriterion("access_token not in", values, "accessToken");
            return (Criteria) this;
        }

        public Criteria andAccessTokenBetween(String value1, String value2) {
            addCriterion("access_token between", value1, value2, "accessToken");
            return (Criteria) this;
        }

        public Criteria andAccessTokenNotBetween(String value1, String value2) {
            addCriterion("access_token not between", value1, value2, "accessToken");
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

        public Criteria andCreateTimeIsNull() {
            addCriterion("CREATE_TIME is null");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIsNotNull() {
            addCriterion("CREATE_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andCreateTimeEqualTo(Date value) {
            addCriterion("CREATE_TIME =", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotEqualTo(Date value) {
            addCriterion("CREATE_TIME <>", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeGreaterThan(Date value) {
            addCriterion("CREATE_TIME >", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("CREATE_TIME >=", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeLessThan(Date value) {
            addCriterion("CREATE_TIME <", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeLessThanOrEqualTo(Date value) {
            addCriterion("CREATE_TIME <=", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIn(List<Date> values) {
            addCriterion("CREATE_TIME in", values, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotIn(List<Date> values) {
            addCriterion("CREATE_TIME not in", values, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeBetween(Date value1, Date value2) {
            addCriterion("CREATE_TIME between", value1, value2, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotBetween(Date value1, Date value2) {
            addCriterion("CREATE_TIME not between", value1, value2, "createTime");
            return (Criteria) this;
        }

        public Criteria andExpireTsIsNull() {
            addCriterion("EXPIRE_TS is null");
            return (Criteria) this;
        }

        public Criteria andExpireTsIsNotNull() {
            addCriterion("EXPIRE_TS is not null");
            return (Criteria) this;
        }

        public Criteria andExpireTsEqualTo(Date value) {
            addCriterion("EXPIRE_TS =", value, "expireTs");
            return (Criteria) this;
        }

        public Criteria andExpireTsNotEqualTo(Date value) {
            addCriterion("EXPIRE_TS <>", value, "expireTs");
            return (Criteria) this;
        }

        public Criteria andExpireTsGreaterThan(Date value) {
            addCriterion("EXPIRE_TS >", value, "expireTs");
            return (Criteria) this;
        }

        public Criteria andExpireTsGreaterThanOrEqualTo(Date value) {
            addCriterion("EXPIRE_TS >=", value, "expireTs");
            return (Criteria) this;
        }

        public Criteria andExpireTsLessThan(Date value) {
            addCriterion("EXPIRE_TS <", value, "expireTs");
            return (Criteria) this;
        }

        public Criteria andExpireTsLessThanOrEqualTo(Date value) {
            addCriterion("EXPIRE_TS <=", value, "expireTs");
            return (Criteria) this;
        }

        public Criteria andExpireTsIn(List<Date> values) {
            addCriterion("EXPIRE_TS in", values, "expireTs");
            return (Criteria) this;
        }

        public Criteria andExpireTsNotIn(List<Date> values) {
            addCriterion("EXPIRE_TS not in", values, "expireTs");
            return (Criteria) this;
        }

        public Criteria andExpireTsBetween(Date value1, Date value2) {
            addCriterion("EXPIRE_TS between", value1, value2, "expireTs");
            return (Criteria) this;
        }

        public Criteria andExpireTsNotBetween(Date value1, Date value2) {
            addCriterion("EXPIRE_TS not between", value1, value2, "expireTs");
            return (Criteria) this;
        }

        public Criteria andLtReqTsIsNull() {
            addCriterion("LT_REQ_TS is null");
            return (Criteria) this;
        }

        public Criteria andLtReqTsIsNotNull() {
            addCriterion("LT_REQ_TS is not null");
            return (Criteria) this;
        }

        public Criteria andLtReqTsEqualTo(Date value) {
            addCriterion("LT_REQ_TS =", value, "ltReqTs");
            return (Criteria) this;
        }

        public Criteria andLtReqTsNotEqualTo(Date value) {
            addCriterion("LT_REQ_TS <>", value, "ltReqTs");
            return (Criteria) this;
        }

        public Criteria andLtReqTsGreaterThan(Date value) {
            addCriterion("LT_REQ_TS >", value, "ltReqTs");
            return (Criteria) this;
        }

        public Criteria andLtReqTsGreaterThanOrEqualTo(Date value) {
            addCriterion("LT_REQ_TS >=", value, "ltReqTs");
            return (Criteria) this;
        }

        public Criteria andLtReqTsLessThan(Date value) {
            addCriterion("LT_REQ_TS <", value, "ltReqTs");
            return (Criteria) this;
        }

        public Criteria andLtReqTsLessThanOrEqualTo(Date value) {
            addCriterion("LT_REQ_TS <=", value, "ltReqTs");
            return (Criteria) this;
        }

        public Criteria andLtReqTsIn(List<Date> values) {
            addCriterion("LT_REQ_TS in", values, "ltReqTs");
            return (Criteria) this;
        }

        public Criteria andLtReqTsNotIn(List<Date> values) {
            addCriterion("LT_REQ_TS not in", values, "ltReqTs");
            return (Criteria) this;
        }

        public Criteria andLtReqTsBetween(Date value1, Date value2) {
            addCriterion("LT_REQ_TS between", value1, value2, "ltReqTs");
            return (Criteria) this;
        }

        public Criteria andLtReqTsNotBetween(Date value1, Date value2) {
            addCriterion("LT_REQ_TS not between", value1, value2, "ltReqTs");
            return (Criteria) this;
        }

        public Criteria andRegDcIsNull() {
            addCriterion("REG_DC is null");
            return (Criteria) this;
        }

        public Criteria andRegDcIsNotNull() {
            addCriterion("REG_DC is not null");
            return (Criteria) this;
        }

        public Criteria andRegDcEqualTo(String value) {
            addCriterion("REG_DC =", value, "regDc");
            return (Criteria) this;
        }

        public Criteria andRegDcNotEqualTo(String value) {
            addCriterion("REG_DC <>", value, "regDc");
            return (Criteria) this;
        }

        public Criteria andRegDcGreaterThan(String value) {
            addCriterion("REG_DC >", value, "regDc");
            return (Criteria) this;
        }

        public Criteria andRegDcGreaterThanOrEqualTo(String value) {
            addCriterion("REG_DC >=", value, "regDc");
            return (Criteria) this;
        }

        public Criteria andRegDcLessThan(String value) {
            addCriterion("REG_DC <", value, "regDc");
            return (Criteria) this;
        }

        public Criteria andRegDcLessThanOrEqualTo(String value) {
            addCriterion("REG_DC <=", value, "regDc");
            return (Criteria) this;
        }

        public Criteria andRegDcLike(String value) {
            addCriterion("REG_DC like", value, "regDc");
            return (Criteria) this;
        }

        public Criteria andRegDcNotLike(String value) {
            addCriterion("REG_DC not like", value, "regDc");
            return (Criteria) this;
        }

        public Criteria andRegDcIn(List<String> values) {
            addCriterion("REG_DC in", values, "regDc");
            return (Criteria) this;
        }

        public Criteria andRegDcNotIn(List<String> values) {
            addCriterion("REG_DC not in", values, "regDc");
            return (Criteria) this;
        }

        public Criteria andRegDcBetween(String value1, String value2) {
            addCriterion("REG_DC between", value1, value2, "regDc");
            return (Criteria) this;
        }

        public Criteria andRegDcNotBetween(String value1, String value2) {
            addCriterion("REG_DC not between", value1, value2, "regDc");
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