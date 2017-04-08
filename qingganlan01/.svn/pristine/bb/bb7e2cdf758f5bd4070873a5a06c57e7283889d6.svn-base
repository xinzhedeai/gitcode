package action;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.text.DecimalFormat;
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

import org.apache.ibatis.session.SqlSession;
import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFDateUtil;
import org.apache.poi.hssf.usermodel.HSSFPictureData;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartRequest;

import pageModel.EasyUIGridObj;
import pageModel.JsonResult;
import service.FellowShipService;
import service.UserService;
import util.MD5Util;
import util.SpringUtils;
import util.StringUtil;
import util.WDUtil;
import exception.SysException;
@SuppressWarnings("rawtypes")
@Controller
@RequestMapping("/fellowShipAction")
public class FellowShipAction{

@Autowired
private FellowShipService fellowShipService;
@Autowired
private UserService userService;

public static Logger logger  = Logger.getLogger(FellowShipAction.class);
	@ResponseBody
	@RequestMapping("/searchMyFellowShips")
	public JsonResult searchMyFellowShips(HttpSession session,
			HttpServletRequest req) throws SysException {
		Map map = new HashMap();
		List myFrisList = new ArrayList();
		map = SpringUtils.getParameterMap(req);
		// myFrisList = fellowShipService.getMyFellowShips(map);//获取好友列表
		EasyUIGridObj easyUIGridObjs = fellowShipService.pageMyFellowShips(map);// 获取好友列表

		JsonResult j = new JsonResult();

		if (myFrisList != null) {
			j.setSuccess(true);
			j.setMsg("success!");
			// j.setResult(myFrisList);
			j.setResult(easyUIGridObjs);
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/searchMyJoinFS")
	public JsonResult searchMyJoinFS(HttpSession session,
			HttpServletRequest req) throws SysException {
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		EasyUIGridObj easyUIGridObjs = fellowShipService.searchMyJoinFS(map);// 获取好友列表

		JsonResult j = new JsonResult();

		if (easyUIGridObjs != null) {
			j.setSuccess(true);
			j.setMsg("success!");
			j.setResult(easyUIGridObjs);
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/getFellowShipDetail")
	public JsonResult getFellowShipDetail(HttpSession session,
			HttpServletRequest req) throws SysException {
		Map map = new HashMap();
		Map resultMap = new HashMap();
		List myFellowDetail = new ArrayList();
		map = SpringUtils.getParameterMap(req);
		resultMap = fellowShipService.getFellowShipDetail(map);// 获取好友列表
		// EasyUIGridObj easyUIGridObjs =
		// fellowShipService.getFellowShipDetail(map);//获取好友列表

		JsonResult j = new JsonResult();

		if (myFellowDetail != null) {
			j.setSuccess(true);
			j.setMsg("success!");
			// j.setResult(myFrisList);
			j.setResult(resultMap);
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}

	@ResponseBody
	@RequestMapping("/addPray")
	public JsonResult addPray(HttpSession session, HttpServletRequest req)
			throws SysException {
		Map map = new HashMap();
		JsonResult j = new JsonResult();
		map = SpringUtils.getParameterMap(req);
		if (fellowShipService.addPray(map) > 0) {
			j.setSuccess(true);
			j.setMsg("success!");
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/searchPrays")
	public JsonResult searchPrays(HttpSession session, HttpServletRequest req)throws SysException {
		Map map = new HashMap();
		//List prayList = new ArrayList();
		map = SpringUtils.getParameterMap(req);
		EasyUIGridObj easyUIGridObjs = fellowShipService.searchPrays(map);// 获取好友列表

		JsonResult j = new JsonResult();

		if (easyUIGridObjs != null) {
			j.setSuccess(true);
			j.setMsg("success!");
			// j.setResult(myFrisList);
			j.setResult(easyUIGridObjs);
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/getFellowShipMsg")
	public JsonResult getFellowShipMsg(HttpSession session, HttpServletRequest req)throws SysException {
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		EasyUIGridObj easyUIGridObjs = fellowShipService.getFellowShipMsg(map);// 获取好友列表

		JsonResult j = new JsonResult();

		if (easyUIGridObjs != null) {
			j.setSuccess(true);
			j.setMsg("success!");
			j.setResult(easyUIGridObjs);
		} else {
			j.setSuccess(false);
			j.setMsg("false!");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/addFellowShipMsg")
	public JsonResult addFellowShipMsg(HttpSession session, HttpServletRequest req)throws SysException {
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		if (fellowShipService.addFellowShipMsg(map)>0) {
			j.setSuccess(true);
			j.setMsg("添加团契公告通知成功");
		} else {
			j.setSuccess(false);
			j.setMsg("添加团契公告通知失败");
		}
		return j;
	}
	@ResponseBody
	@RequestMapping("/deleteFellowShipMsg")
	public JsonResult deleteFellowShipMsg(HttpSession session, HttpServletRequest req)throws SysException {
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		JsonResult j = new JsonResult();
		if (fellowShipService.deleteFellowShipMsg(map)>0) {
			j.setSuccess(true);
			j.setMsg("删除团契公告通知成功");
		} else {
			j.setSuccess(false);
			j.setMsg("删除团契公告通知失败");
		}
		return j;
	}
	
	@ResponseBody
	@RequestMapping("/addFSMembersBatch")
	public JsonResult addFSMembersBatch(HttpSession session, HttpServletRequest req)throws SysException {
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		String fsId = (String) map.get("fsId");
		JsonResult j = new JsonResult();
		try {
			Boolean uploadSuccess = true;
			String file_path = "";
			//将excel文件保存到本地
			req.setCharacterEncoding("UTF-8");
			MultipartRequest multiReq = (MultipartRequest) req;
			Iterator<String> files = multiReq.getFileNames();
			while (files.hasNext()) {
				String fileName = (String) files.next();
				MultipartFile multiFile = multiReq.getFile(fileName);
				if (multiFile != null && !multiFile.isEmpty()) {
					file_path = req.getSession().getServletContext().getRealPath("/storage/");
					if (multiFile != null && !multiFile.isEmpty()) {
						String originName = multiFile.getOriginalFilename();
						originName = URLDecoder.decode(originName, "UTF-8");
						String file_extension = (originName.substring(originName.lastIndexOf(".") + 1)).toLowerCase();
						if(!file_extension.equals("xls") && !file_extension.equals("xlsx")) throw new SysException("请上传正确的文件!");
					//	if(file_extension.equals("xlsx")) throw new SysException("仅支持2003版本的Excel!");
						File f = new File(file_path);
						FileOutputStream fos = null;
						if (!f.exists()) {
							f.mkdirs();
							logger.info("创建了" + file_path + "文件夹.");
						}

						file_path = file_path + "test."+file_extension;
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
					}
				}
			}			
			//将excel表中内容读出来
			if(uploadSuccess){
				readExcel(req,file_path,fsId);
				File f = new File(file_path);
				f.delete();
			}
			
			} catch (Exception e) {
				logger.error(e);
				throw new SysException("上传excel出现异常。");
			}
		 
		return j;
	}
public void readExcel(HttpServletRequest req ,String fileName,String fsId) throws SysException{  
    try {  
        InputStream input = new FileInputStream(fileName);  //建立输入流  
        Workbook wb = null;
        boolean isExcel2003 = true;
        Sheet sheet;
        Iterator<Row> rows = null;
		if (WDUtil.isExcel2007(fileName)){//我是用本地2013作的excel表，改了后缀名为xls格式的，
			//虽然判断后认为事2003以前的，但实际解析还是为2007以上的文件格式。
			isExcel2003 = false;
		}
		if (isExcel2003){
			wb = new HSSFWorkbook(input);//hssF是Excel2003以前（包括2003）的版本没有问题
			sheet = (HSSFSheet) wb.getSheetAt(0);
			rows = sheet.rowIterator(); 
		}
		else{
			wb = new XSSFWorkbook(input);
			sheet = (XSSFSheet) wb.getSheetAt(0);
			rows= sheet.rowIterator(); 
		}
		
		 
		//获取excel表中有数据的行数
		int numOfRow = sheet.getLastRowNum();
		int dataRowNum = 0;
		if (numOfRow > 0) {
			for (int rowNum = 1; rowNum <= numOfRow; rowNum++) {
				Row hssfRow = sheet.getRow(rowNum);
				if (isEmptyRow1(hssfRow) == false) {
					dataRowNum++;
				}
			}
		}
		//获取表中的数据，每个公司信息存一个Map，所有的放在一个List<Map>中,同样的，每个用户信息存一个Map，所有的放在一个List<Map>中。
		List<Map> user_list = new ArrayList();
		List<Map> fellow_user_list = new ArrayList();
	
			int line = 0;
            while (rows.hasNext()) {
            	Map userMap = new HashMap();
            	Map userFellowMap = new HashMap();
                Row row = rows.next();  //获得行数据    
                Iterator<Cell> cells = row.cellIterator();//获得第一行的迭代器                 
				if (line != 0) {
					String[] list = new String[10];
					int num = 0;
					while (cells.hasNext()) {
						Cell cell = cells.next();
						if(num != cell.getColumnIndex()){
							list[num] = "";
							num++;//这里的num++为什么要写两个。
						}
						list[num] = getValue(cell).trim();
						num++;							
					}
			//		if(list[5].equals("")) throw new BusinessException("第"+(line+1)+"行"+"请保证用户类型或公司类型不为空!",-817);
					//判断不能为空
					if(list[0].equals("")) throw new SysException("第"+(line+1)+"行"+"姓名不能为空!");
					if(list[1].equals("")) throw new SysException("第"+(line+1)+"行"+"电话不能为空!");
					if(list[2].equals("")) throw new  SysException("第"+(line+1)+"行"+"性别不能为空!");
					if(list[3].equals("")) throw new  SysException("第"+(line+1)+"行"+"qq号不能为空!");
					if(list[4].equals("")) throw new  SysException("第"+(line+1)+"行"+"微信号不能为空!");
					if(list[5].equals("")) throw new  SysException("第"+(line+1)+"行"+"职业不能为空!");
					
					if(list[1].length() != 11) throw new SysException("第"+(line+1)+"行"+"请输入正确的联系人手机号!");
				/*	SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
					String str = sdf.format(new Date());
					*/
					userMap.put("US_ID", list[1]);
					userMap.put("US_NAME", list[0]);
					userMap.put("US_PS", MD5Util.getMD5("123456"));
					userMap.put("TEL", list[1]);
					userMap.put("QQ", list[3]);
					userMap.put("WEICHAT", list[4]);
					userMap.put("PROFESSION", list[5]);
					if(list[2].equals("男")){
						userMap.put("SEX", "0");
					}else if(list[2].equals("女")){
						userMap.put("SEX", "1");
					}else if(list[2].equals("")){
						userMap.put("SEX", null);
					}else{
						throw new SysException("第"+(line+1)+"行"+"请输入正确的性别!");
					}
					
					userFellowMap.put("FS_ID", fsId);
					userFellowMap.put("US_ID", list[1]);
					user_list.add(userMap);
					fellow_user_list.add(userFellowMap);
					logger.error("第一個單元格的内容"+list[0]+"多少行内容"+dataRowNum);
				}
				
                if(line == dataRowNum) break;
                line++;
            } 
		
		//将数据存入数据库
		for (Map map : user_list) {				
			if(userService.addUserBatch(map)== 0) throw new SysException("导入失败!");
		}
		for (Map map : fellow_user_list) {
			if(fellowShipService.addFellowMembersBatch(map) == 0) throw new SysException("导入失败!");
		}
					
    } catch (IOException ex) {  
        ex.printStackTrace();  
    }  
} 
private static String getValue(Cell hssfCell) {
	if (hssfCell == null) {
		return "";
	} else {
		try {
			if (hssfCell.getCellType() == hssfCell.CELL_TYPE_BOOLEAN) {
				// 返回布尔类型的值
				return toString(hssfCell.getBooleanCellValue());
			} else if (hssfCell.getCellType() == hssfCell.CELL_TYPE_NUMERIC) {
				try {

					// 返回数值类型的值
					boolean isCellDateFormatted = HSSFDateUtil.isCellDateFormatted(hssfCell);
					if (isCellDateFormatted) {
						short format = hssfCell.getCellStyle().getDataFormat();
						SimpleDateFormat sdf = null;
						if (format == 14 || format == 31 || format == 57 || format == 58) {
							// 日期
							sdf = new SimpleDateFormat("yyyy-MM-dd");
						} else if (format == 20 || format == 32) {
							// 时间
							sdf = new SimpleDateFormat("HH:mm");
						}
						double value = hssfCell.getNumericCellValue();
						Date date = org.apache.poi.ss.usermodel.DateUtil.getJavaDate(value);
						return sdf.format(date);
					} else {
						try {
							DecimalFormat df = new DecimalFormat("0");
							String number = df.format(hssfCell.getNumericCellValue());
							return number;

						} catch (Exception e) {
							return toString(hssfCell.getNumericCellValue());
						}

					}
				} catch (Exception e) {
					return toString(hssfCell.getNumericCellValue());
				}
			} else {
				// 返回字符串类型的值
				return toString(hssfCell.getStringCellValue());
			}
		} catch (Exception e) {
			return "";
		}

	}
}

// 只要没有数据,就判断为空行,不管它是不是有格式,而poi自带的row == null,指的是既没有数据又没有格式Style
public static boolean isEmptyRow1(Row hssfRow) {
	int temp = 0;
	boolean isEmptyRow = false;
	if (hssfRow == null) {
		isEmptyRow = true;
	} else {
		for (int i = 0; i <= hssfRow.getLastCellNum(); i++) {
			if (hssfRow.getCell(i) != null) {
				if (getValue(hssfRow.getCell(i)) != null && !("".equals(getValue(hssfRow.getCell(i))))) {
					temp++;
				}
			}
		}
		if (temp == 0) {
			isEmptyRow = true;
		}
	}
	return isEmptyRow;
} 
public static String toString(Object object) {
	String temp = "";
	if (object != null) {
		temp = object.toString();
	}
	return temp;
}


@ResponseBody
@RequestMapping("/deletePrayById")
public JsonResult deletePrayById(HttpSession session, HttpServletRequest req)throws SysException {
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	JsonResult j = new JsonResult();
	if (fellowShipService.deletePrayById(map)>0) {
		j.setSuccess(true);
		j.setMsg("删除禱告貼成功");
	} else {
		j.setSuccess(false);
		j.setMsg("删除禱告貼失败");
	}
	return j;
}
@ResponseBody
@RequestMapping("/addConcern")
public JsonResult addConcern(HttpSession session, HttpServletRequest req)throws SysException {
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	JsonResult j = new JsonResult();
	if (fellowShipService.addConcern(map)>0) {
		j.setSuccess(true);
		j.setMsg("添加关注成功");
	} else {
		j.setSuccess(false);
		j.setMsg("取消关注失败");
	}
	return j;
}

@ResponseBody
@RequestMapping("/delConcern")
public JsonResult delConcern(HttpSession session, HttpServletRequest req)throws SysException {
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	JsonResult j = new JsonResult();
	if (fellowShipService.delConcern(map)>0) {
		j.setSuccess(true);
		j.setMsg("取消关注成功");
	} else {
		j.setSuccess(false);
		j.setMsg("取消关注失败");
	}
	return j;
}

@ResponseBody
@RequestMapping("/uploadFSHeadImg")
public JsonResult uploadFSHeadImg(HttpSession session, HttpServletRequest req)throws SysException, IOException {
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
			long FILE_SIZE = 0, DL_CNT = 0, USED_STAT = 1;
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
							if (fellowShipService.upLoadFSHeadImg(fileMap)>0) {
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
@RequestMapping("/addFellowShip")
public JsonResult addFellowShip(HttpSession session, HttpServletRequest req)throws SysException {
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	JsonResult j = new JsonResult();
	if (fellowShipService.addFellowShip(map)>0) {
		j.setSuccess(true);
		j.setMsg("添加团契成功");
	} else {
		j.setSuccess(false);
		j.setMsg("取消团契失败");
	}
	return j;
}

@ResponseBody
@RequestMapping("/searchFS")
public JsonResult searchFS(HttpSession session,HttpServletRequest req) throws SysException{
	Map map = new HashMap();
	List allBlogList = new ArrayList();
	map = SpringUtils.getParameterMap(req);
//	allBlogList = blogService.getAllBlogPosts(map);//获取自己和好友的帖子
	EasyUIGridObj easyUIGridObjs = fellowShipService.searchFS(map);//获取自己和好友的帖子分页版
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
@RequestMapping("/addAlbum")
public JsonResult addAlbum(HttpSession session, HttpServletRequest req)throws SysException, IOException {
	JsonResult j = new JsonResult();
	Map resultMap = new HashMap();
	Map fileMap = new HashMap();
	List filesList = new ArrayList();
		try {
			String modu_cd = req.getParameter("module_cd");	
			String fsId = req.getParameter("fsId");
			req.setCharacterEncoding("UTF-8");
			MultipartRequest multiReq = (MultipartRequest) req;
			Iterator<String> files = multiReq.getFileNames();

			// sys_file_info表字段定义
			String FILE_ID = "", MODU_CD = "", FILE_NM = "", FILE_REL_PATH = "",
					FILE_ABS_PATH = "", FILE_EXTENSION = "", FILE_CONTENT_TYPE = "", UPLOAD_TS = "",FS_ID = "";
			long FILE_SIZE = 0, DL_CNT = 0, USED_STAT = 1;
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
						FS_ID = fsId;

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
							fileMap.put("FS_ID", FS_ID);
							logger.info(file_path);
				    		BufferedImage src = ImageIO.read(new File(file_path));
				    	
				    		int width = src.getWidth(); // 得到源图宽  
				            int height = src.getHeight(); // 得到源图长  
				            fileMap.put("width", width);
				    		fileMap.put("height", height);
				    		
				    		if (logger.isDebugEnabled()) 
				    			logger.debug(fileMap);
							if (fellowShipService.upLoadFSAlbumImg(fileMap)>0) {
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
@RequestMapping("/getFSAlbumImgs")
public JsonResult getFSAlbumImgs(HttpSession session, HttpServletRequest req)throws SysException {
	Map map = new HashMap();
	//List prayList = new ArrayList();
	map = SpringUtils.getParameterMap(req);
	EasyUIGridObj easyUIGridObjs = fellowShipService.getFSAlbumImgs(map);// 获取好友列表
	JsonResult j = new JsonResult();
	if (easyUIGridObjs != null) {
		j.setSuccess(true);
		j.setMsg("success!");
		// j.setResult(myFrisList);
		j.setResult(easyUIGridObjs);
	} else {
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}
@ResponseBody
@RequestMapping("/searchAllQt")
public JsonResult searchAllQt(HttpSession session, HttpServletRequest req)throws SysException {
	Map map = new HashMap();
	//List prayList = new ArrayList();
	map = SpringUtils.getParameterMap(req);
	EasyUIGridObj easyUIGridObjs = fellowShipService.searchAllQt(map);// 获取好友列表
	JsonResult j = new JsonResult();
	if (easyUIGridObjs != null) {
		j.setSuccess(true);
		j.setMsg("success!");
		// j.setResult(myFrisList);
		j.setResult(easyUIGridObjs);
	} else {
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}
@ResponseBody
@RequestMapping("/searchNoSolutedQt")
public JsonResult searchNoSolutedQt(HttpSession session, HttpServletRequest req)throws SysException {
	Map map = new HashMap();
	//List prayList = new ArrayList();
	map = SpringUtils.getParameterMap(req);
	EasyUIGridObj easyUIGridObjs = fellowShipService.searchNoSolutedQt(map);// 获取好友列表
	JsonResult j = new JsonResult();
	if (easyUIGridObjs != null) {
		j.setSuccess(true);
		j.setMsg("success!");
		j.setResult(easyUIGridObjs);
	} else {
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}
@ResponseBody
@RequestMapping("/searchSolutedQt")
public JsonResult searchSolutedQt(HttpSession session, HttpServletRequest req)throws SysException {
	Map map = new HashMap();
	//List prayList = new ArrayList();
	map = SpringUtils.getParameterMap(req);
	EasyUIGridObj easyUIGridObjs = fellowShipService.searchSolutedQt(map);// 获取好友列表
	JsonResult j = new JsonResult();
	if (easyUIGridObjs != null) {
		j.setSuccess(true);
		j.setMsg("success!");
		j.setResult(easyUIGridObjs);
	} else {
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}

@ResponseBody
@RequestMapping("/getQuesitionDetail")
public JsonResult getQuesitionDetail(HttpSession session, HttpServletRequest req)throws SysException {
	Map map = new HashMap();
	Map resultMap = new HashMap();
	//List prayList = new ArrayList();
	map = SpringUtils.getParameterMap(req);
	resultMap = fellowShipService.getQuesitionDetail(map);// 获取好友列表
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
@RequestMapping("/getAnswers")
public JsonResult getAnswers(HttpSession session, HttpServletRequest req)throws SysException {
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	EasyUIGridObj easyUIGridObjs = fellowShipService.getAnswers(map);// 获取好友列表
	JsonResult j = new JsonResult();
	if (easyUIGridObjs != null) {
		j.setSuccess(true);
		j.setMsg("success!");
		j.setResult(easyUIGridObjs);
	} else {
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}

@ResponseBody
@RequestMapping("/addAnswer")
public JsonResult addAnswer(HttpSession session, HttpServletRequest req)throws SysException {
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	JsonResult j = new JsonResult();
	if (fellowShipService.addAnswer(map)>0) {
		j.setSuccess(true);
		j.setMsg("success!");
	} else {
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}

@ResponseBody
@RequestMapping("/addReplyReply")
public JsonResult addReplyReply(HttpSession session, HttpServletRequest req)throws SysException {
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	JsonResult j = new JsonResult();
	if (fellowShipService.addReplyReply(map)>0) {
		j.setSuccess(true);
		j.setMsg("success!");
	} else {
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}
@ResponseBody
@RequestMapping("/isSoluted")
public JsonResult isSoluted(HttpSession session, HttpServletRequest req)throws SysException {
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	JsonResult j = new JsonResult();
	if (fellowShipService.isSoluted(map)>0) {
		j.setSuccess(true);
		j.setMsg("success!");
	} else {
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}

@ResponseBody
@RequestMapping("/deleteFellow")
public JsonResult deleteFellow(HttpSession session, HttpServletRequest req)throws SysException {
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	JsonResult j = new JsonResult();
	if (fellowShipService.deleteFellow(map)>0) {
		j.setSuccess(true);
		j.setMsg("success!");
	} else {
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}
@ResponseBody
@RequestMapping("/delFellowPic")
public JsonResult delFellowPic(HttpSession session, HttpServletRequest req)throws SysException {
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	JsonResult j = new JsonResult();
	if (fellowShipService.delFellowPic(map)>0) {
		j.setSuccess(true);
		j.setMsg("success!");
	} else {
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}

@ResponseBody
@RequestMapping("/addFSQ")
public JsonResult addFSQ(HttpSession session, HttpServletRequest req)throws SysException {
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	JsonResult j = new JsonResult();
	if (fellowShipService.addFSQ(map)>0) {
		j.setSuccess(true);
		j.setMsg("success!");
	} else {
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}

@ResponseBody
@RequestMapping("/modifyFsInfo")
public JsonResult modifyFsInfo(HttpSession session, HttpServletRequest req)throws SysException {
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	JsonResult j = new JsonResult();
	if (fellowShipService.modifyFsInfo(map)>0) {
		j.setSuccess(true);
		j.setMsg("success!");
	} else {
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}
}