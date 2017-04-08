package service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import customMapper.CustomSysFileInfoMapper;
import customMapper.CustomUserInfoMapper;
import exception.SysException;
import mapper.SysFileInfoMapper;
import mapper.UserInfoMapper;
import pageModel.EasyUIGridObj;
import pageModel.ModifyPwd;
import pageModel.User;
import po.UserInfo;
import po.UserInfoExample;
import service.UserService;
import util.MD5Util;
import util.SerialUtil;
import util.StringUtil;
import vo.ActiveUser;
@SuppressWarnings({"unused", "rawtypes", "unchecked"})
public class UserServiceImpl implements UserService {

	@Autowired
	private UserInfoMapper userInfoMapper;
	@Autowired
	private SysFileInfoMapper sysFileInfoMapper;
	@Autowired
	private CustomSysFileInfoMapper customSysFileInfoMapper;
	@Autowired
	private CustomUserInfoMapper customUserInfoMapper;
	@Autowired
	private CommonFuncImpl commonFunc;
	public UserInfo findUserByUserId(String userId) throws Exception {
		UserInfoExample userInfoExample = new UserInfoExample();
		UserInfoExample.Criteria criteria = userInfoExample.createCriteria();
		criteria.andUsIdEqualTo(userId);
//		List<PurSysUser> list  = purSysUserMapper.selectByExample(purSysUserExample);
		List<UserInfo> list  = userInfoMapper.selectByExample(userInfoExample);
		if(list!=null && list.size() == 1){
			return list.get(0);
		}
		return null;
	}
	public ActiveUser checkUser(String userId, String pwd) throws Exception {
		
		//校验用户账号及密码
		UserInfo userInfo = this.findUserByUserId(userId);
		String pwd_md5 = new MD5Util().getMD5(pwd);

		if(userInfo == null||!pwd_md5.equalsIgnoreCase(userInfo.getUsPs())){
			System.out.println(pwd_md5 +"*****"+userInfo.getUsPs());
			throw new SysException("用户名或密码错误");
		}
		
		ActiveUser activeUser = new ActiveUser();
		activeUser.setUserid(userInfo.getUsId());
		activeUser.setUsername(userInfo.getUsName());
		return activeUser;
	}
	/*synchronized public void reg(User user) throws SysException{
		if(userInfoMapper.selectByPrimaryKey(user.getUsId())!=null){
			throw new SysException("该用户已被注册！");
		}else{
			UserInfo u = new UserInfo();
			BeanUtils.copyProperties(user, u,new String[] { "usPS","regDate","lastLoginTime" });
			u.setUsPs(MD5Util.getMD5(user.getUsPs()));
			System.out.println(MD5Util.getMD5(user.getUsPs()));
			u.setRegDate(new Date());
			if(userInfoMapper.insert(u)<=0){
				throw new SysException("注册失败！");
			}
			
		}
		
	}*/
	public void userInfoSet(User user) throws SysException {
		UserInfo userInfo = new UserInfo();
		BeanUtils.copyProperties(user, userInfo);
		if(userInfoMapper.updateByPrimaryKeySelective(userInfo)<=0){
			throw new SysException("修改信息失败！");
		}
	}
	//上传图片文件
	public int upLoadFile(Map fileMap) {
		// TODO Auto-generated method stub
		int uploadNo = customSysFileInfoMapper.upLoadFile(fileMap);
		return uploadNo;
	}

