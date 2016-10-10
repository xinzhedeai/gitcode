package mService.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import exception.SysException;
import pageModel.EasyUIGridObj;
import mCustomMapper.CustomAFSMapper;
import mService.FSService;


public class FSServiceImpl implements FSService {
	@Autowired
	private CustomAFSMapper customAFSMapper;

	public EasyUIGridObj getAllFSs(Map map) throws SysException {
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
		customAFSMapper.getAllFSs(map);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}

	public List getFSName(Map map) throws SysException {
		List<Map> resultList = new ArrayList<Map>();
		try {
			resultList = customAFSMapper.getFSName(map);
		} catch (Exception e) {
			throw new SysException("获取团契名称下拉列表失败！");
		}
		return resultList;
	}
}
