package mAction;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import mService.UserService;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import action.UserAction;
import pageModel.EasyUIGridObj;
import pageModel.JsonResult;
import util.SerialUtil;
import util.SpringUtils;
import util.UserUtil;
import vo.ActiveUser;
import exception.SysException;
@SuppressWarnings("rawtypes")
@Controller
@RequestMapping("/mUserAction")
public class MUserAction {
	public static Logger logger  = Logger.getLogger(UserAction.class);
	@Autowired
	private UserService mUserService;
	@ResponseBody
	@RequestMapping("/login")
	public JsonResult managerLogin(HttpSession session,HttpServletRequest req){
		Map map = new HashMap();
		Map paraMap = new HashMap();
		paraMap = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		
			map = mUserService.login(paraMap);
			if(map != null){
				j.setSuccess(true);
				j.setMsg("登录成功！");
				j.setResult(map);
			}else{
				j.setSuccess(false);
				j.setMsg("登录失败！");
			}
		
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/userInfoDetail")
	public JsonResult userInfoDetail(HttpSession session,HttpServletRequest req){
		Map map = new HashMap();
		Map paraMap = new HashMap();
		paraMap = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		
			map = mUserService.userInfoDetail(paraMap);
			if(map != null){
				j.setSuccess(true);
				j.setMsg("登录成功！");
				j.setResult(map);
			}else{
				j.setSuccess(false);
				j.setMsg("登录失败！");
			}
		
		return j;
	}
	@ResponseBody
	@RequestMapping("/modifyPersonalPW")
	public JsonResult modifyPersonalPW(HttpSession session,HttpServletRequest req){
		Map paraMap = new HashMap();
		paraMap = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		
			
			if(mUserService.modifyPersonalPW(paraMap)>0){
				j.setSuccess(true);
				j.setMsg("修改密码成功！");
			}else{
				j.setSuccess(false);
				j.setMsg("修改密码失败！");
			}
		
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/modifyPersonalInfo")
	public JsonResult modifyPersonalInfo(HttpSession session,HttpServletRequest req){
		Map paraMap = new HashMap();
		paraMap = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		if(mUserService.modifyPersonalInfo(paraMap)>0){
			j.setSuccess(true);
			j.setMsg("修改个人信息成功！");
		}else{
			j.setSuccess(false);
			j.setMsg("修改个人信息失败！");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/getAllUser")
	public JsonResult getAllUser(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		List allBlogList = new ArrayList();
		map = SpringUtils.getParameterMap(req);
	//	allBlogList = blogService.getAllBlogPosts(map);//获取自己和好友的帖子
		EasyUIGridObj easyUIGridObjs = mUserService.getAllUser(map);//获取所有用户的列表
		JsonResult j = new JsonResult();
		
		if(allBlogList!=null){
			j.setSuccess(true);
			j.setMsg("success!");
		//	j.setResult(allBlogList);
			j.setResult(easyUIGridObjs);
		}else{
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/getAllManagers")
	public JsonResult getAllManagers(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
	//	List allBlogList = new ArrayList();
		map = SpringUtils.getParameterMap(req);
		EasyUIGridObj easyUIGridObjs = mUserService.getAllManagers(map);//获取所有用户的列表
		JsonResult j = new JsonResult();
		if(easyUIGridObjs!=null){
			j.setSuccess(true);
			j.setMsg("success!");
			j.setResult(easyUIGridObjs);
		}else{
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
		
	}
	@ResponseBody
	@RequestMapping("/getManagersCom")
	public JsonResult getManagersCom(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		List resultList = new ArrayList();
		map = SpringUtils.getParameterMap(req);
		resultList = mUserService.getManagersCom(map);
		EasyUIGridObj gridObj = new EasyUIGridObj();
	//	EasyUIGridObj easyUIGridObjs = mUserService.getManagersCom(map);//获取所有用户的列表
		JsonResult j = new JsonResult();
		if (resultList != null) {
			gridObj.setTotal(resultList.size());
			gridObj.setRows(resultList);
			j.setSuccess(true);
			j.setMsg("success!");
			j.setResult(gridObj);
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		
		return j;
		
	}
	@ResponseBody
	@RequestMapping("/getUsIds")
	public JsonResult getUsIds(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		List resultList = new ArrayList();
		map = SpringUtils.getParameterMap(req);
		resultList = mUserService.getUsIds(map);
		EasyUIGridObj gridObj = new EasyUIGridObj();
		JsonResult j = new JsonResult();
		if (resultList != null) {
			gridObj.setTotal(resultList.size());
			gridObj.setRows(resultList);
			j.setSuccess(true);
			j.setMsg("success!");
			j.setResult(gridObj);
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		
		return j;
		
	}
	
	@ResponseBody
	@RequestMapping("/getAllUsersCom")
	public JsonResult getAllUsersCom(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		List resultList = new ArrayList();
		map = SpringUtils.getParameterMap(req);
		resultList = mUserService.getAllUsersCom(map);
		EasyUIGridObj gridObj = new EasyUIGridObj();
	//	EasyUIGridObj easyUIGridObjs = mUserService.getManagersCom(map);//获取所有用户的列表
		JsonResult j = new JsonResult();
		if (resultList != null) {
			gridObj.setTotal(resultList.size());
			gridObj.setRows(resultList);
			j.setSuccess(true);
			j.setMsg("success!");
			j.setResult(gridObj);
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/userDetail")
	public JsonResult userDetail(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		Map resultMap = new HashMap();
		map = SpringUtils.getParameterMap(req);
		resultMap = mUserService.userDetail(map);
		JsonResult j = new JsonResult();
		if (resultMap != null) {
			j.setSuccess(true);
			j.setMsg("success");
			j.setResult(resultMap);
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/deleteUser")
	public JsonResult deleteUser(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		Map resultMap = new HashMap();
		String userIdList = req.getParameter("userIdList");
		List list = SerialUtil.JsonToList(new JSONArray(userIdList));
		 
		JsonResult j = new JsonResult();
		if (mUserService.deleteUser(list)>0) {
			j.setSuccess(true);
			j.setMsg("success");
			j.setResult(resultMap);
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/modifyUser")
	public JsonResult modifyUser(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		Map resultMap = new HashMap();
		map = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		if (mUserService.modifyUser(map)>0) {
			j.setSuccess(true);
			j.setMsg("success");
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/addManager")
	public JsonResult addManager(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		Map resultMap = new HashMap();
		map = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		if (mUserService.addManager(map)>0) {
			j.setSuccess(true);
			j.setMsg("success");
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/deleteManager")
	public JsonResult deleteManager(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		String userIdList = req.getParameter("userIdList");
		List list = SerialUtil.JsonToList(new JSONArray(userIdList));
		//map = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		if (mUserService.deleteManager(list)>0) {
			j.setSuccess(true);
			j.setMsg("success");
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/resetPassword")
	public JsonResult resetPassword(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		String userIdList = req.getParameter("userIdList");
		List list = SerialUtil.JsonToList(new JSONArray(userIdList));
		//map = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		if (mUserService.resetPassword(list)>0) {
			j.setSuccess(true);
			j.setMsg("success");
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/managerDetail")
	public JsonResult managerDetail(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		Map resultMap = new HashMap();
		map = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		resultMap = mUserService.managerDetail(map);
		if (resultMap!=null) {
			j.setResult(resultMap);
			j.setSuccess(true);
			j.setMsg("success");
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/modifyManager")
	public JsonResult modifyManager(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		Map resultMap = new HashMap();
		map = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		if (mUserService.modifyManager(map)>0) {
			j.setSuccess(true);
			j.setMsg("success");
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/getLogs")
	public JsonResult getLogs(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		List allBlogList = new ArrayList();
		map = SpringUtils.getParameterMap(req);
		EasyUIGridObj easyUIGridObjs = mUserService.getLogs(map);//获取所有用户的列表
		JsonResult j = new JsonResult();
		
		if(allBlogList!=null){
			j.setSuccess(true);
			j.setMsg("success!");
			j.setResult(easyUIGridObjs);
		}else{
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
		
	}
	@ResponseBody
	@RequestMapping("/delLog")
	public JsonResult delLog(HttpSession session,HttpServletRequest req) throws SysException{
		String logIdList = req.getParameter("logIdList");
		List list = SerialUtil.JsonToList(new JSONArray(logIdList));
		JsonResult j = new JsonResult();
		
		if(mUserService.delLog(list)>0){
			j.setSuccess(true);
			j.setMsg("success!");
		}else{
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/getAllUserAuth")
	public JsonResult getAllUserAuth(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		List allBlogList = new ArrayList();
		map = SpringUtils.getParameterMap(req);
	//	allBlogList = blogService.getAllBlogPosts(map);//获取自己和好友的帖子
		EasyUIGridObj easyUIGridObjs = mUserService.getAllUserAuth(map);//获取所有用户的列表
		JsonResult j = new JsonResult();
		
		if(allBlogList!=null){
			j.setSuccess(true);
			j.setMsg("success!");
		//	j.setResult(allBlogList);
			j.setResult(easyUIGridObjs);
		}else{
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/userAuthDetail")
	public JsonResult userAuthDetail(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		Map resultMap = new HashMap();
		map = SpringUtils.getParameterMap(req);
		resultMap = mUserService.userAuthDetail(map);
		JsonResult j = new JsonResult();
		if (resultMap != null) {
			j.setSuccess(true);
			j.setMsg("success");
			j.setResult(resultMap);
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/setAuth")
	public JsonResult setAuth(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		Map resultMap = new HashMap();
		map = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		if(mUserService.setAuth(map)>0){
			j.setSuccess(true);
			j.setMsg("success");
			j.setResult(resultMap);
		}else{
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
}
