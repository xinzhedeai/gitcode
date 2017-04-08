package service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.ibatis.session.SqlSession;
import org.apache.log4j.Logger;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import action.UserAction;
import customMapper.CustomBlogMapper;
import customMapper.CustomSysFileInfoMapper;
import customMapper.CustomUserInfoMapper;
import exception.SysException;
import pageModel.EasyUIGridObj;
import pageModel.PageBlog;
import po.Blog;
import po.OptionBlogInfo;
import mapper.BlogMapper;
import mapper.OptionBlogInfoMapper;
import mapper.SysFileInfoMapper;
import service.BlogService;
import util.BeanMapConvertUtil;
import util.StringUtil;
@SuppressWarnings("rawtypes")
public class BlogServiceImpl implements BlogService{
	@Autowired
	private BlogMapper blogMapper;
	@Autowired
	private CustomBlogMapper customBlogMapper;
	@Autowired
	private CustomSysFileInfoMapper sysFileInfoBlogMapper;
	@Autowired
	private CustomUserInfoMapper customUserInfoMapper;
	public static Logger logger  = Logger.getLogger(UserAction.class);
	public int addBlog(Map map) throws SysException {//添加帖子
		Blog blog = new Blog();
		blog = BeanMapConvertUtil.toBean(Blog.class, map);
		BeanUtils.copyProperties(map, blog);
		Date addBlogTime = new Date();
		logger.info(addBlogTime);
		String blogId = StringUtil.getUUID();
		
		blog.setSendTime(addBlogTime);
		blog.setBlogId(blogId);
		int rows = blogMapper.insertSelective(blog);
		if(rows>0){
			customUserInfoMapper.addBlogNoByUser(map);
			return rows;
		}
		return 0;
	}
	public int deleteBlogByIdLogic(Map paramMap) {
		int rows = 0 ;
		if(customBlogMapper.deleteBlogByIdLogic(paramMap) >0){
			customUserInfoMapper.reduceBlogNoByUser(paramMap);
			rows = 1;
		}
		return rows;
	}
	public int upLoadBlogImg(Map fileMap) {
		//上传图片文件
			// TODO Auto-generated method stub
		int uploadNo = sysFileInfoBlogMapper.upLoadFile(fileMap);
		return uploadNo;
	}
	public List<Map> getAllBlogPosts(Map map) throws SysException {
		List<Map> resultList = new ArrayList<Map>();
		Blog blog = new Blog();
		resultList = customBlogMapper.getAllBlogPostsByUser(map);
		logger.info(resultList);
		if(resultList!=null){
			return resultList;
		}
		return null;
	}
	
	public EasyUIGridObj page(Map paramMap) throws SysException {//分页查询所有动态。
		int pageNum = 0;
		int pageSize = 0;
		EasyUIGridObj easyUIGridObj = new EasyUIGridObj();
		try {
			pageNum = Integer.parseInt((String) paramMap.get("page"));
			pageSize = Integer.parseInt((String) paramMap.get("rows"));
		} catch (Exception e) {
			throw new SysException("分页参数格式不正确.");
		}
		
		Page page = PageHelper.startPage(pageNum, pageSize);
		customBlogMapper.getAllBlogPostsByUser(paramMap);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}

	public int addUpVote(Map paramMap) {
		
	/*	if((int)session.selectOne("openapi.user.checkLoninCount",map) > 0){
			if(session.update("openapi.user.updateLoginStatistics",map) == 0) throw new BusinessException("登录失败，请重新登陆！",-211);
		}else{
			if(session.insert("openapi.user.insertLoginStatistics",map) == 0)
		}*/
		int rows = 0;
		if(customBlogMapper.selectBlogOptExit(paramMap)>0){
			if(customBlogMapper.updateBlogOptAddUpvote(paramMap)>0){
				if(customBlogMapper.addUpVoteNo(paramMap)>0)
					rows = 1;
			}	
		}else{
			if(customBlogMapper.insertBlogOptUpvote(paramMap)>0){
				if(customBlogMapper.addUpVoteNo(paramMap)>0)
					rows = 1;
			}
		}
		return rows;	
	}
	public int delUpVote(Map paramMap) {
		int rows = 0 ;
		if(customBlogMapper.updateBlogOptDelUpvote(paramMap) >0){
			if(customBlogMapper.delUpVoteNo(paramMap)>0)
				rows = 1;
		}
		return rows;
	}

