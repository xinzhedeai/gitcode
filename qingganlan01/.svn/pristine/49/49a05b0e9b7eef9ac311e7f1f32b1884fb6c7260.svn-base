package service;

import java.util.List;
import java.util.Map;

import exception.SysException;
import pageModel.EasyUIGridObj;
import pageModel.PageBlog;
import po.Blog;
@SuppressWarnings("rawtypes")
public interface BlogService {
	public int addBlog(Map map) throws SysException;

	
	
	public List<Map> getAllBlogPosts(Map map) throws SysException;

	public int upLoadBlogImg(Map fileMap);

	public EasyUIGridObj page(Map paramMap) throws SysException ;



	public int addUpVote(Map paramMap);
	
	public int delUpVote(Map paramMap);



	public int addCollect(Map paramMap);



	public int delCollect(Map paramMap);



	public int addComment(Map paramMap);



	public int deleteBlogByIdLogic(Map paramMap);



	public int addCommentReply(Map paramMap);



	public EasyUIGridObj pageMyBlogs(Map paramMap) throws SysException;



	public List getMyBlogPosts(Map paramMap);//获取我的帖子



	public int addReplyReply(Map paramMap);



	public int delComment(Map paramMap);



	public EasyUIGridObj searchMyRecBlogs(Map map) throws SysException;



	public int deleteBlogPhysical(Map paramMap);



	public int blogReverse(Map paramMap);



	
}
