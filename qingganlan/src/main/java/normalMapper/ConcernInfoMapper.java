package normalMapper;

import java.util.List;
import normalPo.ConcernInfo;
import normalPo.ConcernInfoExample;
import org.apache.ibatis.annotations.Param;

public interface ConcernInfoMapper {
    int countByExample(ConcernInfoExample example);

    int deleteByExample(ConcernInfoExample example);

    int deleteByPrimaryKey(String concernedUsId);

    int insert(ConcernInfo record);

    int insertSelective(ConcernInfo record);

    List<ConcernInfo> selectByExample(ConcernInfoExample example);

    ConcernInfo selectByPrimaryKey(String concernedUsId);

    int updateByExampleSelective(@Param("record") ConcernInfo record, @Param("example") ConcernInfoExample example);

    int updateByExample(@Param("record") ConcernInfo record, @Param("example") ConcernInfoExample example);

    int updateByPrimaryKeySelective(ConcernInfo record);

    int updateByPrimaryKey(ConcernInfo record);
}