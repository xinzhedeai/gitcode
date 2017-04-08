package action;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pageModel.JsonResult;
import pageModel.PageBlog;
import service.BlogService;

public class TemplateAtion {
	/*
    @Autowired
	private BlogService tempService;
	
	@ResponseBody
	@RequestMapping("/addBlog")
	public	Json  addBlog(HttpSession session,HttpServletRequest req){
		Json j = new Json();
		Map map = new HashMap();
		String str = req.getParameter("");
		map.put("str", str);
		if(tempService.addBlog(map)>0){
			j.setSuccess(true);
			j.setMsg("发表动态成功!");
		}else{
			j.setSuccess(false);
			j.setMsg("发表动态失败!");
		}
		return j;
	}*/
}
