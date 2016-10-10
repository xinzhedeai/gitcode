package po;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ConcernInfoExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public ConcernInfoExample() {
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

        public Criteria andConcernedUsIdIsNull() {
            addCriterion("CONCERNED_US_ID is null");
            return (Criteria) this;
        }

        public Criteria andConcernedUsIdIsNotNull() {
            addCriterion("CONCERNED_US_ID is not null");
            return (Criteria) this;
        }

        public Criteria andConcernedUsIdEqualTo(String value) {
            addCriterion("CONCERNED_US_ID =", value, "concernedUsId");
            return (Criteria) this;
        }

        public Criteria andConcernedUsIdNotEqualTo(String value) {
            addCriterion("CONCERNED_US_ID <>", value, "concernedUsId");
            return (Criteria) this;
        }

        public Criteria andConcernedUsIdGreaterThan(String value) {
            addCriterion("CONCERNED_US_ID >", value, "concernedUsId");
            return (Criteria) this;
        }

        public Criteria andConcernedUsIdGreaterThanOrEqualTo(String value) {
            addCriterion("CONCERNED_US_ID >=", value, "concernedUsId");
            return (Criteria) this;
        }

        public Criteria andConcernedUsIdLessThan(String value) {
            addCriterion("CONCERNED_US_ID <", value, "concernedUsId");
            return (Criteria) this;
        }

        public Criteria andConcernedUsIdLessThanOrEqualTo(String value) {
            addCriterion("CONCERNED_US_ID <=", value, "concernedUsId");
            return (Criteria) this;
        }

        public Criteria andConcernedUsIdLike(String value) {
            addCriterion("CONCERNED_US_ID like", value, "concernedUsId");
            return (Criteria) this;
        }

        public Criteria andConcernedUsIdNotLike(String value) {
            addCriterion("CONCERNED_US_ID not like", value, "concernedUsId");
            return (Criteria) this;
        }

        public Criteria andConcernedUsIdIn(List<String> values) {
            addCriterion("CONCERNED_US_ID in", values, "concernedUsId");
            return (Criteria) this;
        }

        public Criteria andConcernedUsIdNotIn(List<String> values) {
            addCriterion("CONCERNED_US_ID not in", values, "concernedUsId");
            return (Criteria) this;
        }

        public Criteria andConcernedUsIdBetween(String value1, String value2) {
            addCriterion("CONCERNED_US_ID between", value1, value2, "concernedUsId");
            return (Criteria) this;
        }

        public Criteria andConcernedUsIdNotBetween(String value1, String value2) {
            addCriterion("CONCERNED_US_ID not between", value1, value2, "concernedUsId");
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

        public Criteria andConcernTimeIsNull() {
            addCriterion("CONCERN_TIME is null");
            return (Criteria) this;
        }

        public Criteria andConcernTimeIsNotNull() {
            addCriterion("CONCERN_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andConcernTimeEqualTo(Date value) {
            addCriterion("CONCERN_TIME =", value, "concernTime");
            return (Criteria) this;
        }

        public Criteria andConcernTimeNotEqualTo(Date value) {
            addCriterion("CONCERN_TIME <>", value, "concernTime");
            return (Criteria) this;
        }

        public Criteria andConcernTimeGreaterThan(Date value) {
            addCriterion("CONCERN_TIME >", value, "concernTime");
            return (Criteria) this;
        }

        public Criteria andConcernTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("CONCERN_TIME >=", value, "concernTime");
            return (Criteria) this;
        }

        public Criteria andConcernTimeLessThan(Date value) {
            addCriterion("CONCERN_TIME <", value, "concernTime");
            return (Criteria) this;
        }

        public Criteria andConcernTimeLessThanOrEqualTo(Date value) {
            addCriterion("CONCERN_TIME <=", value, "concernTime");
            return (Criteria) this;
        }

        public Criteria andConcernTimeIn(List<Date> values) {
            addCriterion("CONCERN_TIME in", values, "concernTime");
            return (Criteria) this;
        }

        public Criteria andConcernTimeNotIn(List<Date> values) {
            addCriterion("CONCERN_TIME not in", values, "concernTime");
            return (Criteria) this;
        }

        public Criteria andConcernTimeBetween(Date value1, Date value2) {
            addCriterion("CONCERN_TIME between", value1, value2, "concernTime");
            return (Criteria) this;
        }

        public Criteria andConcernTimeNotBetween(Date value1, Date value2) {
            addCriterion("CONCERN_TIME not between", value1, value2, "concernTime");
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