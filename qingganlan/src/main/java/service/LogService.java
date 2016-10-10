package service;

import java.util.Map;

import exception.SysException;
import pageModel.EasyUIGridObj;

public interface LogService {

	EasyUIGridObj searchMyLogsWitness(Map newParaMap) throws SysException;

	int addLogWitness(Map map);
	
	int addLogQT(Map map);

	EasyUIGridObj searchMyLogsQT(Map paramMap) throws SysException;

	int delLogById(Map map);

	Map getLogDetail(Map map);

	int editLog(Map map);

}
