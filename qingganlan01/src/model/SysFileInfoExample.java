package model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class SysFileInfoExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public SysFileInfoExample() {
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

        public Criteria andFileIdIsNull() {
            addCriterion("FILE_ID is null");
            return (Criteria) this;
        }

        public Criteria andFileIdIsNotNull() {
            addCriterion("FILE_ID is not null");
            return (Criteria) this;
        }

        public Criteria andFileIdEqualTo(String value) {
            addCriterion("FILE_ID =", value, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdNotEqualTo(String value) {
            addCriterion("FILE_ID <>", value, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdGreaterThan(String value) {
            addCriterion("FILE_ID >", value, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdGreaterThanOrEqualTo(String value) {
            addCriterion("FILE_ID >=", value, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdLessThan(String value) {
            addCriterion("FILE_ID <", value, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdLessThanOrEqualTo(String value) {
            addCriterion("FILE_ID <=", value, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdLike(String value) {
            addCriterion("FILE_ID like", value, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdNotLike(String value) {
            addCriterion("FILE_ID not like", value, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdIn(List<String> values) {
            addCriterion("FILE_ID in", values, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdNotIn(List<String> values) {
            addCriterion("FILE_ID not in", values, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdBetween(String value1, String value2) {
            addCriterion("FILE_ID between", value1, value2, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdNotBetween(String value1, String value2) {
            addCriterion("FILE_ID not between", value1, value2, "fileId");
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

        public Criteria andModuCdIsNull() {
            addCriterion("MODU_CD is null");
            return (Criteria) this;
        }

        public Criteria andModuCdIsNotNull() {
            addCriterion("MODU_CD is not null");
            return (Criteria) this;
        }

        public Criteria andModuCdEqualTo(String value) {
            addCriterion("MODU_CD =", value, "moduCd");
            return (Criteria) this;
        }

        public Criteria andModuCdNotEqualTo(String value) {
            addCriterion("MODU_CD <>", value, "moduCd");
            return (Criteria) this;
        }

        public Criteria andModuCdGreaterThan(String value) {
            addCriterion("MODU_CD >", value, "moduCd");
            return (Criteria) this;
        }

        public Criteria andModuCdGreaterThanOrEqualTo(String value) {
            addCriterion("MODU_CD >=", value, "moduCd");
            return (Criteria) this;
        }

        public Criteria andModuCdLessThan(String value) {
            addCriterion("MODU_CD <", value, "moduCd");
            return (Criteria) this;
        }

        public Criteria andModuCdLessThanOrEqualTo(String value) {
            addCriterion("MODU_CD <=", value, "moduCd");
            return (Criteria) this;
        }

        public Criteria andModuCdLike(String value) {
            addCriterion("MODU_CD like", value, "moduCd");
            return (Criteria) this;
        }

        public Criteria andModuCdNotLike(String value) {
            addCriterion("MODU_CD not like", value, "moduCd");
            return (Criteria) this;
        }

        public Criteria andModuCdIn(List<String> values) {
            addCriterion("MODU_CD in", values, "moduCd");
            return (Criteria) this;
        }

        public Criteria andModuCdNotIn(List<String> values) {
            addCriterion("MODU_CD not in", values, "moduCd");
            return (Criteria) this;
        }

        public Criteria andModuCdBetween(String value1, String value2) {
            addCriterion("MODU_CD between", value1, value2, "moduCd");
            return (Criteria) this;
        }

        public Criteria andModuCdNotBetween(String value1, String value2) {
            addCriterion("MODU_CD not between", value1, value2, "moduCd");
            return (Criteria) this;
        }

        public Criteria andModuNoIsNull() {
            addCriterion("MODU_NO is null");
            return (Criteria) this;
        }

        public Criteria andModuNoIsNotNull() {
            addCriterion("MODU_NO is not null");
            return (Criteria) this;
        }

        public Criteria andModuNoEqualTo(String value) {
            addCriterion("MODU_NO =", value, "moduNo");
            return (Criteria) this;
        }

        public Criteria andModuNoNotEqualTo(String value) {
            addCriterion("MODU_NO <>", value, "moduNo");
            return (Criteria) this;
        }

        public Criteria andModuNoGreaterThan(String value) {
            addCriterion("MODU_NO >", value, "moduNo");
            return (Criteria) this;
        }

        public Criteria andModuNoGreaterThanOrEqualTo(String value) {
            addCriterion("MODU_NO >=", value, "moduNo");
            return (Criteria) this;
        }

        public Criteria andModuNoLessThan(String value) {
            addCriterion("MODU_NO <", value, "moduNo");
            return (Criteria) this;
        }

        public Criteria andModuNoLessThanOrEqualTo(String value) {
            addCriterion("MODU_NO <=", value, "moduNo");
            return (Criteria) this;
        }

        public Criteria andModuNoLike(String value) {
            addCriterion("MODU_NO like", value, "moduNo");
            return (Criteria) this;
        }

        public Criteria andModuNoNotLike(String value) {
            addCriterion("MODU_NO not like", value, "moduNo");
            return (Criteria) this;
        }

        public Criteria andModuNoIn(List<String> values) {
            addCriterion("MODU_NO in", values, "moduNo");
            return (Criteria) this;
        }

        public Criteria andModuNoNotIn(List<String> values) {
            addCriterion("MODU_NO not in", values, "moduNo");
            return (Criteria) this;
        }

        public Criteria andModuNoBetween(String value1, String value2) {
            addCriterion("MODU_NO between", value1, value2, "moduNo");
            return (Criteria) this;
        }

        public Criteria andModuNoNotBetween(String value1, String value2) {
            addCriterion("MODU_NO not between", value1, value2, "moduNo");
            return (Criteria) this;
        }

        public Criteria andFileNmIsNull() {
            addCriterion("FILE_NM is null");
            return (Criteria) this;
        }

        public Criteria andFileNmIsNotNull() {
            addCriterion("FILE_NM is not null");
            return (Criteria) this;
        }

        public Criteria andFileNmEqualTo(String value) {
            addCriterion("FILE_NM =", value, "fileNm");
            return (Criteria) this;
        }

        public Criteria andFileNmNotEqualTo(String value) {
            addCriterion("FILE_NM <>", value, "fileNm");
            return (Criteria) this;
        }

        public Criteria andFileNmGreaterThan(String value) {
            addCriterion("FILE_NM >", value, "fileNm");
            return (Criteria) this;
        }

        public Criteria andFileNmGreaterThanOrEqualTo(String value) {
            addCriterion("FILE_NM >=", value, "fileNm");
            return (Criteria) this;
        }

        public Criteria andFileNmLessThan(String value) {
            addCriterion("FILE_NM <", value, "fileNm");
            return (Criteria) this;
        }

        public Criteria andFileNmLessThanOrEqualTo(String value) {
            addCriterion("FILE_NM <=", value, "fileNm");
            return (Criteria) this;
        }

        public Criteria andFileNmLike(String value) {
            addCriterion("FILE_NM like", value, "fileNm");
            return (Criteria) this;
        }

        public Criteria andFileNmNotLike(String value) {
            addCriterion("FILE_NM not like", value, "fileNm");
            return (Criteria) this;
        }

        public Criteria andFileNmIn(List<String> values) {
            addCriterion("FILE_NM in", values, "fileNm");
            return (Criteria) this;
        }

        public Criteria andFileNmNotIn(List<String> values) {
            addCriterion("FILE_NM not in", values, "fileNm");
            return (Criteria) this;
        }

        public Criteria andFileNmBetween(String value1, String value2) {
            addCriterion("FILE_NM between", value1, value2, "fileNm");
            return (Criteria) this;
        }

        public Criteria andFileNmNotBetween(String value1, String value2) {
            addCriterion("FILE_NM not between", value1, value2, "fileNm");
            return (Criteria) this;
        }

        public Criteria andFileRelPathIsNull() {
            addCriterion("FILE_REL_PATH is null");
            return (Criteria) this;
        }

        public Criteria andFileRelPathIsNotNull() {
            addCriterion("FILE_REL_PATH is not null");
            return (Criteria) this;
        }

        public Criteria andFileRelPathEqualTo(String value) {
            addCriterion("FILE_REL_PATH =", value, "fileRelPath");
            return (Criteria) this;
        }

        public Criteria andFileRelPathNotEqualTo(String value) {
            addCriterion("FILE_REL_PATH <>", value, "fileRelPath");
            return (Criteria) this;
        }

        public Criteria andFileRelPathGreaterThan(String value) {
            addCriterion("FILE_REL_PATH >", value, "fileRelPath");
            return (Criteria) this;
        }

        public Criteria andFileRelPathGreaterThanOrEqualTo(String value) {
            addCriterion("FILE_REL_PATH >=", value, "fileRelPath");
            return (Criteria) this;
        }

        public Criteria andFileRelPathLessThan(String value) {
            addCriterion("FILE_REL_PATH <", value, "fileRelPath");
            return (Criteria) this;
        }

        public Criteria andFileRelPathLessThanOrEqualTo(String value) {
            addCriterion("FILE_REL_PATH <=", value, "fileRelPath");
            return (Criteria) this;
        }

        public Criteria andFileRelPathLike(String value) {
            addCriterion("FILE_REL_PATH like", value, "fileRelPath");
            return (Criteria) this;
        }

        public Criteria andFileRelPathNotLike(String value) {
            addCriterion("FILE_REL_PATH not like", value, "fileRelPath");
            return (Criteria) this;
        }

        public Criteria andFileRelPathIn(List<String> values) {
            addCriterion("FILE_REL_PATH in", values, "fileRelPath");
            return (Criteria) this;
        }

        public Criteria andFileRelPathNotIn(List<String> values) {
            addCriterion("FILE_REL_PATH not in", values, "fileRelPath");
            return (Criteria) this;
        }

        public Criteria andFileRelPathBetween(String value1, String value2) {
            addCriterion("FILE_REL_PATH between", value1, value2, "fileRelPath");
            return (Criteria) this;
        }

        public Criteria andFileRelPathNotBetween(String value1, String value2) {
            addCriterion("FILE_REL_PATH not between", value1, value2, "fileRelPath");
            return (Criteria) this;
        }

        public Criteria andFileAbsPathIsNull() {
            addCriterion("FILE_ABS_PATH is null");
            return (Criteria) this;
        }

        public Criteria andFileAbsPathIsNotNull() {
            addCriterion("FILE_ABS_PATH is not null");
            return (Criteria) this;
        }

        public Criteria andFileAbsPathEqualTo(String value) {
            addCriterion("FILE_ABS_PATH =", value, "fileAbsPath");
            return (Criteria) this;
        }

        public Criteria andFileAbsPathNotEqualTo(String value) {
            addCriterion("FILE_ABS_PATH <>", value, "fileAbsPath");
            return (Criteria) this;
        }

        public Criteria andFileAbsPathGreaterThan(String value) {
            addCriterion("FILE_ABS_PATH >", value, "fileAbsPath");
            return (Criteria) this;
        }

        public Criteria andFileAbsPathGreaterThanOrEqualTo(String value) {
            addCriterion("FILE_ABS_PATH >=", value, "fileAbsPath");
            return (Criteria) this;
        }

        public Criteria andFileAbsPathLessThan(String value) {
            addCriterion("FILE_ABS_PATH <", value, "fileAbsPath");
            return (Criteria) this;
        }

        public Criteria andFileAbsPathLessThanOrEqualTo(String value) {
            addCriterion("FILE_ABS_PATH <=", value, "fileAbsPath");
            return (Criteria) this;
        }

        public Criteria andFileAbsPathLike(String value) {
            addCriterion("FILE_ABS_PATH like", value, "fileAbsPath");
            return (Criteria) this;
        }

        public Criteria andFileAbsPathNotLike(String value) {
            addCriterion("FILE_ABS_PATH not like", value, "fileAbsPath");
            return (Criteria) this;
        }

        public Criteria andFileAbsPathIn(List<String> values) {
            addCriterion("FILE_ABS_PATH in", values, "fileAbsPath");
            return (Criteria) this;
        }

        public Criteria andFileAbsPathNotIn(List<String> values) {
            addCriterion("FILE_ABS_PATH not in", values, "fileAbsPath");
            return (Criteria) this;
        }

        public Criteria andFileAbsPathBetween(String value1, String value2) {
            addCriterion("FILE_ABS_PATH between", value1, value2, "fileAbsPath");
            return (Criteria) this;
        }

        public Criteria andFileAbsPathNotBetween(String value1, String value2) {
            addCriterion("FILE_ABS_PATH not between", value1, value2, "fileAbsPath");
            return (Criteria) this;
        }

        public Criteria andFileExtensionIsNull() {
            addCriterion("FILE_EXTENSION is null");
            return (Criteria) this;
        }

        public Criteria andFileExtensionIsNotNull() {
            addCriterion("FILE_EXTENSION is not null");
            return (Criteria) this;
        }

        public Criteria andFileExtensionEqualTo(String value) {
            addCriterion("FILE_EXTENSION =", value, "fileExtension");
            return (Criteria) this;
        }

        public Criteria andFileExtensionNotEqualTo(String value) {
            addCriterion("FILE_EXTENSION <>", value, "fileExtension");
            return (Criteria) this;
        }

        public Criteria andFileExtensionGreaterThan(String value) {
            addCriterion("FILE_EXTENSION >", value, "fileExtension");
            return (Criteria) this;
        }

        public Criteria andFileExtensionGreaterThanOrEqualTo(String value) {
            addCriterion("FILE_EXTENSION >=", value, "fileExtension");
            return (Criteria) this;
        }

        public Criteria andFileExtensionLessThan(String value) {
            addCriterion("FILE_EXTENSION <", value, "fileExtension");
            return (Criteria) this;
        }

        public Criteria andFileExtensionLessThanOrEqualTo(String value) {
            addCriterion("FILE_EXTENSION <=", value, "fileExtension");
            return (Criteria) this;
        }

        public Criteria andFileExtensionLike(String value) {
            addCriterion("FILE_EXTENSION like", value, "fileExtension");
            return (Criteria) this;
        }

        public Criteria andFileExtensionNotLike(String value) {
            addCriterion("FILE_EXTENSION not like", value, "fileExtension");
            return (Criteria) this;
        }

        public Criteria andFileExtensionIn(List<String> values) {
            addCriterion("FILE_EXTENSION in", values, "fileExtension");
            return (Criteria) this;
        }

        public Criteria andFileExtensionNotIn(List<String> values) {
            addCriterion("FILE_EXTENSION not in", values, "fileExtension");
            return (Criteria) this;
        }

        public Criteria andFileExtensionBetween(String value1, String value2) {
            addCriterion("FILE_EXTENSION between", value1, value2, "fileExtension");
            return (Criteria) this;
        }

        public Criteria andFileExtensionNotBetween(String value1, String value2) {
            addCriterion("FILE_EXTENSION not between", value1, value2, "fileExtension");
            return (Criteria) this;
        }

        public Criteria andFileSizeIsNull() {
            addCriterion("FILE_SIZE is null");
            return (Criteria) this;
        }

        public Criteria andFileSizeIsNotNull() {
            addCriterion("FILE_SIZE is not null");
            return (Criteria) this;
        }

        public Criteria andFileSizeEqualTo(Long value) {
            addCriterion("FILE_SIZE =", value, "fileSize");
            return (Criteria) this;
        }

        public Criteria andFileSizeNotEqualTo(Long value) {
            addCriterion("FILE_SIZE <>", value, "fileSize");
            return (Criteria) this;
        }

        public Criteria andFileSizeGreaterThan(Long value) {
            addCriterion("FILE_SIZE >", value, "fileSize");
            return (Criteria) this;
        }

        public Criteria andFileSizeGreaterThanOrEqualTo(Long value) {
            addCriterion("FILE_SIZE >=", value, "fileSize");
            return (Criteria) this;
        }

        public Criteria andFileSizeLessThan(Long value) {
            addCriterion("FILE_SIZE <", value, "fileSize");
            return (Criteria) this;
        }

        public Criteria andFileSizeLessThanOrEqualTo(Long value) {
            addCriterion("FILE_SIZE <=", value, "fileSize");
            return (Criteria) this;
        }

        public Criteria andFileSizeIn(List<Long> values) {
            addCriterion("FILE_SIZE in", values, "fileSize");
            return (Criteria) this;
        }

        public Criteria andFileSizeNotIn(List<Long> values) {
            addCriterion("FILE_SIZE not in", values, "fileSize");
            return (Criteria) this;
        }

        public Criteria andFileSizeBetween(Long value1, Long value2) {
            addCriterion("FILE_SIZE between", value1, value2, "fileSize");
            return (Criteria) this;
        }

        public Criteria andFileSizeNotBetween(Long value1, Long value2) {
            addCriterion("FILE_SIZE not between", value1, value2, "fileSize");
            return (Criteria) this;
        }

        public Criteria andFileContentTypeIsNull() {
            addCriterion("FILE_CONTENT_TYPE is null");
            return (Criteria) this;
        }

        public Criteria andFileContentTypeIsNotNull() {
            addCriterion("FILE_CONTENT_TYPE is not null");
            return (Criteria) this;
        }

        public Criteria andFileContentTypeEqualTo(String value) {
            addCriterion("FILE_CONTENT_TYPE =", value, "fileContentType");
            return (Criteria) this;
        }

        public Criteria andFileContentTypeNotEqualTo(String value) {
            addCriterion("FILE_CONTENT_TYPE <>", value, "fileContentType");
            return (Criteria) this;
        }

        public Criteria andFileContentTypeGreaterThan(String value) {
            addCriterion("FILE_CONTENT_TYPE >", value, "fileContentType");
            return (Criteria) this;
        }

        public Criteria andFileContentTypeGreaterThanOrEqualTo(String value) {
            addCriterion("FILE_CONTENT_TYPE >=", value, "fileContentType");
            return (Criteria) this;
        }

        public Criteria andFileContentTypeLessThan(String value) {
            addCriterion("FILE_CONTENT_TYPE <", value, "fileContentType");
            return (Criteria) this;
        }

        public Criteria andFileContentTypeLessThanOrEqualTo(String value) {
            addCriterion("FILE_CONTENT_TYPE <=", value, "fileContentType");
            return (Criteria) this;
        }

        public Criteria andFileContentTypeLike(String value) {
            addCriterion("FILE_CONTENT_TYPE like", value, "fileContentType");
            return (Criteria) this;
        }

        public Criteria andFileContentTypeNotLike(String value) {
            addCriterion("FILE_CONTENT_TYPE not like", value, "fileContentType");
            return (Criteria) this;
        }

        public Criteria andFileContentTypeIn(List<String> values) {
            addCriterion("FILE_CONTENT_TYPE in", values, "fileContentType");
            return (Criteria) this;
        }

        public Criteria andFileContentTypeNotIn(List<String> values) {
            addCriterion("FILE_CONTENT_TYPE not in", values, "fileContentType");
            return (Criteria) this;
        }

        public Criteria andFileContentTypeBetween(String value1, String value2) {
            addCriterion("FILE_CONTENT_TYPE between", value1, value2, "fileContentType");
            return (Criteria) this;
        }

        public Criteria andFileContentTypeNotBetween(String value1, String value2) {
            addCriterion("FILE_CONTENT_TYPE not between", value1, value2, "fileContentType");
            return (Criteria) this;
        }

        public Criteria andUsedStatIsNull() {
            addCriterion("USED_STAT is null");
            return (Criteria) this;
        }

        public Criteria andUsedStatIsNotNull() {
            addCriterion("USED_STAT is not null");
            return (Criteria) this;
        }

        public Criteria andUsedStatEqualTo(Boolean value) {
            addCriterion("USED_STAT =", value, "usedStat");
            return (Criteria) this;
        }

        public Criteria andUsedStatNotEqualTo(Boolean value) {
            addCriterion("USED_STAT <>", value, "usedStat");
            return (Criteria) this;
        }

        public Criteria andUsedStatGreaterThan(Boolean value) {
            addCriterion("USED_STAT >", value, "usedStat");
            return (Criteria) this;
        }

        public Criteria andUsedStatGreaterThanOrEqualTo(Boolean value) {
            addCriterion("USED_STAT >=", value, "usedStat");
            return (Criteria) this;
        }

        public Criteria andUsedStatLessThan(Boolean value) {
            addCriterion("USED_STAT <", value, "usedStat");
            return (Criteria) this;
        }

        public Criteria andUsedStatLessThanOrEqualTo(Boolean value) {
            addCriterion("USED_STAT <=", value, "usedStat");
            return (Criteria) this;
        }

        public Criteria andUsedStatIn(List<Boolean> values) {
            addCriterion("USED_STAT in", values, "usedStat");
            return (Criteria) this;
        }

        public Criteria andUsedStatNotIn(List<Boolean> values) {
            addCriterion("USED_STAT not in", values, "usedStat");
            return (Criteria) this;
        }

        public Criteria andUsedStatBetween(Boolean value1, Boolean value2) {
            addCriterion("USED_STAT between", value1, value2, "usedStat");
            return (Criteria) this;
        }

        public Criteria andUsedStatNotBetween(Boolean value1, Boolean value2) {
            addCriterion("USED_STAT not between", value1, value2, "usedStat");
            return (Criteria) this;
        }

        public Criteria andDlCntIsNull() {
            addCriterion("DL_CNT is null");
            return (Criteria) this;
        }

        public Criteria andDlCntIsNotNull() {
            addCriterion("DL_CNT is not null");
            return (Criteria) this;
        }

        public Criteria andDlCntEqualTo(Byte value) {
            addCriterion("DL_CNT =", value, "dlCnt");
            return (Criteria) this;
        }

        public Criteria andDlCntNotEqualTo(Byte value) {
            addCriterion("DL_CNT <>", value, "dlCnt");
            return (Criteria) this;
        }

        public Criteria andDlCntGreaterThan(Byte value) {
            addCriterion("DL_CNT >", value, "dlCnt");
            return (Criteria) this;
        }

        public Criteria andDlCntGreaterThanOrEqualTo(Byte value) {
            addCriterion("DL_CNT >=", value, "dlCnt");
            return (Criteria) this;
        }

        public Criteria andDlCntLessThan(Byte value) {
            addCriterion("DL_CNT <", value, "dlCnt");
            return (Criteria) this;
        }

        public Criteria andDlCntLessThanOrEqualTo(Byte value) {
            addCriterion("DL_CNT <=", value, "dlCnt");
            return (Criteria) this;
        }

        public Criteria andDlCntIn(List<Byte> values) {
            addCriterion("DL_CNT in", values, "dlCnt");
            return (Criteria) this;
        }

        public Criteria andDlCntNotIn(List<Byte> values) {
            addCriterion("DL_CNT not in", values, "dlCnt");
            return (Criteria) this;
        }

        public Criteria andDlCntBetween(Byte value1, Byte value2) {
            addCriterion("DL_CNT between", value1, value2, "dlCnt");
            return (Criteria) this;
        }

        public Criteria andDlCntNotBetween(Byte value1, Byte value2) {
            addCriterion("DL_CNT not between", value1, value2, "dlCnt");
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

        public Criteria andRegTsIsNull() {
            addCriterion("REG_TS is null");
            return (Criteria) this;
        }

        public Criteria andRegTsIsNotNull() {
            addCriterion("REG_TS is not null");
            return (Criteria) this;
        }

        public Criteria andRegTsEqualTo(Date value) {
            addCriterion("REG_TS =", value, "regTs");
            return (Criteria) this;
        }

        public Criteria andRegTsNotEqualTo(Date value) {
            addCriterion("REG_TS <>", value, "regTs");
            return (Criteria) this;
        }

        public Criteria andRegTsGreaterThan(Date value) {
            addCriterion("REG_TS >", value, "regTs");
            return (Criteria) this;
        }

        public Criteria andRegTsGreaterThanOrEqualTo(Date value) {
            addCriterion("REG_TS >=", value, "regTs");
            return (Criteria) this;
        }

        public Criteria andRegTsLessThan(Date value) {
            addCriterion("REG_TS <", value, "regTs");
            return (Criteria) this;
        }

        public Criteria andRegTsLessThanOrEqualTo(Date value) {
            addCriterion("REG_TS <=", value, "regTs");
            return (Criteria) this;
        }

        public Criteria andRegTsIn(List<Date> values) {
            addCriterion("REG_TS in", values, "regTs");
            return (Criteria) this;
        }

        public Criteria andRegTsNotIn(List<Date> values) {
            addCriterion("REG_TS not in", values, "regTs");
            return (Criteria) this;
        }

        public Criteria andRegTsBetween(Date value1, Date value2) {
            addCriterion("REG_TS between", value1, value2, "regTs");
            return (Criteria) this;
        }

        public Criteria andRegTsNotBetween(Date value1, Date value2) {
            addCriterion("REG_TS not between", value1, value2, "regTs");
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