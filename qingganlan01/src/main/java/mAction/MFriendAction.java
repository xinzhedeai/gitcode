package mAction;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import mService.FriendService;
import mService.UserService;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import exception.SysException;
import pageModel.EasyUIGridObj;
import pageModel.JsonResult;
import util.SpringUtils;
import action.UserAction;
//团契和好友共用的action类。
@Controller
@RequestMapping("/mFriendAction")
public class MFriendAction {
	public static Logger logger  = Logger.getLogger(UserAction.class);
	@Autowired
	private FriendService mFriendService;
	@ResponseBody
	@RequestMapping("/getAllFriends")
	public JsonResult getAllFriends(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		EasyUIGridObj easyUIGridObjs = mFriendService.getAllFriends(map);//获取所有用户的列表
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
	
}
