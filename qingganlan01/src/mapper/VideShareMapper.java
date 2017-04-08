package mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import po.VideShare;
import po.VideShareExample;

public interface VideShareMapper {
    int countByExample(VideShareExample example);

    int deleteByExample(VideShareExample example);

    int deleteByPrimaryKey(String usId);

    int insert(VideShare record);

    int insertSelective(VideShare record);

    List<VideShare> selectByExample(VideShareExample example);

    VideShare selectByPrimaryKey(String usId);

    int updateByExampleSelective(@Param("record") VideShare record, @Param("example") VideShareExample example);

    int updateByExample(@Param("record") VideShare record, @Param("example") VideShareExample example);

    int updateByPrimaryKeySelective(VideShare record);

    int updateByPrimaryKey(VideShare record);
}