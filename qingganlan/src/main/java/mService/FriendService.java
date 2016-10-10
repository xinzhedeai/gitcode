package mService;

import java.util.Map;

import exception.SysException;
import pageModel.EasyUIGridObj;

public interface FriendService {

	EasyUIGridObj getAllFriends(Map map) throws SysException;


}
