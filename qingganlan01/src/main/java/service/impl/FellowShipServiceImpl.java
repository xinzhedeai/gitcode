package service.impl;

import java.util.List;
import java.util.Map;









import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import pageModel.EasyUIGridObj;
import action.UserAction;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import customMapper.CustomFellowShipMapper;
import exception.SysException;
import service.FellowShipService;

@SuppressWarnings("rawtypes")
public class FellowShipServiceImpl implements FellowShipService {
	@Autowired
	private CustomFellowShipMapper customFellowShipMapper;
	public static Logger logger  = Logger.getLogger(FellowShipServiceImpl.class);
/*	public List<Map> getMyFellowShips(Map paramMap) throws SysException {//分页查询所有好友信息。
		List<Map> easyUIGridObj =  customFellowShipMapper.getMyFellowShips(paramMap);
		if(easyUIGridObj!=null){
			return easyUIGridObj;
		}else{
			return null;
		}	
		
	}*/

	
	public EasyUIGridObj pageMyFellowShips(Map paramMap) throws SysException {//分页查询所有好友信息。
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
		customFellowShipMapper.getMyFellowShips(paramMap);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		
		return easyUIGridObj;
	}

	public Map getFellowShipDetail(Map map) {
		Map fellowShipDetail =  customFellowShipMapper.getFellowShipDetail(map);
		if(fellowShipDetail!=null){
			return fellowShipDetail;
		}else{
			return null;
		}	
	}

	public int addPray(Map map) {
		int rows = 0 ;
		if(customFellowShipMapper.addPray(map) >0){
			rows = 1;
		}
		return rows;
	}

	public EasyUIGridObj searchPrays(Map paramMap) throws SysException {
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
		customFellowShipMapper.searchPrays(paramMap);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		
		return easyUIGridObj;
	}

	public EasyUIGridObj getFellowShipMsg(Map paramMap) throws SysException {
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
		customFellowShipMapper.getFellowShipMsg(paramMap);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		
		return easyUIGridObj;
	}

	public int addFellowShipMsg(Map map) {
		int rows = 0 ;
		if(customFellowShipMapper.addFellowShipMsg(map) >0){
			rows = 1;
		}
		return rows;
	}

	public int deleteFellowShipMsg(Map map) {
		int rows = 0 ;
		if(customFellowShipMapper.deleteFellowShipMsg(map) >0){
			rows = 1;
		}
		return rows;
	}

	public int addFellowMembersBatch(Map map) {
		int rows = 0 ;
		if(customFellowShipMapper.addFellowMembersBatch(map) >0){
			rows = 1;
		}
		return rows;
	}

	public int deletePrayById(Map map) {
		int rows = 0 ;
		if(customFellowShipMapper.deletePrayById(map) >0){
			rows = 1;
		}
		return rows;
	}

	public int addConcern(Map map) {
		int rows = 0 ;
		if (customFellowShipMapper.addConcern(map) >0)
			rows = 1;
		return rows;
	}
	public int delConcern(Map map) {
		int rows = 0 ;
		if (customFellowShipMapper.delConcern(map) >0)
			rows = 1;
		return rows;
	}

	public int upLoadFSHeadImg(Map fileMap) {
		int rows = 0 ;
		if (customFellowShipMapper.upLoadFSHeadImg(fileMap) >0)
			rows = 1;
		return rows;
	}

	public int addFellowShip(Map map) {
		int rows = 0 ;
		if (customFellowShipMapper.addFellowShip(map) >0)
			rows = 1;
		return rows;
	}

	public  EasyUIGridObj searchFS(Map paramMap) throws SysException {
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
		customFellowShipMapper.searchFS(paramMap);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		
		return easyUIGridObj;
	}

	public int upLoadFSAlbumImg(Map fileMap) {
		int rows = 0 ;
		if (customFellowShipMapper.upLoadFSAlbumImg(fileMap) >0)
			rows = 1;
		return rows;
	}

	public EasyUIGridObj getFSAlbumImgs(Map paramMap) throws SysException {
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
		customFellowShipMapper.getFSAlbumImgs(paramMap);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		
		return easyUIGridObj;
	}

	public EasyUIGridObj searchAllQt(Map paramMap) throws SysException {
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
		customFellowShipMapper.searchAllQt(paramMap);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		
		return easyUIGridObj;
	}

	public EasyUIGridObj searchNoSolutedQt(Map paramMap) throws SysException {
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
		customFellowShipMapper.searchNoSolutedQt(paramMap);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		
		return easyUIGridObj;
	}

	public EasyUIGridObj searchSolutedQt(Map paramMap) throws SysException {
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
		customFellowShipMapper.searchSolutedQt(paramMap);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		
		return easyUIGridObj;
	}

	public Map getQuesitionDetail(Map map) {
		Map quesitionDetail =  customFellowShipMapper.getQuesitionDetail(map);
		if(quesitionDetail!=null){
			return quesitionDetail;
		}else{
			return null;
		}
	}

	public EasyUIGridObj getAnswers(Map paramMap) throws SysException {
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
		customFellowShipMapper.getAnswers(paramMap);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		
		return easyUIGridObj;
	}

	public int addAnswer(Map map) {
		int rows = 0 ;
		if (customFellowShipMapper.addAnswer(map) >0)
			rows = 1;
		return rows;
	}

	public int addReplyReply(Map map) {
		int rows = 0 ;
		if (customFellowShipMapper.addReplyReply(map) >0)
			rows = 1;
		return rows;
	}

	public int isSoluted(Map map) {
		int rows = 0 ;
		if (customFellowShipMapper.isSoluted(map) >0){
			if(customFellowShipMapper.isSoluted1(map)>0)
				rows = 1;
		}	
		return rows;
	}

	public EasyUIGridObj searchMyJoinFS(Map paramMap) throws SysException {
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
		customFellowShipMapper.searchMyJoinFS(paramMap);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		
		return easyUIGridObj;
	}

	public int deleteFellow(Map map) {
		int rows = 0 ;
		if (customFellowShipMapper.deleteFellow(map) >0){
			rows = 1;
		}	
		return rows;
	}

	public int delFellowPic(Map map) {
		int rows = 0 ;
		if (customFellowShipMapper.delFellowPic(map) >0){
			rows = 1;
		}	
		return rows;
	}

	public int addFSQ(Map map) {
		int rows = 0 ;
		if (customFellowShipMapper.addFSQ(map) >0){
			rows = 1;
		}	
		return rows;
	}

	public int modifyFsInfo(Map map) {
		int rows = 0 ;
		if (customFellowShipMapper.modifyFsInfo(map) >0){
			rows = 1;
		}	
		return rows;
	}

}
