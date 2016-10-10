package mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import po.CollectBlogInfo;
import po.CollectBlogInfoExample;

public interface CollectBlogInfoMapper {
    int countByExample(CollectBlogInfoExample example);

    int deleteByExample(CollectBlogInfoExample example);

    int deleteByPrimaryKey(@Param("usId") String usId, @Param("blogId2") String blogId2);

    int insert(CollectBlogInfo record);

    int insertSelective(CollectBlogInfo record);

    List<CollectBlogInfo> selectByExample(CollectBlogInfoExample example);

    CollectBlogInfo selectByPrimaryKey(@Param("usId") String usId, @Param("blogId2") String blogId2);

    int updateByExampleSelective(@Param("record") CollectBlogInfo record, @Param("example") CollectBlogInfoExample example);

    int updateByExample(@Param("record") CollectBlogInfo record, @Param("example") CollectBlogInfoExample example);

    int updateByPrimaryKeySelective(CollectBlogInfo record);

    int updateByPrimaryKey(CollectBlogInfo record);
}