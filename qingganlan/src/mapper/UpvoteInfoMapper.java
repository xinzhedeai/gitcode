package mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import po.UpvoteInfo;
import po.UpvoteInfoExample;

public interface UpvoteInfoMapper {
    int countByExample(UpvoteInfoExample example);

    int deleteByExample(UpvoteInfoExample example);

    int deleteByPrimaryKey(@Param("usId") String usId, @Param("blogId") String blogId);

    int insert(UpvoteInfo record);

    int insertSelective(UpvoteInfo record);

    List<UpvoteInfo> selectByExample(UpvoteInfoExample example);

    UpvoteInfo selectByPrimaryKey(@Param("usId") String usId, @Param("blogId") String blogId);

    int updateByExampleSelective(@Param("record") UpvoteInfo record, @Param("example") UpvoteInfoExample example);

    int updateByExample(@Param("record") UpvoteInfo record, @Param("example") UpvoteInfoExample example);

    int updateByPrimaryKeySelective(UpvoteInfo record);

    int updateByPrimaryKey(UpvoteInfo record);
}