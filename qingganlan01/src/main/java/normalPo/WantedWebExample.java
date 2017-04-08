package normalPo;

import java.util.ArrayList;
import java.util.List;

public class WantedWebExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public WantedWebExample() {
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

        public Criteria andWantedIdIsNull() {
            addCriterion("WANTED_ID is null");
            return (Criteria) this;
        }

        public Criteria andWantedIdIsNotNull() {
            addCriterion("WANTED_ID is not null");
            return (Criteria) this;
        }

        public Criteria andWantedIdEqualTo(String value) {
            addCriterion("WANTED_ID =", value, "wantedId");
            return (Criteria) this;
        }

        public Criteria andWantedIdNotEqualTo(String value) {
            addCriterion("WANTED_ID <>", value, "wantedId");
            return (Criteria) this;
        }

        public Criteria andWantedIdGreaterThan(String value) {
            addCriterion("WANTED_ID >", value, "wantedId");
            return (Criteria) this;
        }

        public Criteria andWantedIdGreaterThanOrEqualTo(String value) {
            addCriterion("WANTED_ID >=", value, "wantedId");
            return (Criteria) this;
        }

        public Criteria andWantedIdLessThan(String value) {
            addCriterion("WANTED_ID <", value, "wantedId");
            return (Criteria) this;
        }

        public Criteria andWantedIdLessThanOrEqualTo(String value) {
            addCriterion("WANTED_ID <=", value, "wantedId");
            return (Criteria) this;
        }

        public Criteria andWantedIdLike(String value) {
            addCriterion("WANTED_ID like", value, "wantedId");
            return (Criteria) this;
        }

        public Criteria andWantedIdNotLike(String value) {
            addCriterion("WANTED_ID not like", value, "wantedId");
            return (Criteria) this;
        }

        public Criteria andWantedIdIn(List<String> values) {
            addCriterion("WANTED_ID in", values, "wantedId");
            return (Criteria) this;
        }

        public Criteria andWantedIdNotIn(List<String> values) {
            addCriterion("WANTED_ID not in", values, "wantedId");
            return (Criteria) this;
        }

        public Criteria andWantedIdBetween(String value1, String value2) {
            addCriterion("WANTED_ID between", value1, value2, "wantedId");
            return (Criteria) this;
        }

        public Criteria andWantedIdNotBetween(String value1, String value2) {
            addCriterion("WANTED_ID not between", value1, value2, "wantedId");
            return (Criteria) this;
        }

        public Criteria andWantedAddressIsNull() {
            addCriterion("WANTED_ADDRESS is null");
            return (Criteria) this;
        }

        public Criteria andWantedAddressIsNotNull() {
            addCriterion("WANTED_ADDRESS is not null");
            return (Criteria) this;
        }

        public Criteria andWantedAddressEqualTo(String value) {
            addCriterion("WANTED_ADDRESS =", value, "wantedAddress");
            return (Criteria) this;
        }

        public Criteria andWantedAddressNotEqualTo(String value) {
            addCriterion("WANTED_ADDRESS <>", value, "wantedAddress");
            return (Criteria) this;
        }

        public Criteria andWantedAddressGreaterThan(String value) {
            addCriterion("WANTED_ADDRESS >", value, "wantedAddress");
            return (Criteria) this;
        }

        public Criteria andWantedAddressGreaterThanOrEqualTo(String value) {
            addCriterion("WANTED_ADDRESS >=", value, "wantedAddress");
            return (Criteria) this;
        }

        public Criteria andWantedAddressLessThan(String value) {
            addCriterion("WANTED_ADDRESS <", value, "wantedAddress");
            return (Criteria) this;
        }

        public Criteria andWantedAddressLessThanOrEqualTo(String value) {
            addCriterion("WANTED_ADDRESS <=", value, "wantedAddress");
            return (Criteria) this;
        }

        public Criteria andWantedAddressLike(String value) {
            addCriterion("WANTED_ADDRESS like", value, "wantedAddress");
            return (Criteria) this;
        }

        public Criteria andWantedAddressNotLike(String value) {
            addCriterion("WANTED_ADDRESS not like", value, "wantedAddress");
            return (Criteria) this;
        }

        public Criteria andWantedAddressIn(List<String> values) {
            addCriterion("WANTED_ADDRESS in", values, "wantedAddress");
            return (Criteria) this;
        }

        public Criteria andWantedAddressNotIn(List<String> values) {
            addCriterion("WANTED_ADDRESS not in", values, "wantedAddress");
            return (Criteria) this;
        }

        public Criteria andWantedAddressBetween(String value1, String value2) {
            addCriterion("WANTED_ADDRESS between", value1, value2, "wantedAddress");
            return (Criteria) this;
        }

        public Criteria andWantedAddressNotBetween(String value1, String value2) {
            addCriterion("WANTED_ADDRESS not between", value1, value2, "wantedAddress");
            return (Criteria) this;
        }

        public Criteria andWantedDescIsNull() {
            addCriterion("WANTED_DESC is null");
            return (Criteria) this;
        }

        public Criteria andWantedDescIsNotNull() {
            addCriterion("WANTED_DESC is not null");
            return (Criteria) this;
        }

        public Criteria andWantedDescEqualTo(String value) {
            addCriterion("WANTED_DESC =", value, "wantedDesc");
            return (Criteria) this;
        }

        public Criteria andWantedDescNotEqualTo(String value) {
            addCriterion("WANTED_DESC <>", value, "wantedDesc");
            return (Criteria) this;
        }

        public Criteria andWantedDescGreaterThan(String value) {
            addCriterion("WANTED_DESC >", value, "wantedDesc");
            return (Criteria) this;
        }

        public Criteria andWantedDescGreaterThanOrEqualTo(String value) {
            addCriterion("WANTED_DESC >=", value, "wantedDesc");
            return (Criteria) this;
        }

        public Criteria andWantedDescLessThan(String value) {
            addCriterion("WANTED_DESC <", value, "wantedDesc");
            return (Criteria) this;
        }

        public Criteria andWantedDescLessThanOrEqualTo(String value) {
            addCriterion("WANTED_DESC <=", value, "wantedDesc");
            return (Criteria) this;
        }

        public Criteria andWantedDescLike(String value) {
            addCriterion("WANTED_DESC like", value, "wantedDesc");
            return (Criteria) this;
        }

        public Criteria andWantedDescNotLike(String value) {
            addCriterion("WANTED_DESC not like", value, "wantedDesc");
            return (Criteria) this;
        }

        public Criteria andWantedDescIn(List<String> values) {
            addCriterion("WANTED_DESC in", values, "wantedDesc");
            return (Criteria) this;
        }

        public Criteria andWantedDescNotIn(List<String> values) {
            addCriterion("WANTED_DESC not in", values, "wantedDesc");
            return (Criteria) this;
        }

        public Criteria andWantedDescBetween(String value1, String value2) {
            addCriterion("WANTED_DESC between", value1, value2, "wantedDesc");
            return (Criteria) this;
        }

        public Criteria andWantedDescNotBetween(String value1, String value2) {
            addCriterion("WANTED_DESC not between", value1, value2, "wantedDesc");
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