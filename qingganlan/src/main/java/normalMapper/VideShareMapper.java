package normalMapper;

import java.util.List;
import normalPo.VideShare;
import normalPo.VideShareExample;
import org.apache.ibatis.annotations.Param;

public interface VideShareMapper {
    int countByExample(VideShareExample example);

    int deleteByExample(VideShareExample example);

    int deleteByPrimaryKey(String videoId);

    int insert(VideShare record);

    int insertSelective(VideShare record);

    List<VideShare> selectByExample(VideShareExample example);

    VideShare selectByPrimaryKey(String videoId);

    int updateByExampleSelective(@Param("record") VideShare record, @Param("example") VideShareExample example);

    int updateByExample(@Param("record") VideShare record, @Param("example") VideShareExample example);

    int updateByPrimaryKeySelective(VideShare record);

    int updateByPrimaryKey(VideShare record);
}