package mCustomMapper;

import java.util.List;
import java.util.Map;
@SuppressWarnings("rawtypes")
public interface CustomAFSMapper {

	List<Map> getAllFSs(Map map);

	List<Map> getFSName(Map map);

	List<Map> getAllPrays(Map map);

	List<Map> getFSQs(Map map);

	List<Map> getChurchs(Map map);

	List<Map> getAllFSMember(Map map);
	
	List<Map> getAllFSMemberExcel(Map paramMap);
	
}
