package mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import po.MusicShare;
import po.MusicShareExample;

public interface MusicShareMapper {
    int countByExample(MusicShareExample example);

    int deleteByExample(MusicShareExample example);

    int deleteByPrimaryKey(String usId);

    int insert(MusicShare record);

    int insertSelective(MusicShare record);

    List<MusicShare> selectByExample(MusicShareExample example);

    MusicShare selectByPrimaryKey(String usId);

    int updateByExampleSelective(@Param("record") MusicShare record, @Param("example") MusicShareExample example);

    int updateByExample(@Param("record") MusicShare record, @Param("example") MusicShareExample example);

    int updateByPrimaryKeySelective(MusicShare record);

    int updateByPrimaryKey(MusicShare record);
}