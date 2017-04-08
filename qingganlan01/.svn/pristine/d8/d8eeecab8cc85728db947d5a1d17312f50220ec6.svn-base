package action;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
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

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartRequest;

import pageModel.EasyUIGridObj;
import pageModel.GridObj;
import pageModel.JsonResult;
import pageModel.ModifyPwd;
import pageModel.User;
import exception.SysException;
import service.UserService;
import util.ImageCutUtil;
import util.MD5Util;
import util.SpringUtils;
import util.StringUtil;
import util.UserUtil;
import vo.ActiveUser;
@SuppressWarnings({"unused", "rawtypes"})
@Controller
@RequestMapping("/userAction")
public class UserAction extends BaseAction{
	
	public static Logger logger  = Logger.getLogger(UserAction.class);
	
	@Autowired
	private UserService userService;
	
	@RequestMapping("/login")
	public String login()throws Exception{
		
		return "login";
	}
	@ResponseBody
	@RequestMapping("/loginSubmit")
	public JsonResult loginSubmit(HttpSession session,String userId,String pwd)throws Exception{
		System.out.println("进到servlet里面了。");
		if(userId == null || userId.trim().equals("")){
			logger.info("用户名不能为空!");
		}
		if(pwd == null || pwd.trim().equals("")){
			logger.info("密码不能为空!");
		}
		JsonResult j = new JsonResult();
		try {
			ActiveUser activeUser = userService.checkUser(userId, pwd);
			if(activeUser != null){
				UserUtil.saveUserToSession(session, activeUser);
				j.setSuccess(true);
				j.setMsg("登录成功！");
				j.setResult(activeUser);
			}
			
			
		} catch (Exception e) {
			// e.printStackTrace();
			j.setMsg(e.getMessage());
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/reg")
	public JsonResult reg(HttpSession session,HttpServletRequest req){
		logger.error("reg进来了");
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		
		String usPs =(MD5Util.getMD5((String) map.get("US_PS")));
		map.put("US_PS", usPs);
		//System.out.println("reg进来了");
		JsonResult j = new JsonResult();
		try {
			if(userService.reg(map)>0){
				j.setSuccess(true);
				j.setMsg("注册成功!");
				j.setResult(map);
			}
		} catch (Exception e) {
			j.setMsg(e.getMessage());
		}
		return j;
		
	}
	@ResponseBody
	@RequestMapping("/userInfoSet")
	public JsonResult userInfoSet(HttpSession session,User user){
		JsonResult j = new JsonResult();
		try {
			userService.userInfoSet(user);
			j.setSuccess(true);
			j.setMsg("修改用户信息成功!");
			j.setResult(user);
		} catch (Exception e) {
			// e.printStackTrace();
			j.setMsg(e.getMessage());
		}
		return j;
		
	}
	@ResponseBody
	@RequestMapping("/UploadFile")
	public JsonResult UploadFile(HttpSession session,HttpServletRequest req) throws SysException, IOException{
		JsonResult j = new JsonResult();
		//List filesList = new ArrayList();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		Map<String, Comparable> fileMap = new HashMap<String, Comparable>();
		List<Map<String, Comparable>> filesList = new ArrayList<Map<String, Comparable>>();
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
								if (userService.upLoadFile(fileMap)>0) {
									successcnt++;
									filesList.add(fileMap);
									/*resultMap.put("file_nm", FILE_NM);
									resultMap.put("modu_cd", MODU_CD);*/
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
	@RequestMapping("/userInfoUploadImg")
	public JsonResult userInfoUploadImg(HttpSession session,HttpServletRequest req){
		JsonResult j = new JsonResult();
		Map<String, String> paramMap = new HashMap<String, String>();
		String usId = req.getParameter("usId");
		paramMap.put("US_ID", usId);
		String headImg = (String) req.getParameter("headImg");
		paramMap.put("HEAD_IMG", headImg);
		try {
			//userService.userInfoUploadImg(sysFileInfo);
			String files = (String)req.getParameter("files");
			//这个paramMap存放的是userid和图片名。
			
				String path = (String) req.getParameter("file_absolute_path");
				//图片缩放
				if(req.getParameter("scale") != null && req.getParameter("flag") != null) {
					int scale = Integer.valueOf((String)req.getParameter("scale")).intValue();
					String flagStr =  (String)req.getParameter("flag");
					boolean flag = "true".equals(flagStr) == true? true:false;
					ImageCutUtil.scale(path, headImg, scale, flag);
				}
				//图片裁剪
				if(req.getParameter("x") != null && req.getParameter("y") != null 
						&&req.getParameter("destWidth") != null && req.getParameter("destHeight") != null 
						&& req.getParameter("file_absolute_path") != null) {
					int x = Integer.valueOf((String) req.getParameter("x")).intValue();
					int y = Integer.valueOf((String) req.getParameter("y")).intValue();
					int destWidth = Integer.valueOf((String) req.getParameter("destWidth")).intValue();
					int destHeight = Integer.valueOf((String) req.getParameter("destHeight")).intValue();
					ImageCutUtil.abscut(path, headImg, x, y, destWidth, destHeight);
				}
				//图片压缩
				ImageCutUtil.resize(path, headImg);
				if (!StringUtil.isEmpty(files)) {
					if(!userService.saveFiles(files, usId)||userService.modifyHeadImg(paramMap) <= 0) 
						j.setMsg("头像上传失败");
				}
			
			//session.commit();
				j.setMsg("头像修改成功！");
				j.setSuccess(true);
		} catch (Exception e) {
			// e.printStackTrace();
			j.setMsg(e.getMessage());
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/modifyPwd")
	public JsonResult modifyPwd(HttpSession session,ModifyPwd modifyPwd){
		JsonResult j = new JsonResult();
			if(userService.modifyPwd(modifyPwd)>0){
				j.setSuccess(true);
				j.setMsg("修改密码成功!");
			}else{
				j.setSuccess(false);
				j.setMsg("修改密码失败!");
			}
			
		return j;
		
	}
	@ResponseBody
	@RequestMapping("/userInfoDetail")
	public JsonResult userInfoDetail(HttpSession session,HttpServletRequest req){
		JsonResult j = new JsonResult();
		Map<?, ?> map = new HashMap<Object, Object>();
		Map<?, ?> resultMap = new HashMap<Object, Object>();
		map = SpringUtils.getParameterMap(req);
		resultMap = userService.userInfoDetail(map);
			if(resultMap!=null){
				j.setSuccess(true);
				j.setMsg("获取信息成功!");
				j.setResult(resultMap);
			}else{
				j.setSuccess(false);
				j.setMsg("获取信息失败!");
			}
			
		return j;
		
	}
	@ResponseBody
	@RequestMapping("/searchMyConcern")
	public JsonResult searchMyConcern(HttpSession session,HttpServletRequest req) throws SysException{
		Map<?, ?> map = new HashMap<Object, Object>();
		List<?> allBlogList = new ArrayList<Object>();
		map = SpringUtils.getParameterMap(req);
	//	allBlogList = blogService.getAllBlogPosts(map);//获取自己和好友的帖子
		EasyUIGridObj easyUIGridObjs = userService.searchMyConcern(map);//获取自己和好友的帖子分页版
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
	@RequestMapping("/getMyCollectBlogs")
	public JsonResult getMyCollectBlogs(HttpSession session,HttpServletRequest req) throws SysException{
		Map<?, ?> map = new HashMap<Object, Object>();
		List<?> allBlogList = new ArrayList<Object>();
		map = SpringUtils.getParameterMap(req);
	//	allBlogList = blogService.getAllBlogPosts(map);//获取自己和好友的帖子
		EasyUIGridObj easyUIGridObjs = userService.getMyCollectBlogs(map);//获取自己和好友的帖子分页版
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
	@RequestMapping("/getAllUsers")
	public JsonResult getAllUsers(HttpSession session,HttpServletRequest req) throws SysException{
		List<?> resultMap = new ArrayList<Object>();
		resultMap = userService.getAllUsers();//获取自己和好友的帖子分页版
		JsonResult j = new JsonResult();
		GridObj gridObj = new GridObj();
		if(resultMap != null){
			j.setSuccess(true);
			j.setMsg("success!");
			gridObj.setRows(resultMap);
			gridObj.setResults(resultMap.size());
			j.setResult(gridObj);
		}else{
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
		
	}
	@ResponseBody
	@RequestMapping("/addFriend")
	public JsonResult addFriend(HttpSession session,HttpServletRequest req) throws SysException{
		Map<?, ?> map = new HashMap<Object, Object>();
		map = SpringUtils.getParameterMap(req);
		;//获取自己和好友的帖子分页版
		JsonResult j = new JsonResult();
		if(userService.addFriend(map)>0){
			j.setSuccess(true);
			j.setMsg("success!");
		}else{
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
		
	}
	
	@ResponseBody
	@RequestMapping("/delFriend")
	public JsonResult delFriend(HttpSession session,HttpServletRequest req) throws SysException{
		Map<?, ?> map = new HashMap<Object, Object>();
		map = SpringUtils.getParameterMap(req);
		//获取自己和好友的帖子分页版
		JsonResult j = new JsonResult();
		if(userService.delFriend(map)>0){
			j.setSuccess(true);
			j.setMsg("success!");
		}else{
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
		
	}
	
	@ResponseBody
	@RequestMapping("/searchUsers")
	public JsonResult searchUsers(HttpSession session,HttpServletRequest req) throws SysException{
		Map<?, ?> map = new HashMap<Object, Object>();
		List<?> allBlogList = new ArrayList<Object>();
		map = SpringUtils.getParameterMap(req);
	//	allBlogList = blogService.getAllBlogPosts(map);//获取自己和好友的帖子
		EasyUIGridObj easyUIGridObjs = userService.searchUsers(map);//获取自己和好友的帖子分页版
		JsonResult j = new JsonResult();
		
		if(allBlogList!=null){
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
	@RequestMapping("/joinFellowShip")
	public JsonResult joinFellowShip(HttpSession session, HttpServletRequest req)throws SysException {
		Map<?, ?> map = new HashMap<Object, Object>();
		map = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		if (userService.joinFellowShip(map)>0) {
			j.setSuccess(true);
			j.setMsg("加入团契成功");
		} else {
			j.setSuccess(false);
			j.setMsg("加入团契失败");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/addChurch")
	public JsonResult addChurch(HttpSession session, HttpServletRequest req)throws SysException {
		Map<?, ?> map = new HashMap<Object, Object>();
		map = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		if (userService.addChurch(map)>0) {
			j.setSuccess(true);
			j.setMsg("添加教会成功");
		} else {
			j.setSuccess(false);
			j.setMsg("添加教会失败");
		}
		return j;
	}
	
	
	@ResponseBody
	@RequestMapping("/searchChurchs")
	public JsonResult searchChurchs(HttpSession session,HttpServletRequest req) throws SysException{
		Map<?, ?> map = new HashMap<Object, Object>();
		List<?> allBlogList = new ArrayList<Object>();
		map = SpringUtils.getParameterMap(req);
	//	allBlogList = blogService.getAllBlogPosts(map);//获取自己和好友的帖子
		EasyUIGridObj easyUIGridObjs = userService.searchChurchs(map);//获取自己和好友的帖子分页版
		JsonResult j = new JsonResult();
		
		if(allBlogList!=null){
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
	@RequestMapping("/getJobPages")
	public JsonResult getJobPages(HttpSession session,HttpServletRequest req) throws SysException{
		Map<?, ?> map = new HashMap<Object, Object>();
		List<?> allBlogList = new ArrayList<Object>();
		map = SpringUtils.getParameterMap(req);
		EasyUIGridObj easyUIGridObjs = userService.getJobPages(map);//获取自己和好友的帖子分页版
		JsonResult j = new JsonResult();
		
		if(allBlogList!=null){
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
	@RequestMapping("/getCommonCodes")
	public JsonResult getCommonCodes(HttpSession session,HttpServletRequest req) throws SysException{
		Map<?, ?> map = new HashMap<Object, Object>();
		List<?> resultList = new ArrayList<Object>();
		map = SpringUtils.getParameterMap(req);
		resultList = userService.getCommonCodes(map);
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
	
	@ResponseBody
	@RequestMapping("/addInChristWeb")
	public JsonResult addInChristWeb(HttpSession session, HttpServletRequest req)throws SysException {
		Map<?, ?> map = new HashMap<Object, Object>();
		map = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		if (userService.addInChristWeb(map)>0) {
			j.setSuccess(true);
			j.setMsg("添加主内网站成功");
		} else {
			j.setSuccess(false);
			j.setMsg("添加主内网站失败");
		}
		return j;
	}
	
/*	@ResponseBody
	@RequestMapping("/getMakeFriPages")
	public JsonResult getMakeFriPages(HttpSession session, HttpServletRequest req)throws SysException {
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		if (userService.getMakeFriPages(map)>0) {
			j.setSuccess(true);
			j.setMsg("添加主内网站成功");
		} else {
			j.setSuccess(false);
			j.setMsg("添加主内网站失败");
		}
		return j;
	}*/
	
	
	@ResponseBody
	@RequestMapping("/delMyConcern")
	public JsonResult delMyConcern(HttpSession session, HttpServletRequest req)throws SysException {
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		if (userService.delMyConcern(map)>0) {
			j.setSuccess(true);
			j.setMsg("取消关注成功");
		} else {
			j.setSuccess(false);
			j.setMsg("取消关注失败");
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/getLeftDropListNo")
	public JsonResult getLeftDropListNo(HttpSession session, HttpServletRequest req)throws SysException {
		Map resultMap = new HashMap();
		resultMap = userService.getLeftDropListNo();
		JsonResult j = new JsonResult();
		if (resultMap != null) {
			j.setSuccess(true);
			j.setMsg("success!");
			j.setResult(resultMap);
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/applyAuth")
	public JsonResult applyAuth(HttpSession session, HttpServletRequest req)throws SysException {
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		if (userService.applyAuth(map)>0) {
			j.setSuccess(true);
			j.setMsg("提交申请成功");
		} else {
			j.setSuccess(false);
			j.setMsg("提交申请失败");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/uploadImgAuth")
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
								if (userService.upLoadFile(fileMap)>0) {
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
	
	//退出
	@RequestMapping("/logout")
	public String logout(HttpSession httpSession)throws Exception{
		httpSession.invalidate();
		return "redirect:login.action";
	}	
	
    @InitBinder  
    public void initBinder(WebDataBinder binder) {  
	    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
	    dateFormat.setLenient(false);  
	    binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));   //true:允许输入空值，false:不能为空值  
    }
}
