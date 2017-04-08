package normalMapper;

import java.util.List;
import normalPo.FellowshipInfo;
import normalPo.FellowshipInfoExample;
import org.apache.ibatis.annotations.Param;

public interface FellowshipInfoMapper {
    int countByExample(FellowshipInfoExample example);

    int deleteByExample(FellowshipInfoExample example);

    int deleteByPrimaryKey(String fsId);

    int insert(FellowshipInfo record);

    int insertSelective(FellowshipInfo record);

    List<FellowshipInfo> selectByExample(FellowshipInfoExample example);

    FellowshipInfo selectByPrimaryKey(String fsId);

    int updateByExampleSelective(@Param("record") FellowshipInfo record, @Param("example") FellowshipInfoExample example);

    int updateByExample(@Param("record") FellowshipInfo record, @Param("example") FellowshipInfoExample example);

    int updateByPrimaryKeySelective(FellowshipInfo record);

    int updateByPrimaryKey(FellowshipInfo record);
}