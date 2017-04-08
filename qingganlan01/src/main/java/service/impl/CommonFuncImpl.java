package service.impl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import pageModel.EasyUIGridObj;
import service.CommonFunc;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import customMapper.CustomUserInfoMapper;
import exception.SysException;

public class CommonFuncImpl implements CommonFunc {
	@Autowired
	CustomUserInfoMapper customUserInfoMapper ;
	public EasyUIGridObj getDataByPage(String flag,Map map) throws SysException {
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
		if(flag == "getJobPages"){
			customUserInfoMapper.getJobPages(map);
		}/*else if(flag == "getMakeFriPages"){
			customUserInfoMapper.getMakeFriPages(map);
		}*/
			
	//	customUserInfoMapper.getJobPages(map);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}
}
