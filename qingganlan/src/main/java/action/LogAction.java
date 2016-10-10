package action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pageModel.EasyUIGridObj;
import pageModel.GridObj;
import pageModel.JsonResult;
import service.FellowShipService;
import service.LogService;
import util.SpringUtils;
import exception.SysException;

@Controller
@RequestMapping("/logAction")
public class LogAction{

@Autowired
private LogService logService;

@ResponseBody
@RequestMapping("/searchMyLogsWitness")
public	JsonResult  searchMyLogs(HttpSession session,HttpServletRequest req) throws SysException{
	Map paramMap = SpringUtils.getParameterMap(req);
//	myFrisList = fellowShipService.getMyFellowShips(map);//获取好友列表
	EasyUIGridObj easyUIGridObjs = logService.searchMyLogsWitness(paramMap);//获取好友列表
	JsonResult j = new JsonResult();
	
	if(easyUIGridObjs!=null){
		j.setSuccess(true);
		j.setMsg("success!");
//		j.setResult(myFrisList);
		j.setResult(easyUIGridObjs);
	}else{
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}

@ResponseBody
@RequestMapping("/searchMyLogsQT")
public	JsonResult  searchMyLogsQT(HttpSession session,HttpServletRequest req) throws SysException{
	Map paramMap = SpringUtils.getParameterMap(req);
//	myFrisList = fellowShipService.getMyFellowShips(map);//获取好友列表
	EasyUIGridObj easyUIGridObjs = logService.searchMyLogsQT(paramMap);//获取好友列表
	JsonResult j = new JsonResult();
	
	if(easyUIGridObjs!=null){
		j.setSuccess(true);
		j.setMsg("success!");
//		j.setResult(myFrisList);
		j.setResult(easyUIGridObjs);
	}else{
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}
@ResponseBody
@RequestMapping("/addLogWitness")
public	JsonResult  addLogWitness(HttpSession session,HttpServletRequest req) throws SysException{
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	
	JsonResult j = new JsonResult();
	
	if(logService.addLogWitness(map)>0){
		j.setSuccess(true);
		j.setMsg("success!");
	}else{
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}
@ResponseBody
@RequestMapping("/addLogQT")
public	JsonResult  addLogQT(HttpSession session,HttpServletRequest req) throws SysException{
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	
	JsonResult j = new JsonResult();
	
	if(logService.addLogQT(map)>0){
		j.setSuccess(true);
		j.setMsg("success!");
	}else{
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}
@ResponseBody
@RequestMapping("/delLogById")
public	JsonResult  delLogById(HttpSession session,HttpServletRequest req) throws SysException{
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	
	JsonResult j = new JsonResult();
	
	if(logService.delLogById(map)>0){
		j.setSuccess(true);
		j.setMsg("删除日志成功!");
	}else{
		j.setSuccess(false);
		j.setMsg("删除日志失败!");
	}
	return j;
}
@ResponseBody
@RequestMapping("/getLogDetail")
public	JsonResult  getLogDetail(HttpSession session,HttpServletRequest req) throws SysException{
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	
	JsonResult j = new JsonResult();
	Map resultMap = new HashMap();
	resultMap = logService.getLogDetail(map);
	if(resultMap != null){
		j.setSuccess(true);
		j.setMsg("成功获取日志详情!");
		j.setResult(resultMap);
	}else{
		j.setSuccess(false);
		j.setMsg("获取日志详情失败!");
	}
	return j;
}

@ResponseBody
@RequestMapping("/editLog")
public	JsonResult  editLog(HttpSession session,HttpServletRequest req) throws SysException{
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	
	JsonResult j = new JsonResult();
	if(logService.editLog(map)>0){
		j.setSuccess(true);
		j.setMsg("修改成功!");
	}else{
		j.setSuccess(false);
		j.setMsg("修改失败!");
	}
	return j;
}
}