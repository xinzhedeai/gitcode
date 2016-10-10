package normalMapper;

import java.util.List;
import normalPo.MusicShare;
import normalPo.MusicShareExample;
import org.apache.ibatis.annotations.Param;

public interface MusicShareMapper {
    int countByExample(MusicShareExample example);

    int deleteByExample(MusicShareExample example);

    int deleteByPrimaryKey(String musicId);

    int insert(MusicShare record);

    int insertSelective(MusicShare record);

    List<MusicShare> selectByExample(MusicShareExample example);

    MusicShare selectByPrimaryKey(String musicId);

    int updateByExampleSelective(@Param("record") MusicShare record, @Param("example") MusicShareExample example);

    int updateByExample(@Param("record") MusicShare record, @Param("example") MusicShareExample example);

    int updateByPrimaryKeySelective(MusicShare record);

    int updateByPrimaryKey(MusicShare record);
}