	//设置用户的图片名称
	public int modifyHeadImg(Map fileMap) {
		// TODO Auto-generated method stub
		int uploadNo = customSysFileInfoMapper.modifyHeadImg(fileMap);
		return uploadNo;
	}
	@SuppressWarnings("unchecked")
	public boolean saveFiles(String files, String usId) {
		if (!StringUtil.isEmpty(files)) {
			try {
				List<Map> fileList = SerialUtil.JsonToList(new JSONArray(files));
				int result = 0;
				for (Map map : fileList) {
					if (!StringUtil.isEmpty(usId))
						map.put("US_ID", usId);
					int _unUsedResult = customSysFileInfoMapper.filesUnused(map);
					int _usedResult = customSysFileInfoMapper.filesUsed( map);
					if (_usedResult > 0) result += _usedResult;
				}
				//sqlSession.commit();
			} catch (Exception e) {
				return false;
			}
			return true;
		}
		return false;
	}
	public int modifyPwd(ModifyPwd modifyPwd) {
		// TODO Auto-generated method stub
		UserInfo userInfo = new UserInfo();
		userInfo = userInfoMapper.selectByPrimaryKey(modifyPwd.getUsId());
		String oldPwd = MD5Util.getMD5(modifyPwd.getOldPwd());
		String newPwd = MD5Util.getMD5(modifyPwd.getNewPwd());
		System.out.println(oldPwd+"old****new"+newPwd);
		if(userInfo.getUsPs().equalsIgnoreCase(oldPwd)){
			userInfo.setUsPs(newPwd);
			userInfo.setUsId(modifyPwd.getUsId());
			int rows = userInfoMapper.updateByPrimaryKeySelective(userInfo);
			return rows;
		}else{
			return 0;
		}
	}
	public Map userInfoDetail(Map map) {
		Map resultMap = new HashMap();
		resultMap = customUserInfoMapper.userInfoDetail(map);
		if(resultMap!=null)
			return resultMap;
		else
			return null;
	}
	public EasyUIGridObj searchMyConcern(Map map) throws SysException {
		int pageNum = 0;
		int pageSize = 0;
		EasyUIGridObj easyUIGridObj = new EasyUIGridObj();
		try {
			pageNum = Integer.parseInt((String) map.get("page"));
			pageSize = Integer.parseInt((String) map.get("rows"));
		} catch (Exception e) {
			throw new SysException("分页参数格式不正确.");
		}
		
		Page page = PageHelper.startPage(pageNum, pageSize);
		customUserInfoMapper.searchMyConcern(map);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}
	public EasyUIGridObj getMyCollectBlogs(Map map) throws SysException {
		int pageNum = 0;
		int pageSize = 0;
		EasyUIGridObj easyUIGridObj = new EasyUIGridObj();
		try {
			pageNum = Integer.parseInt((String) map.get("page"));
			pageSize = Integer.parseInt((String) map.get("rows"));
		} catch (Exception e) {
			throw new SysException("分页参数格式不正确.");
		}
		
		Page page = PageHelper.startPage(pageNum, pageSize);
		customUserInfoMapper.getMyCollectBlogs(map);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}
	public int addUserBatch(Map map) {
		int rows = 0 ;
		if(customUserInfoMapper.addUserBatch(map) >0){
			rows = 1;
		}
		return rows;
	}
	public List<Map> getAllUsers() {
		List resultMap = new ArrayList();
		resultMap = customUserInfoMapper.getAllUsers();
		if(resultMap!=null){
			return resultMap;
		}else{
			return null;
		}
	}
	public int addFriend(Map map) {
		int rows = 0 ;
		if(customUserInfoMapper.addFriend(map) >0){
			rows = 1;
		}
		return rows;
	}
	public int delFriend(Map map) {
		int rows = 0 ;
		if(customUserInfoMapper.delFriend(map) >0){
			rows = 1;
		}
		return rows;
	}
	public int joinFellowShip(Map map) {
		int rows = 0 ;
		if(customUserInfoMapper.joinFellowShip(map) >0){
			rows = 1;
		}
		return rows;
	}
	public EasyUIGridObj searchUsers(Map map) throws SysException {
		int pageNum = 0;
		int pageSize = 0;
		EasyUIGridObj easyUIGridObj = new EasyUIGridObj();
		try {
			pageNum = Integer.parseInt((String) map.get("page"));
			pageSize = Integer.parseInt((String) map.get("rows"));
		} catch (Exception e) {
			throw new SysException("分页参数格式不正确.");
		}
		
		
		Page page = PageHelper.startPage(pageNum, pageSize);
		customUserInfoMapper.searchUsers(map);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}
	public int addChurch(Map map) {
		int rows = 0 ;
		if(customUserInfoMapper.addChurch(map) >0){
			rows = 1;
		}
		return rows;
	}
	public EasyUIGridObj searchChurchs(Map map) throws SysException {
		int pageNum = 0;
		int pageSize = 0;
		EasyUIGridObj easyUIGridObj = new EasyUIGridObj();
		try {
			pageNum = Integer.parseInt((String) map.get("page"));
			pageSize = Integer.parseInt((String) map.get("rows"));
		} catch (Exception e) {
			throw new SysException("分页参数格式不正确.");
		}
		
		Page page = PageHelper.startPage(pageNum, pageSize);
		customUserInfoMapper.searchChurchs(map);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}
	public EasyUIGridObj getJobPages(Map map) throws SysException {
		return commonFunc.getDataByPage("getJobPages",map);
	}
	public List getCommonCodes(Map map) throws SysException {
		List<Map> resultList = new ArrayList<Map>();
		try {
			resultList = customUserInfoMapper.getCommonCodes(map);
		} catch (Exception e) {
			throw new SysException("获取主内网址类型失败！");
		}
		return resultList;
	}
	public int addInChristWeb(Map map) {
		int rows = 0 ;
		if(customUserInfoMapper.addInChristWeb(map) >0){
			rows = 1;
		}
		return rows;
	}
	public int delMyConcern(Map map) {
		int rows = 0 ;
		if(customUserInfoMapper.delMyConcern(map) >0){
			rows = 1;
		}
		return rows;
	}
	public Map getLeftDropListNo() throws SysException {
		Map resultMap = new HashMap();
		try {
			resultMap = customUserInfoMapper.getLeftDropListNo();
		} catch (Exception e) {
			throw new SysException("获取主内网址数目信息失败！");
		}
		return resultMap;
	}
	public int reg(Map map) throws SysException {
		int rows = 0 ;
		if(customUserInfoMapper.reg(map) >0){
			rows = 1;
		}
		return rows;
	}
	public int applyAuth(Map map) {
		int rows = 0 ;
		if(customUserInfoMapper.applyAuth(map) >0){
			rows = 1;
		}
		return rows;
	}
	
}
