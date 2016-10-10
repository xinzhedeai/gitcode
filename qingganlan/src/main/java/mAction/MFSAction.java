package mAction;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import mService.FSService;
import mService.FriendService;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pageModel.EasyUIGridObj;
import pageModel.JsonResult;
import util.SpringUtils;
import action.UserAction;
import exception.SysException;

@Controller
@RequestMapping("/mFSAction")
public class MFSAction {
	public static Logger logger  = Logger.getLogger(UserAction.class);
	@Autowired
	private FSService mFSService ;
	@ResponseBody
	@RequestMapping("/getAllFSs")
	public JsonResult getAllFSs(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		EasyUIGridObj easyUIGridObjs = mFSService.getAllFSs(map);//获取所有用户的列表
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
	@RequestMapping("/getFSName")
	public JsonResult getFSName(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		List resultList = new ArrayList();
		map = SpringUtils.getParameterMap(req);
		resultList = mFSService.getFSName(map);
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
	//getAllPrays
}
