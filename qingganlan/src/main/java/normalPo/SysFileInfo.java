package normalPo;

import java.util.Date;

public class SysFileInfo {
    private String fileId;

    private String moduCd;

    private String usId;

    private String moduNo;

    private String fileNm;

    private String fileRelPath;

    private String fileAbsPath;

    private String fileExtension;

    private Long fileSize;

    private String fileContentType;

    private Integer usedStat;

    private Integer dlCnt;

    private Date expireTs;

    private Date uploadTs;

    private String fsId;

    public String getFileId() {
        return fileId;
    }

    public void setFileId(String fileId) {
        this.fileId = fileId == null ? null : fileId.trim();
    }

    public String getModuCd() {
        return moduCd;
    }

    public void setModuCd(String moduCd) {
        this.moduCd = moduCd == null ? null : moduCd.trim();
    }

    public String getUsId() {
        return usId;
    }

    public void setUsId(String usId) {
        this.usId = usId == null ? null : usId.trim();
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

    public Integer getUsedStat() {
        return usedStat;
    }

    public void setUsedStat(Integer usedStat) {
        this.usedStat = usedStat;
    }

    public Integer getDlCnt() {
        return dlCnt;
    }

    public void setDlCnt(Integer dlCnt) {
        this.dlCnt = dlCnt;
    }

    public Date getExpireTs() {
        return expireTs;
    }

    public void setExpireTs(Date expireTs) {
        this.expireTs = expireTs;
    }

    public Date getUploadTs() {
        return uploadTs;
    }

    public void setUploadTs(Date uploadTs) {
        this.uploadTs = uploadTs;
    }

    public String getFsId() {
        return fsId;
    }

    public void setFsId(String fsId) {
        this.fsId = fsId == null ? null : fsId.trim();
    }
}