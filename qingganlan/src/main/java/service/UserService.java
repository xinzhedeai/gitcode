package service;

import java.util.List;
import java.util.Map;

import exception.SysException;
import pageModel.EasyUIGridObj;
import pageModel.ModifyPwd;
import pageModel.User;
import po.UserInfo;
import vo.ActiveUser;

public interface UserService {
	
	//根据用户账号查询用户信息
	public UserInfo findUserByUserId(String userId)throws Exception;
	
	//用户认证
	public ActiveUser checkUser(String userId,String pwd) throws Exception;

	public void reg(User user) throws SysException  ;

	public void userInfoSet(User user)throws SysException;

	
	//自定义上传文件
	public int upLoadFile(Map fileMap);
	
	public int modifyHeadImg(Map fileMap);
	
	public boolean saveFiles(String files, String usId);

	public int modifyPwd(ModifyPwd modifyPwd);

	public Map userInfoDetail(Map map);

	public EasyUIGridObj searchMyConcern(Map map) throws SysException;

	public EasyUIGridObj getMyCollectBlogs(Map map) throws SysException;

	public int addUserBatch(Map map);

	public List<Map>  getAllUsers();

	public int addFriend(Map map);

	public int delFriend(Map map);

	public int joinFellowShip(Map map);

	public EasyUIGridObj searchUsers(Map map) throws SysException;

	public int addChurch(Map map);

	public EasyUIGridObj searchChurchs(Map map) throws SysException;

	
	
}
