package mService.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import pageModel.EasyUIGridObj;
import exception.SysException;
import mCustomMapper.CustomABlogMapper;
import mCustomMapper.CustomUserMapper;
import mService.BlogService;
import mService.UserService;
@SuppressWarnings("rawtypes")
public class BlogServiceImpl implements BlogService {

	@Autowired
	private CustomABlogMapper mCustomBlogMapper;
	public EasyUIGridObj searchBlogs(Map map) throws SysException {
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
		mCustomBlogMapper.searchBlogs(map);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}
	public int deleteBlog(List list) {
		int rows = 0 ;
		if(mCustomBlogMapper.deleteBlog(list) >0){
			rows = 1;
		}
		return rows;
	}
	public EasyUIGridObj getAllComments(Map map) throws SysException {
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
		mCustomBlogMapper.getAllComments(map);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}
	public List getblogPostId(Map map) throws SysException {
		List<Map> resultList = new ArrayList<Map>();
		try {
			resultList = mCustomBlogMapper.getblogPostId(map);
		} catch (Exception e) {
			throw new SysException("获取帖子id下拉列表失败！");
		}
		return resultList;
	}
	public EasyUIGridObj getAllreplys(Map map) throws SysException {
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
		mCustomBlogMapper.getAllreplys(map);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}
	public List getCommentId(Map map) throws SysException {
		List<Map> resultList = new ArrayList<Map>();
		try {
			resultList = mCustomBlogMapper.getCommentId(map);
		} catch (Exception e) {
			throw new SysException("获取评论id下拉列表失败！");
		}
		return resultList;
	}
	public int deletereply(List list) {
		int rows = 0 ;
		if(mCustomBlogMapper.deletereply(list) >0){
			rows = 1;
		}
		return rows;
	}
	public int deleteComment(List list) {
		int rows = 0 ;
		if(mCustomBlogMapper.deleteComment(list) >0){
			rows = 1;
		}
		return rows;
	}


}
