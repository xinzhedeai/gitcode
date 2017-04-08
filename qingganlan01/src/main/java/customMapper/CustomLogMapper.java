package customMapper;

import java.util.List;
import java.util.Map;
@SuppressWarnings("rawtypes")
public interface CustomLogMapper {
	List<Map> searchMyLogsWitness(Map paramMap);

	int addLogWitness(Map map);
	
	int addLogQT(Map map);

	List<Map> searchMyLogsQT(Map paramMap);

	int delLogById(Map map);

	Map getLogDetail(Map map);

	int editLog(Map map);

	List<Map> searchOrderExcel();

	List<Map> searchWaybillExcel();

	List<Map> searchDeclformExcel();
	
}
