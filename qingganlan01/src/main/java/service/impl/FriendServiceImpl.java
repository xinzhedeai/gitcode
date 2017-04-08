package service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;






import org.springframework.beans.factory.annotation.Autowired;

import pageModel.EasyUIGridObj;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import customMapper.CustomFriendMapper;
import exception.SysException;
import service.FriendService;

@SuppressWarnings("rawtypes")
public class FriendServiceImpl implements FriendService {
	@Autowired
	private CustomFriendMapper customFriendMapper;
	
	public EasyUIGridObj pageMyFris(Map paramMap) throws SysException {//分页查询所有好友信息。
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
		customFriendMapper.getMyFris(paramMap);
		if(page.getTotal() > (pageNum - 1) * pageSize) {
			easyUIGridObj.setRows(page.getResult());
			easyUIGridObj.setTotal(page.getTotal());
		} else {
			easyUIGridObj.setRows(null);
			easyUIGridObj.setTotal(page.getTotal());
		}
		
		return easyUIGridObj;
	}

	public List searchMyFris(Map map) {//获取所有好友列表
		List<Map> resultList = new ArrayList<Map>();
		resultList = customFriendMapper.getMyFris(map);
		if(resultList!=null){
			return resultList;
		}
		return null;
	}


}
