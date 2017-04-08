package service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import customMapper.CustomFriendMapper;
import customMapper.CustomLogMapper;
import exception.SysException;
import pageModel.EasyUIGridObj;
import service.LogService;
import util.MD5Util;
import util.StringUtil;

@SuppressWarnings({"rawtypes", "unchecked"})
public class LogServiceImpl implements LogService {
	@Autowired
	private CustomLogMapper customLogMapper;
	public EasyUIGridObj searchMyLogsWitness(Map paramMap) throws SysException {
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
		customLogMapper.searchMyLogsWitness(paramMap);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}
	public int addLogWitness(Map map) {
		int rows = 0 ;
	/*	map.put("logId",StringUtil.getUUID());
		map.put("sendDate", new Date());*/
		if(customLogMapper.addLogWitness(map) >0){
			rows = 1;
		}
		return rows;
	}
	public int addLogQT(Map map) {
		int rows = 0 ;
		if(customLogMapper.addLogQT(map) >0){
			rows = 1;
		}
		return rows;
	}
	public EasyUIGridObj searchMyLogsQT(Map paramMap) throws SysException {
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
		customLogMapper.searchMyLogsQT(paramMap);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}
	public int delLogById(Map map) {
		int rows = 0 ;
		if(customLogMapper.delLogById(map) >0){
			rows = 1;
		}
		return rows;
	}
	public Map getLogDetail(Map map) {
		Map resultMap = new HashMap();
		resultMap = customLogMapper.getLogDetail(map);
		if(resultMap != null)
			return resultMap;
		else
			return null;
		
	}
	public int editLog(Map map) {
		int rows = 0 ;
		if(customLogMapper.editLog(map) >0){
			rows = 1;
		}
		return rows;
	}
	public List<Map> searchOrderExcel() {
		List<Map> list = customLogMapper.searchOrderExcel();
		if(list!=null){
			return list;
		}
		return null;
	}
	public List<Map> searchWaybillExcel() {
		List<Map> list = customLogMapper.searchWaybillExcel();
		if(list!=null){
			return list;
		}
		return null;
	}
	public List<Map> searchDeclformExcel() {
		List<Map> list = customLogMapper.searchDeclformExcel();
		if(list!=null){
			return list;
		}
		return null;
	}

}
