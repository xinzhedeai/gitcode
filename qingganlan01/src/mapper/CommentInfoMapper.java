package mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import po.CommentInfo;
import po.CommentInfoExample;

public interface CommentInfoMapper {
    int countByExample(CommentInfoExample example);

    int deleteByExample(CommentInfoExample example);

    int deleteByPrimaryKey(@Param("commentid") String commentid, @Param("blogId") String blogId, @Param("usId") String usId);

    int insert(CommentInfo record);

    int insertSelective(CommentInfo record);

    List<CommentInfo> selectByExample(CommentInfoExample example);

    CommentInfo selectByPrimaryKey(@Param("commentid") String commentid, @Param("blogId") String blogId, @Param("usId") String usId);

    int updateByExampleSelective(@Param("record") CommentInfo record, @Param("example") CommentInfoExample example);

    int updateByExample(@Param("record") CommentInfo record, @Param("example") CommentInfoExample example);

    int updateByPrimaryKeySelective(CommentInfo record);

    int updateByPrimaryKey(CommentInfo record);
}