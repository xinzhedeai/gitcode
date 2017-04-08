package mCustomMapper;

import java.util.List;
import java.util.Map;
@SuppressWarnings("rawtypes")
public interface CustomUserMapper {
	List<Map> getAllUser(Map map);

	Map selectManager(Map paraMap);

	List<Map> getAllManagers(Map map);
	
	List<Map> getManagersCom(Map map);

	Map userInfoDetail(Map paraMap);

	int modifyPersonalPW(Map paraMap);

	int modifyPersonalInfo(Map paraMap);

	List<Map> getUsIds(Map map);

	List<Map> getAllUsersCom(Map map);

	Map userDetail(Map map);

	int deleteUser(List list);

	int modifyUser(Map map);

	int addManager(Map map);

	int deleteManager(List list);

	int resetPassword(List list);

	Map managerDetail(Map map);

	int modifyManager(Map map);

	List<Map> getLogs(Map map);

	int delLog(List list);

	List<Map> getAllUserAuth(Map map);

	Map userAuthDetail(Map map);

	int setAuth(Map map);
}
