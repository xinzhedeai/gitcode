package mCustomMapper;

import java.util.List;
import java.util.Map;
@SuppressWarnings("rawtypes")
public interface CustomABlogMapper {

	List<Map> searchBlogs(Map map);

	int deleteBlog(List list);

	List<Map> getAllComments(Map map);

	List<Map> getblogPostId(Map map);

	List<Map> getAllreplys(Map map);

	List<Map> getCommentId(Map map);

	int deletereply(List list);

	int deleteComment(List list);

}
