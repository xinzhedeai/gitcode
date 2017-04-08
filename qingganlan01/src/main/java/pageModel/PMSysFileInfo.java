package pageModel;

import java.util.Date;

public class PMSysFileInfo {
    private String fileId;

    private String usId;

    private String moduCd;

    private String moduNo;

    private String fileNm;

    private String fileRelPath;

    private String fileAbsPath;

    private String fileExtension;

    private Long fileSize;

    private String fileContentType;

    private Boolean usedStat;

    private Byte dlCnt;

    private Date expireTs;

    private Date regTs;

    public String getFileId() {
        return fileId;
    }

    public void setFileId(String fileId) {
        this.fileId = fileId == null ? null : fileId.trim();
    }

    public String getUsId() {
        return usId;
    }

    public void setUsId(String usId) {
        this.usId = usId == null ? null : usId.trim();
    }

    public String getModuCd() {
        return moduCd;
    }

    public void setModuCd(String moduCd) {
        this.moduCd = moduCd == null ? null : moduCd.trim();
    }

    public String getModuNo() {
        return moduNo;
    }

    public void setModuNo(String moduNo) {
        this.moduNo = moduNo == null ? null : moduNo.trim();
    }

    public String getFileNm() {
        return fileNm;
    }

    public void setFileNm(String fileNm) {
        this.fileNm = fileNm == null ? null : fileNm.trim();
    }

    public String getFileRelPath() {
        return fileRelPath;
    }

    public void setFileRelPath(String fileRelPath) {
        this.fileRelPath = fileRelPath == null ? null : fileRelPath.trim();
    }

    public String getFileAbsPath() {
        return fileAbsPath;
    }

    public void setFileAbsPath(String fileAbsPath) {
        this.fileAbsPath = fileAbsPath == null ? null : fileAbsPath.trim();
    }

    public String getFileExtension() {
        return fileExtension;
    }

    public void setFileExtension(String fileExtension) {
        this.fileExtension = fileExtension == null ? null : fileExtension.trim();
    }

    public Long getFileSize() {
        return fileSize;
    }

    public void setFileSize(Long fileSize) {
        this.fileSize = fileSize;
    }

    public String getFileContentType() {
        return fileContentType;
    }

    public void setFileContentType(String fileContentType) {
        this.fileContentType = fileContentType == null ? null : fileContentType.trim();
    }

    public Boolean getUsedStat() {
        return usedStat;
    }

    public void setUsedStat(Boolean usedStat) {
        this.usedStat = usedStat;
    }

    public Byte getDlCnt() {
        return dlCnt;
    }

    public void setDlCnt(Byte dlCnt) {
        this.dlCnt = dlCnt;
    }

    public Date getExpireTs() {
        return expireTs;
    }

    public void setExpireTs(Date expireTs) {
        this.expireTs = expireTs;
    }

    public Date getRegTs() {
        return regTs;
    }

    public void setRegTs(Date regTs) {
        this.regTs = regTs;
    }
}