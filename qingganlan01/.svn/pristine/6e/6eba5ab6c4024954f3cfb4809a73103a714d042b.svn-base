package normalMapper;

import java.util.List;
import normalPo.MarketShare;
import normalPo.MarketShareExample;
import org.apache.ibatis.annotations.Param;

public interface MarketShareMapper {
    int countByExample(MarketShareExample example);

    int deleteByExample(MarketShareExample example);

    int deleteByPrimaryKey(String marketId);

    int insert(MarketShare record);

    int insertSelective(MarketShare record);

    List<MarketShare> selectByExample(MarketShareExample example);

    MarketShare selectByPrimaryKey(String marketId);

    int updateByExampleSelective(@Param("record") MarketShare record, @Param("example") MarketShareExample example);

    int updateByExample(@Param("record") MarketShare record, @Param("example") MarketShareExample example);

    int updateByPrimaryKeySelective(MarketShare record);

    int updateByPrimaryKey(MarketShare record);
}