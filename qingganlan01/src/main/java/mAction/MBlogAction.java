package mAction;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import mService.BlogService;
import mService.UserService;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import exception.SysException;
import pageModel.EasyUIGridObj;
import pageModel.JsonResult;
import util.SerialUtil;
import util.SpringUtils;
import action.UserAction;
@SuppressWarnings("rawtypes")
@Controller
@RequestMapping("/mBlogAction")
public class MBlogAction {
	public static Logger logger  = Logger.getLogger(UserAction.class);
	@Autowired
	private BlogService mBlogService;
	@ResponseBody
	@RequestMapping("/searchBlogs")
	public JsonResult searchBlogs(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		EasyUIGridObj easyUIGridObjs = mBlogService.searchBlogs(map);//获取所有用户的列表
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
	@RequestMapping("/deleteBlog")
	public JsonResult deleteBlog(HttpSession session,HttpServletRequest req) throws SysException{
		String blogIdList = req.getParameter("blogPostIdList");
		List list = SerialUtil.JsonToList(new JSONArray(blogIdList));
		JsonResult j = new JsonResult();
		
		if(mBlogService.deleteBlog(list)>0){
			j.setSuccess(true);
			j.setMsg("success!");
		}else{
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
		
	}
	//帖子的评论部分
	
	@ResponseBody
	@RequestMapping("/getAllComments")
	public JsonResult getAllComments(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		EasyUIGridObj easyUIGridObjs = mBlogService.getAllComments(map);//获取所有用户的列表
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
	@RequestMapping("/getblogPostId")
	public JsonResult getblogPostId(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		List resultList = new ArrayList();
		map = SpringUtils.getParameterMap(req);
		resultList = mBlogService.getblogPostId(map);
		EasyUIGridObj gridObj = new EasyUIGridObj();
		JsonResult j = new JsonResult();
		if (resultList != null) {
			gridObj.setTotal(resultList.size());
			gridObj.setRows(resultList);
			j.setSuccess(true);
			j.setMsg("success!");
			j.setResult(gridObj);
		}else{
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/getAllreplys")
	public JsonResult getAllreplys(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		EasyUIGridObj easyUIGridObjs = mBlogService.getAllreplys(map);//获取所有用户的列表
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
	@RequestMapping("/getCommentId")
	public JsonResult getCommentId(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		List resultList = new ArrayList();
		map = SpringUtils.getParameterMap(req);
		resultList = mBlogService.getCommentId(map);
		EasyUIGridObj gridObj = new EasyUIGridObj();
		JsonResult j = new JsonResult();
		if (resultList != null) {
			gridObj.setTotal(resultList.size());
			gridObj.setRows(resultList);
			j.setSuccess(true);
			j.setMsg("success!");
			j.setResult(gridObj);
		}else{
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/deleteComment")
	public JsonResult deleteComment(HttpSession session,HttpServletRequest req) throws SysException{
		String commentIdList = req.getParameter("commentIdList");
		List list = SerialUtil.JsonToList(new JSONArray(commentIdList));
		JsonResult j = new JsonResult();
		
		if(mBlogService.deleteComment(list)>0){
			j.setSuccess(true);
			j.setMsg("success!");
		}else{
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
		
	}

	@ResponseBody
	@RequestMapping("/deletereply")
	public JsonResult deletereply(HttpSession session,HttpServletRequest req) throws SysException{
		String replyIdList = req.getParameter("replyIdList");
		List list = SerialUtil.JsonToList(new JSONArray(replyIdList));
		JsonResult j = new JsonResult();
		
		if(mBlogService.deletereply(list)>0){
			j.setSuccess(true);
			j.setMsg("success!");
		}else{
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
		
	}
}