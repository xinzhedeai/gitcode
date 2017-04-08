package model;

import java.util.ArrayList;
import java.util.List;

public class MusicShareExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public MusicShareExample() {
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

        public Criteria andMusicIdIsNull() {
            addCriterion("MUSIC_ID is null");
            return (Criteria) this;
        }

        public Criteria andMusicIdIsNotNull() {
            addCriterion("MUSIC_ID is not null");
            return (Criteria) this;
        }

        public Criteria andMusicIdEqualTo(String value) {
            addCriterion("MUSIC_ID =", value, "musicId");
            return (Criteria) this;
        }

        public Criteria andMusicIdNotEqualTo(String value) {
            addCriterion("MUSIC_ID <>", value, "musicId");
            return (Criteria) this;
        }

        public Criteria andMusicIdGreaterThan(String value) {
            addCriterion("MUSIC_ID >", value, "musicId");
            return (Criteria) this;
        }

        public Criteria andMusicIdGreaterThanOrEqualTo(String value) {
            addCriterion("MUSIC_ID >=", value, "musicId");
            return (Criteria) this;
        }

        public Criteria andMusicIdLessThan(String value) {
            addCriterion("MUSIC_ID <", value, "musicId");
            return (Criteria) this;
        }

        public Criteria andMusicIdLessThanOrEqualTo(String value) {
            addCriterion("MUSIC_ID <=", value, "musicId");
            return (Criteria) this;
        }

        public Criteria andMusicIdLike(String value) {
            addCriterion("MUSIC_ID like", value, "musicId");
            return (Criteria) this;
        }

        public Criteria andMusicIdNotLike(String value) {
            addCriterion("MUSIC_ID not like", value, "musicId");
            return (Criteria) this;
        }

        public Criteria andMusicIdIn(List<String> values) {
            addCriterion("MUSIC_ID in", values, "musicId");
            return (Criteria) this;
        }

        public Criteria andMusicIdNotIn(List<String> values) {
            addCriterion("MUSIC_ID not in", values, "musicId");
            return (Criteria) this;
        }

        public Criteria andMusicIdBetween(String value1, String value2) {
            addCriterion("MUSIC_ID between", value1, value2, "musicId");
            return (Criteria) this;
        }

        public Criteria andMusicIdNotBetween(String value1, String value2) {
            addCriterion("MUSIC_ID not between", value1, value2, "musicId");
            return (Criteria) this;
        }

        public Criteria andMusicNameIsNull() {
            addCriterion("MUSIC_NAME is null");
            return (Criteria) this;
        }

        public Criteria andMusicNameIsNotNull() {
            addCriterion("MUSIC_NAME is not null");
            return (Criteria) this;
        }

        public Criteria andMusicNameEqualTo(String value) {
            addCriterion("MUSIC_NAME =", value, "musicName");
            return (Criteria) this;
        }

        public Criteria andMusicNameNotEqualTo(String value) {
            addCriterion("MUSIC_NAME <>", value, "musicName");
            return (Criteria) this;
        }

        public Criteria andMusicNameGreaterThan(String value) {
            addCriterion("MUSIC_NAME >", value, "musicName");
            return (Criteria) this;
        }

        public Criteria andMusicNameGreaterThanOrEqualTo(String value) {
            addCriterion("MUSIC_NAME >=", value, "musicName");
            return (Criteria) this;
        }

        public Criteria andMusicNameLessThan(String value) {
            addCriterion("MUSIC_NAME <", value, "musicName");
            return (Criteria) this;
        }

        public Criteria andMusicNameLessThanOrEqualTo(String value) {
            addCriterion("MUSIC_NAME <=", value, "musicName");
            return (Criteria) this;
        }

        public Criteria andMusicNameLike(String value) {
            addCriterion("MUSIC_NAME like", value, "musicName");
            return (Criteria) this;
        }

        public Criteria andMusicNameNotLike(String value) {
            addCriterion("MUSIC_NAME not like", value, "musicName");
            return (Criteria) this;
        }

        public Criteria andMusicNameIn(List<String> values) {
            addCriterion("MUSIC_NAME in", values, "musicName");
            return (Criteria) this;
        }

        public Criteria andMusicNameNotIn(List<String> values) {
            addCriterion("MUSIC_NAME not in", values, "musicName");
            return (Criteria) this;
        }

        public Criteria andMusicNameBetween(String value1, String value2) {
            addCriterion("MUSIC_NAME between", value1, value2, "musicName");
            return (Criteria) this;
        }

        public Criteria andMusicNameNotBetween(String value1, String value2) {
            addCriterion("MUSIC_NAME not between", value1, value2, "musicName");
            return (Criteria) this;
        }

        public Criteria andMusicPersonIsNull() {
            addCriterion("MUSIC_PERSON is null");
            return (Criteria) this;
        }

        public Criteria andMusicPersonIsNotNull() {
            addCriterion("MUSIC_PERSON is not null");
            return (Criteria) this;
        }

        public Criteria andMusicPersonEqualTo(String value) {
            addCriterion("MUSIC_PERSON =", value, "musicPerson");
            return (Criteria) this;
        }

        public Criteria andMusicPersonNotEqualTo(String value) {
            addCriterion("MUSIC_PERSON <>", value, "musicPerson");
            return (Criteria) this;
        }

        public Criteria andMusicPersonGreaterThan(String value) {
            addCriterion("MUSIC_PERSON >", value, "musicPerson");
            return (Criteria) this;
        }

        public Criteria andMusicPersonGreaterThanOrEqualTo(String value) {
            addCriterion("MUSIC_PERSON >=", value, "musicPerson");
            return (Criteria) this;
        }

        public Criteria andMusicPersonLessThan(String value) {
            addCriterion("MUSIC_PERSON <", value, "musicPerson");
            return (Criteria) this;
        }

        public Criteria andMusicPersonLessThanOrEqualTo(String value) {
            addCriterion("MUSIC_PERSON <=", value, "musicPerson");
            return (Criteria) this;
        }

        public Criteria andMusicPersonLike(String value) {
            addCriterion("MUSIC_PERSON like", value, "musicPerson");
            return (Criteria) this;
        }

        public Criteria andMusicPersonNotLike(String value) {
            addCriterion("MUSIC_PERSON not like", value, "musicPerson");
            return (Criteria) this;
        }

        public Criteria andMusicPersonIn(List<String> values) {
            addCriterion("MUSIC_PERSON in", values, "musicPerson");
            return (Criteria) this;
        }

        public Criteria andMusicPersonNotIn(List<String> values) {
            addCriterion("MUSIC_PERSON not in", values, "musicPerson");
            return (Criteria) this;
        }

        public Criteria andMusicPersonBetween(String value1, String value2) {
            addCriterion("MUSIC_PERSON between", value1, value2, "musicPerson");
            return (Criteria) this;
        }

        public Criteria andMusicPersonNotBetween(String value1, String value2) {
            addCriterion("MUSIC_PERSON not between", value1, value2, "musicPerson");
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