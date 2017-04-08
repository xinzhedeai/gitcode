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
import pageModel.JsonResult;
import service.FriendService;
import util.SpringUtils;
import exception.SysException;
@SuppressWarnings("rawtypes")
@Controller
@RequestMapping("/friendAction")
public class FriendAction {

@Autowired
private FriendService friendService;

@ResponseBody
@RequestMapping("/searchMyFris")
public	JsonResult  searchMyFris(HttpSession session,HttpServletRequest req) throws SysException{
	Map map = new HashMap();
	List myFrisList = new ArrayList();
	map = SpringUtils.getParameterMap(req);
//	myFrisList = friendService.searchMyFris(map);//获取好友列表
	EasyUIGridObj easyUIGridObjs = friendService.pageMyFris(map);//获取好友列表
	JsonResult j = new JsonResult();
	
	if(myFrisList!=null){
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
}
