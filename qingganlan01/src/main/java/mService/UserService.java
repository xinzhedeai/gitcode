package mService;

import java.util.List;
import java.util.Map;

import pageModel.EasyUIGridObj;
import vo.ActiveUser;
import exception.SysException;
@SuppressWarnings("rawtypes")
public interface UserService {
	public EasyUIGridObj getAllUser(Map map) throws SysException;

	public Map login(Map paraMap);

	public EasyUIGridObj getAllManagers(Map map) throws SysException;
	
	List<Map> getManagersCom(Map map) throws SysException ;//获取databox里面的数据

	public Map userInfoDetail(Map paraMap);

	public int modifyPersonalPW(Map paraMap);

	public int modifyPersonalInfo(Map paraMap);

	public List getUsIds(Map map) throws SysException;

	public List getAllUsersCom(Map map) throws SysException;

	public Map userDetail(Map map) throws SysException;

	public int deleteUser(List list);

	public int modifyUser(Map map);

	public int addManager(Map map);

	public int deleteManager(List list);

	public int resetPassword(List list);

	public Map managerDetail(Map map) throws SysException;

	public int modifyManager(Map map);

	public EasyUIGridObj getLogs(Map map) throws SysException;

	public int delLog(List list);

	public EasyUIGridObj getAllUserAuth(Map map) throws SysException;

	public Map userAuthDetail(Map map) throws SysException;

	public int setAuth(Map map);

	
	//public EasyUIGridObj getManagersCom(Map map) throws SysException;
	
}
