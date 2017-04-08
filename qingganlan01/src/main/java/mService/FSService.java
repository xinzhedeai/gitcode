package mService;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import exception.SysException;
import pageModel.EasyUIGridObj;
@SuppressWarnings("rawtypes")
public interface FSService {

	EasyUIGridObj getAllFSs(Map map) throws SysException;

	List getFSName(Map map) throws SysException;

	EasyUIGridObj getAllPrays(Map map) throws SysException;

	EasyUIGridObj getFSQs(Map map) throws SysException;

	EasyUIGridObj getChurchs(Map map) throws SysException;

	List getAllFSMember(Map map) throws SysException;

	List<Map> getAllFSMemberExcel(HttpSession session, Map paramMap) throws SysException;

}