	public int addCollect(Map paramMap) {
		int rows = 0;
		if(customBlogMapper.selectBlogOptExit(paramMap)>0){
			if(customBlogMapper.updateBlogOptAddCollect(paramMap)>0){
				if(customBlogMapper.addCollectNo(paramMap)>0)
					customUserInfoMapper.addCollectNoByUser(paramMap);
					rows = 1;
			}	
		}else{
			if(customBlogMapper.insertBlogOptCollect(paramMap)>0){
				if(customBlogMapper.addCollectNo(paramMap)>0)
					customUserInfoMapper.addCollectNoByUser(paramMap);
					rows = 1;
			}
		}
		return rows;	
	}
	public int delCollect(Map paramMap) {
		int rows = 0 ;
		if(customBlogMapper.updateBlogOptDelCollect(paramMap) >0){
			if(customBlogMapper.delCollectNo(paramMap)>0)
				customUserInfoMapper.reduceCollectNoByUser(paramMap);
				rows = 1;
		}
		return rows;
	}

	public int addComment(Map paramMap) {
		int rows = 0 ;
		if(customBlogMapper.addComment(paramMap) >0){
			customBlogMapper.addCommentNo(paramMap);
			customUserInfoMapper.addCommentNoByUser(paramMap);
			rows = 1;
		}
		return rows;
	}
	public int delComment(Map paramMap) {
		int rows = 0 ;
		if(customBlogMapper.delComment(paramMap) >0){
			customBlogMapper.reduceCommentNo(paramMap);
			customUserInfoMapper.reduceCommentNoByUser(paramMap);
			rows = 1;
		}
		return rows;
	}

	public int addCommentReply(Map paramMap) {
		int rows = 0 ;
		if(customBlogMapper.addCommentReply(paramMap) >0){
			rows = 1;
		}
		return rows;
	}    

	public int addReplyReply(Map paramMap) {
		int rows = 0 ;
		if(customBlogMapper.addReplyReply(paramMap) >0){
			rows = 1;
		}
		return rows;
	}
	
	public EasyUIGridObj pageMyBlogs(Map paramMap) throws SysException {
		int pageNum = 0;
		int pageSize = 0;
		EasyUIGridObj easyUIGridObj = new EasyUIGridObj();
		try {
			pageNum = Integer.parseInt((String) paramMap.get("page"));
			pageSize = Integer.parseInt((String) paramMap.get("rows"));
		} catch (Exception e) {
			throw new SysException("分页参数格式不正确.");
		}
		
		Page page = PageHelper.startPage(pageNum, pageSize);
		customBlogMapper.getMyBlogs(paramMap);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}

	public List getMyBlogPosts(Map map) {
		
		List<Map> resultList = new ArrayList<Map>();
		resultList = customBlogMapper.getMyBlogs(map);;
		logger.info(resultList);
		if(resultList!=null){
			return resultList;
		}
		return null;
	}
	public EasyUIGridObj searchMyRecBlogs(Map paramMap) throws SysException {
		int pageNum = 0;
		int pageSize = 0;
		EasyUIGridObj easyUIGridObj = new EasyUIGridObj();
		try {
			pageNum = Integer.parseInt((String) paramMap.get("page"));
			pageSize = Integer.parseInt((String) paramMap.get("rows"));
		} catch (Exception e) {
			throw new SysException("分页参数格式不正确.");
		}
		
		Page page = PageHelper.startPage(pageNum, pageSize);
		customBlogMapper.searchMyRecBlogs(paramMap);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}
	public int deleteBlogPhysical(Map paramMap) {
		int rows = 0 ;
		if(customBlogMapper.deleteBlogPhysical(paramMap) >0){
			rows = 1;
		}
		return rows;
	}
	public int blogReverse(Map paramMap) {
		int rows = 0 ;
		if(customBlogMapper.blogReverseAdd(paramMap) >0){
			rows = 1;
		}
		return rows;
	}



	
}
