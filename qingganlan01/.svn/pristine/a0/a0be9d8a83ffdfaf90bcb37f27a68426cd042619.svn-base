package mService.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import pageModel.EasyUIGridObj;
import exception.SysException;
import mCustomMapper.CustomUserMapper;
import mService.UserService;

@SuppressWarnings("rawtypes")
public class UserServiceImpl implements UserService {
	@Autowired
	private CustomUserMapper mCustomUserMapper;
	public EasyUIGridObj getAllUser(Map map) throws SysException {
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
		mCustomUserMapper.getAllUser(map);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}
	public Map login(Map paraMap) {
		Map resultMap = new HashMap();
		resultMap =	mCustomUserMapper.selectManager(paraMap);
		return resultMap;
	}
	public EasyUIGridObj getAllManagers(Map map) throws SysException {
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
		mCustomUserMapper.getAllManagers(map);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}
	public List<Map> getManagersCom(Map map) throws SysException {
		List<Map> resultList = new ArrayList<Map>();
		try {
			resultList = mCustomUserMapper.getManagersCom(map);
		} catch (Exception e) {
			throw new SysException("获取管理员下拉列表失败！");
		}
		return resultList;
	}
	public Map userInfoDetail(Map paraMap) {
		Map resultMap = new HashMap();
		resultMap =	mCustomUserMapper.userInfoDetail(paraMap);
		return resultMap;
	}
	public int modifyPersonalPW(Map paraMap) {
		int rows = 0 ;
		if(mCustomUserMapper.modifyPersonalPW(paraMap) >0){
			rows = 1;
		}
		return rows;
	}
	public int modifyPersonalInfo(Map paraMap) {
		int rows = 0 ;
		if(mCustomUserMapper.modifyPersonalInfo(paraMap) >0){
			rows = 1;
		}
		return rows;
	}
	public List getUsIds(Map map) throws SysException {
		List<Map> resultList = new ArrayList<Map>();
		try {
			resultList = mCustomUserMapper.getUsIds(map);
		} catch (Exception e) {
			throw new SysException("获取用户id下拉列表失败！");
		}
		return resultList;
	}
	public List getAllUsersCom(Map map) throws SysException {
		List<Map> resultList = new ArrayList<Map>();
		try {
			resultList = mCustomUserMapper.getAllUsersCom(map);
		} catch (Exception e) {
			throw new SysException("获取用户id下拉列表失败！");
		}
		return resultList;
	}
	public Map userDetail(Map map) throws SysException {
		Map resultMap = new HashMap();
		try {
			resultMap = mCustomUserMapper.userDetail(map);
		} catch (Exception e) {
			throw new SysException("尚未获取用户详情信息！");
		}
		return resultMap;
	}
	public int deleteUser(List list) {
		int rows = 0 ;
		if(mCustomUserMapper.deleteUser(list) >0){
			rows = 1;
		}
		return rows;
	}
	public int modifyUser(Map map) {
		int rows = 0 ;
		if(mCustomUserMapper.modifyUser(map) >0){
			rows = 1;
		}
		return rows;
	}
	public int addManager(Map map) {
		int rows = 0 ;
		String passWord = util.MD5Util.getMD5("123456");
		map.put("usPs", passWord);
		if(mCustomUserMapper.addManager(map) >0){
			rows = 1;
		}
		return rows;
	}
	public int deleteManager(List list) {
		int rows = 0 ;
		if(mCustomUserMapper.deleteManager(list) >0){
			rows = 1;
		}
		return rows;
	}
	public int resetPassword(List list) {
		int rows = 0 ;
		if(mCustomUserMapper.resetPassword(list) >0){
			rows = 1;
		}
		return rows;
	}
	public Map managerDetail(Map map) throws SysException {
		Map resultMap = new HashMap();
		try {
			resultMap = mCustomUserMapper.managerDetail(map);
		} catch (Exception e) {
			throw new SysException("获取管理员详情信息出错！");
		}
		return resultMap;
	}
	public int modifyManager(Map map) {
		int rows = 0 ;
		if(mCustomUserMapper.modifyManager(map) >0){
			rows = 1;
		}
		return rows;
	}
	public EasyUIGridObj getLogs(Map map) throws SysException {
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
		mCustomUserMapper.getLogs(map);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}
	public int delLog(List list) {
		int rows = 0 ;
		if(mCustomUserMapper.delLog(list) >0){
			rows = 1;
		}
		return rows;
	}
	public EasyUIGridObj getAllUserAuth(Map map) throws SysException {
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
		mCustomUserMapper.getAllUserAuth(map);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}
	public Map userAuthDetail(Map map) throws SysException {
		Map resultMap = new HashMap();
		resultMap =	mCustomUserMapper.userAuthDetail(map);
		return resultMap;
	}
	public int setAuth(Map map) {
		int rows = 0 ;
		if(mCustomUserMapper.setAuth(map) >0){
			rows = 1;
		}
		return rows;
	}

}
