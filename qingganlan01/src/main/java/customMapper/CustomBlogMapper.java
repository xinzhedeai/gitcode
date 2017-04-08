package customMapper;

import java.util.List;
import java.util.Map;

import tk.mybatis.mapper.common.Mapper;
import mapper.BlogMapper;
@SuppressWarnings("rawtypes")
public interface CustomBlogMapper extends Mapper{

	List<Map> getAllBlogPostsByUser(Map map);

	
//	int addUpVote(Map map);
	
	int addUpVoteNo(Map map);
	
//	int delUpVote(Map map);
	
	int delUpVoteNo(Map map);

	int selectBlogOptExit(Map map);
	
	//int updateBlogOptAddUpvote(Map map);
	
	int updateBlogOptDelUpvote(Map map);
	
	int insertBlogOptUpvote(Map map);


	int updateBlogOptAddUpvote(Map paramMap);


	int addCollectNo(Map paramMap);


	int insertBlogOptCollect(Map paramMap);


	int updateBlogOptAddCollect(Map paramMap);


	int updateBlogOptDelCollect(Map paramMap);


	int delCollectNo(Map paramMap);


	int addComment(Map paramMap);


	int deleteBlogByIdLogic(Map paramMap);


	int addCommentReply(Map paramMap);


	int addReplyReply(Map paramMap);

	List<Map> getMyBlogs(Map paramMap);


	void addCommentNo(Map paramMap);


	int delComment(Map paramMap);


	void reduceCommentNo(Map paramMap);
	
	void reduceCommentNoByUser(Map paramMap);


	List<Map> searchMyRecBlogs(Map paramMap);


	int deleteBlogPhysical(Map paramMap);


	int blogReverseAdd(Map paramMap);


}
