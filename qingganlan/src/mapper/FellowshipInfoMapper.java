package mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import po.FellowshipInfo;
import po.FellowshipInfoExample;

public interface FellowshipInfoMapper {
    int countByExample(FellowshipInfoExample example);

    int deleteByExample(FellowshipInfoExample example);

    int deleteByPrimaryKey(String fellowshipId);

    int insert(FellowshipInfo record);

    int insertSelective(FellowshipInfo record);

    List<FellowshipInfo> selectByExample(FellowshipInfoExample example);

    FellowshipInfo selectByPrimaryKey(String fellowshipId);

    int updateByExampleSelective(@Param("record") FellowshipInfo record, @Param("example") FellowshipInfoExample example);

    int updateByExample(@Param("record") FellowshipInfo record, @Param("example") FellowshipInfoExample example);

    int updateByPrimaryKeySelective(FellowshipInfo record);

    int updateByPrimaryKey(FellowshipInfo record);
}