package pageModel;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;


public class User {
    private String usId;

    private String usName;

    private Byte age;

    private String sex;

    @DateTimeFormat(pattern = "yyyy-MM-dd") 
    private Date birthDate;

    private String usPs;

    private String tel;

    private String email;

    private String qq;

    private String weichat;

    private String ps;

    private String hobby;

    private String area;

    private String graduateSchool;

    private String profession;

    private String chirchType;

    private String state;
    
    @DateTimeFormat(pattern = "yyyy-MM-dd") 
    private Date startTruth;

    private Date regDate;

    private Date lastLoginTime;

    private String headImg;

    private String level;

    private String type;

    private String tkId;

    private String authentication;

    private String isBaptism;

    private String isTruth;

    public String getUsId() {
        return usId;
    }

    public void setUsId(String usId) {
        this.usId = usId == null ? null : usId.trim();
    }

    public String getUsName() {
        return usName;
    }

    public void setUsName(String usName) {
        this.usName = usName == null ? null : usName.trim();
    }

    public Byte getAge() {
        return age;
    }

    public void setAge(Byte age) {
        this.age = age;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex == null ? null : sex.trim();
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getUsPs() {
        return usPs;
    }

    public void setUsPs(String usPs) {
        this.usPs = usPs == null ? null : usPs.trim();
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel == null ? null : tel.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public String getQq() {
        return qq;
    }

    public void setQq(String qq) {
        this.qq = qq == null ? null : qq.trim();
    }

    public String getWeichat() {
        return weichat;
    }

    public void setWeichat(String weichat) {
        this.weichat = weichat == null ? null : weichat.trim();
    }

    public String getPs() {
        return ps;
    }

    public void setPs(String ps) {
        this.ps = ps == null ? null : ps.trim();
    }

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby == null ? null : hobby.trim();
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area == null ? null : area.trim();
    }

    public String getGraduateSchool() {
        return graduateSchool;
    }

    public void setGraduateSchool(String graduateSchool) {
        this.graduateSchool = graduateSchool == null ? null : graduateSchool.trim();
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession == null ? null : profession.trim();
    }

    public String getChirchType() {
        return chirchType;
    }

    public void setChirchType(String chirchType) {
        this.chirchType = chirchType == null ? null : chirchType.trim();
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state == null ? null : state.trim();
    }

    public Date getStartTruth() {
        return startTruth;
    }

    public void setStartTruth(Date startTruth) {
        this.startTruth = startTruth;
    }

    public Date getRegDate() {
        return regDate;
    }

    public void setRegDate(Date regDate) {
        this.regDate = regDate;
    }

    public Date getLastLoginTime() {
        return lastLoginTime;
    }

    public void setLastLoginTime(Date lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
    }

    public String getHeadImg() {
        return headImg;
    }

    public void setHeadImg(String headImg) {
        this.headImg = headImg == null ? null : headImg.trim();
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level == null ? null : level.trim();
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }

    public String getTkId() {
        return tkId;
    }

    public void setTkId(String tkId) {
        this.tkId = tkId == null ? null : tkId.trim();
    }

    public String getAuthentication() {
        return authentication;
    }

    public void setAuthentication(String authentication) {
        this.authentication = authentication == null ? null : authentication.trim();
    }

    public String getIsBaptism() {
        return isBaptism;
    }

    public void setIsBaptism(String isBaptism) {
        this.isBaptism = isBaptism == null ? null : isBaptism.trim();
    }

    public String getIsTruth() {
        return isTruth;
    }

    public void setIsTruth(String isTruth) {
        this.isTruth = isTruth == null ? null : isTruth.trim();
    }
}