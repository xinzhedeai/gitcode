package action;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.exceptions.PersistenceException;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFClientAnchor;
import org.apache.poi.hssf.usermodel.HSSFPatriarch;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

import util.POIUtil;
import util.StringUtil;
import pageModel.ExcelObj;
import pageModel.EasyUIGridObj;
import pageModel.GridObj;
import pageModel.JsonResult;
import service.FellowShipService;
import service.LogService;
import util.SpringUtils;
import exception.SysException;
@SuppressWarnings("rawtypes")
@Controller
@RequestMapping("/logAction")
public class LogAction{

@Autowired
private LogService logService;
public static Logger logger  = Logger.getLogger(LogAction.class);
@ResponseBody
@RequestMapping("/searchMyLogsWitness")
public	JsonResult  searchMyLogs(HttpSession session,HttpServletRequest req) throws SysException{
	Map paramMap = SpringUtils.getParameterMap(req);
//	myFrisList = fellowShipService.getMyFellowShips(map);//获取好友列表
	EasyUIGridObj easyUIGridObjs = logService.searchMyLogsWitness(paramMap);//获取好友列表
	JsonResult j = new JsonResult();
	
	if(easyUIGridObjs!=null){
		j.setSuccess(true);
		j.setMsg("success!");
//		j.setResult(myFrisList);
		j.setResult(easyUIGridObjs);
	}else{
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}

@ResponseBody
@RequestMapping("/searchMyLogsQT")
public	JsonResult  searchMyLogsQT(HttpSession session,HttpServletRequest req) throws SysException{
	Map paramMap = SpringUtils.getParameterMap(req);
//	myFrisList = fellowShipService.getMyFellowShips(map);//获取好友列表
	EasyUIGridObj easyUIGridObjs = logService.searchMyLogsQT(paramMap);//获取好友列表
	JsonResult j = new JsonResult();
	
	if(easyUIGridObjs!=null){
		j.setSuccess(true);
		j.setMsg("success!");
//		j.setResult(myFrisList);
		j.setResult(easyUIGridObjs);
	}else{
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}
@ResponseBody
@RequestMapping("/addLogWitness")
public	JsonResult  addLogWitness(HttpSession session,HttpServletRequest req) throws SysException{
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	
	JsonResult j = new JsonResult();
	
	if(logService.addLogWitness(map)>0){
		j.setSuccess(true);
		j.setMsg("success!");
	}else{
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}
@ResponseBody
@RequestMapping("/addLogQT")
public	JsonResult  addLogQT(HttpSession session,HttpServletRequest req) throws SysException{
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	
	JsonResult j = new JsonResult();
	
	if(logService.addLogQT(map)>0){
		j.setSuccess(true);
		j.setMsg("success!");
	}else{
		j.setSuccess(false);
		j.setMsg("false!");
	}
	return j;
}
@ResponseBody
@RequestMapping("/delLogById")
public	JsonResult  delLogById(HttpSession session,HttpServletRequest req) throws SysException{
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	
	JsonResult j = new JsonResult();
	
	if(logService.delLogById(map)>0){
		j.setSuccess(true);
		j.setMsg("删除日志成功!");
	}else{
		j.setSuccess(false);
		j.setMsg("删除日志失败!");
	}
	return j;
}
@ResponseBody
@RequestMapping("/getLogDetail")
public	JsonResult  getLogDetail(HttpSession session,HttpServletRequest req) throws SysException{
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	
	JsonResult j = new JsonResult();
	Map resultMap = new HashMap();
	resultMap = logService.getLogDetail(map);
	if(resultMap != null){
		j.setSuccess(true);
		j.setMsg("成功获取日志详情!");
		j.setResult(resultMap);
	}else{
		j.setSuccess(false);
		j.setMsg("获取日志详情失败!");
	}
	return j;
}

@ResponseBody
@RequestMapping("/editLog")
public	JsonResult  editLog(HttpSession session,HttpServletRequest req) throws SysException{
	Map map = new HashMap();
	map = SpringUtils.getParameterMap(req);
	
	JsonResult j = new JsonResult();
	if(logService.editLog(map)>0){
		j.setSuccess(true);
		j.setMsg("修改成功!");
	}else{
		j.setSuccess(false);
		j.setMsg("修改失败!");
	}
	return j;
}
@ResponseBody
@RequestMapping("/excelExport.action")
public	ExcelObj  excelExport(HttpSession session,HttpServletRequest req,HttpServletResponse res) throws SysException{
	ExcelObj excelObj = new ExcelObj();
//	Map paramMap =SpringUtils.getParameterMap(req);
	List<Map> orderRows = new ArrayList();
	List<Map> waybillRows = new ArrayList();
	List<Map> declformRows = new ArrayList();
	try {
		orderRows = logService.searchOrderExcel();
		waybillRows = logService.searchWaybillExcel();
		declformRows = logService.searchDeclformExcel();
		String fileName = "goodsToExcel.xls";
		excelObj.setFilename(StringUtil.toUtf8String(req, fileName));
		String path = req.getSession().getServletContext().getRealPath("/");
		logger.info(path);
		res.setContentType("application/vnd.ms-excel;charset=UTF-8");
		
		//String fileName = excelObj.getFilename();
		//fileName = StrUtil.encodeURL(excelObj.getFilename(),"UTF-8");
		fileName = StringUtil.toUtf8String(req, fileName);
		res.setHeader("Content-disposition", "attachment; filename=" + fileName);
		
	/*	wb = excelObj.getWorkbook();
		if (wb != null) {
			wb.write(res.getOutputStream());
			res.getOutputStream().flush();
		}
		*/
		
		excelObj.setWorkbook(exportExcel(orderRows, waybillRows,declformRows,path));
	} catch (Exception e) {
		logger.error(e);
	} finally {
		
	}
	

	return excelObj;
}

private HSSFWorkbook exportExcel(List<Map> orderRows,List<Map>waybillRows ,List<Map> declformRows,String path) {
	HSSFWorkbook wb = new HSSFWorkbook();
	InputStream inputStream = null;
	try {
		inputStream = new FileInputStream(new File(path + "/storage/template/", "template2excel.xls"));
		wb = new HSSFWorkbook(inputStream);
		if (orderRows != null) {
			HSSFSheet sheet = wb.getSheetAt(0);
			createRowBySheet(orderRows,sheet);
			HSSFSheet sheet1 = wb.getSheetAt(1);//运单报表sheet
			createRowBySheet(waybillRows,sheet1);
			HSSFSheet sheet2 = wb.getSheetAt(2);//清单报表sheet
			createRowBySheet(declformRows,sheet2);
		}
			
	} catch (FileNotFoundException e) {
		logger.error(e);
	} catch (IOException e) {
		logger.error(e);
	} finally {
		if(inputStream != null) {
			try {
				inputStream.close();
			} catch (IOException e) {
				logger.error(e);
			}
		}
	}
	try {
		FileOutputStream fileStream = new FileOutputStream("E:\\test.xls");
		wb.write(fileStream);
		fileStream.close();
	} catch (FileNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	
	return wb;
}
public void createRowBySheet(List<Map> rows,HSSFSheet sheet){
	HSSFRow row = null;
	int index=2;
	for(int k = 0; k < rows.size(); k++) {
		row = sheet.createRow(index);
		Map map = rows.get(k);
		Set set = map.keySet();
		Iterator it = set.iterator();
		int l = 0;
		while(it.hasNext()) {
			 Object itrKey = it.next();
	//		 logger.info(itrKey);
			 if(l==0 || l==25 || l==36 || l==56){
				 logger.info("带有号的标题"+itrKey+"***列号:"+l);
				 row.createCell(l).setCellType(HSSFCell.CELL_TYPE_STRING); 
				 POIUtil.setCellValue(map.get(itrKey),row.getCell(l));
			 }else{
				 POIUtil.setCellValue(map.get(itrKey), row.createCell(l));
			 }
			
			l++;
		}
		index++;
		logger.info("列数"+l+"行数"+index);
	}
}

}