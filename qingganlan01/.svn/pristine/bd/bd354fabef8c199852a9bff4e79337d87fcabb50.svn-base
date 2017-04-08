package mAction;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import mService.FSService;
import mService.FriendService;

import org.apache.ibatis.session.SqlSession;
import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


















import pageModel.EasyUIGridObj;
import pageModel.ExcelObj;
import pageModel.JsonResult;
import util.POIUtil;
import util.SpringUtils;
import util.WDUtil;
import action.UserAction;
import exception.SysException;
@SuppressWarnings("rawtypes")
@Controller
@RequestMapping("/mFSAction")
public class MFSAction {
	public static Logger logger  = Logger.getLogger(UserAction.class);
	@Autowired
	private FSService mFSService ;
	@ResponseBody
	@RequestMapping("/getAllFSs")
	public JsonResult getAllFSs(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		EasyUIGridObj easyUIGridObjs = mFSService.getAllFSs(map);//获取所有用户的列表
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
	@RequestMapping("/getFSName")
	public JsonResult getFSName(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		List resultList = new ArrayList();
		map = SpringUtils.getParameterMap(req);
		resultList = mFSService.getFSName(map);
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
	@RequestMapping("/getAllPrays")
	public JsonResult getAllPrays(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		EasyUIGridObj easyUIGridObjs = mFSService.getAllPrays(map);//获取所有用户的列表
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
	@RequestMapping("/getFSQs")
	public JsonResult getFSQs(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		EasyUIGridObj easyUIGridObjs = mFSService.getFSQs(map);//获取所有用户的列表
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
	@RequestMapping("/getChurchs")
	public JsonResult getChurchs(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		map = SpringUtils.getParameterMap(req);
		EasyUIGridObj easyUIGridObjs = mFSService.getChurchs(map);//获取所有用户的列表
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
	@RequestMapping("/getAllFSMember")
	public JsonResult getAllFSMember(HttpSession session,HttpServletRequest req) throws SysException{
		Map map = new HashMap();
		List resultList = new ArrayList();
		map = SpringUtils.getParameterMap(req);
		resultList = mFSService.getAllFSMember(map);
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
	
	@RequestMapping("/getAllFSMemberExcel")
	public String getAllFSMemberExcel(HttpSession session,HttpServletRequest req,HttpServletResponse response) throws SysException{
		ExcelObj excelObj = null;
		Map paramMap = null;
		try {
			paramMap =SpringUtils.getParameterMap(req);
			List<Map> fSMemberRows = new ArrayList();
			String fileName = "团契成员清单";
			fSMemberRows = mFSService.getAllFSMemberExcel(session, paramMap);
			String path = req.getSession().getServletContext().getRealPath("/");
			excelObj = new ExcelObj();
			excelObj.setFilename("团契成员清单");
			excelObj.setWorkbook(exportExcel(fSMemberRows, path));
			
			 ByteArrayOutputStream os = new ByteArrayOutputStream();
		        try {
		        	exportExcel(fSMemberRows, path).write(os);
		        } catch (IOException e) {
		            e.printStackTrace();
		        }
		        byte[] content = os.toByteArray();
		        InputStream is = new ByteArrayInputStream(content);
		        // 设置response参数，可以打开下载页面
		        response.reset();
		        response.setContentType("application/vnd.ms-excel;charset=utf-8");
		        response.setHeader("Content-Disposition", "attachment;filename="+ new String((fileName+ ".xlsx").getBytes(), "iso-8859-1"));
		        ServletOutputStream out = response.getOutputStream();
		        BufferedInputStream bis = null;
		        BufferedOutputStream bos = null;
		        try {
		            bis = new BufferedInputStream(is);
		            bos = new BufferedOutputStream(out);
		            byte[] buff = new byte[2048];
		            int bytesRead;
		            // Simple read/write loop.
		            while (-1 != (bytesRead = bis.read(buff, 0, buff.length))) {
		                bos.write(buff, 0, bytesRead);
		            }
		        } catch (final IOException e) {
		            throw e;
		        } finally {
		            if (bis != null)
		                bis.close();
		            if (bos != null)
		                bos.close();
		        }
		        return null;
		} catch (IOException e) {
			throw new SysException("excel导出失败!");
		} 
	//	return excelObj;
		}
	
	private Workbook exportExcel(List<Map> fSMemberRows, String path) throws IOException {
	//	HSSFWorkbook wb = new HSSFWorkbook();
		InputStream inputStream = null;
		Workbook wb = null;
		try {
			inputStream = new FileInputStream(new File(path + "/storage/template/FS_EXCEL/", "FSMembersExcel.xlsx"));
			
			wb = new XSSFWorkbook(inputStream);
	     //   boolean isExcel2003 = true;
	        Sheet sheet;
//	        if (WDUtil.isExcel2007(fileName)){//我是用本地2013作的excel表，改了后缀名为xls格式的，
//				//虽然判断后认为事2003以前的，但实际解析还是为2007以上的文件格式。
//				isExcel2003 = false;
//			}
//			if (isExcel2003){
//				wb = new HSSFWorkbook(inputStream);//hssF是Excel2003以前（包括2003）的版本没有问题
//				sheet = (HSSFSheet) wb.getSheetAt(0);
//				createRowBySheet(fSMemberRows,sheet);
//			}else{
//				wb = new XSSFWorkbook(inputStream);
//				sheet = (XSSFSheet) wb.getSheetAt(0);
//				createRowBySheet(fSMemberRows,sheet);
//			}
			
			sheet = (XSSFSheet) wb.getSheetAt(0);
			createRowBySheet(fSMemberRows,sheet);
			
				
		} finally {
			if(inputStream != null) {
				inputStream.close();
			}
		}
		//测试用的。
//		FileOutputStream fileStream = new FileOutputStream("E:\\test.xls");
//		wb.write(fileStream);
//		fileStream.close();
		return wb;
	}
	public void createRowBySheet(List<Map> rows, Sheet sheet){
		Row row = null;
		int index=1;
		for(int k = 0; k < rows.size(); k++) {
			row = sheet.createRow(index);
			Map map = rows.get(k);
			Set set = map.keySet();
			Iterator it = set.iterator();
			int l = 0;
			while(it.hasNext()) {
				 Object itrKey = it.next();
				 row.createCell(l).setCellType(HSSFCell.CELL_TYPE_STRING); 
				 Object value = map.get(itrKey);
				 if(l==3){
					 if("0".equals(value))
						 value = "男";
					 else
						 value = "女"; 
				 }
					
				 POIUtil.setCellValue(value,row.getCell(l));
				 l++;
			}
			index++;
		//	logger.debug("列数"+l+"行数"+index);
		}
	}

}
