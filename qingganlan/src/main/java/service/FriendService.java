package service;

import java.util.List;
import java.util.Map;

import exception.SysException;
import pageModel.EasyUIGridObj;

public interface FriendService {

	public List searchMyFris(Map map);

	public EasyUIGridObj pageMyFris(Map paramMap) throws SysException ;
	
}
