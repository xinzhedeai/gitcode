package mService;

import java.util.List;
import java.util.Map;

import exception.SysException;
import pageModel.EasyUIGridObj;

public interface FSService {

	EasyUIGridObj getAllFSs(Map map) throws SysException;

	List getFSName(Map map) throws SysException;

}
