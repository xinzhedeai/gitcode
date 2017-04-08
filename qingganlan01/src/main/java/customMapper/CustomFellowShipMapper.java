package customMapper;

import java.util.List;
import java.util.Map;
@SuppressWarnings("rawtypes")
public interface CustomFellowShipMapper {
	List<Map> getMyFellowShips(Map paramMap);

	Map getFellowShipDetail(Map map);

	int addPray(Map map);

	List<Map> searchPrays(Map paramMap);

	List<Map> getFellowShipMsg(Map paramMap);

	int addFellowShipMsg(Map map);

	int deleteFellowShipMsg(Map map);

	int addFellowMembersBatch(Map map);

	int deletePrayById(Map map);

	int addConcern(Map map);

	int delConcern(Map map);

	int upLoadFSHeadImg(Map fileMap);

	int addFellowShip(Map map);

	List<Map> searchFS(Map paramMap);

	int upLoadFSAlbumImg(Map fileMap);

	List<Map>  getFSAlbumImgs(Map paramMap);

	List<Map> searchAllQt(Map paramMap);

	List<Map>  searchNoSolutedQt(Map paramMap);

	List<Map>  searchSolutedQt(Map paramMap);

	Map getQuesitionDetail(Map map);

	List<Map> getAnswers(Map paramMap);

	int addAnswer(Map map);

	int addReplyReply(Map map);

	int isSoluted(Map map);

	int isSoluted1(Map map);

	List<Map> searchMyJoinFS(Map paramMap);

	int deleteFellow(Map map);

	int delFellowPic(Map map);

	int addFSQ(Map map);

	int modifyFsInfo(Map map);
}
