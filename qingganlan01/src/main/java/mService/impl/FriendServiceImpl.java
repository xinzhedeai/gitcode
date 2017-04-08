package mService.impl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import exception.SysException;
import pageModel.EasyUIGridObj;
import mCustomMapper.CustomAFriendMapper;
import mService.FriendService;
@SuppressWarnings("rawtypes")
public class FriendServiceImpl implements FriendService {
	@Autowired
	private CustomAFriendMapper customAFriendMapper;
	public EasyUIGridObj getAllFriends(Map map) throws SysException {
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
		customAFriendMapper.getAllFriends(map);
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
