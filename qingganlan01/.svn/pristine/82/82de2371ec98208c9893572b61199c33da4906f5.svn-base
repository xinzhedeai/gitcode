package mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import po.WantedWeb;
import po.WantedWebExample;

public interface WantedWebMapper {
    int countByExample(WantedWebExample example);

    int deleteByExample(WantedWebExample example);

    int insert(WantedWeb record);

    int insertSelective(WantedWeb record);

    List<WantedWeb> selectByExample(WantedWebExample example);

    int updateByExampleSelective(@Param("record") WantedWeb record, @Param("example") WantedWebExample example);

    int updateByExample(@Param("record") WantedWeb record, @Param("example") WantedWebExample example);
}