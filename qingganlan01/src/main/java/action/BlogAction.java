package action;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.swing.Spring;

import org.apache.log4j.Logger;
import org.codehaus.jackson.JsonFactory;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.SerializationConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartRequest;

import com.alibaba.fastjson.JSON;

import exception.SysException;
import pageModel.EasyUIGridObj;
import pageModel.JsonResult;
import pageModel.PageBlog;
import po.Blog;
import service.BlogService;
import service.UserService;
import util.SpringUtils;
import util.StringUtil;
@SuppressWarnings("rawtypes")
@Controller
@RequestMapping("/blogAction")
public class BlogAction {
public static Logger logger  = Logger.getLogger(UserAction.class);
	
	@Autowired
	private BlogService blogService;
	
	
	@ResponseBody
	@RequestMapping("/uploadBlogImg")
	public	JsonResult  uploadBlogImg(HttpSession session,HttpServletRequest req) throws SysException, IOException{
		JsonResult j = new JsonResult();
		Map resultMap = new HashMap();
		Map fileMap = new HashMap();
		List filesList = new ArrayList();
			try {
				
				String modu_cd = req.getParameter("module_cd");	
				req.setCharacterEncoding("UTF-8");
				MultipartRequest multiReq = (MultipartRequest) req;
				Iterator<String> files = multiReq.getFileNames();

				// sys_file_info表字段定义
				String FILE_ID = "", MODU_CD = "", FILE_NM = "", FILE_REL_PATH = "",
						FILE_ABS_PATH = "", FILE_EXTENSION = "", FILE_CONTENT_TYPE = "", UPLOAD_TS = "";
				long FILE_SIZE = 0, DL_CNT = 0, USED_STAT = 0;
				int ismainpic = 0, successcnt = 0;
				// 多个文件上传
				while (files.hasNext()) {
					String fileName = (String) files.next();
					MultipartFile multiFile = multiReq.getFile(fileName);
					if (multiFile != null && !multiFile.isEmpty()) {
						String file_path = req.getSession().getServletContext().getRealPath("/storage/upload/")+ modu_cd;
						if (multiFile != null && !multiFile.isEmpty()) {

							if(multiFile.getSize() > (int)(2.5*1024*1024)) throw new SysException("文件过大，请重新上传!");
							
							String originName = multiFile.getOriginalFilename();
							originName = URLDecoder.decode(originName, "UTF-8");

							String file_extension = (originName.substring(originName.lastIndexOf(".") + 1)).toLowerCase();
							long curTime = System.currentTimeMillis();
							String file_nm = originName.substring(0, originName.lastIndexOf("."));
							String file_id = "";
							file_nm = StringUtil.removeCommaChar(file_nm);
							file_nm = StringUtil.converterToSpell(file_nm);
							if (file_nm.length() > 49)
								file_nm = file_nm.substring(0, 49);
							if (file_nm.length() > 25)
								file_id = file_nm.substring(0, 25) + "_" + Long.toString(curTime);
							else
								file_id = file_nm + "_" + Long.toString(curTime);
							String file_content_type = multiFile.getContentType();
							
							// 字段赋值
							FILE_ID = file_id;
							MODU_CD = modu_cd;
							FILE_NM = file_nm;
							FILE_REL_PATH = modu_cd;
							//FILE_ABS_PATH = "/storage/upload/" + modu_cd + "/";
							FILE_ABS_PATH = file_path;
							FILE_EXTENSION = file_extension;
							FILE_CONTENT_TYPE = file_content_type;
							SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
							UPLOAD_TS = sdf.format(new Date());
							FILE_SIZE = multiFile.getSize();

							// 上传文件
							File f = new File(file_path);
							Boolean uploadSuccess = true;
							FileOutputStream fos = null;
							if (!f.exists()) {
								f.mkdirs();
								logger.info("创建了" + file_path + "文件夹.");
							}
							//绝对路径
							file_path = file_path + "/" + file_id + "." + file_extension;
							
							logger.info("文件路径：" + file_path);
							try {
								fos = new FileOutputStream(file_path);
								if (multiFile != null && !multiFile.isEmpty())
									fos.write(multiFile.getBytes());
							} catch (Exception e) {
								uploadSuccess = false;
								logger.error(e);
								throw new SysException("写文件错误.");
							} finally {
								if (fos != null)
									try {
										fos.close();
										fos = null;
									} catch (IOException e) {
										uploadSuccess = false;
										logger.error(e);
										throw new SysException("关闭文件流错误.");
									}
							}
							// 插入数据库
							if (uploadSuccess) {
								fileMap.put("FILE_ID", FILE_ID);
								fileMap.put("MODU_CD", MODU_CD);
								fileMap.put("MODU_NO", null);
								fileMap.put("FILE_NM", FILE_NM);
								fileMap.put("FILE_REL_PATH", FILE_REL_PATH);
								fileMap.put("FILE_ABS_PATH", FILE_ABS_PATH);
								fileMap.put("FILE_EXTENSION", FILE_EXTENSION);
								fileMap.put("FILE_CONTENT_TYPE", FILE_CONTENT_TYPE);
								fileMap.put("EXPIRE_TS", null);
								fileMap.put("UPLOAD_TS", UPLOAD_TS);
								fileMap.put("FILE_SIZE", FILE_SIZE);
								fileMap.put("DL_CNT", DL_CNT);
								fileMap.put("USED_STAT", USED_STAT);
								logger.info(file_path);
					    		BufferedImage src = ImageIO.read(new File(file_path));
					    	
					    		int width = src.getWidth(); // 得到源图宽  
					            int height = src.getHeight(); // 得到源图长  
					            fileMap.put("width", width);
					    		fileMap.put("height", height);
					    		
					    		if (logger.isDebugEnabled()) 
					    			logger.debug(fileMap);
								if (blogService.upLoadBlogImg(fileMap)>0) {
									successcnt++;
									filesList.add(fileMap);
									resultMap.put("files",filesList);
									resultMap.put("msg", "success");
									j.setResult(resultMap);
								}
							}
						}
					}
					ismainpic++;
				}
				
				if(ismainpic != successcnt) throw new SysException("总共上传了" + ismainpic + "个文件，成功" + successcnt + "，失败" + (ismainpic - successcnt) + "。");
		}finally{
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/addBlog")
	public	JsonResult  addBlog(HttpSession session,HttpServletRequest req) throws SysException{
		JsonResult j = new JsonResult();
		Map paramMap = new HashMap();
		paramMap = SpringUtils.getParameterMap(req);
		if(blogService.addBlog(paramMap)>0){
			j.setSuccess(true);
			j.setMsg("发表动态成功!");
		}else{
			j.setSuccess(false);
			j.setMsg("发表动态失败!");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/addUpVote")
	public	JsonResult  addUpVote(HttpSession session,HttpServletRequest req) throws SysException{
		JsonResult j = new JsonResult();
		Map paramMap = new HashMap();
		paramMap = SpringUtils.getParameterMap(req);
		if(blogService.addUpVote(paramMap)>0){
			j.setSuccess(true);
			j.setMsg("点赞成功!");
		}else{
			j.setSuccess(false);
			j.setMsg("点赞失败!");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/delUpVote")
	public	JsonResult  delUpVote(HttpSession session,HttpServletRequest req) throws SysException{
		JsonResult j = new JsonResult();
		Map paramMap = new HashMap();
		paramMap = SpringUtils.getParameterMap(req);
		if(blogService.delUpVote(paramMap)>0){
			j.setSuccess(true);
			j.setMsg("取消赞成功!");
		}else{
			j.setSuccess(false);
			j.setMsg("取消赞失败!");
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/addCollect")
	public	JsonResult  addCollect(HttpSession session,HttpServletRequest req) throws SysException{
		JsonResult j = new JsonResult();
		Map paramMap = new HashMap();
		paramMap = SpringUtils.getParameterMap(req);
		if(blogService.addCollect(paramMap)>0){
			j.setSuccess(true);
			j.setMsg("点赞成功!");
		}else{
			j.setSuccess(false);
			j.setMsg("点赞失败!");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/delCollect")
	public	JsonResult  delCollect(HttpSession session,HttpServletRequest req) throws SysException{
		JsonResult j = new JsonResult();
		Map paramMap = new HashMap();
		paramMap = SpringUtils.getParameterMap(req);
		if(blogService.delCollect(paramMap)>0){
			j.setSuccess(true);
			j.setMsg("点赞成功!");
		}else{
			j.setSuccess(false);
			j.setMsg("点赞失败!");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/searchAllBlogsByUser")
	public	JsonResult  searchBlogs(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		Map friendBlogsInfoMap = new HashMap();
		Map blogIsByIdMap = new HashMap();
		//Map resultMap = new HashMap();
		List allBlogList = new ArrayList();
		map = SpringUtils.getParameterMap(req);
	//	allBlogList = blogService.getAllBlogPosts(map);//获取自己和好友的帖子
		EasyUIGridObj easyUIGridObjs = blogService.page(map);//获取自己和好友的帖子分页版
		JsonResult j = new JsonResult();
		
		if(allBlogList!=null){
			j.setSuccess(true);
			j.setMsg("success!");
		//	j.setResult(allBlogList);
			j.setResult(easyUIGridObjs);
		/*	ObjectMapper objectMapper = new ObjectMapper();
			objectMapper.configure(SerializationConfig.Feature.WRITE_DATES_AS_TIMESTAMPS, false);
			 SimpleDateFormat fmt = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
		    objectMapper.getSerializationConfig().setDateFormat(fmt); */
		/*	logger.info(JSON.toJSONString(easyUIGridObjs));
			 JSON.toJSON(j);
			*/
		}else{
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/deleteBlog")
	public	JsonResult  deleteBlog(HttpSession session,HttpServletRequest req) throws SysException{
		JsonResult j = new JsonResult();
		Map paramMap = new HashMap();
		paramMap = SpringUtils.getParameterMap(req);
		if(blogService.deleteBlogByIdLogic(paramMap)>0){
			j.setSuccess(true);
			j.setMsg("删除帖子成功!请到回收站查看已删帖子");
		}else{
			j.setSuccess(false);
			j.setMsg("删除帖子失败!");
		}
		return j;
	}

	@ResponseBody
	@RequestMapping("/addComment")
	public	JsonResult  addComment(HttpSession session,HttpServletRequest req) throws SysException{
		JsonResult j = new JsonResult();
		Map paramMap = new HashMap();
		paramMap = SpringUtils.getParameterMap(req);
		if(blogService.addComment(paramMap)>0){
			j.setSuccess(true);
			j.setMsg("添加评论成功!");
		}else{
			j.setSuccess(false);
			j.setMsg("添加评论失败!");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/delComment")
	public	JsonResult  delComment(HttpSession session,HttpServletRequest req) throws SysException{
		JsonResult j = new JsonResult();
		Map paramMap = new HashMap();
		paramMap = SpringUtils.getParameterMap(req);
		if(blogService.delComment(paramMap)>0){
			j.setSuccess(true);
			j.setMsg("删除评论成功!");
		}else{
			j.setSuccess(false);
			j.setMsg("删除评论失败!");
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/addCommentReply")
	public	JsonResult  addCommentReply(HttpSession session,HttpServletRequest req) throws SysException{
		JsonResult j = new JsonResult();
		Map paramMap = new HashMap();
		paramMap = SpringUtils.getParameterMap(req);
		if(blogService.addCommentReply(paramMap)>0){
			j.setSuccess(true);
			j.setMsg("添加评论成功!");
		}else{
			j.setSuccess(false);
			j.setMsg("添加评论失败!");
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/addReplyReply")
	public	JsonResult  addReplyReply(HttpSession session,HttpServletRequest req) throws SysException{
		JsonResult j = new JsonResult();
		Map paramMap = new HashMap();
		paramMap = SpringUtils.getParameterMap(req);
		if(blogService.addReplyReply(paramMap)>0){
			j.setSuccess(true);
			j.setMsg("添加评论成功!");
		}else{
			j.setSuccess(false);
			j.setMsg("添加评论失败!");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/searchMyBlogs")
	public	JsonResult  searchMyBlogs(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		List allBlogList = new ArrayList();
		map = SpringUtils.getParameterMap(req);
	//	allBlogList = blogService.getMyBlogPosts(map);//获取自己的帖子
		EasyUIGridObj easyUIGridObjs = blogService.pageMyBlogs(map);//获取自己的帖子
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
	@RequestMapping("/searchMyRecBlogs")
	public	JsonResult  searchMyRecBlogs(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		List allBlogList = new ArrayList();
		map = SpringUtils.getParameterMap(req);
	//	allBlogList = blogService.getMyBlogPosts(map);//获取自己的帖子
		EasyUIGridObj easyUIGridObjs = blogService.searchMyRecBlogs(map);//获取自己的帖子
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
	@RequestMapping("/deleteBlogPhysical")
	public	JsonResult  deleteBlogPhysical(HttpSession session,HttpServletRequest req) throws SysException{
		JsonResult j = new JsonResult();
		Map paramMap = new HashMap();
		paramMap = SpringUtils.getParameterMap(req);
		if(blogService.deleteBlogPhysical(paramMap)>0){
			j.setSuccess(true);
			j.setMsg("删除帖子成功!请到回收站查看已删帖子");
		}else{
			j.setSuccess(false);
			j.setMsg("删除帖子失败!");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/blogReverse")
	public	JsonResult  blogReverse(HttpSession session,HttpServletRequest req) throws SysException{
		JsonResult j = new JsonResult();
		Map paramMap = new HashMap();
		paramMap = SpringUtils.getParameterMap(req);
		if(blogService.blogReverse(paramMap)>0){
			j.setSuccess(true);
			j.setMsg("从回收站恢复帖子成功!");
		}else{
			j.setSuccess(false);
			j.setMsg("从回收站恢复帖子失败!");
		}
		return j;
	}
	
	
}
